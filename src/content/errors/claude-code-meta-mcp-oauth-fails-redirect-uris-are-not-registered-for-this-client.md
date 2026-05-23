---
title: "meta-ads MCP OAuth fails with redirect_uris not registered for this client"
description: "Resolve Meta Ads MCP server OAuth configuration error preventing Claude Code from authenticating with Facebook/Meta advertising APIs Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Meta MCP OAuth fails: redirect_uris are not registered for this client"
common_causes:
  - "Found on anthropics/claude-code#59924 (closed May 23, 2026) and #55556 (closed May 6, 2026). Pattern matches multiple third-party MCP connector OAuth failures. Affects developers building marketing automation tools. Category: AI Coding Tools via Claude Code MCP ecosystem."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-23"
published_at: "2026-05-23T21:39:51.494Z"
updated_at: "2026-05-23T21:39:51.494Z"
---

## What this error means

`Meta MCP OAuth fails: redirect_uris are not registered for this client` is a Claude Code failure pattern reported for developers trying to resolve meta ads mcp server oauth configuration error preventing claude code from authenticating with facebook/meta advertising apis. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on anthropics/claude-code#59924 (closed May 23, 2026) and #55556 (closed May 6, 2026). Pattern matches multiple third-party MCP connector OAuth failures. Affects developers building marketing automation tools. Category: AI Coding Tools via Claude Code MCP ecosystem.

## Common causes

- Found on anthropics/claude-code#59924 (closed May 23, 2026) and #55556 (closed May 6, 2026). Pattern matches multiple third-party MCP connector OAuth failures. Affects developers building marketing automation tools. Category: AI Coding Tools via Claude Code MCP ecosystem.

## Quick fixes

1. Confirm the exact error signature matches `Meta MCP OAuth fails: redirect_uris are not registered for this client`.
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

- https://github.com/anthropics/claude-code/issues/59924
- https://github.com/anthropics/claude-code/issues/55556

Evidence note: Found on anthropics/claude-code#59924 (closed May 23, 2026) and #55556 (closed May 6, 2026). Pattern matches multiple third-party MCP connector OAuth failures. Affects developers building marketing automation tools. Category: AI Coding Tools via Claude Code MCP ecosystem.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Meta MCP OAuth fails: redirect_uris are not registered for this client` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Meta MCP OAuth fails: redirect_uris are not registered for this client`.
