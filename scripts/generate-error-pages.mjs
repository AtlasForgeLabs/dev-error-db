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
  const quickFixes = quickFixSteps(seed);
  const troubleshooting = troubleshootingSteps(seed);
  const faq = faqItems(seed);

  return `---
title: ${yamlString(seed.title)}
description: ${yamlString(seed.description)}
category: ${yamlString(seed.category)}
technology: ${yamlString(seed.technology)}
error_signature: ${yamlString(seed.error_signature)}
common_causes:
${seed.common_causes.map((cause) => `  - ${yamlString(cause)}`).join('\n')}
quick_fix: ${yamlString(seed.quick_fix)}
updated: ${yamlString(updated)}
---

## What this error means

${meaningText(seed)}

## Common causes

${bulletList(seed.common_causes)}

## Quick fixes

${numberedList(quickFixes)}

## Step-by-step troubleshooting

${numberedList(troubleshooting)}

## Related errors

${bulletList(seed.related_errors)}

## FAQ

### ${faq[0].question}

${faq[0].answer}

### ${faq[1].question}

${faq[1].answer}

### ${faq[2].question}

${faq[2].answer}

### ${faq[3].question}

${faq[3].answer}
`;
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

function meaningText(seed) {
  const signature = seed.error_signature;
  const tech = seed.technology;
  const intent = lowerFirst(seed.search_intent.replace(/\.$/, ''));

  if (isAuth(seed)) {
    return `\`${signature}\` means ${tech} rejected the credentials used by your command, app, workflow, or editor. In practice, the key, token, SSH key, or account setting being sent is missing, expired, malformed, or not allowed to access the requested resource. This page helps you ${intent}.`;
  }

  if (isRateOrQuota(seed)) {
    return `\`${signature}\` means ${tech} is protecting a usage limit: request rate, token volume, account quota, or project billing. The request may be valid, but the provider will not accept more work until the limit resets, usage is reduced, or account limits change. This page helps you ${intent}.`;
  }

  if (isDocker(seed)) {
    return `\`${signature}\` means Docker could not reach or use the local container runtime, storage, network port, or mounted file path needed for this command. The fix usually depends on whether Docker is running, which process owns the port, and what permissions the current user or container has. This page helps you ${intent}.`;
  }

  if (isOpenAI(seed)) {
    return `\`${signature}\` means the OpenAI API accepted the request format far enough to identify a model, context, or account issue, but the request cannot run as configured. Check the model name, project access, token size, and account limits before changing application logic. This page helps you ${intent}.`;
  }

  if (isGitHubActions(seed)) {
    return `\`${signature}\` means a GitHub Actions runner failed in a clean CI environment, not necessarily on your local machine. The usual gap is workflow configuration: Node version, lockfile state, secrets, SSH setup, or project paths. This page helps you ${intent}.`;
  }

  if (isNpm(seed)) {
    return `\`${signature}\` means npm or Node.js could not install, resolve, or load the package metadata it needs for the current project. The practical issue is usually a dependency conflict, missing \`package.json\`, stale lockfile, module path, or runtime version problem. This page helps you ${intent}.`;
  }

  if (isGit(seed)) {
    return `\`${signature}\` means Git cannot complete the repository operation with the current working directory, remote, history, or authentication setup. The command is often correct, but the repository state or remote configuration is not what Git expects. This page helps you ${intent}.`;
  }

  if (isPython(seed)) {
    return `\`${signature}\` means Python cannot use the package, virtual environment, certificate store, or interpreter setup required by the script. The same command can behave differently depending on which Python executable and environment are active. This page helps you ${intent}.`;
  }

  if (isSsl(seed)) {
    return `\`${signature}\` means a TLS client could not verify the certificate chain or validity period for the server it contacted. The problem can be on the server certificate, an intermediate certificate, the local trust store, or an intercepting proxy. This page helps you ${intent}.`;
  }

  if (isDnsOrCloudflare(seed)) {
    return `\`${signature}\` means the browser, DNS resolver, or Cloudflare edge could not reach the expected origin in a healthy way. The important checks are authoritative DNS records, proxy status, origin availability, firewall rules, and TLS mode. This page helps you ${intent}.`;
  }

  if (isVercel(seed)) {
    return `\`${signature}\` means Vercel could not build or resolve the project in its deployment environment. Local success does not guarantee Vercel has the same Node version, root directory, environment variables, file casing, or dependency state. This page helps you ${intent}.`;
  }

  if (isAiTool(seed)) {
    return `\`${signature}\` means the AI coding tool could not use the selected provider, model, key, or account limit. In practice, check the provider field, base URL, model name, and whether the account has access to that model. This page helps you ${intent}.`;
  }

  return `\`${signature}\` means ${tech} encountered a known failure mode for this workflow. Use the signature, command, and surrounding log lines to narrow the cause before changing configuration. This page helps you ${intent}.`;
}

