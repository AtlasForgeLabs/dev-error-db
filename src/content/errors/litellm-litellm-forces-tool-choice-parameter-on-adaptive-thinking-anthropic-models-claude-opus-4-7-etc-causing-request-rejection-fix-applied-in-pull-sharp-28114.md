---
title: "LiteLLM Proxy Returns Incorrect Tool Choice Error for Anthropic Adaptive-Thinking Models"
description: "Fix LiteLLM proxy errors when calling Anthropic adaptive-thinking models, where LiteLLM incorrectly forces tool_choice parameter and causes API requests to be rejected by Anthropic. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM forces tool_choice parameter on adaptive-thinking Anthropic models (Claude Opus 4.7 etc.) causing request rejection — fix applied in pull #28114"
common_causes:
  - "Source: BerriAI/litellm#28114 (updated 2026-05-17). Live PR fixing LiteLLM forcing unsupported tool_choice on adaptive-thinking Anthropic models. Directly impacts paid LiteLLM proxy users — every affected request wastes tokens. This was recently fixed but developers encountering it before the fix need troubleshooting guidance. Category: LiteLLM per exact mapping."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T12:36:03.891Z"
updated_at: "2026-05-17T12:36:03.891Z"
---

## What this error means

`LiteLLM forces tool_choice parameter on adaptive-thinking Anthropic models (Claude Opus 4.7 etc.) causing request rejection — fix applied in pull #28114` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy errors when calling anthropic adaptive-thinking models, where litellm incorrectly forces tool_choice parameter and causes api requests to be rejected by anthropic.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: BerriAI/litellm#28114 (updated 2026-05-17). Live PR fixing LiteLLM forcing unsupported tool_choice on adaptive-thinking Anthropic models. Directly impacts paid LiteLLM proxy users — every affected request wastes tokens. This was recently fixed but developers encountering it before the fix need troubleshooting guidance. Category: LiteLLM per exact mapping.

## Common causes

- Source: BerriAI/litellm#28114 (updated 2026-05-17). Live PR fixing LiteLLM forcing unsupported tool_choice on adaptive-thinking Anthropic models. Directly impacts paid LiteLLM proxy users — every affected request wastes tokens. This was recently fixed but developers encountering it before the fix need troubleshooting guidance. Category: LiteLLM per exact mapping.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM forces tool_choice parameter on adaptive-thinking Anthropic models (Claude Opus 4.7 etc.) causing request rejection — fix applied in pull #28114`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/BerriAI/litellm/pull/28114

Evidence note: Source: BerriAI/litellm#28114 (updated 2026-05-17). Live PR fixing LiteLLM forcing unsupported tool_choice on adaptive-thinking Anthropic models. Directly impacts paid LiteLLM proxy users — every affected request wastes tokens. This was recently fixed but developers encountering it before the fix need troubleshooting guidance. Category: LiteLLM per exact mapping.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `LiteLLM forces tool_choice parameter on adaptive-thinking Anthropic models (Claude Opus 4.7 etc.) causing request rejection — fix applied in pull #28114` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM forces tool_choice parameter on adaptive-thinking Anthropic models (Claude Opus 4.7 etc.) causing request rejection — fix applied in pull #28114`.
