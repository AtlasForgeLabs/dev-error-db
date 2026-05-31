---
title: "Hermes Agent HTTP 402 Retried as Transient Error Causes Runaway Token Spend on OpenRouter"
description: "Fix retry logic that treats HTTP 402 payment-required as transient, causing runaway API spend when user runs out of credits Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "HTTP 402 (payment required) incorrectly retried as transient error — 'Please top up your balance and try again.' — ~$40 burned in ~48 hours"
common_causes:
  - "Issue #31273 in hermes-agent: LLM provider returns 402 (Payment Required), but Hermes retries up to agent.api_max_retries (default: 3) treating it as transient rate-limit. Real cost: $40 burned in ~48 hours on 24/7 gateway deployment. Applies to any pay-per-token provider via OpenRouter. Distinct from general 429/429 — this is a billing/paywall error being misclassified. Category: OpenAI API (OpenRouter routed)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T14:44:24.807Z"
updated_at: "2026-05-31T14:44:24.807Z"
---

## What this error means

`HTTP 402 (payment required) incorrectly retried as transient error — 'Please top up your balance and try again.' — ~$40 burned in ~48 hours` is a OpenRouter failure pattern reported for developers trying to fix retry logic that treats http 402 payment-required as transient, causing runaway api spend when user runs out of credits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #31273 in hermes-agent: LLM provider returns 402 (Payment Required), but Hermes retries up to agent.api_max_retries (default: 3) treating it as transient rate-limit. Real cost: $40 burned in ~48 hours on 24/7 gateway deployment. Applies to any pay-per-token provider via OpenRouter. Distinct from general 429/429 — this is a billing/paywall error being misclassified. Category: OpenAI API (OpenRouter routed).

## Common causes

- Issue #31273 in hermes-agent: LLM provider returns 402 (Payment Required), but Hermes retries up to agent.api_max_retries (default: 3) treating it as transient rate-limit. Real cost: $40 burned in ~48 hours on 24/7 gateway deployment. Applies to any pay-per-token provider via OpenRouter. Distinct from general 429/429 — this is a billing/paywall error being misclassified. Category: OpenAI API (OpenRouter routed).

## Quick fixes

1. Confirm the exact error signature matches `HTTP 402 (payment required) incorrectly retried as transient error — 'Please top up your balance and try again.' — ~$40 burned in ~48 hours`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/NousResearch/hermes-agent/issues/31273

Evidence note: Issue #31273 in hermes-agent: LLM provider returns 402 (Payment Required), but Hermes retries up to agent.api_max_retries (default: 3) treating it as transient rate-limit. Real cost: $40 burned in ~48 hours on 24/7 gateway deployment. Applies to any pay-per-token provider via OpenRouter. Distinct from general 429/429 — this is a billing/paywall error being misclassified. Category: OpenAI API (OpenRouter routed).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 402 (payment required) incorrectly retried as transient error — 'Please top up your balance and try again.' — ~$40 burned in ~48 hours` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 402 (payment required) incorrectly retried as transient error — 'Please top up your balance and try again.' — ~$40 burned in ~48 hours`.
