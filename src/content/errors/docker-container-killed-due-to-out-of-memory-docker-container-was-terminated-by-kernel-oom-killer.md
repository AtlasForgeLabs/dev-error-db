---
title: "Docker Out of Memory OOM Killer During Container Runtime"
description: "Fix Docker containers getting killed by OOM killer — understand container memory limits vs host limits Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "container killed due to out of memory: docker container was terminated by kernel OOM killer"
common_causes:
  - "Docker troubleshoot page explicitly lists 'Out of memory issues' under host-level problems. This is distinct from 'no space left on device' (already covered). OOM involves both --memory flag misconfiguration and cgroup v1/v2 swap accounting differences that cause confusing behavior."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-30"
published_at: "2026-05-30T05:43:28.353Z"
updated_at: "2026-05-30T05:43:28.353Z"
---

## What this error means

`container killed due to out of memory: docker container was terminated by kernel OOM killer` is a Docker failure pattern reported for developers trying to fix docker containers getting killed by oom killer — understand container memory limits vs host limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Docker troubleshoot page explicitly lists 'Out of memory issues' under host-level problems. This is distinct from 'no space left on device' (already covered). OOM involves both --memory flag misconfiguration and cgroup v1/v2 swap accounting differences that cause confusing behavior.

## Common causes

- Docker troubleshoot page explicitly lists 'Out of memory issues' under host-level problems. This is distinct from 'no space left on device' (already covered). OOM involves both --memory flag misconfiguration and cgroup v1/v2 swap accounting differences that cause confusing behavior.

## Quick fixes

1. Confirm the exact error signature matches `container killed due to out of memory: docker container was terminated by kernel OOM killer`.
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

- https://docs.docker.com/engine/daemon/troubleshoot/

Evidence note: Docker troubleshoot page explicitly lists 'Out of memory issues' under host-level problems. This is distinct from 'no space left on device' (already covered). OOM involves both --memory flag misconfiguration and cgroup v1/v2 swap accounting differences that cause confusing behavior.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `container killed due to out of memory: docker container was terminated by kernel OOM killer` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `container killed due to out of memory: docker container was terminated by kernel OOM killer`.
