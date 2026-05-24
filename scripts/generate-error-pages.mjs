import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { evaluateSeedPublishGate, getPublishGateConfigFromEnv, loadLegacySlugs } from './lib/publish-gate-core.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const seedsPath = process.env.ERROR_SEEDS_PATH
  ? path.resolve(rootDir, process.env.ERROR_SEEDS_PATH)
  : path.join(rootDir, 'data', 'error-seeds.json');
const outputDir = path.join(rootDir, 'src', 'content', 'errors');
const stagingDir = path.join(rootDir, 'automation', 'runtime', 'publish-staging');
const force = process.argv.includes('--force');
const onlySlugs = new Set(parseOnlySlugs(process.argv));
const generatedAt = new Date().toISOString();
const updated = generatedAt.slice(0, 10);
const legacySlugs = loadLegacySlugs();
const publishConfig = getPublishGateConfigFromEnv();

const seeds = JSON.parse(await readFile(seedsPath, 'utf8'));

async function main() {
  validateSeeds(seeds);
  await mkdir(outputDir, { recursive: true });
  await mkdir(stagingDir, { recursive: true });

  let created = 0;
  let skipped = 0;
  let gatedOut = 0;
  const dataOnlyCandidates = [];
  const needsReviewCandidates = [];
  const rejectedCandidates = [];
  const acceptedNewHtml = [];

  for (const seed of seeds) {
    if (onlySlugs.size > 0 && !onlySlugs.has(seed.slug)) {
      skipped += 1;
      continue;
    }

    const filePath = path.join(outputDir, `${seed.slug}.md`);
    const rendered = renderMarkdown(seed);
    const gate = evaluateSeedPublishGate(seed, rendered, legacySlugs, publishConfig);

    if (existsSync(filePath) && !force) {
      skipped += 1;
      continue;
    }

    if (!gate.will_generate_html) {
      gatedOut += 1;
      if (gate.publish_status === 'data_only') dataOnlyCandidates.push(gate);
      else if (gate.publish_status === 'needs_review') needsReviewCandidates.push(gate);
      else rejectedCandidates.push(gate);
      continue;
    }

  if (!gate.existing_legacy) {
      acceptedNewHtml.push(gate);
    }

    await writeFile(filePath, rendered, 'utf8');
    created += 1;
  }

  if (publishConfig.maxNewHtmlPerRun > 0 && acceptedNewHtml.length > publishConfig.maxNewHtmlPerRun) {
    throw new Error(
      `Publish gate blocked generation: ${acceptedNewHtml.length} new HTML pages exceeds MAX_NEW_HTML_PER_RUN (${publishConfig.maxNewHtmlPerRun}).`
    );
  }

  await writeFile(path.join(stagingDir, 'data-only-candidates.json'), `${JSON.stringify(dataOnlyCandidates, null, 2)}\n`, 'utf8');
  await writeFile(path.join(stagingDir, 'needs-review-candidates.json'), `${JSON.stringify(needsReviewCandidates, null, 2)}\n`, 'utf8');
  await writeFile(path.join(stagingDir, 'rejected-candidates.json'), `${JSON.stringify(rejectedCandidates, null, 2)}\n`, 'utf8');

  console.log(`Generated ${created} error page(s). Skipped ${skipped} existing file(s). Publish-gated ${gatedOut}.`);
  console.log(`[generate:errors] data_only=${dataOnlyCandidates.length} needs_review=${needsReviewCandidates.length} rejected=${rejectedCandidates.length}`);
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
published_at: ${yamlString(generatedAt)}
updated_at: ${yamlString(generatedAt)}
---

${sections.join('\n\n')}
`;
}

function buildSections(seed, profile) {
  const variants = [
    ['meaning', 'how', 'why', 'causes', 'quick', 'commands', 'platform', 'realWorld', 'troubleshooting', 'prevention', 'related', 'faq'],
    ['meaning', 'causes', 'how', 'commands', 'quick', 'troubleshooting', 'platform', 'realWorld', 'prevention', 'related', 'faq'],
    ['meaning', 'why', 'causes', 'quick', 'commands', 'realWorld', 'troubleshooting', 'platform', 'how', 'prevention', 'related', 'faq'],
  ];
  const order = variants[hash(seed.slug) % variants.length];
  const registry = {
    meaning: () => section('What this error means', profile.meaning(seed)),
    how: () => section(`How to fix ${seed.error_signature}`, numberedList(profile.quickFixes(seed).slice(0, 4))),
    why: () => section('Why this happens', paragraphList(profile.why(seed))),
    causes: () => section('Common causes', bulletList(seed.common_causes)),
    quick: () => section('Quick fix', numberedList(profile.quickFixes(seed))),
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
    name: 'docker-port-conflict',
    match: (seed) => /docker/i.test(text(seed)) && /address already in use|port.*allocated|bind/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means Docker tried to publish a container port onto a host port that is already occupied. The conflict is on the host machine, so the fix is to find the process or older compose stack using that port, then stop it or map the container to a different host port.`,
    why: (seed) => [
      'Port publishing uses the host network namespace. If another process already owns `localhost:3000`, `0.0.0.0:5432`, or any other requested host port, Docker cannot bind that address for the new container.',
      `For ${seed.title}, focus on host port ownership and compose state. Docker daemon health, disk usage, and image contents are usually secondary unless other Docker commands also fail.`,
    ],
    quickFixes: (seed) => [
      'Read the error line and identify the host port Docker tried to bind.',
      'Run `lsof -i :3000` with the actual port from the error.',
      'Stop the old process or compose stack that owns the port.',
      'If both services must run, change the left side of the compose port mapping, such as `3001:3000`.',
    ],
    commands: () => [
      { label: 'List running containers with published ports', code: 'docker ps --format "table {{.Names}}\\t{{.Ports}}\\t{{.Status}}"' },
      { label: 'Check compose services in this project', code: 'docker compose ps' },
      { label: 'Find the process using port 3000', code: 'lsof -nP -iTCP:3000 -sTCP:LISTEN' },
      { label: 'Stop the current compose stack', code: 'docker compose down' },
      { label: 'Check whether Docker itself is reachable', code: 'docker info' },
    ],
    platform: () => ({
      macOS: ['Use `lsof -nP -iTCP:<port> -sTCP:LISTEN` to find apps, dev servers, or Docker Desktop proxies holding the port.'],
      Linux: ['Use `ss -ltnp | grep :<port>` when `lsof` is unavailable, then stop the owning service with the normal service manager.'],
      Windows: ['Use `netstat -ano | findstr :<port>` in PowerShell or Command Prompt, then match the PID in Task Manager.'],
    }),
    realWorld: (seed) => [
      'A previous `docker compose up` may still be running from another terminal. Run `docker compose ps` in the project before starting a second stack.',
      'Local dev servers commonly occupy ports like 3000, 5173, 8000, and 8080. Stop the dev server or remap the Docker host port.',
      'For databases, avoid deleting volumes just to free a port. Stop the container first; the volume may contain local data.',
    ],
    troubleshooting: (seed) => [
      `Find the port mentioned near \`${seed.error_signature}\`; it is usually shown as the host-side bind address.`,
      'Run `docker ps --format "table {{.Names}}\\t{{.Ports}}\\t{{.Status}}"` to see whether another container already publishes that port.',
      'Run `lsof -nP -iTCP:<port> -sTCP:LISTEN` or the platform equivalent to find non-Docker processes.',
      'Stop the old container, compose stack, or local process that owns the port.',
      'If the port is intentionally in use, change only the host side of the mapping, for example `3001:3000`, then retry `docker compose up`.',
    ],
    prevention: () => [
      'Reserve predictable host ports per project and document them in the compose file.',
      'Run `docker compose down` when switching branches or projects that publish the same ports.',
      'Use project-specific compose project names when running multiple stacks at once.',
    ],
    faq: (seed) => [
      {
        question: 'What should I check first?',
        answer: `Check the host port shown beside \`${seed.error_signature}\`, then run \`docker ps\` and \`lsof\` for that port. The fastest fix is usually stopping the older process or remapping the host port.`,
      },
      {
        question: 'Is this caused by the Dockerfile?',
        answer: 'Usually no. A Dockerfile can expose a container port, but this error happens when Docker publishes that port to a host address that is already taken.',
      },
      {
        question: 'Can I run both services at the same time?',
        answer: 'Yes, if they use different host ports. Keep the container port the same and change the host side, such as `3001:3000`.',
      },
      {
        question: 'How do I know the fix worked?',
        answer: `Rerun the same \`docker run\` or \`docker compose up\` command. The fix worked when Docker starts the container without another \`${seed.error_signature}\` message and \`docker ps\` shows the expected port mapping.`,
      },
    ],
  },
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
    name: 'openai-authentication',
    match: (seed) => /openai|cursor|ai coding/i.test(text(seed)) && /401|unauthorized|incorrect api key|invalid api key|api key|authentication/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means the OpenAI API rejected the request before processing it because authentication failed. The request is reaching an API endpoint, but the key, project, organization, environment variable, or provider/base URL does not match what that endpoint expects.`,
    why: (seed) => [
      'A 401 is an authentication problem, not a rate-limit or model-size problem. The most common cause is that the runtime sending the request does not have the key you think it has.',
      'It can also happen after rotating keys, switching projects, changing provider settings in an AI coding tool, or pointing OpenAI SDK code at an OpenAI-compatible provider with the wrong base URL.',
    ],
    quickFixes: (seed) => [
      'Verify the key exists without printing the secret value.',
      'Confirm the app reads the same environment variable name you set, such as `OPENAI_API_KEY`.',
      'Check that the key belongs to the intended project or organization.',
      'If you use a proxy or OpenAI-compatible provider, verify the base URL and provider-specific key match.',
    ],
    commands: () => [
      { label: 'Check whether the OpenAI key is present', code: 'printf "OPENAI_API_KEY=%s\\n" "${OPENAI_API_KEY:+set}"' },
      { label: 'Check provider-related environment names without exposing values', code: 'env | grep -E "OPENAI|MODEL|BASE_URL|ORGANIZATION|PROJECT" | sed "s/=.*/=<redacted>/"' },
      {
        label: 'Send a minimal authenticated request',
        code: 'curl https://api.openai.com/v1/models \\\n  -H "Authorization: Bearer $OPENAI_API_KEY"',
      },
      { label: 'Check for whitespace around the key length without printing it', code: 'python3 - <<\'PY\'\nimport os\nkey = os.getenv("OPENAI_API_KEY", "")\nprint("set:", bool(key))\nprint("starts_with_sk:", key.startswith("sk-"))\nprint("has_outer_whitespace:", key != key.strip())\nPY' },
    ],
    platform: () => ({
      'CI/CD': ['Set the key as a CI secret, verify the job has access to secrets for that event type, and rerun the job after updating the secret.'],
      'AI coding tools': ['Check the tool provider settings separately from shell environment variables; editors often store provider keys outside `.env`.'],
    }),
    realWorld: (seed) => [
      'If local requests work but CI fails, the CI secret may be missing, scoped to a different environment, or unavailable to pull requests from forks.',
      'If a new key was created, restart the server, worker, notebook kernel, or editor window so the process reads the updated environment.',
      'If you recently switched to a compatible provider, pair that provider base URL with that provider key instead of mixing it with an OpenAI API key.',
    ],
    troubleshooting: (seed) => [
      `Confirm the response status or error body contains \`${seed.error_signature}\`.`,
      'Check the environment variable in the same shell, process manager, container, or CI job that sends the request.',
      'Send a minimal `curl` request to `/v1/models` with the same key to separate SDK configuration from credentials.',
      'Verify project, organization, provider base URL, and key source are from the same account or provider.',
      'Rotate the key only after confirming the app is not reading an old `.env`, secret, or editor setting.',
    ],
    prevention: () => [
      'Keep API key names consistent across local, CI, and deployment environments.',
      'Log non-secret provider metadata such as base URL, model name, and project identifier for debugging.',
      'Restart long-running processes after secret rotation.',
    ],
    faq: (seed) => [
      {
        question: 'What should I check first?',
        answer: `Check whether the process sending the request has the expected API key. For \`${seed.error_signature}\`, missing or stale credentials are more likely than request volume or model size.`,
      },
      {
        question: 'Can a wrong base URL cause this?',
        answer: 'Yes. If OpenAI SDK code points at another provider or proxy, that endpoint may reject an OpenAI key, or OpenAI may reject a provider-specific key.',
      },
      {
        question: 'Why does this work locally but fail in CI?',
        answer: 'Your local shell may have a valid key while CI has no secret, a secret with a different name, or restricted secret access for the workflow event.',
      },
      {
        question: 'How do I know authentication is fixed?',
        answer: `The same minimal request should stop returning \`${seed.error_signature}\`. After that, retry the application request with the same key and provider configuration.`,
      },
    ],
  },
  {
    name: 'openai-rate-limit',
    match: (seed) => /openai|cursor|ai coding/i.test(text(seed)) && /429|too many requests|rate limit|rpm|tpm|requests per minute|tokens per minute/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means the API accepted your authentication but throttled the workload because requests arrived too quickly, too many tokens were sent, concurrency was too high, or the account/project is constrained by rate or usage limits.`,
    why: (seed) => [
      'A 429 is mainly a traffic-shaping problem. It is different from a 401 authentication failure: the key can be valid while the request pattern still exceeds request-per-minute, token-per-minute, or concurrency limits.',
      'Bursty retries can make the problem worse. If every failed request immediately retries, a short throttle can turn into a sustained overload.',
    ],
    quickFixes: (seed) => [
      'Reduce concurrent requests and batch size before retrying the same workload.',
      'Add exponential backoff with jitter and respect any `Retry-After` header returned by the provider.',
      'Lower prompt size or max output tokens if token-per-minute limits are being hit.',
      'Check usage, quota, and rate-limit settings in the provider dashboard to distinguish throttling from exhausted quota.',
    ],
    commands: () => [
      {
        label: 'Send one request and inspect rate-limit headers',
        code: 'curl -i https://api.openai.com/v1/models \\\n  -H "Authorization: Bearer $OPENAI_API_KEY" \\\n  | grep -iE "HTTP/|retry-after|rate|limit|remaining"',
      },
      {
        label: 'Find aggressive retry loops in JavaScript or TypeScript',
        code: 'rg -n "retry|setTimeout|setInterval|Promise\\.all|concurr|p-limit|queue" src scripts .',
      },
      {
        label: 'Find retry loops in Python',
        code: 'rg -n "retry|backoff|sleep|asyncio\\.gather|ThreadPoolExecutor|concurrent" .',
      },
      {
        label: 'Confirm the request volume from local logs',
        code: 'rg -n "429|Too Many Requests|rate limit|Retry-After" logs .',
      },
    ],
    platform: () => ({
      'CI/CD': ['Avoid running many API-heavy tests in parallel jobs unless the test suite uses mocks or a shared throttling queue.'],
      'Production workers': ['Cap worker concurrency and queue API jobs so deploys or cron runs do not start a burst of requests at the same time.'],
    }),
    realWorld: (seed) => [
      'If the error appears after adding retries, make sure retries wait longer after each failure instead of firing immediately.',
      'If the error appears only with long prompts, token-per-minute limits may be the bottleneck even when request count looks low.',
      'If the dashboard shows exhausted quota or billing limits, treat it as a quota problem; retry backoff alone will not restore capacity.',
    ],
    troubleshooting: (seed) => [
      `Confirm the error is \`${seed.error_signature}\` and not a 401 or insufficient-quota response.`,
      'Check whether the response includes `Retry-After` or rate-limit headers and log them without logging request content.',
      'Temporarily run the workload with concurrency set to `1`; if it succeeds, add a queue or limiter.',
      'Inspect retry code for immediate loops, nested retries, or `Promise.all` over large request batches.',
      'Compare request count and token usage in the provider dashboard before asking for higher limits.',
    ],
    prevention: () => [
      'Use exponential backoff with jitter for retryable 429 responses.',
      'Set explicit concurrency limits around API calls.',
      'Track request count, token usage, and 429 rate in application metrics.',
      'Use mocks or fixtures for tests that do not need live API calls.',
    ],
    faq: (seed) => [
      {
        question: 'Is this caused by an invalid API key?',
        answer: `Usually no. \`${seed.error_signature}\` means the request is being throttled. Invalid or missing keys usually produce 401-style authentication errors instead.`,
      },
      {
        question: 'What should I check first?',
        answer: 'Check concurrency, retry behavior, and recent request volume. A single deploy, queue drain, or test run can create a burst that crosses request-per-minute or token-per-minute limits.',
      },
      {
        question: 'What is exponential backoff?',
        answer: 'It means waiting progressively longer between retries, often with a small random jitter, so clients do not retry in synchronized bursts.',
      },
      {
        question: 'How do I know the fix worked?',
        answer: `Run the same workload with logging for 429 responses. The fix is working when request volume stays under the limit and \`${seed.error_signature}\` no longer appears during normal traffic.`,
      },
    ],
  },
  {
    name: 'openai-model-access',
    match: (seed) => /openai|cursor|ai coding/i.test(text(seed)) && /model.*not|does not exist|no access|unavailable model|model/i.test(text(seed)),
    meaning: (seed) =>
      `\`${seed.error_signature}\` means the request named a model that the selected provider, project, or account cannot use. The key may be valid, but the model value is wrong, unavailable, deprecated, or not enabled for that project.`,
    why: (seed) => [
      'Model access errors are configuration errors around the `model` field and provider selection, not general network failures.',
      'They often appear after copying examples, switching providers, or deploying a stale environment variable that still points at an older model name.',
    ],
    quickFixes: (seed) => [
      'Check the exact model string sent by the app or AI coding tool.',
      'Verify the provider/base URL matches the model namespace.',
      seed.quick_fix,
      'Retry with a model known to be available for the current project.',
    ],
    commands: () => [
      { label: 'Show model-related environment values without secrets', code: 'env | grep -E "MODEL|OPENAI|BASE_URL" | sed "s/=.*/=<redacted>/"' },
      {
        label: 'List reachable models for the configured key',
        code: 'curl https://api.openai.com/v1/models \\\n  -H "Authorization: Bearer $OPENAI_API_KEY"',
      },
    ],
    platform: () => ({
      'AI coding tools': ['Check both global provider settings and per-project overrides; one stale project setting can override a working global model.'],
    }),
    realWorld: (seed) => [
      'If the same key works with one model but not another, focus on model availability and project access.',
      'If a deployment fails but local works, compare model environment variables between local and production.',
      seed.quick_fix,
    ],
    troubleshooting: (seed) => [
      `Find the exact model value used in the request that returned \`${seed.error_signature}\`.`,
      'Confirm the configured provider supports that model name.',
      'Check for stale environment variables in CI, hosting, or editor settings.',
      'Retry with a known available model and the same request shape.',
    ],
    prevention: () => [
      'Centralize model names in one config file or environment variable.',
      'Validate model configuration at startup before processing user traffic.',
      'Keep provider-specific model names out of shared generic defaults.',
    ],
    faq: (seed) => commonFaq(seed, 'OpenAI API model configuration'),
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
    'AI coding tools': 'AI Coding Tools',
    'AI Coding Tools': 'AI Coding Tools',
    'Anthropic API': 'Anthropic API',
    APIs: 'OpenAI API',
    'CI/CD': 'GitHub Actions',
    'Claude Code': 'AI Coding Tools',
    'Cloud Platforms': 'Cloud Platforms',
    Containers: 'Docker',
    Cursor: 'Cursor',
    Deployment: 'Deployment',
    'Docker Compose': 'Docker',
    'GitHub Copilot': 'GitHub Copilot',
    LiteLLM: 'LiteLLM',
    Networking: 'DNS',
    Ollama: 'Ollama',
    OpenCode: 'AI Coding Tools',
    OpenClaw: 'AI Coding Tools',
    'Package managers': 'npm',
    Runtime: 'Node.js',
    'Version control': 'Git',
    Vercel: 'Deployment',
  };
  const finalCategories = new Set([
    'AI Coding Tools',
    'Anthropic API',
    'Cloudflare',
    'Cloud Platforms',
    'Cursor',
    'Deployment',
    'DNS',
    'Docker',
    'Git',
    'GitHub Actions',
    'GitHub Copilot',
    'LiteLLM',
    'Node.js',
    'npm',
    'Ollama',
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

function parseOnlySlugs(argv) {
  const slugs = [];

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];

    if (value === '--only' && argv[index + 1]) {
      slugs.push(...argv[index + 1].split(','));
      index += 1;
      continue;
    }

    if (value.startsWith('--only=')) {
      slugs.push(...value.slice('--only='.length).split(','));
    }
  }

  return slugs.map((slug) => slug.trim()).filter(Boolean);
}

await main();
