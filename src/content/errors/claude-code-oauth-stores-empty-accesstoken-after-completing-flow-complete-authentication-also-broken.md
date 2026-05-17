---
title: "Slack MCP OAuth stores empty accessToken after completing flow; complete_authentication also broken"
description: "Fix Slack MCP OAuth integration in Claude Code where accessToken is stored as empty string despite successful OAuth completion, blocking authenticated Slack usage Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "OAuth stores empty accessToken after completing flow; complete_authentication also broken"
common_causes:
  - "GitHub issue #59725 on anthropics/claude-code, opened May 16 2026. area:auth + area:mcp labels. Verified real source: https://github.com/anthropics/claude-code/issues/59725. Category mapped via strict rules: Claude Code → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T21:37:11.080Z"
updated_at: "2026-05-17T21:37:11.080Z"
---

## What this error means

`OAuth stores empty accessToken after completing flow; complete_authentication also broken` is a Claude Code failure pattern reported for developers trying to fix slack mcp oauth integration in claude code where accesstoken is stored as empty string despite successful oauth completion, blocking authenticated slack usage. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #59725 on anthropics/claude-code, opened May 16 2026. area:auth + area:mcp labels. Verified real source: https://github.com/anthropics/claude-code/issues/59725. Category mapped via strict rules: Claude Code → AI Coding Tools.

## Common causes

- GitHub issue #59725 on anthropics/claude-code, opened May 16 2026. area:auth + area:mcp labels. Verified real source: https://github.com/anthropics/claude-code/issues/59725. Category mapped via strict rules: Claude Code → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `OAuth stores empty accessToken after completing flow; complete_authentication also broken`.
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

- https://github.com/anthropics/claude-code/issues/59725

Evidence note: GitHub issue #59725 on anthropics/claude-code, opened May 16 2026. area:auth + area:mcp labels. Verified real source: https://github.com/anthropics/claude-code/issues/59725. Category mapped via strict rules: Claude Code → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `OAuth stores empty accessToken after completing flow; complete_authentication also broken` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth stores empty accessToken after completing flow; complete_authentication also broken`.
