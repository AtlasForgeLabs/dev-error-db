---
title: "Docker Compose Build Fails with 'invalid file request' on Bind-Mounted Directories"
description: "Developers using docker compose build with bind-mounted local directories encounter cryptic 'invalid file request' errors preventing container builds Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "ERROR: failed to build: failed to solve: invalid file request data/.config/pu..."
common_causes:
  - "GitHub issue #13925 on NousResearch/hermes-agent repo (Apr 22, 2026). Docker Compose build failure triggered by .dockerignore and bind mount interactions. Common in enterprise deployment pipelines where host directories are mounted into builds."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-21"
published_at: "2026-05-21T11:39:44.393Z"
updated_at: "2026-05-21T11:39:44.393Z"
---

## What this error means

`ERROR: failed to build: failed to solve: invalid file request data/.config/pu...` is a Docker failure pattern reported for developers trying to developers using docker compose build with bind-mounted local directories encounter cryptic 'invalid file request' errors preventing container builds. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #13925 on NousResearch/hermes-agent repo (Apr 22, 2026). Docker Compose build failure triggered by .dockerignore and bind mount interactions. Common in enterprise deployment pipelines where host directories are mounted into builds.

## Common causes

- GitHub issue #13925 on NousResearch/hermes-agent repo (Apr 22, 2026). Docker Compose build failure triggered by .dockerignore and bind mount interactions. Common in enterprise deployment pipelines where host directories are mounted into builds.

## Quick fixes

1. Confirm the exact error signature matches `ERROR: failed to build: failed to solve: invalid file request data/.config/pu...`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

## Platform/tool-specific checks

- Verify the command, editor, extension, or API client that produced the error.
- Compare local settings with CI, deployment, or editor-level settings when the error appears in only one environment.
- Avoid deleting credentials, local model data, or project settings until the failing scope is clear.

## Step-by-step troubleshooting

1. Capture the exact error message and the command, editor action, or request that triggered it.
2. Check whether the failure is account/auth, quota/rate, model/provider, local runtime, or deployment configuration.
3. Review the source evidence below and compare it with your environment.
4. Apply one change at a time and rerun the smallest failing action.
5. Keep the working fix documented for the team or deployment environment.

## How to prevent it

- Keep provider/tool configuration documented.
- Record non-secret diagnostics such as tool version, provider name, model name, and command path.
- Add a lightweight check before CI or production workflows depend on the tool.

## Sources checked

- https://github.com/NousResearch/hermes-agent/issues/13925

Evidence note: GitHub issue #13925 on NousResearch/hermes-agent repo (Apr 22, 2026). Docker Compose build failure triggered by .dockerignore and bind mount interactions. Common in enterprise deployment pipelines where host directories are mounted into builds.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `ERROR: failed to build: failed to solve: invalid file request data/.config/pu...` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERROR: failed to build: failed to solve: invalid file request data/.config/pu...`.
