---
title: "Claude Code VSCode Extension Stream Stall — SSE Dies After tool_use, UI Hangs, Work Silently Lost"
description: "Fix Claude Code VSCode stream stalling after tool_use block, UI stuck in thinking state Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "v2.1.141 regression: VSCode stream stalls at ~670 bytes after tool_use; UI hangs in thinking 5 min, work silently lost"
common_causes:
  - "After upgrading Claude Code VSCode extension to v2.1.141, streaming responses die mid-turn at ~650-700 bytes. SSE stream stalls, webview shows 'thinking' for 5 minutes until timeout. Server-side tool_use already modified files on disk, but work is silently lost. Data loss regression in paid tool."
  - "SSE stream sends ~650-700 bytes (tool_use block dispatched), then goes silent. Files modified server-side but assistant output lost. 5-minute idle timeout. Regression in v2.1.141."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code VSCode extension crash"
  - "Claude Code stream timeout"
  - "Claude Code tool execution silent failure"
updated: "2026-05-14"
published_at: "2026-05-14T04:13:18.741Z"
updated_at: "2026-05-14T04:13:18.741Z"
---

## What this error means

`v2.1.141 regression: VSCode stream stalls at ~670 bytes after tool_use; UI hangs in thinking 5 min, work silently lost` is a Claude Code failure pattern reported for developers trying to fix claude code vscode stream stalling after tool_use block, ui stuck in thinking state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

SSE stream sends ~650-700 bytes (tool_use block dispatched), then goes silent. Files modified server-side but assistant output lost. 5-minute idle timeout. Regression in v2.1.141.

## Common causes

- After upgrading Claude Code VSCode extension to v2.1.141, streaming responses die mid-turn at ~650-700 bytes. SSE stream stalls, webview shows 'thinking' for 5 minutes until timeout. Server-side tool_use already modified files on disk, but work is silently lost. Data loss regression in paid tool.
- SSE stream sends ~650-700 bytes (tool_use block dispatched), then goes silent. Files modified server-side but assistant output lost. 5-minute idle timeout. Regression in v2.1.141.

## Quick fixes

1. Confirm the exact error signature matches `v2.1.141 regression: VSCode stream stalls at ~670 bytes after tool_use; UI hangs in thinking 5 min, work silently lost`.
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

- https://github.com/anthropics/claude-code/issues/58916

Evidence note: SSE stream sends ~650-700 bytes (tool_use block dispatched), then goes silent. Files modified server-side but assistant output lost. 5-minute idle timeout. Regression in v2.1.141.

## Related errors

- Claude Code VSCode extension crash
- Claude Code stream timeout
- Claude Code tool execution silent failure

## FAQ

### What should I check first?

Start with the exact `v2.1.141 regression: VSCode stream stalls at ~670 bytes after tool_use; UI hangs in thinking 5 min, work silently lost` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `v2.1.141 regression: VSCode stream stalls at ~670 bytes after tool_use; UI hangs in thinking 5 min, work silently lost`.
