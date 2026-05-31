---
title: "Cloudflare Workers AI returns empty content via LiteLLM OpenAI-compatible parser"
description: "Fix LiteLLM Cloudflare response parser to handle both legacy and new OpenAI-compatible response shapes from Cloudflare Workers AI models (Kimi K-2.6, GLM, Gemma-4-26B) Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Cloudflare Workers AI models return empty response through LiteLLM when using newer OpenAI-style result.choices[0].message.content shape — Legacy parser only reads result.response field"
common_causes:
  - "GitHub Issue #29353 on BerriAI/litellm (created 2026-05-30). Users report LiteLLM returns empty/no content when proxying Cloudflare Workers AI models that use the newer choices[0].message.content JSON shape instead of the legacy result.response. Direct Cloudflare API calls work fine. Category mapping: LiteLLM proxy routing failure → LiteLLM per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T00:43:30.096Z"
updated_at: "2026-05-31T00:43:30.096Z"
---

## What this error means

`Cloudflare Workers AI models return empty response through LiteLLM when using newer OpenAI-style result.choices[0].message.content shape — Legacy parser only reads result.response field` is a LiteLLM failure pattern reported for developers trying to fix litellm cloudflare response parser to handle both legacy and new openai-compatible response shapes from cloudflare workers ai models (kimi k-2.6, glm, gemma-4-26b). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #29353 on BerriAI/litellm (created 2026-05-30). Users report LiteLLM returns empty/no content when proxying Cloudflare Workers AI models that use the newer choices[0].message.content JSON shape instead of the legacy result.response. Direct Cloudflare API calls work fine. Category mapping: LiteLLM proxy routing failure → LiteLLM per SKILL.md.

## Common causes

- GitHub Issue #29353 on BerriAI/litellm (created 2026-05-30). Users report LiteLLM returns empty/no content when proxying Cloudflare Workers AI models that use the newer choices[0].message.content JSON shape instead of the legacy result.response. Direct Cloudflare API calls work fine. Category mapping: LiteLLM proxy routing failure → LiteLLM per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `Cloudflare Workers AI models return empty response through LiteLLM when using newer OpenAI-style result.choices[0].message.content shape — Legacy parser only reads result.response field`.
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

- https://github.com/BerriAI/litellm/issues/29353

Evidence note: GitHub Issue #29353 on BerriAI/litellm (created 2026-05-30). Users report LiteLLM returns empty/no content when proxying Cloudflare Workers AI models that use the newer choices[0].message.content JSON shape instead of the legacy result.response. Direct Cloudflare API calls work fine. Category mapping: LiteLLM proxy routing failure → LiteLLM per SKILL.md.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Cloudflare Workers AI models return empty response through LiteLLM when using newer OpenAI-style result.choices[0].message.content shape — Legacy parser only reads result.response field` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cloudflare Workers AI models return empty response through LiteLLM when using newer OpenAI-style result.choices[0].message.content shape — Legacy parser only reads result.response field`.
