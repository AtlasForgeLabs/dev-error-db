---
title: "LiteLLM Bedrock Converse Injects Tools Into Payload — Unsupported Model Error"
description: "Fix LiteLLM Bedrock Converse injecting tools into requests for non-tool-supporting models Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "BedrockException - {\"message\":\"This model doesn't support tool use.\"}"
common_causes:
  - "LiteLLM proxy users routing to AWS Bedrock get errors when LiteLLM injects tool definitions into models that don't support tool use. Setting drop_params=True does not resolve the issue."
  - "LiteLLM Bedrock Converse handler injects tools into payload even when caller sends none. Models like meta.llama3-2-3b-instruct-v1:0 fail with BedrockException. drop_params=True does not help. Clear error message and reproduction steps provided."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM proxy tool use configuration error"
  - "Bedrock model unsupported tool use error"
  - "LiteLLM drop_params not working"
updated: "2026-05-12"
published_at: "2026-05-12T06:10:49.195Z"
updated_at: "2026-05-12T06:10:49.195Z"
---

## What this error means

`BedrockException - {"message":"This model doesn't support tool use."}` is a LiteLLM failure pattern reported for developers trying to fix litellm bedrock converse injecting tools into requests for non-tool-supporting models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

LiteLLM Bedrock Converse handler injects tools into payload even when caller sends none. Models like meta.llama3-2-3b-instruct-v1:0 fail with BedrockException. drop_params=True does not help. Clear error message and reproduction steps provided.

## Common causes

- LiteLLM proxy users routing to AWS Bedrock get errors when LiteLLM injects tool definitions into models that don't support tool use. Setting drop_params=True does not resolve the issue.
- LiteLLM Bedrock Converse handler injects tools into payload even when caller sends none. Models like meta.llama3-2-3b-instruct-v1:0 fail with BedrockException. drop_params=True does not help. Clear error message and reproduction steps provided.

## Quick fixes

1. Confirm the exact error signature matches `BedrockException - {"message":"This model doesn't support tool use."}`.
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

- https://github.com/BerriAI/litellm/issues/27138

Evidence note: LiteLLM Bedrock Converse handler injects tools into payload even when caller sends none. Models like meta.llama3-2-3b-instruct-v1:0 fail with BedrockException. drop_params=True does not help. Clear error message and reproduction steps provided.

## Related errors

- LiteLLM proxy tool use configuration error
- Bedrock model unsupported tool use error
- LiteLLM drop_params not working

## FAQ

### What should I check first?

Start with the exact `BedrockException - {"message":"This model doesn't support tool use."}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BedrockException - {"message":"This model doesn't support tool use."}`.
