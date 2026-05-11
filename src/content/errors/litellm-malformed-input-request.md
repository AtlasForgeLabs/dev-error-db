---
title: "LiteLLM Bedrock serviceTier Parameter Error - Malformed Input Request"
description: "Fix LiteLLM Bedrock serviceTier parameter causing Malformed input request error Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Malformed input request"
common_causes:
  - "When using Bedrock Converse API through LiteLLM, the serviceTier parameter is incorrectly nested inside additionalModelRequestFields instead of the top level, causing Bedrock to reject requests with 'Malformed input request'."
  - "GitHub issue #17336 in BerriAI/litellm with clear reproduction steps. Affects litellm v1.76.0 using Bedrock models via Converse API."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Bedrock API key error"
  - "LiteLLM Bedrock region error"
  - "Bedrock Converse API malformed request"
updated: "2026-05-11"
---

## What this error means

`Malformed input request` is a LiteLLM failure pattern reported for developers trying to fix litellm bedrock servicetier parameter causing malformed input request error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #17336 in BerriAI/litellm with clear reproduction steps. Affects litellm v1.76.0 using Bedrock models via Converse API.

## Common causes

- When using Bedrock Converse API through LiteLLM, the serviceTier parameter is incorrectly nested inside additionalModelRequestFields instead of the top level, causing Bedrock to reject requests with 'Malformed input request'.
- GitHub issue #17336 in BerriAI/litellm with clear reproduction steps. Affects litellm v1.76.0 using Bedrock models via Converse API.

## Quick fixes

1. Confirm the exact error signature matches `Malformed input request`.
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

- https://github.com/BerriAI/litellm/issues/17336

Evidence note: GitHub issue #17336 in BerriAI/litellm with clear reproduction steps. Affects litellm v1.76.0 using Bedrock models via Converse API.

## Related errors

- LiteLLM Bedrock API key error
- LiteLLM Bedrock region error
- Bedrock Converse API malformed request

## FAQ

### What should I check first?

Start with the exact `Malformed input request` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Malformed input request`.
