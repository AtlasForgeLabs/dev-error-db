---
title: "LiteLLM Bedrock pass-through /converse returns 200 with empty body — silent data loss regression"
description: "Fix regression in LiteLLM v1.85.0 where Bedrock AWS pass-through through the /converse endpoint returns 200 status but body is empty, causing silent data loss for clients consuming AI responses through LiteLLM proxy Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Bedrock pass-through /converse returns HTTP 200 OK with empty response body on v1.85.0 — callers receive no content despite successful status code"
common_causes:
  - "GitHub Issue #28388 (BerriAI/litellm): llm translation + proxy labels confirm Bedrock /converse endpoint regression. HTTP 200 with empty body looks like success but delivers nothing. Affects enterprise teams using AWS Bedrock via LiteLLM proxy."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T21:38:30.558Z"
updated_at: "2026-05-20T21:38:30.558Z"
---

## What this error means

`Bedrock pass-through /converse returns HTTP 200 OK with empty response body on v1.85.0 — callers receive no content despite successful status code` is a LiteLLM failure pattern reported for developers trying to fix regression in litellm v1.85.0 where bedrock aws pass-through through the /converse endpoint returns 200 status but body is empty, causing silent data loss for clients consuming ai responses through litellm proxy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #28388 (BerriAI/litellm): llm translation + proxy labels confirm Bedrock /converse endpoint regression. HTTP 200 with empty body looks like success but delivers nothing. Affects enterprise teams using AWS Bedrock via LiteLLM proxy.

## Common causes

- GitHub Issue #28388 (BerriAI/litellm): llm translation + proxy labels confirm Bedrock /converse endpoint regression. HTTP 200 with empty body looks like success but delivers nothing. Affects enterprise teams using AWS Bedrock via LiteLLM proxy.

## Quick fixes

1. Confirm the exact error signature matches `Bedrock pass-through /converse returns HTTP 200 OK with empty response body on v1.85.0 — callers receive no content despite successful status code`.
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

- https://github.com/BerriAI/litellm/issues/28388

Evidence note: GitHub Issue #28388 (BerriAI/litellm): llm translation + proxy labels confirm Bedrock /converse endpoint regression. HTTP 200 with empty body looks like success but delivers nothing. Affects enterprise teams using AWS Bedrock via LiteLLM proxy.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Bedrock pass-through /converse returns HTTP 200 OK with empty response body on v1.85.0 — callers receive no content despite successful status code` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Bedrock pass-through /converse returns HTTP 200 OK with empty response body on v1.85.0 — callers receive no content despite successful status code`.
