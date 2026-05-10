import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const seedsPath = path.join(rootDir, 'data', 'error-seeds.json');
const outputDir = path.join(rootDir, 'src', 'content', 'errors');
const force = process.argv.includes('--force');
const updated = new Date().toISOString().slice(0, 10);

const seeds = JSON.parse(await readFile(seedsPath, 'utf8'));

async function main() {
  validateSeeds(seeds);
  await mkdir(outputDir, { recursive: true });

  let created = 0;
  let skipped = 0;

  for (const seed of seeds) {
    const filePath = path.join(outputDir, `${seed.slug}.md`);

    if (existsSync(filePath) && !force) {
      skipped += 1;
      continue;
    }

    await writeFile(filePath, renderMarkdown(seed), 'utf8');
    created += 1;
  }

  console.log(`Generated ${created} error page(s). Skipped ${skipped} existing file(s).`);
}

function validateSeeds(items) {
  if (!Array.isArray(items)) {
    throw new Error('data/error-seeds.json must contain an array.');
  }

  const requiredFields = [
    'slug',
    'title',
    'description',
    'category',
    'technology',
    'error_signature',
    'search_intent',
    'common_causes',
    'quick_fix',
    'related_errors',
  ];

  const seen = {
    slug: new Set(),
    title: new Set(),
    description: new Set(),
  };

  for (const [index, item] of items.entries()) {
    for (const field of requiredFields) {
      if (!(field in item)) {
        throw new Error(`Seed at index ${index} is missing ${field}.`);
      }
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) {
      throw new Error(`Seed "${item.title}" has an invalid slug: ${item.slug}`);
    }

    for (const field of ['slug', 'title', 'description']) {
      if (seen[field].has(item[field])) {
        throw new Error(`Duplicate ${field}: ${item[field]}`);
      }
      seen[field].add(item[field]);
    }

    for (const field of ['common_causes', 'related_errors']) {
      if (!Array.isArray(item[field]) || item[field].length === 0) {
        throw new Error(`Seed "${item.title}" must include at least one ${field} item.`);
      }
    }
  }
}

function renderMarkdown(seed) {
  const profile = profileFor(seed);
  const sections = buildSections(seed, profile);

  return `---
title: ${yamlString(seed.title)}
description: ${yamlString(seed.description)}
category: ${yamlString(normalizeCategory(seed.category, seed.technology))}
technology: ${yamlString(seed.technology)}
error_signature: ${yamlString(seed.error_signature)}
common_causes:
${seed.common_causes.map((cause) => `  - ${yamlString(cause)}`).join('\n')}
quick_fix: ${yamlString(seed.quick_fix)}
related_errors:
${seed.related_errors.map((related) => `  - ${yamlString(related)}`).join('\n')}
updated: ${yamlString(updated)}
---

${sections.join('\n\n')}
`;
}

function buildSections(seed, profile) {
  const variants = [
    ['meaning', 'why', 'causes', 'quick', 'commands', 'platform', 'realWorld', 'troubleshooting', 'prevention', 'related', 'faq'],
    ['meaning', 'causes', 'commands', 'quick', 'troubleshooting', 'platform', 'realWorld', 'prevention', 'related', 'faq'],
    ['meaning', 'why', 'quick', 'commands', 'realWorld', 'troubleshooting', 'platform', 'prevention', 'related', 'faq'],
  ];
  const order = variants[hash(seed.slug) % variants.length];
  const registry = {
    meaning: () => section('What this error means', profile.meaning(seed)),
    why: () => section('Why this happens', paragraphList(profile.why(seed))),
    causes: () => section('Common causes', bulletList(seed.common_causes)),
    quick: () => section('Quick fixes', numberedList(profile.quickFixes(seed))),
    commands: () => commandSection(profile.commands(seed)),
    platform: () => platformSection(profile.platform(seed)),
    realWorld: () => section('Real-world fixes', bulletList(profile.realWorld(seed))),
    troubleshooting: () => section('Step-by-step troubleshooting', numberedList(profile.troubleshooting(seed))),
    prevention: () => section('How to prevent it', bulletList(profile.prevention(seed))),
    related: () => section('Related errors', bulletList(seed.related_errors)),
    faq: () => faqSection(profile.faq(seed)),
  };

  return order.map((key) => registry[key]()).filter(Boolean);
}

