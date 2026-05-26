---
title: "Claude Code Desktop CI monitoring panel stuck on 'unavailable' after prerequisites met"
description: "Fix Claude Desktop's CI monitoring panel that persistently shows unavailable despite all prerequisites being verified. Also /web-setup fails with login redirect to claude.ai/code. Windows UWP installation affected. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "CI checks unavailable. Check that gh is installed and authenticated."
common_causes:
  - "Real issue from anthropics/claude-code#62620 filed 2026-05-26. Affects Windows 11 Pro Claude Desktop 1.8555.2.0 via Windows Store/UWP. Two related errors: CI panel stuck + GitHub Auth flow broken. High commercial value for teams using Claude Code's built-in CI monitoring. Category: AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T23:43:18.320Z"
updated_at: "2026-05-26T23:43:18.320Z"
---

## What this error means

`CI checks unavailable. Check that gh is installed and authenticated.` is a Claude Code failure pattern reported for developers trying to fix claude desktop's ci monitoring panel that persistently shows unavailable despite all prerequisites being verified. also /web-setup fails with login redirect to claude.ai/code. windows uwp installation affected.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Real issue from anthropics/claude-code#62620 filed 2026-05-26. Affects Windows 11 Pro Claude Desktop 1.8555.2.0 via Windows Store/UWP. Two related errors: CI panel stuck + GitHub Auth flow broken. High commercial value for teams using Claude Code's built-in CI monitoring. Category: AI Coding Tools.

## Common causes

- Real issue from anthropics/claude-code#62620 filed 2026-05-26. Affects Windows 11 Pro Claude Desktop 1.8555.2.0 via Windows Store/UWP. Two related errors: CI panel stuck + GitHub Auth flow broken. High commercial value for teams using Claude Code's built-in CI monitoring. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `CI checks unavailable. Check that gh is installed and authenticated.`.
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

- https://github.com/anthropics/claude-code/issues/62620

Evidence note: Real issue from anthropics/claude-code#62620 filed 2026-05-26. Affects Windows 11 Pro Claude Desktop 1.8555.2.0 via Windows Store/UWP. Two related errors: CI panel stuck + GitHub Auth flow broken. High commercial value for teams using Claude Code's built-in CI monitoring. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `CI checks unavailable. Check that gh is installed and authenticated.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `CI checks unavailable. Check that gh is installed and authenticated.`.
