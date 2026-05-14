---
title: "Anthropic API 429 Rate Limit Error in Claude Code — counter decremented and charged despite failed request"
description: "Fix Anthropic API 429 rate limit error where billing counter is decremented even when the request fails Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "429 {\"type\":\"error\",\"error\":{\"type\":\"rate_limit_error\",\"message\":\"Rate limited\"}}"
common_causes:
  - "Developers using Claude Code hit rate limits and get charged for failed requests, causing unexpected billing and workflow interruption. The error message is generic and hard to debug."
  - "GitHub issue reports Anthropic API returning 429 rate_limit_error during Claude Code ultrareview session. Counter decremented from 3 to 2 and user charged despite failed request. Error occurs at generate() in cli.js. Affects paid Anthropic API users."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API 401 Unauthorized"
  - "Anthropic API 500 Internal Server Error"
  - "Claude Code context limit exceeded"
updated: "2026-05-14"
published_at: "2026-05-14T23:13:21.053Z"
updated_at: "2026-05-14T23:13:21.053Z"
---

## What this error means

`429 {"type":"error","error":{"type":"rate_limit_error","message":"Rate limited"}}` is a Anthropic API failure pattern reported for developers trying to fix anthropic api 429 rate limit error where billing counter is decremented even when the request fails. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue reports Anthropic API returning 429 rate_limit_error during Claude Code ultrareview session. Counter decremented from 3 to 2 and user charged despite failed request. Error occurs at generate() in cli.js. Affects paid Anthropic API users.

## Common causes

- Developers using Claude Code hit rate limits and get charged for failed requests, causing unexpected billing and workflow interruption. The error message is generic and hard to debug.
- GitHub issue reports Anthropic API returning 429 rate_limit_error during Claude Code ultrareview session. Counter decremented from 3 to 2 and user charged despite failed request. Error occurs at generate() in cli.js. Affects paid Anthropic API users.

## Quick fixes

1. Confirm the exact error signature matches `429 {"type":"error","error":{"type":"rate_limit_error","message":"Rate limited"}}`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59201

Evidence note: GitHub issue reports Anthropic API returning 429 rate_limit_error during Claude Code ultrareview session. Counter decremented from 3 to 2 and user charged despite failed request. Error occurs at generate() in cli.js. Affects paid Anthropic API users.

## Related errors

- Anthropic API 401 Unauthorized
- Anthropic API 500 Internal Server Error
- Claude Code context limit exceeded

## FAQ

### What should I check first?

Start with the exact `429 {"type":"error","error":{"type":"rate_limit_error","message":"Rate limited"}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 {"type":"error","error":{"type":"rate_limit_error","message":"Rate limited"}}`.
