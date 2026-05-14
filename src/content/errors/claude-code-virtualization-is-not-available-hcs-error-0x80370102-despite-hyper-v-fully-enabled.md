---
title: "Claude Code Cowork 'Virtualization is not available' HCS error 0x80370102 on Windows 11 with Hyper-V enabled"
description: "Fix Claude Code Cowork sandbox failing with HCS error 0x80370102 on Windows 11 even when Hyper-V components are fully enabled Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Virtualization is not available — HCS error 0x80370102 despite Hyper-V fully enabled"
common_causes:
  - "Windows developers using Claude Code's Cowork feature hit a wall when the virtualization sandbox fails despite having Hyper-V properly configured. The error message is misleading — users think they've enabled everything but still can't run."
  - "Claude Code Cowork mode on Windows 11 throws HCS error 0x80370102 ('Virtualization is not available') even when all Hyper-V components are verified enabled. Likely a WSL2/Hyper-V configuration edge case."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code Cowork Windows error"
  - "HCS error 0x80370102 Hyper-V"
updated: "2026-05-14"
published_at: "2026-05-14T13:13:19.978Z"
updated_at: "2026-05-14T13:13:19.978Z"
---

## What this error means

`Virtualization is not available — HCS error 0x80370102 despite Hyper-V fully enabled` is a Claude Code failure pattern reported for developers trying to fix claude code cowork sandbox failing with hcs error 0x80370102 on windows 11 even when hyper-v components are fully enabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code Cowork mode on Windows 11 throws HCS error 0x80370102 ('Virtualization is not available') even when all Hyper-V components are verified enabled. Likely a WSL2/Hyper-V configuration edge case.

## Common causes

- Windows developers using Claude Code's Cowork feature hit a wall when the virtualization sandbox fails despite having Hyper-V properly configured. The error message is misleading — users think they've enabled everything but still can't run.
- Claude Code Cowork mode on Windows 11 throws HCS error 0x80370102 ('Virtualization is not available') even when all Hyper-V components are verified enabled. Likely a WSL2/Hyper-V configuration edge case.

## Quick fixes

1. Confirm the exact error signature matches `Virtualization is not available — HCS error 0x80370102 despite Hyper-V fully enabled`.
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

- https://github.com/anthropics/claude-code/issues/59035

Evidence note: Claude Code Cowork mode on Windows 11 throws HCS error 0x80370102 ('Virtualization is not available') even when all Hyper-V components are verified enabled. Likely a WSL2/Hyper-V configuration edge case.

## Related errors

- Claude Code Cowork Windows error
- HCS error 0x80370102 Hyper-V

## FAQ

### What should I check first?

Start with the exact `Virtualization is not available — HCS error 0x80370102 despite Hyper-V fully enabled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Virtualization is not available — HCS error 0x80370102 despite Hyper-V fully enabled`.
