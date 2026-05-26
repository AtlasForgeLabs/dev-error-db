---
title: "LiteLLM input_cost_per_token_cache_hit Dead Field — Silent Under-Billing for Cache Hits"
description: "DevOps engineer running LiteLLM proxy notices unexpected low costs; discovered that the input_cost_per_token_cache_hit pricing field is defined but dead code causes cache-hit tokens to be billed at zero — silently under-billing by potentially huge margins. Includes evidence for LiteLLM Proxy troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM Proxy"
error_signature: "input_cost_per_token_cache_hit is declared in ModelInfoBase schema but never consumed by cost calculator; prompt-cache-hit tokens silently cost $0 instead of charged rate"
common_causes:
  - "Found via GitHub API on BerriAI/litellm/issues/28854 (2026-05-26). The field input_cost_per_token_cache_hit is declared in the pricing schema ModelInfoBase and accepted by the allowlist, but NO code path reads it. When a model declares only this legacy key, cache_read_input_token_cost resolves to None→0.0, so all cached prompt tokens are free. With high-volume LiteLLM proxy deployments this translates to real revenue loss. Category: LiteLLM — Proxy billing bug with direct financial impact on operators running LiteLLM as a monetization layer."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T09:43:16.508Z"
updated_at: "2026-05-26T09:43:16.508Z"
---

## What this error means

`input_cost_per_token_cache_hit is declared in ModelInfoBase schema but never consumed by cost calculator; prompt-cache-hit tokens silently cost $0 instead of charged rate` is a LiteLLM Proxy failure pattern reported for developers trying to devops engineer running litellm proxy notices unexpected low costs; discovered that the input_cost_per_token_cache_hit pricing field is defined but dead code causes cache-hit tokens to be billed at zero — silently under-billing by potentially huge margins.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub API on BerriAI/litellm/issues/28854 (2026-05-26). The field input_cost_per_token_cache_hit is declared in the pricing schema ModelInfoBase and accepted by the allowlist, but NO code path reads it. When a model declares only this legacy key, cache_read_input_token_cost resolves to None→0.0, so all cached prompt tokens are free. With high-volume LiteLLM proxy deployments this translates to real revenue loss. Category: LiteLLM — Proxy billing bug with direct financial impact on operators running LiteLLM as a monetization layer.

## Common causes

- Found via GitHub API on BerriAI/litellm/issues/28854 (2026-05-26). The field input_cost_per_token_cache_hit is declared in the pricing schema ModelInfoBase and accepted by the allowlist, but NO code path reads it. When a model declares only this legacy key, cache_read_input_token_cost resolves to None→0.0, so all cached prompt tokens are free. With high-volume LiteLLM proxy deployments this translates to real revenue loss. Category: LiteLLM — Proxy billing bug with direct financial impact on operators running LiteLLM as a monetization layer.

## Quick fixes

1. Confirm the exact error signature matches `input_cost_per_token_cache_hit is declared in ModelInfoBase schema but never consumed by cost calculator; prompt-cache-hit tokens silently cost $0 instead of charged rate`.
2. Check the LiteLLM Proxy account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/28854

Evidence note: Found via GitHub API on BerriAI/litellm/issues/28854 (2026-05-26). The field input_cost_per_token_cache_hit is declared in the pricing schema ModelInfoBase and accepted by the allowlist, but NO code path reads it. When a model declares only this legacy key, cache_read_input_token_cost resolves to None→0.0, so all cached prompt tokens are free. With high-volume LiteLLM proxy deployments this translates to real revenue loss. Category: LiteLLM — Proxy billing bug with direct financial impact on operators running LiteLLM as a monetization layer.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `input_cost_per_token_cache_hit is declared in ModelInfoBase schema but never consumed by cost calculator; prompt-cache-hit tokens silently cost $0 instead of charged rate` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM Proxy workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `input_cost_per_token_cache_hit is declared in ModelInfoBase schema but never consumed by cost calculator; prompt-cache-hit tokens silently cost $0 instead of charged rate`.
