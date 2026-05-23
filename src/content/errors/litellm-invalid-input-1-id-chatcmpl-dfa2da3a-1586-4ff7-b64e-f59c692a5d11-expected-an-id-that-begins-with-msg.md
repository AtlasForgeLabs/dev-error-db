---
title: "LiteLLM /v1/responses replays chatcmpl-* message IDs breaking OpenAI Responses validation"
description: "Fix LiteLLM Response API bridge passing Chat Completions-style chatcmpl-* IDs as message item IDs into native OpenAI Responses endpoint, causing OpenAI to reject the request Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Invalid 'input[1].id': 'chatcmpl-dfa2da3a-1586-4ff7-b64e-f59c692a5d11'. Expected an ID that begins with 'msg'"
common_causes:
  - "GitHub Issue #27333 in BerriAI/litellm, addressed by PR #28692 (May 23, 2026). Cross-provider handoff (Claude/LiteLLM → OpenAI Responses) fails because bridged output retains chatcmpl-* IDs. OpenAI Responses spec requires msg_* prefixed IDs. High production value — breaks agent multi-step tool call workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-23"
published_at: "2026-05-23T10:39:50.317Z"
updated_at: "2026-05-23T10:39:50.317Z"
---

## What this error means

`Invalid 'input[1].id': 'chatcmpl-dfa2da3a-1586-4ff7-b64e-f59c692a5d11'. Expected an ID that begins with 'msg'` is a LiteLLM failure pattern reported for developers trying to fix litellm response api bridge passing chat completions-style chatcmpl-* ids as message item ids into native openai responses endpoint, causing openai to reject the request. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #27333 in BerriAI/litellm, addressed by PR #28692 (May 23, 2026). Cross-provider handoff (Claude/LiteLLM → OpenAI Responses) fails because bridged output retains chatcmpl-* IDs. OpenAI Responses spec requires msg_* prefixed IDs. High production value — breaks agent multi-step tool call workflows.

## Common causes

- GitHub Issue #27333 in BerriAI/litellm, addressed by PR #28692 (May 23, 2026). Cross-provider handoff (Claude/LiteLLM → OpenAI Responses) fails because bridged output retains chatcmpl-* IDs. OpenAI Responses spec requires msg_* prefixed IDs. High production value — breaks agent multi-step tool call workflows.

## Quick fixes

1. Confirm the exact error signature matches `Invalid 'input[1].id': 'chatcmpl-dfa2da3a-1586-4ff7-b64e-f59c692a5d11'. Expected an ID that begins with 'msg'`.
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

- https://github.com/BerriAI/litellm/issues/27333

Evidence note: GitHub Issue #27333 in BerriAI/litellm, addressed by PR #28692 (May 23, 2026). Cross-provider handoff (Claude/LiteLLM → OpenAI Responses) fails because bridged output retains chatcmpl-* IDs. OpenAI Responses spec requires msg_* prefixed IDs. High production value — breaks agent multi-step tool call workflows.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Invalid 'input[1].id': 'chatcmpl-dfa2da3a-1586-4ff7-b64e-f59c692a5d11'. Expected an ID that begins with 'msg'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Invalid 'input[1].id': 'chatcmpl-dfa2da3a-1586-4ff7-b64e-f59c692a5d11'. Expected an ID that begins with 'msg'`.