const profiles = [
  {
    name: 'docker',
    match: (seed) => /docker|compose|container/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means Docker cannot use the local container runtime, a host resource, or a compose binding needed by this command. For this error, check daemon status, socket permissions, disk pressure, and port ownership before changing application code.`,
    why: (seed) => [
      `Docker errors often come from the host environment around the container, not from the application image itself.`,
      `For ${seed.title}, the fastest path is to identify whether the failure is daemon access, storage, networking, or file permissions.`,
    ],
    quickFixes: (seed) => [
      'Run `docker info` to confirm the Docker client can reach the daemon.',
      seed.quick_fix,
      'Check whether the failing container, volume, port, or socket already exists.',
      'Restart Docker Desktop or the Docker service only after collecting the first error message.',
    ],
    commands: (seed) => [
      { label: 'Check daemon access', code: 'docker info' },
      { label: 'List running containers', code: 'docker ps' },
      { label: 'Check Docker disk usage', code: 'docker system df' },
      { label: 'Find a process using port 3000', code: 'lsof -i :3000' },
    ],
    platform: () => ({
      macOS: ['Open Docker Desktop and wait until the engine status is running before retrying `docker` or `docker compose`.'],
      Linux: ['Check the service with `systemctl status docker` and confirm your user can access `/var/run/docker.sock`.'],
      Windows: ['Confirm Docker Desktop is running with the expected WSL backend and retry from the same shell where the command failed.'],
    }),
    realWorld: (seed) => [
      'If a compose stack was interrupted, run `docker compose ps` and stop the old stack before reusing ports.',
      'If disk usage is high, prune only resources you recognize; volumes can contain database state.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Search the log for \`${seed.error_signature}\` and note the resource named next to it.`,
      'Run `docker info`; if it fails, fix daemon access before debugging images or compose files.',
      'For port errors, run `lsof -i :3000` with the actual port and stop the owning process or change the host port.',
      'For storage errors, run `docker system df` before pruning cache, images, or volumes.',
      'Retry the smallest failing Docker command after each change.',
    ],
    prevention: () => [
      'Use project-specific host ports in compose files.',
      'Schedule occasional Docker cache cleanup on development machines.',
      'Document required container users, mounted paths, and volume ownership for the project.',
    ],
    faq: (seed) => commonFaq(seed, 'Docker'),
  },
  {
    name: 'git',
    match: (seed) => /\bgit\b|repository|remote|merge|publickey|histories/i.test(text(seed)) && !/github actions/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means Git cannot complete the requested repository operation with the current directory, remote, branch history, or SSH/HTTPS credentials. Inspect repository state before forcing commands.`,
    why: (seed) => [
      'Git is stateful: the current branch, remote URL, working directory, and configured identity all affect the same command.',
      `For ${seed.title}, verify the repository state and remote access before rewriting history or changing credentials.`,
    ],
    quickFixes: (seed) => [
      'Run `git status` from the directory where the error appears.',
      'Check remotes with `git remote -v`.',
      seed.quick_fix,
      'Retry using the same SSH or HTTPS remote style your team expects.',
    ],
    commands: () => [
      { label: 'Check repository state', code: 'git status' },
      { label: 'Show remotes', code: 'git remote -v' },
      { label: 'List local branches', code: 'git branch' },
      { label: 'Fetch remote refs', code: 'git fetch origin' },
      { label: 'Test GitHub SSH', code: 'ssh -T git@github.com' },
    ],
    platform: () => ({}),
    realWorld: (seed) => [
      'If SSH fails, confirm the public key is added to the account that owns the repository.',
      'If a remote URL is wrong, update it with `git remote set-url origin <url>` instead of adding a duplicate remote.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Copy the exact \`${seed.error_signature}\` line and the Git command that produced it.`,
      'Run `git status` to confirm you are inside the intended repository.',
      'Run `git remote -v` and verify SSH versus HTTPS matches your credential setup.',
      'Run `git fetch origin` to separate network/auth problems from local branch problems.',
      'Avoid force pushes or history rewrites until you know which branch and remote are affected.',
    ],
    prevention: () => [
      'Document the expected remote URL format for the project.',
      'Use SSH config host aliases when working with multiple Git accounts.',
      'Check branch and remote before running destructive Git commands.',
    ],
    faq: (seed) => commonFaq(seed, 'Git'),
  },
  {
    name: 'npm-node',
    match: (seed) => /npm|node\.js|module|package|lockfile|eresolve|enoent/i.test(text(seed)) && !/github actions|vercel|python/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means npm or Node.js cannot resolve the project files, package metadata, dependency graph, or module path required by the command. Check the project root, lockfile, and Node version first.`,
    why: (seed) => [
      'Node projects depend on a consistent relationship between `package.json`, lockfiles, installed modules, and runtime version.',
      `For ${seed.title}, local success can be misleading if \`node_modules\` is stale or the lockfile was not regenerated.`,
    ],
    quickFixes: (seed) => [
      'Run the command from the folder containing `package.json`.',
      seed.quick_fix,
      'Check `node --version` and `npm --version`.',
      'Use `npm ci` for a clean lockfile-based install when a lockfile exists.',
    ],
    commands: () => [
      { label: 'Check runtime versions', code: 'node --version\nnpm --version' },
      { label: 'Install dependencies', code: 'npm install' },
      { label: 'Clean CI-style install', code: 'npm ci' },
      { label: 'Clear npm cache', code: 'npm cache clean --force' },
      { label: 'Reset local install state', code: 'rm -rf node_modules package-lock.json\nnpm install' },
    ],
    platform: () => ({
      'CI/CD': ['Prefer `npm ci` in CI so the build fails when `package.json` and `package-lock.json` drift apart.'],
    }),
    realWorld: (seed) => [
      'If the error names a peer dependency, update the plugin and framework versions together.',
      'If the error names a missing file, check filename casing; CI often runs on a case-sensitive filesystem.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Find the first \`${seed.error_signature}\` occurrence in the npm output; later stack lines are often symptoms.`,
      'Confirm the command is running in the intended package directory.',
      'Compare `package.json` and `package-lock.json` after dependency changes.',
      'Remove stale `node_modules` only after checking whether the lockfile is committed.',
      'Rerun the failing command with the same Node version used in CI or production.',
    ],
    prevention: () => [
      'Commit lockfile changes with dependency changes.',
      'Pin the project Node version in `.nvmrc`, `.node-version`, or CI configuration.',
      'Use CI to catch dependency drift before deploy.',
    ],
    faq: (seed) => commonFaq(seed, 'npm or Node.js'),
  },
  {
    name: 'python',
    match: (seed) => /python|pip|venv|modulenotfounderror|ensurepip/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means Python is using an interpreter, package environment, certificate store, or virtual environment that does not match what the script expects.`,
    why: (seed) => [
      'Python commands can silently target different interpreters depending on PATH, shell activation, and virtual environment state.',
      `For ${seed.title}, verify the active Python executable before installing packages or changing source code.`,
    ],
    quickFixes: (seed) => [
      'Check the active interpreter with `python3 --version`.',
      'Use `python -m pip` so pip targets the interpreter that runs the code.',
      seed.quick_fix,
      'Recreate the virtual environment if the interpreter version changed.',
    ],
    commands: () => [
      { label: 'Check Python version', code: 'python3 --version' },
      { label: 'Check pip target', code: 'python -m pip --version' },
      { label: 'List installed packages', code: 'python -m pip list' },
      { label: 'Create a virtual environment', code: 'python -m venv venv' },
      { label: 'Activate on macOS/Linux', code: 'source venv/bin/activate' },
    ],
    platform: () => ({
      macOS: ['If system Python and Homebrew Python both exist, use `python3 -m pip` from the interpreter you run in production.'],
      Linux: ['On Debian/Ubuntu, install virtual environment support with `sudo apt install python3-venv` when `ensurepip` is missing.'],
      Windows: ['Use `py -m pip --version` and `py -m venv venv` when the Python launcher is installed.'],
    }),
    realWorld: (seed) => [
      'If imports fail after installation, the package was likely installed into a different interpreter.',
      'If SSL fails only in Python, update the CA bundle used by Python before disabling verification.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Confirm the failing traceback contains \`${seed.error_signature}\`.`,
      'Run `python -m pip --version` and verify the path belongs to the expected environment.',
      'Activate the virtual environment, then rerun the same version and pip checks.',
      'Install packages with `python -m pip install <package>` rather than a bare `pip` command.',
      'Retry the smallest script or import that produced the error.',
    ],
    prevention: () => [
      'Use a virtual environment per project.',
      'Record dependencies in `requirements.txt`, `pyproject.toml`, or the project lockfile.',
      'Use `python -m pip` in documentation and CI scripts.',
    ],
    faq: (seed) => commonFaq(seed, 'Python'),
  },
  {
    name: 'openai',
    match: (seed) => /openai|cursor|ai coding|model|quota|context_length|rate limit|api key/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means the API or AI coding tool rejected the request because credentials, model access, quota, context size, or provider configuration does not match the request being sent.`,
    why: (seed) => [
      'OpenAI-compatible tooling usually has three moving parts: API key, selected model, and request size.',
      `For ${seed.title}, debug the smallest request that uses the same provider, model, and environment variable.`,
    ],
    quickFixes: (seed) => [
      'Verify the API key is present without printing its value.',
      'Check the configured model name and provider/base URL.',
      seed.quick_fix,
      'Retry with a minimal request before rerunning the full app or editor workflow.',
    ],
    commands: () => [
      { label: 'Check whether the key is set', code: 'printf "OPENAI_API_KEY=%s\\n" "${OPENAI_API_KEY:+set}"' },
      {
        label: 'Send a minimal API request',
        code:
          'curl https://api.openai.com/v1/models \\\n+  -H "Authorization: Bearer $OPENAI_API_KEY"'.replace('\n+', '\n'),
      },
      { label: 'Inspect app environment without exposing the key', code: 'env | grep -E "OPENAI|MODEL|BASE_URL" | sed "s/=.*/=<redacted>/"' },
    ],
    platform: () => ({
      'CI/CD': ['Set API keys as CI secrets, then restart or rerun the job so the process reads the updated environment.'],
    }),
    realWorld: (seed) => [
      'If a tool works in one editor window but not another, compare provider settings and restart the editor.',
      'If a model fails but authentication works, test a known available model before changing application code.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Record the request path, model, and \`${seed.error_signature}\` without logging secret values.`,
      'Verify `OPENAI_API_KEY` or the provider-specific key exists in the process that sends the request.',
      'Send a minimal API request with curl to separate SDK bugs from account or credential issues.',
      'If the error mentions context, reduce prompt history and requested output tokens.',
      'If the error mentions quota or rate limits, reduce concurrency before requesting higher limits.',
    ],
    prevention: () => [
      'Centralize model names and provider base URLs in configuration.',
      'Add retry backoff for rate-limit errors, not for quota or credential errors.',
      'Log request IDs and non-secret configuration for production debugging.',
    ],
    faq: (seed) => commonFaq(seed, 'OpenAI API or AI coding tool'),
  },
  {
    name: 'github-actions',
    match: (seed) => /github actions|workflow|runner|vercel|deploy|build command/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means the build or deployment failed in a clean automation environment. The cause is usually runtime version, lockfile state, secrets, project root, or deploy permissions.`,
    why: (seed) => [
      'CI/CD jobs do not inherit your local shell, installed packages, or editor credentials.',
      `For ${seed.title}, compare the workflow/runtime setup with the exact command that succeeds locally.`,
    ],
    quickFixes: (seed) => [
      'Open the failed log and find the first error line above the stack trace.',
      seed.quick_fix,
      'Check Node version, working directory, lockfile state, and required secrets.',
      'Rerun the job only after committing the config or lockfile change.',
    ],
    commands: () => [
      { label: 'Check local Node version', code: 'node --version\nnpm --version' },
      { label: 'Reproduce a clean install', code: 'rm -rf node_modules\nnpm ci' },
      { label: 'Run the production build locally', code: 'npm run build' },
      { label: 'Check GitHub SSH from a runner-like shell', code: 'ssh -T git@github.com' },
    ],
    platform: () => ({
      'GitHub Actions': ['Use `actions/setup-node` for the intended Node version and keep `package-lock.json` committed for `npm ci`.'],
      'Vercel': ['Check the configured project root, build command, output directory, and environment variables in the Vercel project settings.'],
    }),
    realWorld: (seed) => [
      'If the lockfile error appears only in CI, regenerate and commit the lockfile instead of switching to `npm install` in CI.',
      'If deploy keys fail, confirm the public key is attached to the target repository and the private key secret keeps newlines intact.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Find the first log line containing \`${seed.error_signature}\`.`,
      'Check the job Node version and package manager command.',
      'Verify secrets are available for the event type; forked PRs often have restricted secrets.',
      'Compare the workflow working directory with the folder containing `package.json`.',
      'Run the same install and build commands locally from a clean checkout.',
    ],
    prevention: () => [
      'Keep workflow runtime versions explicit.',
      'Commit lockfiles and generated config needed at build time.',
      'Add a small CI job that runs the same build command before deploy.',
    ],
    faq: (seed) => commonFaq(seed, 'CI/CD'),
  },
  {
    name: 'dns-ssl',
    match: (seed) => /dns|cloudflare|ssl|tls|certificate|issuer|nxdomain|origin/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means name resolution, origin connectivity, or TLS certificate validation failed before the application request could complete.`,
    why: (seed) => [
      'DNS and TLS failures often happen outside the application: resolver cache, authoritative records, proxy mode, origin firewall, or CA trust.',
      `For ${seed.title}, separate DNS, CDN/proxy, origin, and certificate checks instead of changing app code first.`,
    ],
    quickFixes: (seed) => [
      'Check the exact hostname, not just the apex domain.',
      seed.quick_fix,
      'Compare direct origin behavior with proxied/CDN behavior when possible.',
      'Retry after DNS TTL or certificate deployment has had time to propagate.',
    ],
    commands: () => [
      { label: 'Query DNS records', code: 'dig example.com A\n\ndig example.com CNAME' },
      { label: 'Check HTTP response headers', code: 'curl -I https://example.com' },
      { label: 'Inspect TLS certificate chain', code: 'openssl s_client -connect example.com:443 -servername example.com </dev/null' },
      { label: 'Flush macOS DNS cache', code: 'sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder' },
    ],
    platform: () => ({
      macOS: ['Use `dscacheutil` to clear local DNS cache after changing records.'],
      Linux: ['Use `dig` or `resolvectl query` to compare resolver answers.'],
      Windows: ['Use `ipconfig /flushdns` after DNS changes, then retest the exact hostname.'],
    }),
    realWorld: (seed) => [
      'If Cloudflare is enabled, test whether the origin responds when accessed directly.',
      'If only one network fails, compare DNS resolver answers before changing server config.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Confirm the browser, client, or log reports \`${seed.error_signature}\` for the same hostname.`,
      'Use `dig` to verify the authoritative DNS answer.',
      'Use `curl -I` to check whether the hostname reaches the expected service.',
      'Use `openssl s_client` to inspect certificate hostname, issuer, and expiry.',
      'If a CDN is involved, compare proxied and direct-origin behavior.',
    ],
    prevention: () => [
      'Track DNS changes with owner, TTL, and expected target.',
      'Monitor certificate expiry before renewal windows close.',
      'Keep CDN SSL mode and origin certificate configuration documented.',
    ],
    faq: (seed) => commonFaq(seed, 'DNS or SSL/TLS'),
  },
];

