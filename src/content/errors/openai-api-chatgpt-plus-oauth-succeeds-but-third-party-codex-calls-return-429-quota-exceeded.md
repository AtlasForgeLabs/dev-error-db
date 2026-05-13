---
title: "ChatGPT Plus OAuth Works but Third-Party Codex Returns 429 Quota Exceeded"
description: "Fix 429 quota exceeded error on third-party Codex calls when ChatGPT Plus OAuth login succeeds Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded"
common_causes:
  - "Developers with ChatGPT Plus subscriptions expect API access through OAuth, but third-party tools get quota errors. This creates confusion between Plus subscription limits and actual API quotas."
  - "Open issue on openai/openai-python. ChatGPT Plus OAuth authentication succeeds, but subsequent Codex API calls return 429 quota exceeded. Not an OAuth failure — quota mismatch between Plus plan and third-party usage."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "ChatGPT Plus API quota limit"
  - "OpenAI OAuth 429 third-party"
  - "ChatGPT Plus Codex access denied"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded` is a OpenAI API failure pattern reported for developers trying to fix 429 quota exceeded error on third-party codex calls when chatgpt plus oauth login succeeds. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on openai/openai-python. ChatGPT Plus OAuth authentication succeeds, but subsequent Codex API calls return 429 quota exceeded. Not an OAuth failure — quota mismatch between Plus plan and third-party usage.

## Common causes

- Developers with ChatGPT Plus subscriptions expect API access through OAuth, but third-party tools get quota errors. This creates confusion between Plus subscription limits and actual API quotas.
- Open issue on openai/openai-python. ChatGPT Plus OAuth authentication succeeds, but subsequent Codex API calls return 429 quota exceeded. Not an OAuth failure — quota mismatch between Plus plan and third-party usage.

## Quick fixes

1. Confirm the exact error signature matches `ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded`.
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

Evidence note: Open issue on openai/openai-python. ChatGPT Plus OAuth authentication succeeds, but subsequent Codex API calls return 429 quota exceeded. Not an OAuth failure — quota mismatch between Plus plan and third-party usage.

## Related errors

- ChatGPT Plus API quota limit
- OpenAI OAuth 429 third-party
- ChatGPT Plus Codex access denied

## FAQ

### What should I check first?

Start with the exact `ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ChatGPT Plus OAuth succeeds but third-party Codex calls return 429 quota exceeded`.
