---
title: "Docker 29.4.1 daemon crash panic: crypto: requested hash function #0 is unavailable"
description: "Fix Docker daemon unexpectedly crashing with crypto hash function unavailable panic, preventing any container operations until daemon restart Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "panic: crypto: requested hash function #0 is unavailable — GitHub goroutine crash in github.com/opencontainers/go-digest.Algorithm.Hash triggered by Docker image digest computation"
common_causes:
  - "GitHub moby/moby issue #52578 (created 2026-05-07). Docker daemon dies with Go runtime panic. Critical for Docker users — complete runtime outage. Not in covered-errors (which only list general 'daemon not running'). This is a version-specific crash with clear stack trace. Category: Docker."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-17"
published_at: "2026-05-17T03:13:52.023Z"
updated_at: "2026-05-17T03:13:52.023Z"
---

## What this error means

`panic: crypto: requested hash function #0 is unavailable — GitHub goroutine crash in github.com/opencontainers/go-digest.Algorithm.Hash triggered by Docker image digest computation` is a Docker failure pattern reported for developers trying to fix docker daemon unexpectedly crashing with crypto hash function unavailable panic, preventing any container operations until daemon restart. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub moby/moby issue #52578 (created 2026-05-07). Docker daemon dies with Go runtime panic. Critical for Docker users — complete runtime outage. Not in covered-errors (which only list general 'daemon not running'). This is a version-specific crash with clear stack trace. Category: Docker.

## Common causes

- GitHub moby/moby issue #52578 (created 2026-05-07). Docker daemon dies with Go runtime panic. Critical for Docker users — complete runtime outage. Not in covered-errors (which only list general 'daemon not running'). This is a version-specific crash with clear stack trace. Category: Docker.

## Quick fixes

1. Confirm the exact error signature matches `panic: crypto: requested hash function #0 is unavailable — GitHub goroutine crash in github.com/opencontainers/go-digest.Algorithm.Hash triggered by Docker image digest computation`.
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

- https://github.com/moby/moby/issues/52578

Evidence note: GitHub moby/moby issue #52578 (created 2026-05-07). Docker daemon dies with Go runtime panic. Critical for Docker users — complete runtime outage. Not in covered-errors (which only list general 'daemon not running'). This is a version-specific crash with clear stack trace. Category: Docker.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `panic: crypto: requested hash function #0 is unavailable — GitHub goroutine crash in github.com/opencontainers/go-digest.Algorithm.Hash triggered by Docker image digest computation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `panic: crypto: requested hash function #0 is unavailable — GitHub goroutine crash in github.com/opencontainers/go-digest.Algorithm.Hash triggered by Docker image digest computation`.
