---
title: "Docker Compose Watch ignores permission-denied on folders listed in ignore config"
description: "Fix Docker Compose --watch scanning ignored folders and crashing with permission denied errors on root-owned directories Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Error response from daemon: watcher.Add(\"/path\"): permission denied"
common_causes:
  - "GitHub issue #13750 on docker/compose shows that docker compose up --watch raises permission denied for folders in the ignore list if they lack read permissions (e.g., root-owned dirs). Affects Docker Compose v5.1.3, Docker Engine 29.4.0+. Concrete reproduction steps with minimal compose file. Significant for developers who mount root-owned volumes in their watch paths."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-22"
published_at: "2026-05-22T22:39:48.616Z"
updated_at: "2026-05-22T22:39:48.616Z"
---

## What this error means

`Error response from daemon: watcher.Add("/path"): permission denied` is a Docker failure pattern reported for developers trying to fix docker compose --watch scanning ignored folders and crashing with permission denied errors on root-owned directories. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #13750 on docker/compose shows that docker compose up --watch raises permission denied for folders in the ignore list if they lack read permissions (e.g., root-owned dirs). Affects Docker Compose v5.1.3, Docker Engine 29.4.0+. Concrete reproduction steps with minimal compose file. Significant for developers who mount root-owned volumes in their watch paths.

## Common causes

- GitHub issue #13750 on docker/compose shows that docker compose up --watch raises permission denied for folders in the ignore list if they lack read permissions (e.g., root-owned dirs). Affects Docker Compose v5.1.3, Docker Engine 29.4.0+. Concrete reproduction steps with minimal compose file. Significant for developers who mount root-owned volumes in their watch paths.

## Quick fixes

1. Confirm the exact error signature matches `Error response from daemon: watcher.Add("/path"): permission denied`.
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

Evidence note: GitHub issue #13750 on docker/compose shows that docker compose up --watch raises permission denied for folders in the ignore list if they lack read permissions (e.g., root-owned dirs). Affects Docker Compose v5.1.3, Docker Engine 29.4.0+. Concrete reproduction steps with minimal compose file. Significant for developers who mount root-owned volumes in their watch paths.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Error response from daemon: watcher.Add("/path"): permission denied` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error response from daemon: watcher.Add("/path"): permission denied`.
