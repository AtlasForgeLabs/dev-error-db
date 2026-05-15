---
title: "Claude Code Causes macOS to Terminate Sessions Due to Excessive VM Disk Writes (34 GB/day)"
description: "Fix Claude desktop app consuming excessive disk space on macOS Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Claude app causes macOS to terminate sessions due to excessive VM disk writes (34 GB in one day)"
common_causes:
  - "Claude desktop app writes 34 GB+ to VM disk in a single day, causing macOS to terminate the process three times. Critical resource leak on MacBook Air M3 with 16GB RAM."
  - "macOS 26.3.1 terminates Claude desktop app (PID 74115) three times on 2026-05-13 for exceeding OS disk write budget. Accumulated 34 GB writes with avg rate 5,428 KB/sec. Affects MacBook Air M3 16GB."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code excessive memory usage"
  - "Claude desktop app not responding"
updated: "2026-05-15"
published_at: "2026-05-15T10:13:22.352Z"
updated_at: "2026-05-15T10:13:22.352Z"
---

## What this error means

`Claude app causes macOS to terminate sessions due to excessive VM disk writes (34 GB in one day)` is a Claude Code failure pattern reported for developers trying to fix claude desktop app consuming excessive disk space on macos. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

macOS 26.3.1 terminates Claude desktop app (PID 74115) three times on 2026-05-13 for exceeding OS disk write budget. Accumulated 34 GB writes with avg rate 5,428 KB/sec. Affects MacBook Air M3 16GB.

## Common causes

- Claude desktop app writes 34 GB+ to VM disk in a single day, causing macOS to terminate the process three times. Critical resource leak on MacBook Air M3 with 16GB RAM.
- macOS 26.3.1 terminates Claude desktop app (PID 74115) three times on 2026-05-13 for exceeding OS disk write budget. Accumulated 34 GB writes with avg rate 5,428 KB/sec. Affects MacBook Air M3 16GB.

## Quick fixes

1. Confirm the exact error signature matches `Claude app causes macOS to terminate sessions due to excessive VM disk writes (34 GB in one day)`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59002

Evidence note: macOS 26.3.1 terminates Claude desktop app (PID 74115) three times on 2026-05-13 for exceeding OS disk write budget. Accumulated 34 GB writes with avg rate 5,428 KB/sec. Affects MacBook Air M3 16GB.

## Related errors

- Claude Code excessive memory usage
- Claude desktop app not responding

## FAQ

### What should I check first?

Start with the exact `Claude app causes macOS to terminate sessions due to excessive VM disk writes (34 GB in one day)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude app causes macOS to terminate sessions due to excessive VM disk writes (34 GB in one day)`.
