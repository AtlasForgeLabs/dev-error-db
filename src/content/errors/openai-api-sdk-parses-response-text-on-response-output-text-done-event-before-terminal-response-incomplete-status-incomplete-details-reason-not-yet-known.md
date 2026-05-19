---
title: "Responses streaming structured output parses incomplete JSON before terminal incomplete status"
description: "Fix incorrect parsing of structured output JSON when OpenAI API returns incomplete responses (truncation or max_tokens) Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "SDK parses response text on response.output_text.done event before terminal response.incomplete status — incomplete_details.reason not yet known"
common_causes:
  - "OpenAI openai-python #3263 (2026-05-18): Python SDK's streaming structured output helper auto-parses on done event before knowing if response will be marked incomplete. Affects paid API users using Pydantic models with responses API. Category: OpenAI API (direct API library error). Not covered in covered-errors.md (distinct from generic 429/model-not-found)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-19"
published_at: "2026-05-19T05:37:15.297Z"
updated_at: "2026-05-19T05:37:15.297Z"
---

## What this error means

`SDK parses response text on response.output_text.done event before terminal response.incomplete status — incomplete_details.reason not yet known` is a OpenAI API failure pattern reported for developers trying to fix incorrect parsing of structured output json when openai api returns incomplete responses (truncation or max_tokens). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

OpenAI openai-python #3263 (2026-05-18): Python SDK's streaming structured output helper auto-parses on done event before knowing if response will be marked incomplete. Affects paid API users using Pydantic models with responses API. Category: OpenAI API (direct API library error). Not covered in covered-errors.md (distinct from generic 429/model-not-found).

## Common causes

- OpenAI openai-python #3263 (2026-05-18): Python SDK's streaming structured output helper auto-parses on done event before knowing if response will be marked incomplete. Affects paid API users using Pydantic models with responses API. Category: OpenAI API (direct API library error). Not covered in covered-errors.md (distinct from generic 429/model-not-found).

## Quick fixes

1. Confirm the exact error signature matches `SDK parses response text on response.output_text.done event before terminal response.incomplete status — incomplete_details.reason not yet known`.
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

- https://github.com/openai/openai-python/issues/3263

Evidence note: OpenAI openai-python #3263 (2026-05-18): Python SDK's streaming structured output helper auto-parses on done event before knowing if response will be marked incomplete. Affects paid API users using Pydantic models with responses API. Category: OpenAI API (direct API library error). Not covered in covered-errors.md (distinct from generic 429/model-not-found).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `SDK parses response text on response.output_text.done event before terminal response.incomplete status — incomplete_details.reason not yet known` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `SDK parses response text on response.output_text.done event before terminal response.incomplete status — incomplete_details.reason not yet known`.
