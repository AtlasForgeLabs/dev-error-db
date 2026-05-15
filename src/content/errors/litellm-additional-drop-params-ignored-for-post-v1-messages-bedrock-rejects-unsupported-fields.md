---
title: "LiteLLM Additional Drop Params Ignored on Anthropic Pass-Through"
description: "Fix LiteLLM not stripping unsupported parameters before forwarding to Bedrock Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "additional_drop_params ignored for POST /v1/messages — Bedrock rejects unsupported fields"
common_causes:
  - "LiteLLM proxy forwards unsupported fields to Bedrock which rejects them, causing request failures for Claude Code users behind LiteLLM"
  - "6 reactions. additional_drop_params config ignored on Anthropic pass-through handler. Bedrock rejects unsupported fields."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Vertex AI wrong base URL"
  - "LiteLLM effort max hardcoded"
updated: "2026-05-15"
published_at: "2026-05-15T04:13:21.645Z"
updated_at: "2026-05-15T04:13:21.645Z"
---

## What this error means

`additional_drop_params ignored for POST /v1/messages — Bedrock rejects unsupported fields` is a LiteLLM failure pattern reported for developers trying to fix litellm not stripping unsupported parameters before forwarding to bedrock. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

6 reactions. additional_drop_params config ignored on Anthropic pass-through handler. Bedrock rejects unsupported fields.

## Common causes

- LiteLLM proxy forwards unsupported fields to Bedrock which rejects them, causing request failures for Claude Code users behind LiteLLM
- 6 reactions. additional_drop_params config ignored on Anthropic pass-through handler. Bedrock rejects unsupported fields.

## Quick fixes

1. Confirm the exact error signature matches `additional_drop_params ignored for POST /v1/messages — Bedrock rejects unsupported fields`.
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

- https://github.com/BerriAI/litellm/issues/25931

Evidence note: 6 reactions. additional_drop_params config ignored on Anthropic pass-through handler. Bedrock rejects unsupported fields.

## Related errors

- LiteLLM Vertex AI wrong base URL
- LiteLLM effort max hardcoded

## FAQ

### What should I check first?

Start with the exact `additional_drop_params ignored for POST /v1/messages — Bedrock rejects unsupported fields` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `additional_drop_params ignored for POST /v1/messages — Bedrock rejects unsupported fields`.
