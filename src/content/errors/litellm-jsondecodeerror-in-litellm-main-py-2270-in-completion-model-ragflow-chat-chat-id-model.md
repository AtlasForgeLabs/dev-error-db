---
title: "LiteLLM RAGFlow integration JSONDecodeError — completion() fails with unhandled parse error"
description: "Fix LiteLLM completion() JSON decode failure when integrating with RAGFlow backend (ragflow/chat/model routing) Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "JSONDecodeError in litellm/main.py:2270 in completion() model=ragflow/chat/{chat_id}/{model}"
common_causes:
  - "Issue #28773 on BerriAI/litellm: LiteLLM completion call to ragflow/chat/{id}/qwen/qwen3.6-plus throws JSONDecodeError inside litellm/main.py. Proxy layer failing to properly handle upstream response format. Commercially relevant as LiteLLM is used for production model routing/billing. No existing coverage on dev-error-db."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-25"
published_at: "2026-05-25T08:43:13.202Z"
updated_at: "2026-05-25T08:43:13.202Z"
---

## What this error means

`JSONDecodeError in litellm/main.py:2270 in completion() model=ragflow/chat/{chat_id}/{model}` is a LiteLLM failure pattern reported for developers trying to fix litellm completion() json decode failure when integrating with ragflow backend (ragflow/chat/model routing). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #28773 on BerriAI/litellm: LiteLLM completion call to ragflow/chat/{id}/qwen/qwen3.6-plus throws JSONDecodeError inside litellm/main.py. Proxy layer failing to properly handle upstream response format. Commercially relevant as LiteLLM is used for production model routing/billing. No existing coverage on dev-error-db.

## Common causes

- Issue #28773 on BerriAI/litellm: LiteLLM completion call to ragflow/chat/{id}/qwen/qwen3.6-plus throws JSONDecodeError inside litellm/main.py. Proxy layer failing to properly handle upstream response format. Commercially relevant as LiteLLM is used for production model routing/billing. No existing coverage on dev-error-db.

## Quick fixes

1. Confirm the exact error signature matches `JSONDecodeError in litellm/main.py:2270 in completion() model=ragflow/chat/{chat_id}/{model}`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Compare the failing environment with a known working setup, then change one configuration value at a time.

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

- https://github.com/BerriAI/litellm/issues/28773

Evidence note: Issue #28773 on BerriAI/litellm: LiteLLM completion call to ragflow/chat/{id}/qwen/qwen3.6-plus throws JSONDecodeError inside litellm/main.py. Proxy layer failing to properly handle upstream response format. Commercially relevant as LiteLLM is used for production model routing/billing. No existing coverage on dev-error-db.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `JSONDecodeError in litellm/main.py:2270 in completion() model=ragflow/chat/{chat_id}/{model}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `JSONDecodeError in litellm/main.py:2270 in completion() model=ragflow/chat/{chat_id}/{model}`.
