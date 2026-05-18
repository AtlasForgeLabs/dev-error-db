---
title: "Claude Code VSCode extension sdk_stream_ended_no_result stream inconsistency"
description: "Developer sees broken stream handling in Claude Code VS Code extension — webview thinks stream ended no result but SDK host still receiving chunks, causing unhandled UI errors Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "VSCode Webview emits sdk_stream_ended_no_result while extension-host SDK still receives stream chunks; UI shows \"Unhandled case: [object Object]\""
common_causes:
  - "GitHub issue #60140 on anthropics/claude-code (whrazer, May 18 2026). Affects thousands of paid Claude Code users with VSCode integration. Stream corruption causing bad UX. Category: AI Coding Tools per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-18"
published_at: "2026-05-18T07:37:12.390Z"
updated_at: "2026-05-18T07:37:12.390Z"
---

## What this error means

`VSCode Webview emits sdk_stream_ended_no_result while extension-host SDK still receives stream chunks; UI shows "Unhandled case: [object Object]"` is a Claude Code failure pattern reported for developers trying to developer sees broken stream handling in claude code vs code extension — webview thinks stream ended no result but sdk host still receiving chunks, causing unhandled ui errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #60140 on anthropics/claude-code (whrazer, May 18 2026). Affects thousands of paid Claude Code users with VSCode integration. Stream corruption causing bad UX. Category: AI Coding Tools per mapping rules.

## Common causes

- GitHub issue #60140 on anthropics/claude-code (whrazer, May 18 2026). Affects thousands of paid Claude Code users with VSCode integration. Stream corruption causing bad UX. Category: AI Coding Tools per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `VSCode Webview emits sdk_stream_ended_no_result while extension-host SDK still receives stream chunks; UI shows "Unhandled case: [object Object]"`.
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

- https://github.com/anthropics/claude-code/issues/60140

Evidence note: GitHub issue #60140 on anthropics/claude-code (whrazer, May 18 2026). Affects thousands of paid Claude Code users with VSCode integration. Stream corruption causing bad UX. Category: AI Coding Tools per mapping rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `VSCode Webview emits sdk_stream_ended_no_result while extension-host SDK still receives stream chunks; UI shows "Unhandled case: [object Object]"` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `VSCode Webview emits sdk_stream_ended_no_result while extension-host SDK still receives stream chunks; UI shows "Unhandled case: [object Object]"`.
