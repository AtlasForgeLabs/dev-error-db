---
title: "Docker Swarm misleading 'No such image' error masking 'unauthorized: authentication required'"
description: "Diagnose why Docker Swarm reports 'No such image' when the actual cause is missing registry authentication credentials for private registries Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Rejected: No such image: <registry>/<repo>:<tag>@sha256:... — actual cause is 'unauthorized: authentication required' but error message misleads operators into checking manifest corruption instead"
common_causes:
  - "GitHub issue moby/moby#52570 describes how Docker Swarm image pull failures with 'unauthorized: authentication required' are masked by misleading 'No such image' messages. PR moby/moby#52698 propagates the actual registry auth error. High value: affects production Docker Swarm deployments with private registries; sends operators down wrong debugging paths."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Docker"
updated: "2026-05-27"
published_at: "2026-05-27T00:43:18.447Z"
updated_at: "2026-05-27T00:43:18.447Z"
---

## What this error means

`Rejected: No such image: <registry>/<repo>:<tag>@sha256:... — actual cause is 'unauthorized: authentication required' but error message misleads operators into checking manifest corruption instead` is a Docker failure pattern reported for developers trying to diagnose why docker swarm reports 'no such image' when the actual cause is missing registry authentication credentials for private registries. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue moby/moby#52570 describes how Docker Swarm image pull failures with 'unauthorized: authentication required' are masked by misleading 'No such image' messages. PR moby/moby#52698 propagates the actual registry auth error. High value: affects production Docker Swarm deployments with private registries; sends operators down wrong debugging paths.

## Common causes

- GitHub issue moby/moby#52570 describes how Docker Swarm image pull failures with 'unauthorized: authentication required' are masked by misleading 'No such image' messages. PR moby/moby#52698 propagates the actual registry auth error. High value: affects production Docker Swarm deployments with private registries; sends operators down wrong debugging paths.

## Quick fixes

1. Confirm the exact error signature matches `Rejected: No such image: <registry>/<repo>:<tag>@sha256:... — actual cause is 'unauthorized: authentication required' but error message misleads operators into checking manifest corruption instead`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://api.github.com/repos/moby/moby/issues/52570
- https://api.github.com/repos/moby/moby/pulls/52698

Evidence note: GitHub issue moby/moby#52570 describes how Docker Swarm image pull failures with 'unauthorized: authentication required' are masked by misleading 'No such image' messages. PR moby/moby#52698 propagates the actual registry auth error. High value: affects production Docker Swarm deployments with private registries; sends operators down wrong debugging paths.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Rejected: No such image: <registry>/<repo>:<tag>@sha256:... — actual cause is 'unauthorized: authentication required' but error message misleads operators into checking manifest corruption instead` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Rejected: No such image: <registry>/<repo>:<tag>@sha256:... — actual cause is 'unauthorized: authentication required' but error message misleads operators into checking manifest corruption instead`.
