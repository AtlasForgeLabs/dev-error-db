---
title: "LiteLLM OCI GPT-5 max_completion_tokens Parameter Mapping Error"
description: "Fix LiteLLM OCI adapter incorrectly mapping max_completion_tokens to maxTokens for GPT-5 models Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Unsupported parameter: 'max_tokens' is not supported"
common_causes:
  - "When calling OCI OpenAI GPT-5 models through LiteLLM, requests fail because LiteLLM maps the standard max_completion_tokens to OCI's unsupported maxTokens field. This breaks production LLM integrations using OCI GPT-5."
  - "Bug report (2026-05-07) shows LiteLLM OCI adapter translates max_completion_tokens=100 into legacy camelCase maxTokens, which OCI GPT-5 models reject with 'Unsupported parameter: max_tokens is not supported'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OCI OpenAI API parameter compatibility errors"
  - "LiteLLM adapter parameter mapping issues"
updated: "2026-05-13"
published_at: "2026-05-13T03:13:15.476Z"
updated_at: "2026-05-13T03:13:15.476Z"
---

## What this error means

`Unsupported parameter: 'max_tokens' is not supported` is a LiteLLM failure pattern reported for developers trying to fix litellm oci adapter incorrectly mapping max_completion_tokens to maxtokens for gpt-5 models. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report (2026-05-07) shows LiteLLM OCI adapter translates max_completion_tokens=100 into legacy camelCase maxTokens, which OCI GPT-5 models reject with 'Unsupported parameter: max_tokens is not supported'.

## Common causes

- When calling OCI OpenAI GPT-5 models through LiteLLM, requests fail because LiteLLM maps the standard max_completion_tokens to OCI's unsupported maxTokens field. This breaks production LLM integrations using OCI GPT-5.
- Bug report (2026-05-07) shows LiteLLM OCI adapter translates max_completion_tokens=100 into legacy camelCase maxTokens, which OCI GPT-5 models reject with 'Unsupported parameter: max_tokens is not supported'.

## Quick fixes

1. Confirm the exact error signature matches `Unsupported parameter: 'max_tokens' is not supported`.
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

- https://github.com/BerriAI/litellm/issues/27429

Evidence note: Bug report (2026-05-07) shows LiteLLM OCI adapter translates max_completion_tokens=100 into legacy camelCase maxTokens, which OCI GPT-5 models reject with 'Unsupported parameter: max_tokens is not supported'.

## Related errors

- OCI OpenAI API parameter compatibility errors
- LiteLLM adapter parameter mapping issues

## FAQ

### What should I check first?

Start with the exact `Unsupported parameter: 'max_tokens' is not supported` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unsupported parameter: 'max_tokens' is not supported`.