function quickFixSteps(seed) {
  const steps = [];

  if (isAuth(seed)) {
    steps.push(`Confirm the ${credentialName(seed)} is being loaded by the command that fails.`);
    steps.push(seed.quick_fix);
    steps.push('Restart the shell, app, CI job, or editor after changing credentials so it reads the new value.');
    steps.push(authVerificationStep(seed));
    return limitSteps(steps);
  }

  if (isRateOrQuota(seed)) {
    steps.push('Pause automatic retries so they do not keep increasing traffic.');
    steps.push(seed.quick_fix);
    steps.push('Lower concurrency, prompt size, batch size, or requested output length before retrying.');
    steps.push('Check usage, billing, or project limits in the provider dashboard.');
    return limitSteps(steps);
  }

  if (isDocker(seed)) {
    steps.push('Run `docker info` or open Docker Desktop to confirm the daemon is running.');
    steps.push(seed.quick_fix);
    steps.push('Check the failing resource directly: socket permissions, disk usage, port owner, or mounted path.');
    steps.push('Restart only the affected container or compose stack after changing Docker settings.');
    return limitSteps(steps);
  }

  if (isGitHubActions(seed)) {
    steps.push('Open the failed workflow step and copy the first real error above the stack trace.');
    steps.push(seed.quick_fix);
    steps.push('Check `.github/workflows/*` for Node version, working-directory, secrets, and deploy permissions.');
    steps.push('Rerun the job after committing lockfile or workflow changes.');
    return limitSteps(steps);
  }

  if (isNpm(seed)) {
    steps.push('Run the command from the directory that contains `package.json`.');
    steps.push(seed.quick_fix);
    steps.push('If install state is suspect, remove `node_modules` and reinstall from the committed lockfile.');
    steps.push('Use the same Node and npm versions locally and in CI.');
    return limitSteps(steps);
  }

  if (isOpenAI(seed)) {
    steps.push('Verify the configured model name and project access before changing prompts or SDK code.');
    steps.push(seed.quick_fix);
    steps.push('Check prompt size, output token settings, and account limits if the error mentions context or quota.');
    steps.push('Retry with a minimal request that uses the same API key and model.');
    return limitSteps(steps);
  }

  if (isDnsOrCloudflare(seed)) {
    steps.push('Check the authoritative DNS record for the exact hostname, not only the browser result.');
    steps.push(seed.quick_fix);
    steps.push('Test the origin directly when possible, bypassing the proxy or CDN.');
    steps.push('Flush local DNS cache or wait for TTL before judging propagation.');
    return limitSteps(steps);
  }

  if (isVercel(seed)) {
    steps.push('Run the same build command locally after a clean install.');
    steps.push(seed.quick_fix);
    steps.push('Verify Vercel project root, Node version, environment variables, and install command.');
    steps.push('Commit any generated files or lockfile changes required by the build.');
    return limitSteps(steps);
  }

  if (isPython(seed)) {
    steps.push('Check `python --version` and `python -m pip --version` to confirm the active interpreter.');
    steps.push(seed.quick_fix);
    steps.push('Activate the intended virtual environment before installing or running the script.');
    steps.push('Retry with `python -m ...` commands to avoid using the wrong executable.');
    return limitSteps(steps);
  }

  if (isSsl(seed)) {
    steps.push('Inspect the certificate chain and expiry for the exact hostname.');
    steps.push(seed.quick_fix);
    steps.push('Update the client trust store or CA bundle instead of disabling verification.');
    steps.push('Retry from another network if a proxy or antivirus tool may intercept TLS.');
    return limitSteps(steps);
  }

  steps.push('Copy the exact error signature and the command that produced it.');
  steps.push(seed.quick_fix);
  steps.push(`Check the ${seed.technology} configuration that matches this command.`);
  steps.push('Rerun the smallest failing command after each change.');
  return limitSteps(steps);
}

