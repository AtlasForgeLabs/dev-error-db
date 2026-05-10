---
title: "GitHub Actions permission denied publickey"
description: "Fix GitHub Actions SSH permission denied errors when a workflow clones, deploys, or pushes with a key."
category: "CI/CD"
technology: "GitHub Actions"
error_signature: "Permission denied (publickey)"
common_causes:
  - "Deploy key is not added to the target repository"
  - "Private key secret is missing or malformed"
  - "Known hosts entry is missing"
  - "Workflow uses the wrong remote URL"
quick_fix: "Store the private key in a secret, add the matching public key to the target repo, and configure known_hosts before SSH commands."
updated: "2026-05-10"
---

## What this error means

`Permission denied (publickey)` means GitHub Actions rejected the credentials used by your command, app, workflow, or editor. In practice, the key, token, SSH key, or account setting being sent is missing, expired, malformed, or not allowed to access the requested resource. This page helps you fix SSH authentication failures inside GitHub Actions workflows.

## Common causes

- Deploy key is not added to the target repository
- Private key secret is missing or malformed
- Known hosts entry is missing
- Workflow uses the wrong remote URL

## Quick fixes

1. Confirm the SSH key is being loaded by the command that fails.
2. Store the private key in a secret, add the matching public key to the target repo, and configure known_hosts before SSH commands.
3. Restart the shell, app, CI job, or editor after changing credentials so it reads the new value.
4. Run the matching `ssh -T` host check to confirm the key is accepted.

## Step-by-step troubleshooting

1. Start with the exact signature: `Permission denied (publickey)`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Print or inspect whether the expected environment variable is set without exposing the secret value.
3. Check whether the SSH key has access to the specific project, repo, registry, or model.
4. Look for whitespace, copied quotes, wrong provider fields, or credentials from another organization or project.
5. Check the runner log for Node version, working directory, and whether secrets are available to the event type.
6. Verify the private key secret, public deploy key, and `known_hosts` setup.
7. Confirm the workflow uses the SSH remote URL for the repository or host that owns the deploy key.

## Related errors

- fatal: Could not read from remote repository
- Host key verification failed
- Git permission denied (publickey)

## FAQ

### What should I check first?

Start with the exact `Permission denied (publickey)` message and the SSH key source being used by the failing process. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

CI starts from a clean machine. It may use a different Node or Python version, a stricter filesystem, missing secrets, or a lockfile that does not match local `node_modules`. Reproduce with a clean install and match the CI runtime.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `Permission denied (publickey)`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
