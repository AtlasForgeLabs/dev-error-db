---
title: "GitHub Actions permission denied publickey"
description: "Fix GitHub Actions SSH permission denied errors when a workflow clones, deploys, or pushes with a key."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Permission denied (publickey)"
common_causes:
  - "Deploy key is not added to the target repository"
  - "Private key secret is missing or malformed"
  - "Known hosts entry is missing"
  - "Workflow uses the wrong remote URL"
quick_fix: "Store the private key in a secret, add the matching public key to the target repo, and configure known_hosts before SSH commands."
related_errors:
  - "fatal: Could not read from remote repository"
  - "Host key verification failed"
  - "Git permission denied (publickey)"
updated: "2026-05-10"
---

## What this error means

`Permission denied (publickey)` means the build or deployment failed in a clean automation environment. The cause is usually runtime version, lockfile state, secrets, project root, or deploy permissions.

## Common causes

- Deploy key is not added to the target repository
- Private key secret is missing or malformed
- Known hosts entry is missing
- Workflow uses the wrong remote URL

## Copy-paste commands

### Check local Node version

```bash
node --version
npm --version
```

### Reproduce a clean install

```bash
rm -rf node_modules
npm ci
```

### Run the production build locally

```bash
npm run build
```

### Check GitHub SSH from a runner-like shell

```bash
ssh -T git@github.com
```

## Quick fixes

1. Open the failed log and find the first error line above the stack trace.
2. Store the private key in a secret, add the matching public key to the target repo, and configure known_hosts before SSH commands.
3. Check Node version, working directory, lockfile state, and required secrets.
4. Rerun the job only after committing the config or lockfile change.

## Step-by-step troubleshooting

1. Find the first log line containing `Permission denied (publickey)`.
2. Check the job Node version and package manager command.
3. Verify secrets are available for the event type; forked PRs often have restricted secrets.
4. Compare the workflow working directory with the folder containing `package.json`.
5. Run the same install and build commands locally from a clean checkout.

## Platform-specific fixes

### GitHub Actions

- Use `actions/setup-node` for the intended Node version and keep `package-lock.json` committed for `npm ci`.

### Vercel

- Check the configured project root, build command, output directory, and environment variables in the Vercel project settings.

## Real-world fixes

- If the lockfile error appears only in CI, regenerate and commit the lockfile instead of switching to `npm install` in CI.
- If deploy keys fail, confirm the public key is attached to the target repository and the private key secret keeps newlines intact.
- Store the private key in a secret, add the matching public key to the target repo, and configure known_hosts before SSH commands.

## How to prevent it

- Keep workflow runtime versions explicit.
- Commit lockfiles and generated config needed at build time.
- Add a small CI job that runs the same build command before deploy.

## Related errors

- fatal: Could not read from remote repository
- Host key verification failed
- Git permission denied (publickey)

## FAQ

### What should I check first?

Start with the exact `Permission denied (publickey)` line and the command, request, or workflow step that produced it. In CI/CD, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed CI/CD step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `Permission denied (publickey)`. The fix is working when that step completes without the same signature and produces the expected output.
