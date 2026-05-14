---
title: "LiteLLM Proxy Returns 400 Validation Errors on Claude Code Multi-Turn Conversations"
description: "Fix LiteLLM proxy 400 validation error when Claude Code sends multi-turn conversations Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "177 validation errors: Input should be a valid string"
common_causes:
  - "Claude Code calls LiteLLM gateway and gets 400 with 177 validation errors about input types. LiteLLM proxy doesn't correctly translate Claude Code's message format. Multi-turn conversations get stuck."
  - "Error: litellm.BadRequestError with 177 validation errors. Input should be a valid string but receiving complex message objects. Specific to Claude Code → LiteLLM proxy path."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Bedrock structured output failure"
  - "Claude Code Unhandled case object Object"
updated: "2026-05-14"
published_at: "2026-05-14T12:13:19.859Z"
updated_at: "2026-05-14T12:13:19.859Z"
---

## What this error means

`177 validation errors: Input should be a valid string` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy 400 validation error when claude code sends multi-turn conversations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Error: litellm.BadRequestError with 177 validation errors. Input should be a valid string but receiving complex message objects. Specific to Claude Code → LiteLLM proxy path.

## Common causes

- Claude Code calls LiteLLM gateway and gets 400 with 177 validation errors about input types. LiteLLM proxy doesn't correctly translate Claude Code's message format. Multi-turn conversations get stuck.
- Error: litellm.BadRequestError with 177 validation errors. Input should be a valid string but receiving complex message objects. Specific to Claude Code → LiteLLM proxy path.

## Quick fixes

1. Confirm the exact error signature matches `177 validation errors: Input should be a valid string`.
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

- https://github.com/BerriAI/litellm/issues/27839

Evidence note: Error: litellm.BadRequestError with 177 validation errors. Input should be a valid string but receiving complex message objects. Specific to Claude Code → LiteLLM proxy path.

## Related errors

- LiteLLM Bedrock structured output failure
- Claude Code Unhandled case object Object

## FAQ

### What should I check first?

Start with the exact `177 validation errors: Input should be a valid string` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `177 validation errors: Input should be a valid string`.
