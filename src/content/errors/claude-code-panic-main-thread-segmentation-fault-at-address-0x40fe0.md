---
title: "Claude Code Desktop Crashes with Bun Runtime Segfault (Exit Code 3)"
description: "Fix Claude Code desktop crash with segmentation fault in Bun runtime on Windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "panic(main thread): Segmentation fault at address 0x40FE0"
common_causes:
  - "Claude Code desktop app (v2.1.138) on Windows crashes with a segmentation fault inside Bun v1.3.14 runtime, returning exit code 3. The crash occurs before the app can do anything useful. Developers need a workaround or fix to use the tool at all."
  - "GitHub issue #58586 reports Claude Code desktop crashing on Windows 11 with 'panic(main thread): Segmentation fault at address 0x40FE0' in Bun v1.3.14. Exit code 3 on every launch. System: Intel i7-12850HX, 32GB RAM."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code exit code 3 Windows"
  - "Bun runtime crash Claude Code"
updated: "2026-05-13"
published_at: "2026-05-13T08:13:16.216Z"
updated_at: "2026-05-13T08:13:16.216Z"
---

## What this error means

`panic(main thread): Segmentation fault at address 0x40FE0` is a Claude Code failure pattern reported for developers trying to fix claude code desktop crash with segmentation fault in bun runtime on windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58586 reports Claude Code desktop crashing on Windows 11 with 'panic(main thread): Segmentation fault at address 0x40FE0' in Bun v1.3.14. Exit code 3 on every launch. System: Intel i7-12850HX, 32GB RAM.

## Common causes

- Claude Code desktop app (v2.1.138) on Windows crashes with a segmentation fault inside Bun v1.3.14 runtime, returning exit code 3. The crash occurs before the app can do anything useful. Developers need a workaround or fix to use the tool at all.
- GitHub issue #58586 reports Claude Code desktop crashing on Windows 11 with 'panic(main thread): Segmentation fault at address 0x40FE0' in Bun v1.3.14. Exit code 3 on every launch. System: Intel i7-12850HX, 32GB RAM.

## Quick fixes

1. Confirm the exact error signature matches `panic(main thread): Segmentation fault at address 0x40FE0`.
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

- https://github.com/anthropics/claude-code/issues/58586

Evidence note: GitHub issue #58586 reports Claude Code desktop crashing on Windows 11 with 'panic(main thread): Segmentation fault at address 0x40FE0' in Bun v1.3.14. Exit code 3 on every launch. System: Intel i7-12850HX, 32GB RAM.

## Related errors

- Claude Code exit code 3 Windows
- Bun runtime crash Claude Code

## FAQ

### What should I check first?

Start with the exact `panic(main thread): Segmentation fault at address 0x40FE0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `panic(main thread): Segmentation fault at address 0x40FE0`.
