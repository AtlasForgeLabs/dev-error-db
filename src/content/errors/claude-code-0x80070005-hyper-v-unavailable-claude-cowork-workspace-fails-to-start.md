---
title: "Claude Code Cowork workspace fails to start on Windows 11 Home — Hyper-V Unavailable (0x80070005)"
description: "Fix Claude Code Cowork workspace start failure on Windows 11 Home due to Hyper-V unavailability Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "0x80070005 — Hyper-V Unavailable, Claude Cowork Workspace Fails to Start"
common_causes:
  - "Windows 11 Home doesn't include Hyper-V by default, causing Claude Code Cowork workspace to fail with cryptic 0x80070005 error"
  - "Issue #59320 filed 2026-05-15: Claude Code Cowork feature requires Hyper-V for workspace isolation. Windows 11 Home doesn't ship Hyper-V, causing 0x80070005 access denied error. Users on Home edition cannot use Cowork without Pro/Enterprise upgrade."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Cowork Windows compatibility"
  - "Hyper-V requirement for Claude Code workspace"
updated: "2026-05-15"
published_at: "2026-05-15T09:13:22.261Z"
updated_at: "2026-05-15T09:13:22.261Z"
---

## What this error means

`0x80070005 — Hyper-V Unavailable, Claude Cowork Workspace Fails to Start` is a Claude Code failure pattern reported for developers trying to fix claude code cowork workspace start failure on windows 11 home due to hyper-v unavailability. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #59320 filed 2026-05-15: Claude Code Cowork feature requires Hyper-V for workspace isolation. Windows 11 Home doesn't ship Hyper-V, causing 0x80070005 access denied error. Users on Home edition cannot use Cowork without Pro/Enterprise upgrade.

## Common causes

- Windows 11 Home doesn't include Hyper-V by default, causing Claude Code Cowork workspace to fail with cryptic 0x80070005 error
- Issue #59320 filed 2026-05-15: Claude Code Cowork feature requires Hyper-V for workspace isolation. Windows 11 Home doesn't ship Hyper-V, causing 0x80070005 access denied error. Users on Home edition cannot use Cowork without Pro/Enterprise upgrade.

## Quick fixes

1. Confirm the exact error signature matches `0x80070005 — Hyper-V Unavailable, Claude Cowork Workspace Fails to Start`.
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

- https://github.com/anthropics/claude-code/issues/59320

Evidence note: Issue #59320 filed 2026-05-15: Claude Code Cowork feature requires Hyper-V for workspace isolation. Windows 11 Home doesn't ship Hyper-V, causing 0x80070005 access denied error. Users on Home edition cannot use Cowork without Pro/Enterprise upgrade.

## Related errors

- Claude Code Cowork Windows compatibility
- Hyper-V requirement for Claude Code workspace

## FAQ

### What should I check first?

Start with the exact `0x80070005 — Hyper-V Unavailable, Claude Cowork Workspace Fails to Start` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `0x80070005 — Hyper-V Unavailable, Claude Cowork Workspace Fails to Start`.
