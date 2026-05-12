---
title: "LiteLLM Presidio Guardrail PII Masking Broken with Anthropic Native API"
description: "Fix LiteLLM Presidio PII guardrail not working with Anthropic native API path Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Presidio guardrail: PII masked on input but never unmasked in responses, 400 error with tools"
common_causes:
  - "PII masking is a critical security/compliance feature for enterprise users of LiteLLM proxy. When it silently fails, sensitive data leaks — a severe compliance risk."
  - "When using Anthropic native API path with Presidio guardrail and output_parse_pii=true, PII is masked on input but never unmasked in responses. Using tools (e.g. via Claude Code) causes 400 error."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM guardrail bypass"
  - "LiteLLM PII leak"
  - "LiteLLM Anthropic 400 error"
updated: "2026-05-12"
published_at: "2026-05-12T04:10:49.025Z"
updated_at: "2026-05-12T04:10:49.025Z"
---

## What this error means

`Presidio guardrail: PII masked on input but never unmasked in responses, 400 error with tools` is a LiteLLM failure pattern reported for developers trying to fix litellm presidio pii guardrail not working with anthropic native api path. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

When using Anthropic native API path with Presidio guardrail and output_parse_pii=true, PII is masked on input but never unmasked in responses. Using tools (e.g. via Claude Code) causes 400 error.

## Common causes

- PII masking is a critical security/compliance feature for enterprise users of LiteLLM proxy. When it silently fails, sensitive data leaks — a severe compliance risk.
- When using Anthropic native API path with Presidio guardrail and output_parse_pii=true, PII is masked on input but never unmasked in responses. Using tools (e.g. via Claude Code) causes 400 error.

## Quick fixes

1. Confirm the exact error signature matches `Presidio guardrail: PII masked on input but never unmasked in responses, 400 error with tools`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/22821

Evidence note: When using Anthropic native API path with Presidio guardrail and output_parse_pii=true, PII is masked on input but never unmasked in responses. Using tools (e.g. via Claude Code) causes 400 error.

## Related errors

- LiteLLM guardrail bypass
- LiteLLM PII leak
- LiteLLM Anthropic 400 error

## FAQ

### What should I check first?

Start with the exact `Presidio guardrail: PII masked on input but never unmasked in responses, 400 error with tools` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Presidio guardrail: PII masked on input but never unmasked in responses, 400 error with tools`.
