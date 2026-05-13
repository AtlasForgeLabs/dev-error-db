---
title: "Fireworks AI Tool Schema Rejection with drop_params Not Sanitizing Nested Schemas"
description: "Fix Fireworks AI tool call failures when JSON Schema properties contain default:null and title fields that drop_params doesn't sanitize Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Fireworks AI rejects tool schemas with 'default': null and 'title' in JSON Schema properties"
common_causes:
  - "Developers using Claude Code with Kimi K2 via Fireworks AI through LiteLLM get tool call failures. The drop_params setting doesn't sanitize nested schema properties, breaking tool-using workflows."
  - "Open issue on BerriAI/litellm. Fireworks AI rejects tool schemas containing 'default': null and 'title' in JSON Schema properties. drop_params: true doesn't sanitize nested schemas. Affects Claude Code + Kimi K2 workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM drop_params nested schema"
  - "Fireworks AI tool schema validation"
  - "LiteLLM JSON Schema sanitization"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`Fireworks AI rejects tool schemas with 'default': null and 'title' in JSON Schema properties` is a LiteLLM failure pattern reported for developers trying to fix fireworks ai tool call failures when json schema properties contain default:null and title fields that drop_params doesn't sanitize. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on BerriAI/litellm. Fireworks AI rejects tool schemas containing 'default': null and 'title' in JSON Schema properties. drop_params: true doesn't sanitize nested schemas. Affects Claude Code + Kimi K2 workflows.

## Common causes

- Developers using Claude Code with Kimi K2 via Fireworks AI through LiteLLM get tool call failures. The drop_params setting doesn't sanitize nested schema properties, breaking tool-using workflows.
- Open issue on BerriAI/litellm. Fireworks AI rejects tool schemas containing 'default': null and 'title' in JSON Schema properties. drop_params: true doesn't sanitize nested schemas. Affects Claude Code + Kimi K2 workflows.

## Quick fixes

1. Confirm the exact error signature matches `Fireworks AI rejects tool schemas with 'default': null and 'title' in JSON Schema properties`.
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

- https://github.com/BerriAI/litellm/issues/27821

Evidence note: Open issue on BerriAI/litellm. Fireworks AI rejects tool schemas containing 'default': null and 'title' in JSON Schema properties. drop_params: true doesn't sanitize nested schemas. Affects Claude Code + Kimi K2 workflows.

## Related errors

- LiteLLM drop_params nested schema
- Fireworks AI tool schema validation
- LiteLLM JSON Schema sanitization

## FAQ

### What should I check first?

Start with the exact `Fireworks AI rejects tool schemas with 'default': null and 'title' in JSON Schema properties` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Fireworks AI rejects tool schemas with 'default': null and 'title' in JSON Schema properties`.
