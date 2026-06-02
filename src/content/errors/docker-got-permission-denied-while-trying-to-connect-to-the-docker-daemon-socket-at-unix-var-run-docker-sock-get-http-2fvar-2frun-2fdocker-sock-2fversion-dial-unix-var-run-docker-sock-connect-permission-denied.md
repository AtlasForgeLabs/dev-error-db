---
title: "Docker Desktop Mac Multi-User Permission Denied When Switching User Accounts"
description: "User on macOS switches from the account that installed Docker Desktop to another account and cannot run any docker commands — socket ownership prevents non-owner users from connecting even with sudo Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get \"http://%2Fvar%2Frun%2Fdocker.sock%2Fversion\": dial unix /var/run/docker.sock: connect: permission denied"
common_causes:
  - "GitHub Issue #6781 on docker/for-mac documents the multi-user scenario: docker.sock owned by original installer's group. Even running with sudo fails because the socket isn't accessible. Fix involves either enabling default socket in Docker Desktop settings or changing socket group permissions. Category: Docker per mapping. Distinct from already-covered 'cannot connect to daemon'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-06-02"
published_at: "2026-06-02T23:44:31.150Z"
updated_at: "2026-06-02T23:44:31.150Z"
---

## What this error means

`Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock%2Fversion": dial unix /var/run/docker.sock: connect: permission denied` is a Docker failure pattern reported for developers trying to user on macos switches from the account that installed docker desktop to another account and cannot run any docker commands — socket ownership prevents non-owner users from connecting even with sudo. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #6781 on docker/for-mac documents the multi-user scenario: docker.sock owned by original installer's group. Even running with sudo fails because the socket isn't accessible. Fix involves either enabling default socket in Docker Desktop settings or changing socket group permissions. Category: Docker per mapping. Distinct from already-covered 'cannot connect to daemon'.

## Common causes

- GitHub Issue #6781 on docker/for-mac documents the multi-user scenario: docker.sock owned by original installer's group. Even running with sudo fails because the socket isn't accessible. Fix involves either enabling default socket in Docker Desktop settings or changing socket group permissions. Category: Docker per mapping. Distinct from already-covered 'cannot connect to daemon'.

## Quick fixes

1. Confirm the exact error signature matches `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock%2Fversion": dial unix /var/run/docker.sock: connect: permission denied`.
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

- https://github.com/docker/for-mac/issues/6781
- https://stackoverflow.com/questions/44084846/cannot-connect-to-the-docker-daemon-on-macos

Evidence note: GitHub Issue #6781 on docker/for-mac documents the multi-user scenario: docker.sock owned by original installer's group. Even running with sudo fails because the socket isn't accessible. Fix involves either enabling default socket in Docker Desktop settings or changing socket group permissions. Category: Docker per mapping. Distinct from already-covered 'cannot connect to daemon'.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock%2Fversion": dial unix /var/run/docker.sock: connect: permission denied` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get "http://%2Fvar%2Frun%2Fdocker.sock%2Fversion": dial unix /var/run/docker.sock: connect: permission denied`.
