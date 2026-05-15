---
title: "Docker 29.5.0-RC1 Cannot Exec Into Rootless Container — AppArmor Profile Missing"
description: "Fix Docker exec failure in rootless containers due to missing AppArmor profile after upgrade Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Docker cannot exec into rootless container — apparmor failed to apply profile: no such file or directory"
common_causes:
  - "Upgrading to Docker 29.5.0-RC1 breaks docker exec into rootless containers. The error references AppArmor but rootless containers shouldn't require AppArmor. 7 comments indicate widespread impact."
  - "Docker 29.5.0-RC1 regression: docker exec into rootless containers fails with AppArmor exec profile error. The error path references /proc/thread-self/attr/apparmor/exec which doesn't exist. 7 comments from affected users."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker exec rootless container fails"
  - "Docker AppArmor no such file or directory"
  - "Docker 29.5 rootless regression"
updated: "2026-05-15"
published_at: "2026-05-15T02:13:21.451Z"
updated_at: "2026-05-15T02:13:21.451Z"
---

## What this error means

`Docker cannot exec into rootless container — apparmor failed to apply profile: no such file or directory` is a Docker failure pattern reported for developers trying to fix docker exec failure in rootless containers due to missing apparmor profile after upgrade. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Docker 29.5.0-RC1 regression: docker exec into rootless containers fails with AppArmor exec profile error. The error path references /proc/thread-self/attr/apparmor/exec which doesn't exist. 7 comments from affected users.

## Common causes

- Upgrading to Docker 29.5.0-RC1 breaks docker exec into rootless containers. The error references AppArmor but rootless containers shouldn't require AppArmor. 7 comments indicate widespread impact.
- Docker 29.5.0-RC1 regression: docker exec into rootless containers fails with AppArmor exec profile error. The error path references /proc/thread-self/attr/apparmor/exec which doesn't exist. 7 comments from affected users.

## Quick fixes

1. Confirm the exact error signature matches `Docker cannot exec into rootless container — apparmor failed to apply profile: no such file or directory`.
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

- https://github.com/moby/moby/issues/52626

Evidence note: Docker 29.5.0-RC1 regression: docker exec into rootless containers fails with AppArmor exec profile error. The error path references /proc/thread-self/attr/apparmor/exec which doesn't exist. 7 comments from affected users.

## Related errors

- Docker exec rootless container fails
- Docker AppArmor no such file or directory
- Docker 29.5 rootless regression

## FAQ

### What should I check first?

Start with the exact `Docker cannot exec into rootless container — apparmor failed to apply profile: no such file or directory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Docker cannot exec into rootless container — apparmor failed to apply profile: no such file or directory`.
