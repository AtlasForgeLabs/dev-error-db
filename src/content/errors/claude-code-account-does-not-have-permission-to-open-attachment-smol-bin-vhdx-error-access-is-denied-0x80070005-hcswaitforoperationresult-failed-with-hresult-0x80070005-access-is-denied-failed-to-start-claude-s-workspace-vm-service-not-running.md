---
title: "Claude Desktop Cowork Fails to Start Workspace on Windows — VHDX Permission Denied 0x80070005"
description: "Fix Claude Code Cowork VM startup failing on Windows due to Hyper-V VHDX disk permission denial when attaching virtual disks Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Account does not have permission to open attachment 'smol-bin.vhdx'. Error: Access is denied. (0x80070005); HcsWaitForOperationResult failed with HRESULT 0x80070005 (Access is denied); Failed to start Claude's workspace. VM service not running."
common_causes:
  - "GitHub issue #61559 in anthropics/claude-code shows CoworkVMService successfully creates the VM session but crashes when Hyper-V attempts to attach VHDX files (smol-bin.vhdx, rootfs.vhdx). User confirmed Hyper-V components enabled, reinstalled multiple times, permissions set correctly. Error 0x80070005 is a classic Windows ACL/Hyper-V isolation issue on new builds. Affects paying Claude Code/Claude Desktop users unable to use Cowork features. Category mapping: AI Coding Tools (Claude Code is an AI coding assistant tool)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-22"
published_at: "2026-05-22T21:39:48.605Z"
updated_at: "2026-05-22T21:39:48.605Z"
---

## What this error means

`Account does not have permission to open attachment 'smol-bin.vhdx'. Error: Access is denied. (0x80070005); HcsWaitForOperationResult failed with HRESULT 0x80070005 (Access is denied); Failed to start Claude's workspace. VM service not running.` is a Claude Code failure pattern reported for developers trying to fix claude code cowork vm startup failing on windows due to hyper-v vhdx disk permission denial when attaching virtual disks. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61559 in anthropics/claude-code shows CoworkVMService successfully creates the VM session but crashes when Hyper-V attempts to attach VHDX files (smol-bin.vhdx, rootfs.vhdx). User confirmed Hyper-V components enabled, reinstalled multiple times, permissions set correctly. Error 0x80070005 is a classic Windows ACL/Hyper-V isolation issue on new builds. Affects paying Claude Code/Claude Desktop users unable to use Cowork features. Category mapping: AI Coding Tools (Claude Code is an AI coding assistant tool).

## Common causes

- GitHub issue #61559 in anthropics/claude-code shows CoworkVMService successfully creates the VM session but crashes when Hyper-V attempts to attach VHDX files (smol-bin.vhdx, rootfs.vhdx). User confirmed Hyper-V components enabled, reinstalled multiple times, permissions set correctly. Error 0x80070005 is a classic Windows ACL/Hyper-V isolation issue on new builds. Affects paying Claude Code/Claude Desktop users unable to use Cowork features. Category mapping: AI Coding Tools (Claude Code is an AI coding assistant tool).

## Quick fixes

1. Confirm the exact error signature matches `Account does not have permission to open attachment 'smol-bin.vhdx'. Error: Access is denied. (0x80070005); HcsWaitForOperationResult failed with HRESULT 0x80070005 (Access is denied); Failed to start Claude's workspace. VM service not running.`.
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

- https://github.com/anthropics/claude-code/issues/61559

Evidence note: GitHub issue #61559 in anthropics/claude-code shows CoworkVMService successfully creates the VM session but crashes when Hyper-V attempts to attach VHDX files (smol-bin.vhdx, rootfs.vhdx). User confirmed Hyper-V components enabled, reinstalled multiple times, permissions set correctly. Error 0x80070005 is a classic Windows ACL/Hyper-V isolation issue on new builds. Affects paying Claude Code/Claude Desktop users unable to use Cowork features. Category mapping: AI Coding Tools (Claude Code is an AI coding assistant tool).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Account does not have permission to open attachment 'smol-bin.vhdx'. Error: Access is denied. (0x80070005); HcsWaitForOperationResult failed with HRESULT 0x80070005 (Access is denied); Failed to start Claude's workspace. VM service not running.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Account does not have permission to open attachment 'smol-bin.vhdx'. Error: Access is denied. (0x80070005); HcsWaitForOperationResult failed with HRESULT 0x80070005 (Access is denied); Failed to start Claude's workspace. VM service not running.`.
