---
title: "Docker Compose Watch Fails: Error Response from Daemon Cannot Overwrite Non-Directory"
description: "Developer uses docker compose up --watch for hot-reload but encounters daemon-level copy errors when file/directory state conflicts occur Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "docker compose up --watch: copying files: Error response from daemon: cannot overwrite non-directory"
common_causes:
  - "Found on GitHub docker/compose issues (#13795, reported 2 days ago). Specific Docker Compose watch mode bug with concrete error message and daemon interaction. Recent report indicates active issue. Category: Docker per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-21"
published_at: "2026-05-21T15:39:44.907Z"
updated_at: "2026-05-21T15:39:44.907Z"
---

## What this error means

`docker compose up --watch: copying files: Error response from daemon: cannot overwrite non-directory` is a Docker failure pattern reported for developers trying to developer uses docker compose up --watch for hot-reload but encounters daemon-level copy errors when file/directory state conflicts occur. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on GitHub docker/compose issues (#13795, reported 2 days ago). Specific Docker Compose watch mode bug with concrete error message and daemon interaction. Recent report indicates active issue. Category: Docker per mapping rules.

## Common causes

- Found on GitHub docker/compose issues (#13795, reported 2 days ago). Specific Docker Compose watch mode bug with concrete error message and daemon interaction. Recent report indicates active issue. Category: Docker per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `docker compose up --watch: copying files: Error response from daemon: cannot overwrite non-directory`.
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

Evidence note: Found on GitHub docker/compose issues (#13795, reported 2 days ago). Specific Docker Compose watch mode bug with concrete error message and daemon interaction. Recent report indicates active issue. Category: Docker per mapping rules.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `docker compose up --watch: copying files: Error response from daemon: cannot overwrite non-directory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `docker compose up --watch: copying files: Error response from daemon: cannot overwrite non-directory`.
