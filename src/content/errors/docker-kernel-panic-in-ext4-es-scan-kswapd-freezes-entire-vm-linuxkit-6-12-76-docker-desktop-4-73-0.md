---
title: "Docker Desktop 4.73.0 Kernel Panic Freezes Entire LinuxKit VM"
description: "Latest Docker Desktop (4.73.0) causes complete kernel panic freezing the embedded LinuxKit VM; affects all containers running on Mac; critical production blocker Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Kernel panic in ext4_es_scan / kswapd freezes entire VM (linuxkit 6.12.76 / Docker Desktop 4.73.0)"
common_causes:
  - "GitHub issue #7877 on docker/for-mac opened May 17, 2026 by nosenuggetz. Only 3 new issues found in April-May 2026 window on docker/for-mac — this is one of the most severe recent reports. Kernel panic in ext4 filesystem scanner and swap daemon freezes the entire WSL/LinuxKit VM layer. Affects enterprise Docker Desktop license users. Category: Docker (direct mapping)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-21"
published_at: "2026-05-21T08:39:43.927Z"
updated_at: "2026-05-21T08:39:43.927Z"
---

## What this error means

`Kernel panic in ext4_es_scan / kswapd freezes entire VM (linuxkit 6.12.76 / Docker Desktop 4.73.0)` is a Docker failure pattern reported for developers trying to latest docker desktop (4.73.0) causes complete kernel panic freezing the embedded linuxkit vm; affects all containers running on mac; critical production blocker. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #7877 on docker/for-mac opened May 17, 2026 by nosenuggetz. Only 3 new issues found in April-May 2026 window on docker/for-mac — this is one of the most severe recent reports. Kernel panic in ext4 filesystem scanner and swap daemon freezes the entire WSL/LinuxKit VM layer. Affects enterprise Docker Desktop license users. Category: Docker (direct mapping).

## Common causes

- GitHub issue #7877 on docker/for-mac opened May 17, 2026 by nosenuggetz. Only 3 new issues found in April-May 2026 window on docker/for-mac — this is one of the most severe recent reports. Kernel panic in ext4 filesystem scanner and swap daemon freezes the entire WSL/LinuxKit VM layer. Affects enterprise Docker Desktop license users. Category: Docker (direct mapping).

## Quick fixes

1. Confirm the exact error signature matches `Kernel panic in ext4_es_scan / kswapd freezes entire VM (linuxkit 6.12.76 / Docker Desktop 4.73.0)`.
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

Evidence note: GitHub issue #7877 on docker/for-mac opened May 17, 2026 by nosenuggetz. Only 3 new issues found in April-May 2026 window on docker/for-mac — this is one of the most severe recent reports. Kernel panic in ext4 filesystem scanner and swap daemon freezes the entire WSL/LinuxKit VM layer. Affects enterprise Docker Desktop license users. Category: Docker (direct mapping).

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Kernel panic in ext4_es_scan / kswapd freezes entire VM (linuxkit 6.12.76 / Docker Desktop 4.73.0)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Kernel panic in ext4_es_scan / kswapd freezes entire VM (linuxkit 6.12.76 / Docker Desktop 4.73.0)`.
