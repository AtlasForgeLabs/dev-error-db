---
title: "Background Responses failures lack stable error code for retry logic"
description: "How to programmatically classify and retry failed OpenAI Responses API background runs based on error code Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "background response status=failed returns opaque error.code without SDK exception mapping; HTTP poll returns 200 OK so no typed exception raised"
common_causes:
  - "GitHub issue openai/openai-python#3212 by adnanboz (May 8 2026). Describes that synchronous SDK has deterministic HTTP→exception mapping but background=True mode surfaces only free-form error.code string with no documented enum or SDK class mapping. Affects production retry/backoff logic where isinstance(e, InternalServerError) cannot work. Direct source evidence: complete issue body with code snippets and community workaround proposals."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-19"
published_at: "2026-05-19T21:37:17.709Z"
updated_at: "2026-05-19T21:37:17.709Z"
---

## What this error means

`background response status=failed returns opaque error.code without SDK exception mapping; HTTP poll returns 200 OK so no typed exception raised` is a OpenAI API failure pattern reported for developers trying to how to programmatically classify and retry failed openai responses api background runs based on error code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/openai-python#3212 by adnanboz (May 8 2026). Describes that synchronous SDK has deterministic HTTP→exception mapping but background=True mode surfaces only free-form error.code string with no documented enum or SDK class mapping. Affects production retry/backoff logic where isinstance(e, InternalServerError) cannot work. Direct source evidence: complete issue body with code snippets and community workaround proposals.

## Common causes

- GitHub issue openai/openai-python#3212 by adnanboz (May 8 2026). Describes that synchronous SDK has deterministic HTTP→exception mapping but background=True mode surfaces only free-form error.code string with no documented enum or SDK class mapping. Affects production retry/backoff logic where isinstance(e, InternalServerError) cannot work. Direct source evidence: complete issue body with code snippets and community workaround proposals.

## Quick fixes

1. Confirm the exact error signature matches `background response status=failed returns opaque error.code without SDK exception mapping; HTTP poll returns 200 OK so no typed exception raised`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/openai-python/issues/3212

Evidence note: GitHub issue openai/openai-python#3212 by adnanboz (May 8 2026). Describes that synchronous SDK has deterministic HTTP→exception mapping but background=True mode surfaces only free-form error.code string with no documented enum or SDK class mapping. Affects production retry/backoff logic where isinstance(e, InternalServerError) cannot work. Direct source evidence: complete issue body with code snippets and community workaround proposals.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `background response status=failed returns opaque error.code without SDK exception mapping; HTTP poll returns 200 OK so no typed exception raised` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `background response status=failed returns opaque error.code without SDK exception mapping; HTTP poll returns 200 OK so no typed exception raised`.
