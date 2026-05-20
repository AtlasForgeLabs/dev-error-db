---
title: "Docker Compose v5.1.3 watch mode fails with 'cannot overwrite non-directory with directory' on symlinked paths"
description: "Fix Docker Compose --watch sync error when relative symlinks point from container image paths to host directories, blocking hot-reload development workflow Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Error response from daemon: cannot overwrite non-directory \"/some/path/in/image\" with directory \"/\""
common_causes:
  - "GitHub docker/compose #13795 (open, created 2026-05-19): docker compose up --watch fails with daemon error when source paths involve relative symlinks. Occurs on folder structure changes between Git commits. Requires workaround via docker system prune or docker compose build --no-cache. Affects Docker Desktop Pro/Team/Premium subscribers doing containerized dev with watch mode. Category: Docker."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-20"
published_at: "2026-05-20T03:38:18.303Z"
updated_at: "2026-05-20T03:38:18.303Z"
---

## What this error means

`Error response from daemon: cannot overwrite non-directory "/some/path/in/image" with directory "/"` is a Docker failure pattern reported for developers trying to fix docker compose --watch sync error when relative symlinks point from container image paths to host directories, blocking hot-reload development workflow. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub docker/compose #13795 (open, created 2026-05-19): docker compose up --watch fails with daemon error when source paths involve relative symlinks. Occurs on folder structure changes between Git commits. Requires workaround via docker system prune or docker compose build --no-cache. Affects Docker Desktop Pro/Team/Premium subscribers doing containerized dev with watch mode. Category: Docker.

## Common causes

- GitHub docker/compose #13795 (open, created 2026-05-19): docker compose up --watch fails with daemon error when source paths involve relative symlinks. Occurs on folder structure changes between Git commits. Requires workaround via docker system prune or docker compose build --no-cache. Affects Docker Desktop Pro/Team/Premium subscribers doing containerized dev with watch mode. Category: Docker.

## Quick fixes

1. Confirm the exact error signature matches `Error response from daemon: cannot overwrite non-directory "/some/path/in/image" with directory "/"`.
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

- https://github.com/docker/compose/issues/13795

Evidence note: GitHub docker/compose #13795 (open, created 2026-05-19): docker compose up --watch fails with daemon error when source paths involve relative symlinks. Occurs on folder structure changes between Git commits. Requires workaround via docker system prune or docker compose build --no-cache. Affects Docker Desktop Pro/Team/Premium subscribers doing containerized dev with watch mode. Category: Docker.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Error response from daemon: cannot overwrite non-directory "/some/path/in/image" with directory "/"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error response from daemon: cannot overwrite non-directory "/some/path/in/image" with directory "/"`.
