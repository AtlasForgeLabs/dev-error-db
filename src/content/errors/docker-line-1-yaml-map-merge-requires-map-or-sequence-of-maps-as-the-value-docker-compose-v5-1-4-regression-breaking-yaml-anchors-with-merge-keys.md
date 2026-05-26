---
title: "Docker Compose v5.1.4 YAML map merge parsing error — regression breaking YAML anchors"
description: "更新到 Docker Desktop 最新版本的 Docker Compose v5.1.4 后，含 YAML anchor (&build-base) 和 merge key (::*) 的 docker-compose.yml 文件在 docker compose up 时解析失败，回退到 v5.1.2 可解决 Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "line 1: yaml: map merge requires map or sequence of maps as the value — Docker Compose v5.1.4 regression breaking YAML anchors with merge keys (::*)"
common_causes:
  - "Source: github.com/docker/compose/issues/13812 (P0 tech, very recent). Regression in v5.1.4 affecting standard YAML merge syntax used in enterprise compose files. Category mapping: Docker → Docker Compose (paid Docker Desktop component)。Duplicate check: 'Docker Compose port allocated' exists but this is a completely different error (YAML parsing vs port conflict)。Clear actionable workaround (downgrade to 5.1.2)。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-26"
published_at: "2026-05-26T21:43:18.050Z"
updated_at: "2026-05-26T21:43:18.050Z"
---

## What this error means

`line 1: yaml: map merge requires map or sequence of maps as the value — Docker Compose v5.1.4 regression breaking YAML anchors with merge keys (::*)` is a Docker failure pattern reported for developers trying to 更新到 docker desktop 最新版本的 docker compose v5.1.4 后，含 yaml anchor (&build-base) 和 merge key (::*) 的 docker-compose.yml 文件在 docker compose up 时解析失败，回退到 v5.1.2 可解决. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/docker/compose/issues/13812 (P0 tech, very recent). Regression in v5.1.4 affecting standard YAML merge syntax used in enterprise compose files. Category mapping: Docker → Docker Compose (paid Docker Desktop component)。Duplicate check: 'Docker Compose port allocated' exists but this is a completely different error (YAML parsing vs port conflict)。Clear actionable workaround (downgrade to 5.1.2)。

## Common causes

- Source: github.com/docker/compose/issues/13812 (P0 tech, very recent). Regression in v5.1.4 affecting standard YAML merge syntax used in enterprise compose files. Category mapping: Docker → Docker Compose (paid Docker Desktop component)。Duplicate check: 'Docker Compose port allocated' exists but this is a completely different error (YAML parsing vs port conflict)。Clear actionable workaround (downgrade to 5.1.2)。

## Quick fixes

1. Confirm the exact error signature matches `line 1: yaml: map merge requires map or sequence of maps as the value — Docker Compose v5.1.4 regression breaking YAML anchors with merge keys (::*)`.
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

- https://github.com/docker/compose/issues/13812

Evidence note: Source: github.com/docker/compose/issues/13812 (P0 tech, very recent). Regression in v5.1.4 affecting standard YAML merge syntax used in enterprise compose files. Category mapping: Docker → Docker Compose (paid Docker Desktop component)。Duplicate check: 'Docker Compose port allocated' exists but this is a completely different error (YAML parsing vs port conflict)。Clear actionable workaround (downgrade to 5.1.2)。

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `line 1: yaml: map merge requires map or sequence of maps as the value — Docker Compose v5.1.4 regression breaking YAML anchors with merge keys (::*)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `line 1: yaml: map merge requires map or sequence of maps as the value — Docker Compose v5.1.4 regression breaking YAML anchors with merge keys (::*)`.
