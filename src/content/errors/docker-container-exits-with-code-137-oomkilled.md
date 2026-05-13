---
title: "Docker Container OOM Killed — Exit Code 137 Out of Memory"
description: "Fix Docker container exit code 137 OOM killed out of memory error Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Container exits with code 137 (OOMKilled)"
common_causes:
  - "Docker containers with insufficient memory limits crash silently with exit code 137. The lack of explicit error logs makes diagnosis difficult — developers see the container restarting but don't know it's an OOM issue without checking system logs."
  - "Real production issues: simcraft-backend crashes with code 137 on 8GB RAM system with multiple containers. Trading platform feature-engine OOM-crashes every ~30 min with 'Fatal JavaScript out of memory: Ineffective mark-compacts near heap limit'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker memory limit configuration best practices"
  - "Node.js heap size limit Docker container"
  - "Container memory monitoring OOM detection"
updated: "2026-05-13"
published_at: "2026-05-13T20:13:17.679Z"
updated_at: "2026-05-13T20:13:17.679Z"
---

## What this error means

`Container exits with code 137 (OOMKilled)` is a Docker failure pattern reported for developers trying to fix docker container exit code 137 oom killed out of memory error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Real production issues: simcraft-backend crashes with code 137 on 8GB RAM system with multiple containers. Trading platform feature-engine OOM-crashes every ~30 min with 'Fatal JavaScript out of memory: Ineffective mark-compacts near heap limit'.

## Common causes

- Docker containers with insufficient memory limits crash silently with exit code 137. The lack of explicit error logs makes diagnosis difficult — developers see the container restarting but don't know it's an OOM issue without checking system logs.
- Real production issues: simcraft-backend crashes with code 137 on 8GB RAM system with multiple containers. Trading platform feature-engine OOM-crashes every ~30 min with 'Fatal JavaScript out of memory: Ineffective mark-compacts near heap limit'.

## Quick fixes

1. Confirm the exact error signature matches `Container exits with code 137 (OOMKilled)`.
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

- https://github.com/sortbek/simcraft/issues/117
- https://github.com/milesburton/veta-trading-platform/pull/134

Evidence note: Real production issues: simcraft-backend crashes with code 137 on 8GB RAM system with multiple containers. Trading platform feature-engine OOM-crashes every ~30 min with 'Fatal JavaScript out of memory: Ineffective mark-compacts near heap limit'.

## Related errors

- Docker memory limit configuration best practices
- Node.js heap size limit Docker container
- Container memory monitoring OOM detection

## FAQ

### What should I check first?

Start with the exact `Container exits with code 137 (OOMKilled)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Container exits with code 137 (OOMKilled)`.
