---
title: "Docker Compose watch permission denied — ignores .dockerignore when listing files"
description: "Developer runs docker compose watch and gets permission denied errors on read-only subdirectories that are listed in .dockerignore ignore patterns; the ignore rules are not respected by the watch filesystem listener Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "permission denied — docker compose watch reads folders marked as ignored in .dockerignore"
common_causes:
  - "Source: https://github.com/docker/compose/issues/13750 (created 2026-04-20). Bug: docker compose watch traverses hidden/ignored folders before checking .dockerignore, triggering EACCES on system paths (e.g., /proc, /sys, mounted volumes owned by root). Blocks hot-reload workflows entirely. Separate from #13795 (same issue tracker, different bug: daemon can't overwrite non-directory with directory). Both affect development velocity on paid Docker Desktop Pro/Team."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-20"
published_at: "2026-05-20T02:38:18.417Z"
updated_at: "2026-05-20T02:38:18.417Z"
---

## What this error means

`permission denied — docker compose watch reads folders marked as ignored in .dockerignore` is a Docker failure pattern reported for developers trying to developer runs docker compose watch and gets permission denied errors on read-only subdirectories that are listed in .dockerignore ignore patterns; the ignore rules are not respected by the watch filesystem listener. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/docker/compose/issues/13750 (created 2026-04-20). Bug: docker compose watch traverses hidden/ignored folders before checking .dockerignore, triggering EACCES on system paths (e.g., /proc, /sys, mounted volumes owned by root). Blocks hot-reload workflows entirely. Separate from #13795 (same issue tracker, different bug: daemon can't overwrite non-directory with directory). Both affect development velocity on paid Docker Desktop Pro/Team.

## Common causes

- Source: https://github.com/docker/compose/issues/13750 (created 2026-04-20). Bug: docker compose watch traverses hidden/ignored folders before checking .dockerignore, triggering EACCES on system paths (e.g., /proc, /sys, mounted volumes owned by root). Blocks hot-reload workflows entirely. Separate from #13795 (same issue tracker, different bug: daemon can't overwrite non-directory with directory). Both affect development velocity on paid Docker Desktop Pro/Team.

## Quick fixes

1. Confirm the exact error signature matches `permission denied — docker compose watch reads folders marked as ignored in .dockerignore`.
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

- https://github.com/docker/compose/issues/13750
- https://github.com/docker/compose/issues/13795

Evidence note: Source: https://github.com/docker/compose/issues/13750 (created 2026-04-20). Bug: docker compose watch traverses hidden/ignored folders before checking .dockerignore, triggering EACCES on system paths (e.g., /proc, /sys, mounted volumes owned by root). Blocks hot-reload workflows entirely. Separate from #13795 (same issue tracker, different bug: daemon can't overwrite non-directory with directory). Both affect development velocity on paid Docker Desktop Pro/Team.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `permission denied — docker compose watch reads folders marked as ignored in .dockerignore` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `permission denied — docker compose watch reads folders marked as ignored in .dockerignore`.
