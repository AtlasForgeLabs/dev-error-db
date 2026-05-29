---
title: "VS Code extension 2.0.5.0: Invalid API key loop and black screen even after successful Anthropic Console OAuth"
description: "Fix VS Code extension authentication loop where OAuth succeeds in browser but extension still rejects credentials Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Invalid API key · Please run /login or goes completely black after entering API key in Claude VS Code extension"
common_causes:
  - "GitHub Issue #12204 on anthropics/claude-code: Claude VS Code extension v2.0.5.0 enters Invalid API key → /login loop or goes completely black. Happens both after successful Anthropic Console OAuth and manual API key setup. Distinct from #8002 which is CLI-only. This affects IDE integration specifically. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-29"
published_at: "2026-05-29T20:43:27.250Z"
updated_at: "2026-05-29T20:43:27.250Z"
---

## What this error means

`Invalid API key · Please run /login or goes completely black after entering API key in Claude VS Code extension` is a Claude Code failure pattern reported for developers trying to fix vs code extension authentication loop where oauth succeeds in browser but extension still rejects credentials. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #12204 on anthropics/claude-code: Claude VS Code extension v2.0.5.0 enters Invalid API key → /login loop or goes completely black. Happens both after successful Anthropic Console OAuth and manual API key setup. Distinct from #8002 which is CLI-only. This affects IDE integration specifically. Category: AI Coding Tools.

## Common causes

- GitHub Issue #12204 on anthropics/claude-code: Claude VS Code extension v2.0.5.0 enters Invalid API key → /login loop or goes completely black. Happens both after successful Anthropic Console OAuth and manual API key setup. Distinct from #8002 which is CLI-only. This affects IDE integration specifically. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `Invalid API key · Please run /login or goes completely black after entering API key in Claude VS Code extension`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/12204

Evidence note: GitHub Issue #12204 on anthropics/claude-code: Claude VS Code extension v2.0.5.0 enters Invalid API key → /login loop or goes completely black. Happens both after successful Anthropic Console OAuth and manual API key setup. Distinct from #8002 which is CLI-only. This affects IDE integration specifically. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Invalid API key · Please run /login or goes completely black after entering API key in Claude VS Code extension` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Invalid API key · Please run /login or goes completely black after entering API key in Claude VS Code extension`.
