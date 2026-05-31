---
title: "OpenAI API 429 Rate Limit Exceeded — TPM Quota Errors"
description: "Fix OpenAI 429 rate limit error when using GPT-4.1 or other models; understand TPM/quota limits and how to increase or manage them Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors."
common_causes:
  - "Multiple reported in continuedev/continue issues (#10572, #9563) where developers hit exact 429 quota exceeded errors with detailed TPM response (Limit 30000, Used 22343, Requested 10955). Specific to organization-scoped rate limits. Category: OpenAI API as per mapping rules."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T09:44:24.164Z"
updated_at: "2026-05-31T09:44:24.164Z"
---

## What this error means

`429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.` is a OpenAI API failure pattern reported for developers trying to fix openai 429 rate limit error when using gpt-4.1 or other models; understand tpm/quota limits and how to increase or manage them. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple reported in continuedev/continue issues (#10572, #9563) where developers hit exact 429 quota exceeded errors with detailed TPM response (Limit 30000, Used 22343, Requested 10955). Specific to organization-scoped rate limits. Category: OpenAI API as per mapping rules.

## Common causes

- Multiple reported in continuedev/continue issues (#10572, #9563) where developers hit exact 429 quota exceeded errors with detailed TPM response (Limit 30000, Used 22343, Requested 10955). Specific to organization-scoped rate limits. Category: OpenAI API as per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/continuedev/continue/issues/10572
- https://github.com/continuedev/continue/issues/9563

Evidence note: Multiple reported in continuedev/continue issues (#10572, #9563) where developers hit exact 429 quota exceeded errors with detailed TPM response (Limit 30000, Used 22343, Requested 10955). Specific to organization-scoped rate limits. Category: OpenAI API as per mapping rules.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.`.
