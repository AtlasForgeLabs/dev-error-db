---
title: "Claude Code plan upgrade payment fails — PaymentIntent voided immediately with void_invoice before confirm"
description: "Fix Claude Code plan upgrade payment failure with Stripe PaymentIntent voided Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Stripe payment_intent_unexpected_state: This PaymentIntent's mandate_data could not be updated because it has a status of canceled"
common_causes:
  - "Users attempting to upgrade from Pro ($20) to Max ($100) plan on claude.ai encounter payment failure due to Stripe PaymentIntent being auto-canceled before confirm completes"
  - "18 reactions. PaymentIntent auto-canceled with reason 'void_invoice' within seconds of creation. Stripe error: payment_intent_unexpected_state. Affects Pro to Max upgrade flow on claude.ai billing."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API credit_balance_too_low"
  - "Claude Code billing discrepancy"
updated: "2026-05-14"
published_at: "2026-05-14T09:13:19.404Z"
updated_at: "2026-05-14T09:13:19.404Z"
---

## What this error means

`Stripe payment_intent_unexpected_state: This PaymentIntent's mandate_data could not be updated because it has a status of canceled` is a Claude Code failure pattern reported for developers trying to fix claude code plan upgrade payment failure with stripe paymentintent voided. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

18 reactions. PaymentIntent auto-canceled with reason 'void_invoice' within seconds of creation. Stripe error: payment_intent_unexpected_state. Affects Pro to Max upgrade flow on claude.ai billing.

## Common causes

- Users attempting to upgrade from Pro ($20) to Max ($100) plan on claude.ai encounter payment failure due to Stripe PaymentIntent being auto-canceled before confirm completes
- 18 reactions. PaymentIntent auto-canceled with reason 'void_invoice' within seconds of creation. Stripe error: payment_intent_unexpected_state. Affects Pro to Max upgrade flow on claude.ai billing.

## Quick fixes

1. Confirm the exact error signature matches `Stripe payment_intent_unexpected_state: This PaymentIntent's mandate_data could not be updated because it has a status of canceled`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/55982

Evidence note: 18 reactions. PaymentIntent auto-canceled with reason 'void_invoice' within seconds of creation. Stripe error: payment_intent_unexpected_state. Affects Pro to Max upgrade flow on claude.ai billing.

## Related errors

- Anthropic API credit_balance_too_low
- Claude Code billing discrepancy

## FAQ

### What should I check first?

Start with the exact `Stripe payment_intent_unexpected_state: This PaymentIntent's mandate_data could not be updated because it has a status of canceled` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Stripe payment_intent_unexpected_state: This PaymentIntent's mandate_data could not be updated because it has a status of canceled`.
