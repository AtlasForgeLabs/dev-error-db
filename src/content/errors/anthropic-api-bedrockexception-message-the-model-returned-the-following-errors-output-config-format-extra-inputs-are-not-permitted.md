---
title: "Anthropic SDK Structured Output Fails for Anthropic Models on Bedrock Converse API"
description: "Fix Anthropic Bedrock structured output JSON schema validation error on Converse API Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "BedrockException: {\"message\":\"The model returned the following errors: output_config.format: Extra inputs are not permitted\"}"
common_causes:
  - "When using responses API with structured output (JSON schema) on Bedrock Converse API for Anthropic models, Bedrock rejects with 'Extra inputs are not permitted'. Works for Nova models and Invoke API — specific to Anthropic + Converse combination."
  - "BedrockException on Converse API for Anthropic models with structured output. output_config.format: Extra inputs not permitted. Works with Nova models and Invoke API."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Bedrock streaming SSE error handling"
  - "Anthropic API structured output"
updated: "2026-05-14"
published_at: "2026-05-14T12:13:19.859Z"
updated_at: "2026-05-14T12:13:19.859Z"
---

## What this error means

`BedrockException: {"message":"The model returned the following errors: output_config.format: Extra inputs are not permitted"}` is a Anthropic API failure pattern reported for developers trying to fix anthropic bedrock structured output json schema validation error on converse api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

BedrockException on Converse API for Anthropic models with structured output. output_config.format: Extra inputs not permitted. Works with Nova models and Invoke API.

## Common causes

- When using responses API with structured output (JSON schema) on Bedrock Converse API for Anthropic models, Bedrock rejects with 'Extra inputs are not permitted'. Works for Nova models and Invoke API — specific to Anthropic + Converse combination.
- BedrockException on Converse API for Anthropic models with structured output. output_config.format: Extra inputs not permitted. Works with Nova models and Invoke API.

## Quick fixes

1. Confirm the exact error signature matches `BedrockException: {"message":"The model returned the following errors: output_config.format: Extra inputs are not permitted"}`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/27846
- https://github.com/anthropics/anthropic-sdk-python/issues/1477

Evidence note: BedrockException on Converse API for Anthropic models with structured output. output_config.format: Extra inputs not permitted. Works with Nova models and Invoke API.

## Related errors

- Bedrock streaming SSE error handling
- Anthropic API structured output

## FAQ

### What should I check first?

Start with the exact `BedrockException: {"message":"The model returned the following errors: output_config.format: Extra inputs are not permitted"}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `BedrockException: {"message":"The model returned the following errors: output_config.format: Extra inputs are not permitted"}`.
