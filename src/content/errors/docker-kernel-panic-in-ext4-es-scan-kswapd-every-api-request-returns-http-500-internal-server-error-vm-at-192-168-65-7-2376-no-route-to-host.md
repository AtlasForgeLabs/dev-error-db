---
title: "Docker Desktop kernel panic freezes entire VM — HTTP 500 from Docker daemon via linuxkit crash"
description: "Docker Desktop for Mac 启动后因内核 panic 导致整个 LinuxKit VM 崩溃冻结，Docker daemon 不可用，只能重启解决。需要内核层面的修复或变通方案。 Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Kernel panic in ext4_es_scan / kswapd; every API request returns HTTP 500 Internal Server Error; VM at 192.168.65.7:2376 no route to host"
common_causes:
  - "来自 docker/for-mac#7877（Open Issue, updated 2026-05-17）。Docker Desktop 4.73.0 / linuxkit 6.12.76 下内存回收期间内核 panic，容器全挂、daemon 不响应。企业用户高频场景。Category mapping: Docker Desktop runtime crash → Docker。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-26"
published_at: "2026-05-26T18:43:17.604Z"
updated_at: "2026-05-26T18:43:17.604Z"
---

## What this error means

`Kernel panic in ext4_es_scan / kswapd; every API request returns HTTP 500 Internal Server Error; VM at 192.168.65.7:2376 no route to host` is a Docker failure pattern reported for developers trying to docker desktop for mac 启动后因内核 panic 导致整个 linuxkit vm 崩溃冻结，docker daemon 不可用，只能重启解决。需要内核层面的修复或变通方案。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

来自 docker/for-mac#7877（Open Issue, updated 2026-05-17）。Docker Desktop 4.73.0 / linuxkit 6.12.76 下内存回收期间内核 panic，容器全挂、daemon 不响应。企业用户高频场景。Category mapping: Docker Desktop runtime crash → Docker。

## Common causes

- 来自 docker/for-mac#7877（Open Issue, updated 2026-05-17）。Docker Desktop 4.73.0 / linuxkit 6.12.76 下内存回收期间内核 panic，容器全挂、daemon 不响应。企业用户高频场景。Category mapping: Docker Desktop runtime crash → Docker。

## Quick fixes

1. Confirm the exact error signature matches `Kernel panic in ext4_es_scan / kswapd; every API request returns HTTP 500 Internal Server Error; VM at 192.168.65.7:2376 no route to host`.
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

- https://github.com/docker/for-mac/issues/7877

Evidence note: 来自 docker/for-mac#7877（Open Issue, updated 2026-05-17）。Docker Desktop 4.73.0 / linuxkit 6.12.76 下内存回收期间内核 panic，容器全挂、daemon 不响应。企业用户高频场景。Category mapping: Docker Desktop runtime crash → Docker。

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Kernel panic in ext4_es_scan / kswapd; every API request returns HTTP 500 Internal Server Error; VM at 192.168.65.7:2376 no route to host` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Kernel panic in ext4_es_scan / kswapd; every API request returns HTTP 500 Internal Server Error; VM at 192.168.65.7:2376 no route to host`.
