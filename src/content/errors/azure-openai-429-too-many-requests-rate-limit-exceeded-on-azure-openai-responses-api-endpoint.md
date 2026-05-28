---
title: "Azure OpenAI Responses API Rate Limit (429) — Different from Chat Completions"
description: "Fix 429 rate limit errors when calling Azure OpenAI Responses API (distinct from chat completions rate limits) Includes evidence for Azure OpenAI troubleshooting demand."
category: "OpenAI API"
technology: "Azure OpenAI"
error_signature: "429 Too Many Requests — Rate limit exceeded on Azure OpenAI Responses API endpoint"
common_causes:
  - "GitHub issue on azure-rest-api-specs (#34250) filed Apr 25, 2025 reporting rate limit discrepancies between Azure OpenAI chat completions and Responses API rate limits. Users hit 429 on one endpoint despite low usage on the other — same subscription shares rate pools. Category mapping: OpenAI API (paid enterprise service)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-28"
published_at: "2026-05-28T01:43:21.674Z"
updated_at: "2026-05-28T01:43:21.674Z"
---

## What this error means

`429 Too Many Requests — Rate limit exceeded on Azure OpenAI Responses API endpoint` is a Azure OpenAI failure pattern reported for developers trying to fix 429 rate limit errors when calling azure openai responses api (distinct from chat completions rate limits). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue on azure-rest-api-specs (#34250) filed Apr 25, 2025 reporting rate limit discrepancies between Azure OpenAI chat completions and Responses API rate limits. Users hit 429 on one endpoint despite low usage on the other — same subscription shares rate pools. Category mapping: OpenAI API (paid enterprise service).

## Common causes

- GitHub issue on azure-rest-api-specs (#34250) filed Apr 25, 2025 reporting rate limit discrepancies between Azure OpenAI chat completions and Responses API rate limits. Users hit 429 on one endpoint despite low usage on the other — same subscription shares rate pools. Category mapping: OpenAI API (paid enterprise service).

## Quick fixes

1. Confirm the exact error signature matches `429 Too Many Requests — Rate limit exceeded on Azure OpenAI Responses API endpoint`.
2. Check the Azure OpenAI account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: GitHub issue on azure-rest-api-specs (#34250) filed Apr 25, 2025 reporting rate limit discrepancies between Azure OpenAI chat completions and Responses API rate limits. Users hit 429 on one endpoint despite low usage on the other — same subscription shares rate pools. Category mapping: OpenAI API (paid enterprise service).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `429 Too Many Requests — Rate limit exceeded on Azure OpenAI Responses API endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Azure OpenAI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 Too Many Requests — Rate limit exceeded on Azure OpenAI Responses API endpoint`.
