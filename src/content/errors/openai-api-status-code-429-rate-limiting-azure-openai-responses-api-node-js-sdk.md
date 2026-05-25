---
title: "Rate limit error 429 when using Azure OpenAI + Responses API"
description: "Resolve Azure OpenAI rate limiting on Responses API — increase TPM quota workaround needed Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "\"status code 429\" rate limiting Azure OpenAI Responses API Node.js SDK"
common_causes:
  - "Issue Azure/azure-rest-api-specs#34250: Users reporting 429 rate limit errors even with increased quota (>130k TPM) on Azure OpenAI Responses API via Node.js SDK v4.96. Affects paid Azure OpenAI deployments. Category: OpenAI API (billing/quota error on paid cloud service). Distinct from general OpenAI API rate limit topics."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-25"
published_at: "2026-05-25T03:43:12.602Z"
updated_at: "2026-05-25T03:43:12.602Z"
---

## What this error means

`"status code 429" rate limiting Azure OpenAI Responses API Node.js SDK` is a OpenAI API failure pattern reported for developers trying to resolve azure openai rate limiting on responses api — increase tpm quota workaround needed. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue Azure/azure-rest-api-specs#34250: Users reporting 429 rate limit errors even with increased quota (>130k TPM) on Azure OpenAI Responses API via Node.js SDK v4.96. Affects paid Azure OpenAI deployments. Category: OpenAI API (billing/quota error on paid cloud service). Distinct from general OpenAI API rate limit topics.

## Common causes

- Issue Azure/azure-rest-api-specs#34250: Users reporting 429 rate limit errors even with increased quota (>130k TPM) on Azure OpenAI Responses API via Node.js SDK v4.96. Affects paid Azure OpenAI deployments. Category: OpenAI API (billing/quota error on paid cloud service). Distinct from general OpenAI API rate limit topics.

## Quick fixes

1. Confirm the exact error signature matches `"status code 429" rate limiting Azure OpenAI Responses API Node.js SDK`.
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

- https://github.com/Azure/azure-rest-api-specs/issues/34250

Evidence note: Issue Azure/azure-rest-api-specs#34250: Users reporting 429 rate limit errors even with increased quota (>130k TPM) on Azure OpenAI Responses API via Node.js SDK v4.96. Affects paid Azure OpenAI deployments. Category: OpenAI API (billing/quota error on paid cloud service). Distinct from general OpenAI API rate limit topics.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `"status code 429" rate limiting Azure OpenAI Responses API Node.js SDK` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"status code 429" rate limiting Azure OpenAI Responses API Node.js SDK`.
