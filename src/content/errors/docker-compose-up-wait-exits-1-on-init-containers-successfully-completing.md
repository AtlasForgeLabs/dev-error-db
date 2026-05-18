---
title: "Docker Compose up --wait Exits 1 Despite Init Containers Completing Successfully"
description: "Docker Compose 中使用 --wait 参数等待初始化容器完成时，即使初始化容器成功运行完毕也返回退出码 1，CI/CD 流水线误判部署失败 Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "compose up --wait exits 1 on init containers successfully completing"
common_causes:
  - "GitHub Issue #10596 on docker/compose (updated 2026-05-12). Bug where init containers completing successfully still result in exit code 1. Affects production CI/CD pipelines using Docker Compose for orchestration with health checks. Clear commercial impact through false deployment failures."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-18"
published_at: "2026-05-18T02:37:11.757Z"
updated_at: "2026-05-18T02:37:11.757Z"
---

## What this error means

`compose up --wait exits 1 on init containers successfully completing` is a Docker failure pattern reported for developers trying to docker compose 中使用 --wait 参数等待初始化容器完成时，即使初始化容器成功运行完毕也返回退出码 1，ci/cd 流水线误判部署失败. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #10596 on docker/compose (updated 2026-05-12). Bug where init containers completing successfully still result in exit code 1. Affects production CI/CD pipelines using Docker Compose for orchestration with health checks. Clear commercial impact through false deployment failures.

## Common causes

- GitHub Issue #10596 on docker/compose (updated 2026-05-12). Bug where init containers completing successfully still result in exit code 1. Affects production CI/CD pipelines using Docker Compose for orchestration with health checks. Clear commercial impact through false deployment failures.

## Quick fixes

1. Confirm the exact error signature matches `compose up --wait exits 1 on init containers successfully completing`.
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

- https://github.com/docker/compose/issues/10596

Evidence note: GitHub Issue #10596 on docker/compose (updated 2026-05-12). Bug where init containers completing successfully still result in exit code 1. Affects production CI/CD pipelines using Docker Compose for orchestration with health checks. Clear commercial impact through false deployment failures.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `compose up --wait exits 1 on init containers successfully completing` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `compose up --wait exits 1 on init containers successfully completing`.