function troubleshootingSteps(seed) {
  const steps = [
    `Start with the exact signature: \`${seed.error_signature}\`. Confirm it appears on the failing command, request, or deployment log you are debugging.`,
  ];

  if (isAuth(seed)) {
    steps.push('Print or inspect whether the expected environment variable is set without exposing the secret value.');
    steps.push(`Check whether the ${credentialName(seed)} has access to the specific project, repo, registry, or model.`);
    steps.push('Look for whitespace, copied quotes, wrong provider fields, or credentials from another organization or project.');
  }

  if (isRateOrQuota(seed)) {
    steps.push('Check whether the error is request rate, token volume, billing quota, or model access rather than treating all 429-style errors the same.');
    steps.push('Review retry code for immediate loops; add backoff and a maximum retry count if retries are allowed.');
    steps.push('Reduce parallel workers or batch size and confirm the error rate drops.');
  }

  if (isDocker(seed)) {
    steps.push('Run `docker info` to confirm the client can talk to the daemon.');
    steps.push('For port errors, identify the process using the port with `lsof -i :PORT` or the platform equivalent.');
    steps.push('For disk errors, run `docker system df` before pruning images, volumes, or build cache.');
    steps.push('For permission errors, check socket ownership, container user IDs, and bind-mounted file permissions.');
  }

  if (isOpenAI(seed)) {
    steps.push('Log the configured model name and project or organization identifier without exposing the API key.');
    steps.push('If the error mentions context, count prompt, history, tool, and requested output tokens together.');
    steps.push('If the error mentions access, verify the selected project can use that model.');
  }

  if (isNpm(seed)) {
    steps.push('Confirm `package.json` and `package-lock.json` are both present when using `npm ci`.');
    steps.push('Check the package named in the npm error and compare its required peer dependency range with the installed version.');
    steps.push('Regenerate the lockfile only after deciding the correct dependency versions.');
  }

  if (isGitHubActions(seed)) {
    steps.push('Check the runner log for Node version, working directory, and whether secrets are available to the event type.');
    if (/npm ci|lockfile|package-lock/.test(text(seed))) {
      steps.push('Verify `package-lock.json` is committed and matches `package.json`.');
      steps.push('Check that `actions/setup-node` uses the same major Node version you use to regenerate the lockfile.');
    } else if (/ssh|publickey|deploy key/.test(text(seed))) {
      steps.push('Verify the private key secret, public deploy key, and `known_hosts` setup.');
      steps.push('Confirm the workflow uses the SSH remote URL for the repository or host that owns the deploy key.');
    } else if (/node|engine/.test(text(seed))) {
      steps.push('Compare the workflow Node version with `.nvmrc`, `package.json` engines, and local `node --version`.');
      steps.push('Update `actions/setup-node` before changing dependencies.');
    }
  }

  if (isGit(seed)) {
    steps.push('Run `git status` and `git remote -v` from the directory where the error happens.');
    steps.push('For history or merge errors, inspect the branch relationship before forcing a merge or rewriting history.');
    steps.push('For remote errors, confirm whether the URL should use SSH or HTTPS.');
  }

  if (isPython(seed)) {
    steps.push('Run `which python` and `python -m pip --version` to verify installs target the interpreter that runs the code.');
    steps.push('If a virtual environment is expected, recreate it only after confirming the right Python version is installed.');
    steps.push('For certificate failures, update `certifi` or the system CA store before changing application code.');
  }

  if (isSsl(seed)) {
    steps.push('Use a certificate checker or `openssl s_client` to inspect the served certificate and intermediates.');
    steps.push('Check the local system clock, because an incorrect date can make valid certificates fail.');
    steps.push('If a corporate proxy is involved, install the approved root CA rather than bypassing TLS checks.');
  }

  if (isDnsOrCloudflare(seed)) {
    steps.push('Query authoritative DNS with `dig` or your DNS provider UI for the exact hostname.');
    steps.push('Check whether Cloudflare proxy mode, SSL mode, and origin firewall rules match the deployment.');
    steps.push('Compare direct origin response with proxied response to separate DNS, CDN, and origin problems.');
  }

  if (isVercel(seed)) {
    steps.push('Check Vercel build logs for the first module, command, or environment variable that fails.');
    steps.push('Verify the project root and build command match the folder that contains `package.json`.');
    steps.push('Check file-name casing because Vercel builds on a case-sensitive filesystem.');
  }

  if (isAiTool(seed)) {
    steps.push('Open the model or provider settings and verify the selected provider matches the API key.');
    steps.push('Check base URL, model name, and account access before changing editor-wide settings.');
    steps.push('Restart the editor after changing provider credentials so stale settings are not reused.');
  }

  steps.push(`Make the targeted change: ${seed.quick_fix}`);
  steps.push('Rerun the smallest failing command, request, or deployment step and keep the output for comparison.');

  return dedupe(steps).slice(0, 7);
}

function faqItems(seed) {
  const firstCheck = firstCheckText(seed);

  return [
    {
      question: 'What should I check first?',
      answer: `Start with the exact \`${seed.error_signature}\` message and the ${firstCheck}. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.`,
    },
    {
      question: 'Can I ignore this error?',
      answer: `No. Treat it as a failed ${seed.technology} step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.`,
    },
    {
      question: 'Why does this work locally but fail in CI?',
      answer: ciAnswer(seed),
    },
    {
      question: 'How do I know the fix worked?',
      answer: `Rerun the smallest command, request, workflow, or deployment that previously produced \`${seed.error_signature}\`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.`,
    },
  ];
}