const fallbackProfile = {
  name: 'generic',
  match: () => true,
  meaning: (seed) =>
    `\`${seed.error_signature}\` identifies a known failure mode in ${seed.technology}. Use the exact signature, command, and surrounding log lines to narrow the cause before changing configuration.`,
  why: (seed) => [`This usually happens when ${seed.technology} receives configuration, environment, or input that does not match the current project state.`],
  quickFixes: (seed) => ['Copy the exact error text.', seed.quick_fix, 'Retry the smallest failing command after each change.'],
  commands: () => [],
  platform: () => ({}),
  realWorld: (seed) => [seed.quick_fix],
  troubleshooting: (seed) => [
    `Search logs for \`${seed.error_signature}\`.`,
    'Identify the smallest command or request that reproduces the error.',
    'Change one variable at a time and keep the output for comparison.',
  ],
  prevention: () => ['Document the working configuration once fixed.'],
  faq: (seed) => commonFaq(seed, seed.technology),
};

function profileFor(seed) {
  return profiles.find((profile) => profile.match(seed)) ?? fallbackProfile;
}

function commonFaq(seed, context) {
  return [
    {
      question: 'What should I check first?',
      answer: `Start with the exact \`${seed.error_signature}\` line and the command, request, or workflow step that produced it. In ${context}, the first useful clue is usually near the first failure line, not the final stack trace.`,
    },
    {
      question: 'Can I ignore this error?',
      answer: `No. Treat it as a failed ${context} step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.`,
    },
    {
      question: 'Why does this work locally but fail elsewhere?',
      answer: `Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.`,
    },
    {
      question: 'How do I know the fix worked?',
      answer: `Rerun the smallest command, request, or deployment step that produced \`${seed.error_signature}\`. The fix is working when that step completes without the same signature and produces the expected output.`,
    },
  ];
}

