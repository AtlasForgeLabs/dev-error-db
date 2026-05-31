---
title: "Docker Permission Denied Masquerades as Daemon Not Running on Linux"
description: "Distinguish between Docker daemon stopped vs Docker socket permissions issue on Linux; stop systemctl start docker polkit prompts when it's just a permission problem Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock — treated as 'Cannot connect to the Docker daemon … Is the docker daemon running?'"
common_causes:
  - "Issue #22255 in microsoft/vscode-mssql: on Linux, docker info failure is overwhelmingly a permissions problem (EACCES on /var/run/docker.sock), not a stopped daemon. Extension catches error, assumes 'not running', tries systemctl start docker → triggers polkit auth prompt then fails silently. Users see generic 'daemon not running' message instead of actionable permission fix. Not in covered-errors.md as this distinguishes permission vs daemon-stopped root cause."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-31"
published_at: "2026-05-31T14:44:24.807Z"
updated_at: "2026-05-31T14:44:24.807Z"
---

## What this error means

`permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock — treated as 'Cannot connect to the Docker daemon … Is the docker daemon running?'` is a Docker failure pattern reported for developers trying to distinguish between docker daemon stopped vs docker socket permissions issue on linux; stop systemctl start docker polkit prompts when it's just a permission problem. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #22255 in microsoft/vscode-mssql: on Linux, docker info failure is overwhelmingly a permissions problem (EACCES on /var/run/docker.sock), not a stopped daemon. Extension catches error, assumes 'not running', tries systemctl start docker → triggers polkit auth prompt then fails silently. Users see generic 'daemon not running' message instead of actionable permission fix. Not in covered-errors.md as this distinguishes permission vs daemon-stopped root cause.

## Common causes

- Issue #22255 in microsoft/vscode-mssql: on Linux, docker info failure is overwhelmingly a permissions problem (EACCES on /var/run/docker.sock), not a stopped daemon. Extension catches error, assumes 'not running', tries systemctl start docker → triggers polkit auth prompt then fails silently. Users see generic 'daemon not running' message instead of actionable permission fix. Not in covered-errors.md as this distinguishes permission vs daemon-stopped root cause.

## Quick fixes

1. Confirm the exact error signature matches `permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock — treated as 'Cannot connect to the Docker daemon … Is the docker daemon running?'`.
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

- https://github.com/microsoft/vscode-mssql/issues/22255

Evidence note: Issue #22255 in microsoft/vscode-mssql: on Linux, docker info failure is overwhelmingly a permissions problem (EACCES on /var/run/docker.sock), not a stopped daemon. Extension catches error, assumes 'not running', tries systemctl start docker → triggers polkit auth prompt then fails silently. Users see generic 'daemon not running' message instead of actionable permission fix. Not in covered-errors.md as this distinguishes permission vs daemon-stopped root cause.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock — treated as 'Cannot connect to the Docker daemon … Is the docker daemon running?'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock — treated as 'Cannot connect to the Docker daemon … Is the docker daemon running?'`.
