---
title: "Claude Code Remote Routine MCP OAuth Tokens Empty on Fresh Container"
description: "Fix Claude Code Remote Routine sessions where MCP OAuth servers (Slack, Notion, Google-Calendar) start every session with empty access tokens, causing auth prompts and OAuth client registration rate limit failures Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth access tokens empty on every fresh container; accessToken: \"\" in ~/.claude/.credentials.json; client registration rate limit error on re-auth"
common_causes:
  - "GitHub issue #61231 (anthropics/claude-code) describes regression where configured MCP OAuth servers start every ephemeral container session with empty accessToken strings. Each fresh container attempts new dynamic OAuth client registration, exhausting per-client registration limit. Works in previous versions, confirmed regression. Category: AI Coding Tools (Claude Code auth/OAuth issue)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T07:44:29.271Z"
updated_at: "2026-06-02T07:44:29.271Z"
---

## What this error means

`MCP OAuth access tokens empty on every fresh container; accessToken: "" in ~/.claude/.credentials.json; client registration rate limit error on re-auth` is a Claude Code failure pattern reported for developers trying to fix claude code remote routine sessions where mcp oauth servers (slack, notion, google-calendar) start every session with empty access tokens, causing auth prompts and oauth client registration rate limit failures. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61231 (anthropics/claude-code) describes regression where configured MCP OAuth servers start every ephemeral container session with empty accessToken strings. Each fresh container attempts new dynamic OAuth client registration, exhausting per-client registration limit. Works in previous versions, confirmed regression. Category: AI Coding Tools (Claude Code auth/OAuth issue).

## Common causes

- GitHub issue #61231 (anthropics/claude-code) describes regression where configured MCP OAuth servers start every ephemeral container session with empty accessToken strings. Each fresh container attempts new dynamic OAuth client registration, exhausting per-client registration limit. Works in previous versions, confirmed regression. Category: AI Coding Tools (Claude Code auth/OAuth issue).

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth access tokens empty on every fresh container; accessToken: "" in ~/.claude/.credentials.json; client registration rate limit error on re-auth`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/claude-code/issues/61231

Evidence note: GitHub issue #61231 (anthropics/claude-code) describes regression where configured MCP OAuth servers start every ephemeral container session with empty accessToken strings. Each fresh container attempts new dynamic OAuth client registration, exhausting per-client registration limit. Works in previous versions, confirmed regression. Category: AI Coding Tools (Claude Code auth/OAuth issue).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth access tokens empty on every fresh container; accessToken: "" in ~/.claude/.credentials.json; client registration rate limit error on re-auth` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth access tokens empty on every fresh container; accessToken: "" in ~/.claude/.credentials.json; client registration rate limit error on re-auth`.
