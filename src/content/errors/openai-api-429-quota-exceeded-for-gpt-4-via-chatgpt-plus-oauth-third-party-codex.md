---
title: "ChatGPT Plus OAuth succeeds but third-party Codex returns 429 quota exceeded"
description: "Fix 429 quota error when using OpenAI Python SDK with ChatGPT Plus OAuth token through third-party apps Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "429 quota exceeded for gpt-4 via ChatGPT Plus OAuth third-party Codex"
common_causes:
  - "GitHub Issue #2951 on openai/openai-python repo (open, 5 comments). User's ChatGPT Plus OAuth authentication succeeds but API calls return 429 quota error — appears to be a billing context mismatch between first-party ChatGPT usage and third-party OAuth Codex tokens. Strong commercial value as paid API users hit production-blocking quota errors."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-23"
published_at: "2026-05-23T08:39:50.052Z"
updated_at: "2026-05-23T08:39:50.052Z"
---

## What this error means

`429 quota exceeded for gpt-4 via ChatGPT Plus OAuth third-party Codex` is a OpenAI API failure pattern reported for developers trying to fix 429 quota error when using openai python sdk with chatgpt plus oauth token through third-party apps. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2951 on openai/openai-python repo (open, 5 comments). User's ChatGPT Plus OAuth authentication succeeds but API calls return 429 quota error — appears to be a billing context mismatch between first-party ChatGPT usage and third-party OAuth Codex tokens. Strong commercial value as paid API users hit production-blocking quota errors.

## Common causes

- GitHub Issue #2951 on openai/openai-python repo (open, 5 comments). User's ChatGPT Plus OAuth authentication succeeds but API calls return 429 quota error — appears to be a billing context mismatch between first-party ChatGPT usage and third-party OAuth Codex tokens. Strong commercial value as paid API users hit production-blocking quota errors.

## Quick fixes

1. Confirm the exact error signature matches `429 quota exceeded for gpt-4 via ChatGPT Plus OAuth third-party Codex`.
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

Evidence note: GitHub Issue #2951 on openai/openai-python repo (open, 5 comments). User's ChatGPT Plus OAuth authentication succeeds but API calls return 429 quota error — appears to be a billing context mismatch between first-party ChatGPT usage and third-party OAuth Codex tokens. Strong commercial value as paid API users hit production-blocking quota errors.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `429 quota exceeded for gpt-4 via ChatGPT Plus OAuth third-party Codex` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 quota exceeded for gpt-4 via ChatGPT Plus OAuth third-party Codex`.
