---
title: "LiteLLM Request Timeout Error — Connection Timeout After 60 Seconds"
description: "Fix LiteLLM proxy connection timeout errors caused by default 60-second request_timeout limit killing production deployments when models take 90+ seconds to respond Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.exceptions.Timeout: Connection timeout after 60.0 seconds / {\"error\":{\"message\":\"Gateway timeout\",\"type\":\"proxy_server_error\",\"param\":null,\"code\":503}}"
common_causes:
  - "Production guide from markaicode.com: LiteLLM inherits httpx client default of 60s request_timeout causing timeouts for slow models. Solution involves raising LITELLM_REQUEST_TIMEOUT to 300 and configuring max_retries/stream_timeout. Tested on LiteLLM v1.42.3, Python 3.11, OpenAI API. Category: LiteLLM (proxy billing/routing failures)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "LiteLLM"
updated: "2026-05-24"
published_at: "2026-05-24T16:43:11.085Z"
updated_at: "2026-05-24T16:43:11.085Z"
---

## What this error means

`litellm.exceptions.Timeout: Connection timeout after 60.0 seconds / {"error":{"message":"Gateway timeout","type":"proxy_server_error","param":null,"code":503}}` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy connection timeout errors caused by default 60-second request_timeout limit killing production deployments when models take 90+ seconds to respond. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Production guide from markaicode.com: LiteLLM inherits httpx client default of 60s request_timeout causing timeouts for slow models. Solution involves raising LITELLM_REQUEST_TIMEOUT to 300 and configuring max_retries/stream_timeout. Tested on LiteLLM v1.42.3, Python 3.11, OpenAI API. Category: LiteLLM (proxy billing/routing failures).

## Common causes

- Production guide from markaicode.com: LiteLLM inherits httpx client default of 60s request_timeout causing timeouts for slow models. Solution involves raising LITELLM_REQUEST_TIMEOUT to 300 and configuring max_retries/stream_timeout. Tested on LiteLLM v1.42.3, Python 3.11, OpenAI API. Category: LiteLLM (proxy billing/routing failures).

## Quick fixes

1. Confirm the exact error signature matches `litellm.exceptions.Timeout: Connection timeout after 60.0 seconds / {"error":{"message":"Gateway timeout","type":"proxy_server_error","param":null,"code":503}}`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://markaicode.com/errors/litellm-timeout-error-fix-production/

Evidence note: Production guide from markaicode.com: LiteLLM inherits httpx client default of 60s request_timeout causing timeouts for slow models. Solution involves raising LITELLM_REQUEST_TIMEOUT to 300 and configuring max_retries/stream_timeout. Tested on LiteLLM v1.42.3, Python 3.11, OpenAI API. Category: LiteLLM (proxy billing/routing failures).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.exceptions.Timeout: Connection timeout after 60.0 seconds / {"error":{"message":"Gateway timeout","type":"proxy_server_error","param":null,"code":503}}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.exceptions.Timeout: Connection timeout after 60.0 seconds / {"error":{"message":"Gateway timeout","type":"proxy_server_error","param":null,"code":503}}`.