function section(title, body) {
  if (!body) return '';
  return `## ${title}\n\n${body}`;
}

function commandSection(commands) {
  if (!commands.length) return '';
  return section(
    'Copy-paste commands',
    commands.map((command) => `### ${command.label}\n\n\`\`\`bash\n${command.code}\n\`\`\``).join('\n\n')
  );
}

function platformSection(platforms) {
  const entries = Object.entries(platforms).filter(([, items]) => items.length);
  if (!entries.length) return '';

  return section(
    'Platform-specific fixes',
    entries.map(([platform, items]) => `### ${platform}\n\n${bulletList(items)}`).join('\n\n')
  );
}

function faqSection(items) {
  return section('FAQ', items.map((item) => `### ${item.question}\n\n${item.answer}`).join('\n\n'));
}

function paragraphList(items) {
  return items.filter(Boolean).join('\n\n');
}

function bulletList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function numberedList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function yamlString(value) {
  return JSON.stringify(value);
}

function normalizeCategory(category, technology = '') {
  if (technology === 'SSL/TLS' || category === 'SSL/TLS') return 'SSL/TLS';
  if (technology === 'Cloudflare') return 'Cloudflare';

  const mergeMap = {
    'AI coding tools': 'OpenAI API',
    APIs: 'OpenAI API',
    'CI/CD': 'GitHub Actions',
    Containers: 'Docker',
    Cursor: 'OpenAI API',
    Deployment: 'GitHub Actions',
    'Docker Compose': 'Docker',
    Networking: 'DNS',
    'Package managers': 'npm',
    Runtime: 'Node.js',
    'Version control': 'Git',
    Vercel: 'GitHub Actions',
  };
  const finalCategories = new Set([
    'Cloudflare',
    'DNS',
    'Docker',
    'Git',
    'GitHub Actions',
    'Node.js',
    'npm',
    'OpenAI API',
    'Python',
    'SSL/TLS',
  ]);
  const technologyTarget = mergeMap[technology] ?? technology;
  if (finalCategories.has(technologyTarget)) return technologyTarget;
  return mergeMap[category] ?? category;
}

function text(seed) {
  return `${seed.technology} ${seed.category} ${seed.error_signature} ${seed.title} ${seed.search_intent}`.toLowerCase();
}

function hash(value) {
  let result = 0;
  for (const char of value) result = (result * 31 + char.charCodeAt(0)) >>> 0;
  return result;
}

await main();
