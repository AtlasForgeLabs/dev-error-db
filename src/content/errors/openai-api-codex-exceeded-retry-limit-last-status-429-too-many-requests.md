---
title: "OpenAI Codex App 429 Rate Limit Exceeded — Retry Loop Blocks Paid Plus Users"
description: "Paid Codex Plus subscriber gets stuck in infinite retry loop when hitting DDoS-rate limits; needs solution to stop repeated 429 blocking usage Includes evidence for OpenAI API / Codex troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API / Codex"
error_signature: "exceeded retry limit, last status: 429 Too Many Requests"
common_causes:
  - "GitHub issue #22122 on openai/codex repo (May 11, 2026). OpenAI collaborator confirmed this is a DDoS-protection rate limit (not usage cap), caused by too many concurrent requests/subagents. Classic paid-user production blocker affecting GPT-5 codex access."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-21"
published_at: "2026-05-21T11:39:44.393Z"
updated_at: "2026-05-21T11:39:44.393Z"
---

## What this error means

`exceeded retry limit, last status: 429 Too Many Requests` is a OpenAI API / Codex failure pattern reported for developers trying to paid codex plus subscriber gets stuck in infinite retry loop when hitting ddos-rate limits; needs solution to stop repeated 429 blocking usage. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #22122 on openai/codex repo (May 11, 2026). OpenAI collaborator confirmed this is a DDoS-protection rate limit (not usage cap), caused by too many concurrent requests/subagents. Classic paid-user production blocker affecting GPT-5 codex access.

## Common causes

- GitHub issue #22122 on openai/codex repo (May 11, 2026). OpenAI collaborator confirmed this is a DDoS-protection rate limit (not usage cap), caused by too many concurrent requests/subagents. Classic paid-user production blocker affecting GPT-5 codex access.

## Quick fixes

1. Confirm the exact error signature matches `exceeded retry limit, last status: 429 Too Many Requests`.
2. Check the OpenAI API / Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/22122

Evidence note: GitHub issue #22122 on openai/codex repo (May 11, 2026). OpenAI collaborator confirmed this is a DDoS-protection rate limit (not usage cap), caused by too many concurrent requests/subagents. Classic paid-user production blocker affecting GPT-5 codex access.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `exceeded retry limit, last status: 429 Too Many Requests` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API / Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `exceeded retry limit, last status: 429 Too Many Requests`.
