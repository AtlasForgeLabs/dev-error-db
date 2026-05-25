---
title: "Anthropic API 429 Too Many Requests — Spend Limits vs Rate Limits"
description: "Distinguish between Anthropic spend limits (monthly $ cap) and rate limits (token bucket algorithm on RPM/ITPM/OTPM), understand usage tier auto-scaling ($100→$500→$1000→$5000), and implement backoff strategies. Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "429 Too Many Requests — exceeded requests per minute (RPM), input tokens per minute (ITPM), or output tokens per minute (OTPM)"
common_causes:
  - "Source: markaicode.com via web_fetch (Tier 1). Clear distinction between two limit types unique to Anthropic, token bucket explanation, burst request triggers, underestimation OTPM edge case, cache_read_input_tokens counting toward ITPM. P0 technology. Not duplicated in covered-errors.md."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Anthropic API"
updated: "2026-05-25"
published_at: "2026-05-25T07:43:13.111Z"
updated_at: "2026-05-25T07:43:13.111Z"
---

## What this error means

`429 Too Many Requests — exceeded requests per minute (RPM), input tokens per minute (ITPM), or output tokens per minute (OTPM)` is a Anthropic API failure pattern reported for developers trying to distinguish between anthropic spend limits (monthly $ cap) and rate limits (token bucket algorithm on rpm/itpm/otpm), understand usage tier auto-scaling ($100→$500→$1000→$5000), and implement backoff strategies.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: markaicode.com via web_fetch (Tier 1). Clear distinction between two limit types unique to Anthropic, token bucket explanation, burst request triggers, underestimation OTPM edge case, cache_read_input_tokens counting toward ITPM. P0 technology. Not duplicated in covered-errors.md.

## Common causes

- Source: markaicode.com via web_fetch (Tier 1). Clear distinction between two limit types unique to Anthropic, token bucket explanation, burst request triggers, underestimation OTPM edge case, cache_read_input_tokens counting toward ITPM. P0 technology. Not duplicated in covered-errors.md.

## Quick fixes

1. Confirm the exact error signature matches `429 Too Many Requests — exceeded requests per minute (RPM), input tokens per minute (ITPM), or output tokens per minute (OTPM)`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://markaicode.com/anthropic-api-rate-limits-429-errors/

Evidence note: Source: markaicode.com via web_fetch (Tier 1). Clear distinction between two limit types unique to Anthropic, token bucket explanation, burst request triggers, underestimation OTPM edge case, cache_read_input_tokens counting toward ITPM. P0 technology. Not duplicated in covered-errors.md.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `429 Too Many Requests — exceeded requests per minute (RPM), input tokens per minute (ITPM), or output tokens per minute (OTPM)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 Too Many Requests — exceeded requests per minute (RPM), input tokens per minute (ITPM), or output tokens per minute (OTPM)`.
