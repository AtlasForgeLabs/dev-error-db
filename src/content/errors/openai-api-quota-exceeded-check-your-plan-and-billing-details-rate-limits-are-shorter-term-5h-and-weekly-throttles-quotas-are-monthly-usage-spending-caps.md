---
title: "OpenAI Codex Quota Exceeded — rate limit vs spending cap confusion blocks developers"
description: "Developer needs to understand and fix OpenAI quota vs rate limit errors when building with Codex CLI or API Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Quota exceeded. Check your plan and billing details. Rate limits are shorter-term (5h and weekly) throttles; quotas are monthly usage/spending caps"
common_causes:
  - "GitHub issue #6792 on openai/codex documents recurring confusion between rate limits and quotas — users hit 'Quota exceeded' after paying for a plan but have reached monthly spend caps. Extremely high commercial intent as it directly impacts paying users. Category: OpenAI API."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-06-01"
published_at: "2026-06-01T12:44:26.958Z"
updated_at: "2026-06-01T12:44:26.958Z"
---

## What this error means

`Quota exceeded. Check your plan and billing details. Rate limits are shorter-term (5h and weekly) throttles; quotas are monthly usage/spending caps` is a OpenAI API failure pattern reported for developers trying to developer needs to understand and fix openai quota vs rate limit errors when building with codex cli or api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #6792 on openai/codex documents recurring confusion between rate limits and quotas — users hit 'Quota exceeded' after paying for a plan but have reached monthly spend caps. Extremely high commercial intent as it directly impacts paying users. Category: OpenAI API.

## Common causes

- GitHub issue #6792 on openai/codex documents recurring confusion between rate limits and quotas — users hit 'Quota exceeded' after paying for a plan but have reached monthly spend caps. Extremely high commercial intent as it directly impacts paying users. Category: OpenAI API.

## Quick fixes

1. Confirm the exact error signature matches `Quota exceeded. Check your plan and billing details. Rate limits are shorter-term (5h and weekly) throttles; quotas are monthly usage/spending caps`.
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

- https://github.com/openai/codex/issues/6792

Evidence note: GitHub issue #6792 on openai/codex documents recurring confusion between rate limits and quotas — users hit 'Quota exceeded' after paying for a plan but have reached monthly spend caps. Extremely high commercial intent as it directly impacts paying users. Category: OpenAI API.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Quota exceeded. Check your plan and billing details. Rate limits are shorter-term (5h and weekly) throttles; quotas are monthly usage/spending caps` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Quota exceeded. Check your plan and billing details. Rate limits are shorter-term (5h and weekly) throttles; quotas are monthly usage/spending caps`.
