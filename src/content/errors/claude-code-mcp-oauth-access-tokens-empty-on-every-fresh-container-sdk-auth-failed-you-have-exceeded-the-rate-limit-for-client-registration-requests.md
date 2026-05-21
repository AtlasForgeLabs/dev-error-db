---
title: "Claude Code Remote Routines MCP OAuth Access Tokens Empty on Fresh Containers Causing Client Registration Rate Limit"
description: "Fix regression where Claude Code Remote Routine sessions start with blank MCP OAuth accessToken values, triggering repeated dynamic OAuth client registrations that exhaust per-client registration rate limits Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "MCP OAuth access tokens empty on every fresh container — SDK auth failed: You have exceeded the rate limit for client registration requests"
common_causes:
  - "GitHub issue #61231 on anthropics/claude-code: CLAUDE_CODE_REMOTE_SKIP_SETTINGS_SYNC=1 prevents credential sync into ephemeral containers at session start. All configured MCP OAuth servers (Slack, Notion, Google-Calendar) show accessToken=\"\" leading to rate-limit-blocked re-registration attempts. Regression introduced in build release-b5ac58d65-ext. Team-plan users relying on scheduled routines are directly affected. Clear reproduction steps with error logs."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T18:39:45.261Z"
updated_at: "2026-05-21T18:39:45.261Z"
---

## What this error means

`MCP OAuth access tokens empty on every fresh container — SDK auth failed: You have exceeded the rate limit for client registration requests` is a Claude Code failure pattern reported for developers trying to fix regression where claude code remote routine sessions start with blank mcp oauth accesstoken values, triggering repeated dynamic oauth client registrations that exhaust per-client registration rate limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61231 on anthropics/claude-code: CLAUDE_CODE_REMOTE_SKIP_SETTINGS_SYNC=1 prevents credential sync into ephemeral containers at session start. All configured MCP OAuth servers (Slack, Notion, Google-Calendar) show accessToken="" leading to rate-limit-blocked re-registration attempts. Regression introduced in build release-b5ac58d65-ext. Team-plan users relying on scheduled routines are directly affected. Clear reproduction steps with error logs.

## Common causes

- GitHub issue #61231 on anthropics/claude-code: CLAUDE_CODE_REMOTE_SKIP_SETTINGS_SYNC=1 prevents credential sync into ephemeral containers at session start. All configured MCP OAuth servers (Slack, Notion, Google-Calendar) show accessToken="" leading to rate-limit-blocked re-registration attempts. Regression introduced in build release-b5ac58d65-ext. Team-plan users relying on scheduled routines are directly affected. Clear reproduction steps with error logs.

## Quick fixes

1. Confirm the exact error signature matches `MCP OAuth access tokens empty on every fresh container — SDK auth failed: You have exceeded the rate limit for client registration requests`.
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

Evidence note: GitHub issue #61231 on anthropics/claude-code: CLAUDE_CODE_REMOTE_SKIP_SETTINGS_SYNC=1 prevents credential sync into ephemeral containers at session start. All configured MCP OAuth servers (Slack, Notion, Google-Calendar) show accessToken="" leading to rate-limit-blocked re-registration attempts. Regression introduced in build release-b5ac58d65-ext. Team-plan users relying on scheduled routines are directly affected. Clear reproduction steps with error logs.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `MCP OAuth access tokens empty on every fresh container — SDK auth failed: You have exceeded the rate limit for client registration requests` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP OAuth access tokens empty on every fresh container — SDK auth failed: You have exceeded the rate limit for client registration requests`.