function firstCheckText(seed) {
  if (isAuth(seed)) return `${credentialName(seed)} source being used by the failing process`;
  if (isDocker(seed)) return 'Docker daemon, socket, port, disk, or mount involved';
  if (isNpm(seed)) return '`package.json`, `package-lock.json`, and npm version';
  if (isGitHubActions(seed)) return 'workflow step, Node version, lockfile, and secrets';
  if (isDnsOrCloudflare(seed)) return 'authoritative DNS record, Cloudflare mode, and origin health';
  if (isSsl(seed)) return 'certificate chain, expiry, hostname, and local trust store';
  if (isPython(seed)) return 'active Python interpreter and virtual environment';
  if (isVercel(seed)) return 'Vercel build log, project root, and environment variables';
  if (isAiTool(seed)) return 'provider, model, base URL, and API key settings';
  return `${seed.technology} setting named in the log`;
}

function credentialName(seed) {
  const value = text(seed);

  if (/ssh|publickey|deploy key/.test(value)) return 'SSH key';
  if (/api key/.test(value)) return 'API key';
  if (/token/.test(value)) return 'token';
  if (/quota|billing/.test(value)) return 'account quota or billing setting';
  if (/permission/.test(value)) return 'permission or access setting';

  return 'credential';
}

function authVerificationStep(seed) {
  const value = text(seed);

  if (/npm|registry/.test(value)) return 'Run `npm whoami` against the same registry used by the failing command.';
  if (/ssh|publickey|deploy key|git/.test(value)) return 'Run the matching `ssh -T` host check to confirm the key is accepted.';
  if (/cursor|ai coding/.test(value)) return 'Send a small test request from the same editor provider settings.';
  if (/openai|api key/.test(value)) return 'Send a minimal API request with the same key, project, and model.';

  return 'Run the smallest supported authentication check for the tool that failed.';
}

function ciAnswer(seed) {
  if (isPython(seed)) {
    return 'CI starts from a clean machine. It may use a different Python version, miss the virtual environment, or install packages into a different interpreter. Reproduce with `python -m pip` and log the Python version used by the job.';
  }

  if (isGitHubActions(seed) || isNpm(seed) || isVercel(seed)) {
    return 'CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.';
  }

  if (isAuth(seed)) {
    return 'Local tools may read credentials from your shell, keychain, or editor, while CI only sees explicitly configured secrets. Check secret names, event permissions, and whether the workflow is allowed to access them.';
  }

  if (isDnsOrCloudflare(seed) || isSsl(seed)) {
    return 'CI may run from a different network and use a different DNS resolver or CA bundle. Compare DNS answers, certificate chains, and proxy settings between local and CI.';
  }

  return 'Local and CI environments often differ in installed tools, environment variables, permissions, and network access. Log the versions and non-secret configuration values used by the failing step.';
}

function limitSteps(steps) {
  return dedupe(steps).slice(0, 5);
}

function dedupe(items) {
  return [...new Set(items.filter(Boolean))];
}

function lowerFirst(value) {
  return `${value.charAt(0).toLowerCase()}${value.slice(1)}`;
}

function text(seed) {
  return `${seed.technology} ${seed.category} ${seed.error_signature} ${seed.title} ${seed.search_intent}`.toLowerCase();
}

function isAuth(seed) {
  const value = text(seed);
  return (
    /auth|api key|token|credential|permission denied|publickey|ssh|quota/.test(value) &&
    !isRateOrQuota(seed) &&
    !isDocker(seed)
  );
}

function isRateOrQuota(seed) {
  return /rate|quota|too many requests|limit/.test(text(seed));
}

function isDocker(seed) {
  return /docker|compose|container/.test(text(seed));
}

function isNpm(seed) {
  return /npm|node\.js|node|module|package|lockfile|eresolve|enoent/.test(text(seed)) && !isPython(seed);
}

function isGitHubActions(seed) {
  return /github actions|workflow|runner/.test(text(seed));
}

function isGit(seed) {
  return /\bgit\b|remote|repository|merge|histories/.test(text(seed)) && !isGitHubActions(seed);
}

function isPython(seed) {
  return /python|pip|venv|modulenotfounderror|ensurepip/.test(text(seed));
}

function isSsl(seed) {
  return /ssl|tls|certificate|issuer|cert/.test(text(seed)) && !isDnsOrCloudflare(seed);
}

function isDnsOrCloudflare(seed) {
  return /cloudflare|dns|nxdomain|origin/.test(text(seed));
}

function isVercel(seed) {
  return /vercel/.test(text(seed));
}

function isAiTool(seed) {
  return /cursor|ai coding/.test(text(seed));
}

function isOpenAI(seed) {
  return /openai api/.test(text(seed));
}
