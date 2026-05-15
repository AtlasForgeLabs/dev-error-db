---
title: "OpenAI ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded"
description: "Fix OpenAI API 429 quota exceeded error for ChatGPT Plus subscribers making third-party API calls despite having active subscription Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "ChatGPT Plus OAuth succeeds but third-party Codex API calls return 429 quota exceeded — not an OAuth login failure, affects paying Plus subscribers"
common_causes:
  - "Reported on openai/openai-python#2951 (2026-03-10). Paying ChatGPT Plus subscribers receive 429 quota exceeded when making third-party Codex API calls. OAuth authentication succeeds but API quota is incorrectly applied. Direct billing/subscription impact. Category: OpenAI API (quota/billing error)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-15"
published_at: "2026-05-15T14:13:22.743Z"
updated_at: "2026-05-15T14:13:22.743Z"
---

## What this error means

`ChatGPT Plus OAuth succeeds but third-party Codex API calls return 429 quota exceeded — not an OAuth login failure, affects paying Plus subscribers` is a OpenAI API failure pattern reported for developers trying to fix openai api 429 quota exceeded error for chatgpt plus subscribers making third-party api calls despite having active subscription. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Reported on openai/openai-python#2951 (2026-03-10). Paying ChatGPT Plus subscribers receive 429 quota exceeded when making third-party Codex API calls. OAuth authentication succeeds but API quota is incorrectly applied. Direct billing/subscription impact. Category: OpenAI API (quota/billing error).

## Common causes

- Reported on openai/openai-python#2951 (2026-03-10). Paying ChatGPT Plus subscribers receive 429 quota exceeded when making third-party Codex API calls. OAuth authentication succeeds but API quota is incorrectly applied. Direct billing/subscription impact. Category: OpenAI API (quota/billing error).

## Quick fixes

1. Confirm the exact error signature matches `ChatGPT Plus OAuth succeeds but third-party Codex API calls return 429 quota exceeded — not an OAuth login failure, affects paying Plus subscribers`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/2951

Evidence note: Reported on openai/openai-python#2951 (2026-03-10). Paying ChatGPT Plus subscribers receive 429 quota exceeded when making third-party Codex API calls. OAuth authentication succeeds but API quota is incorrectly applied. Direct billing/subscription impact. Category: OpenAI API (quota/billing error).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `ChatGPT Plus OAuth succeeds but third-party Codex API calls return 429 quota exceeded — not an OAuth login failure, affects paying Plus subscribers` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ChatGPT Plus OAuth succeeds but third-party Codex API calls return 429 quota exceeded — not an OAuth login failure, affects paying Plus subscribers`.
