---
title: "Docker Sandboxes v0.30.0 on Windows: Cannot Self-Connect to docker.sock (Daemon Running But Unreachable)"
description: "Fix Docker Sandboxes sbx run failing on Windows 11 because sandboxd in-process moby backend cannot connect to its own socket immediately after starting Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "ERROR: failed to create sandbox: create runtime: sandboxd error: status 500: failed to create network: Cannot connect to the Docker daemon at unix://...docker.sock. Is the docker daemon running?"
common_causes:
  - "GitHub Issue docker/sbx-releases#157 (May 2026): Docker Sandboxes v0.30.0 on Windows 11. sandboxd logs show socket serving correctly, but connecting goroutine 10ms later fails with daemon-not-running error. Secondary issue: stale socket files persist on restart ('file cannot be accessed by system'). Reproduced with Docker Desktop 29.4.3 + WSL2. Affects Docker Desktop/Sandboxes paid enterprise users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-23"
published_at: "2026-05-23T01:39:49.151Z"
updated_at: "2026-05-23T01:39:49.151Z"
---

## What this error means

`ERROR: failed to create sandbox: create runtime: sandboxd error: status 500: failed to create network: Cannot connect to the Docker daemon at unix://...docker.sock. Is the docker daemon running?` is a Docker failure pattern reported for developers trying to fix docker sandboxes sbx run failing on windows 11 because sandboxd in-process moby backend cannot connect to its own socket immediately after starting. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue docker/sbx-releases#157 (May 2026): Docker Sandboxes v0.30.0 on Windows 11. sandboxd logs show socket serving correctly, but connecting goroutine 10ms later fails with daemon-not-running error. Secondary issue: stale socket files persist on restart ('file cannot be accessed by system'). Reproduced with Docker Desktop 29.4.3 + WSL2. Affects Docker Desktop/Sandboxes paid enterprise users.

## Common causes

- GitHub Issue docker/sbx-releases#157 (May 2026): Docker Sandboxes v0.30.0 on Windows 11. sandboxd logs show socket serving correctly, but connecting goroutine 10ms later fails with daemon-not-running error. Secondary issue: stale socket files persist on restart ('file cannot be accessed by system'). Reproduced with Docker Desktop 29.4.3 + WSL2. Affects Docker Desktop/Sandboxes paid enterprise users.

## Quick fixes

1. Confirm the exact error signature matches `ERROR: failed to create sandbox: create runtime: sandboxd error: status 500: failed to create network: Cannot connect to the Docker daemon at unix://...docker.sock. Is the docker daemon running?`.
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

- https://github.com/docker/sbx-releases/issues/157

Evidence note: GitHub Issue docker/sbx-releases#157 (May 2026): Docker Sandboxes v0.30.0 on Windows 11. sandboxd logs show socket serving correctly, but connecting goroutine 10ms later fails with daemon-not-running error. Secondary issue: stale socket files persist on restart ('file cannot be accessed by system'). Reproduced with Docker Desktop 29.4.3 + WSL2. Affects Docker Desktop/Sandboxes paid enterprise users.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `ERROR: failed to create sandbox: create runtime: sandboxd error: status 500: failed to create network: Cannot connect to the Docker daemon at unix://...docker.sock. Is the docker daemon running?` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERROR: failed to create sandbox: create runtime: sandboxd error: status 500: failed to create network: Cannot connect to the Docker daemon at unix://...docker.sock. Is the docker daemon running?`.
