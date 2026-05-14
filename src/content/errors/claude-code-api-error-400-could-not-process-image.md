---
title: "Claude Code oversized screenshots crash agent sessions with Could not process image"
description: "Fix Claude Code 400 Could not process image crash on valid screenshots Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 400 Could not process image"
common_causes:
  - "Valid PNG screenshots captured by agents (e.g., via adb screencap) are rejected by the multimodal API with 400 error. The entire agent task crashes ungracefully, partial work is lost, and the agent's result is replaced by the error string. No client-side resize or graceful degradation."
  - "Valid 1080x2640 PNG screenshots (~250KB) from adb shell screencap cause 400 error when loaded into context. Agent sessions crash, tool_uses counter continues but output replaced by error. Related to issues #47976 and #55767 but different root cause."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code image size limit exceeded"
  - "Anthropic API multimodal image validation error"
updated: "2026-05-14"
published_at: "2026-05-14T16:13:20.266Z"
updated_at: "2026-05-14T16:13:20.266Z"
---

## What this error means

`API Error: 400 Could not process image` is a Claude Code failure pattern reported for developers trying to fix claude code 400 could not process image crash on valid screenshots. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Valid 1080x2640 PNG screenshots (~250KB) from adb shell screencap cause 400 error when loaded into context. Agent sessions crash, tool_uses counter continues but output replaced by error. Related to issues #47976 and #55767 but different root cause.

## Common causes

- Valid PNG screenshots captured by agents (e.g., via adb screencap) are rejected by the multimodal API with 400 error. The entire agent task crashes ungracefully, partial work is lost, and the agent's result is replaced by the error string. No client-side resize or graceful degradation.
- Valid 1080x2640 PNG screenshots (~250KB) from adb shell screencap cause 400 error when loaded into context. Agent sessions crash, tool_uses counter continues but output replaced by error. Related to issues #47976 and #55767 but different root cause.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 Could not process image`.
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

- https://github.com/anthropics/claude-code/issues/59095

Evidence note: Valid 1080x2640 PNG screenshots (~250KB) from adb shell screencap cause 400 error when loaded into context. Agent sessions crash, tool_uses counter continues but output replaced by error. Related to issues #47976 and #55767 but different root cause.

## Related errors

- Claude Code image size limit exceeded
- Anthropic API multimodal image validation error

## FAQ

### What should I check first?

Start with the exact `API Error: 400 Could not process image` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 Could not process image`.
