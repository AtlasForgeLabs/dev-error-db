---
title: "Codex usage_limit_reached 429 retries exhausted pool credential once before rotating"
description: "Fix OpenAI Codex API returning 429 usage_limit_reached; credential pool keeps retrying exhausted OAuth accounts instead of rotating to available ones Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP 429 error.type=\"usage_limit_reached\" message \"The usage limit has been reached\" — credential pool retries same exhausted account instead of immediate rotation"
common_causes:
  - "GitHub issue hermes-agent#26388 (May 15, 2026) details how AIAgent._extract_api_error_context() ignores payload['type'], so OpenAI usage_limit_reached type is lost. Pool recovery treats all 429s as transient rate_limit, retrying exhausted credentials. Merged via PR #27162. High billing/quota impact on paid users."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "OpenAI API"
updated: "2026-05-20"
published_at: "2026-05-20T19:38:30.243Z"
updated_at: "2026-05-20T19:38:30.243Z"
---

## What this error means

`HTTP 429 error.type="usage_limit_reached" message "The usage limit has been reached" — credential pool retries same exhausted account instead of immediate rotation` is a OpenAI API failure pattern reported for developers trying to fix openai codex api returning 429 usage_limit_reached; credential pool keeps retrying exhausted oauth accounts instead of rotating to available ones. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue hermes-agent#26388 (May 15, 2026) details how AIAgent._extract_api_error_context() ignores payload['type'], so OpenAI usage_limit_reached type is lost. Pool recovery treats all 429s as transient rate_limit, retrying exhausted credentials. Merged via PR #27162. High billing/quota impact on paid users.

## Common causes

- GitHub issue hermes-agent#26388 (May 15, 2026) details how AIAgent._extract_api_error_context() ignores payload['type'], so OpenAI usage_limit_reached type is lost. Pool recovery treats all 429s as transient rate_limit, retrying exhausted credentials. Merged via PR #27162. High billing/quota impact on paid users.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 429 error.type="usage_limit_reached" message "The usage limit has been reached" — credential pool retries same exhausted account instead of immediate rotation`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/NousResearch/hermes-agent/issues/26388

Evidence note: GitHub issue hermes-agent#26388 (May 15, 2026) details how AIAgent._extract_api_error_context() ignores payload['type'], so OpenAI usage_limit_reached type is lost. Pool recovery treats all 429s as transient rate_limit, retrying exhausted credentials. Merged via PR #27162. High billing/quota impact on paid users.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 429 error.type="usage_limit_reached" message "The usage limit has been reached" — credential pool retries same exhausted account instead of immediate rotation` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 429 error.type="usage_limit_reached" message "The usage limit has been reached" — credential pool retries same exhausted account instead of immediate rotation`.
