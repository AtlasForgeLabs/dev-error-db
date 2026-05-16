---
title: "Docker Compose up --wait exits with code 1 on init containers completing successfully"
description: "Fix Docker Compose --wait exit code 1 when init containers exit 0: compose treats successful init container exit as failure Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "docker compose up --wait exits 1 (container exited with code 0 but compose reports failure)"
common_causes:
  - "GitHub issue docker/compose#10596 (29 upvotes, still open May 2026): docker compose up --wait returns exit code 1 when init containers exit successfully (code 0) if no other service depends on them. Affects CI/CD pipelines that check exit codes. Category mapping: Docker (Docker Compose behavior)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-16"
published_at: "2026-05-16T02:13:24.265Z"
updated_at: "2026-05-16T02:13:24.265Z"
---

## What this error means

`docker compose up --wait exits 1 (container exited with code 0 but compose reports failure)` is a Docker failure pattern reported for developers trying to fix docker compose --wait exit code 1 when init containers exit 0: compose treats successful init container exit as failure. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue docker/compose#10596 (29 upvotes, still open May 2026): docker compose up --wait returns exit code 1 when init containers exit successfully (code 0) if no other service depends on them. Affects CI/CD pipelines that check exit codes. Category mapping: Docker (Docker Compose behavior).

## Common causes

- GitHub issue docker/compose#10596 (29 upvotes, still open May 2026): docker compose up --wait returns exit code 1 when init containers exit successfully (code 0) if no other service depends on them. Affects CI/CD pipelines that check exit codes. Category mapping: Docker (Docker Compose behavior).

## Quick fixes

1. Confirm the exact error signature matches `docker compose up --wait exits 1 (container exited with code 0 but compose reports failure)`.
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

- https://github.com/docker/compose/issues/10596

Evidence note: GitHub issue docker/compose#10596 (29 upvotes, still open May 2026): docker compose up --wait returns exit code 1 when init containers exit successfully (code 0) if no other service depends on them. Affects CI/CD pipelines that check exit codes. Category mapping: Docker (Docker Compose behavior).

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `docker compose up --wait exits 1 (container exited with code 0 but compose reports failure)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `docker compose up --wait exits 1 (container exited with code 0 but compose reports failure)`.
