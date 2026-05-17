---
title: "Docker rootless daemon not connecting after update to version 29.5.0"
description: "Fix Docker rootless mode broken after upgrading to 29.5.0 — docker.sock missing Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "failed to connect to the docker API at unix:///run/user/1000/docker.sock: dial unix /run/user/1000/docker.sock: connect: no such file or directory"
common_causes:
  - "Found in moby/moby repo issue #52641 (opened 2026-05-17). Regression in latest Docker release affecting rootless users. Directly blocks container operations (docker ps, docker compose up). Specific socket path error signature. Category: Docker."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-17"
published_at: "2026-05-17T07:13:52.472Z"
updated_at: "2026-05-17T07:13:52.472Z"
---

## What this error means

`failed to connect to the docker API at unix:///run/user/1000/docker.sock: dial unix /run/user/1000/docker.sock: connect: no such file or directory` is a Docker failure pattern reported for developers trying to fix docker rootless mode broken after upgrading to 29.5.0 — docker.sock missing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in moby/moby repo issue #52641 (opened 2026-05-17). Regression in latest Docker release affecting rootless users. Directly blocks container operations (docker ps, docker compose up). Specific socket path error signature. Category: Docker.

## Common causes

- Found in moby/moby repo issue #52641 (opened 2026-05-17). Regression in latest Docker release affecting rootless users. Directly blocks container operations (docker ps, docker compose up). Specific socket path error signature. Category: Docker.

## Quick fixes

1. Confirm the exact error signature matches `failed to connect to the docker API at unix:///run/user/1000/docker.sock: dial unix /run/user/1000/docker.sock: connect: no such file or directory`.
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

- https://github.com/moby/moby/issues/52641

Evidence note: Found in moby/moby repo issue #52641 (opened 2026-05-17). Regression in latest Docker release affecting rootless users. Directly blocks container operations (docker ps, docker compose up). Specific socket path error signature. Category: Docker.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `failed to connect to the docker API at unix:///run/user/1000/docker.sock: dial unix /run/user/1000/docker.sock: connect: no such file or directory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `failed to connect to the docker API at unix:///run/user/1000/docker.sock: dial unix /run/user/1000/docker.sock: connect: no such file or directory`.
