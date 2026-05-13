---
title: "LiteLLM Fireworks AI Tool Schema Rejection default null drop_params Error"
description: "Fix LiteLLM Fireworks AI tool call failures when JSON Schema contains default null in nested properties Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Fireworks AI rejects tool schemas with \"default\": null — drop_params doesn't sanitize nested schemas"
common_causes:
  - "LiteLLM proxy users routing to Fireworks AI encounter tool call failures when JSON Schema properties contain 'default: null' and 'title' fields. The drop_params setting only strips top-level unsupported parameters but fails to sanitize nested fields within tool JSON Schema, breaking AI coding tool integrations that use Claude Code."
  - "When using Claude Code with Kimi K2P6 via Fireworks AI, tool calls fail because Fireworks rejects JSON Schema properties containing 'default: null' and 'title' fields inside tool parameter definitions. drop_params: true is set but has no effect on nested fields. Issue is very recent (opened 2026-05-13)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM drop_params not working"
  - "Fireworks AI tool calling error"
  - "LiteLLM JSON Schema validation error"
updated: "2026-05-13"
published_at: "2026-05-13T07:13:16.138Z"
updated_at: "2026-05-13T07:13:16.138Z"
---

## What this error means

`Fireworks AI rejects tool schemas with "default": null — drop_params doesn't sanitize nested schemas` is a LiteLLM failure pattern reported for developers trying to fix litellm fireworks ai tool call failures when json schema contains default null in nested properties. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

When using Claude Code with Kimi K2P6 via Fireworks AI, tool calls fail because Fireworks rejects JSON Schema properties containing 'default: null' and 'title' fields inside tool parameter definitions. drop_params: true is set but has no effect on nested fields. Issue is very recent (opened 2026-05-13).

## Common causes

- LiteLLM proxy users routing to Fireworks AI encounter tool call failures when JSON Schema properties contain 'default: null' and 'title' fields. The drop_params setting only strips top-level unsupported parameters but fails to sanitize nested fields within tool JSON Schema, breaking AI coding tool integrations that use Claude Code.
- When using Claude Code with Kimi K2P6 via Fireworks AI, tool calls fail because Fireworks rejects JSON Schema properties containing 'default: null' and 'title' fields inside tool parameter definitions. drop_params: true is set but has no effect on nested fields. Issue is very recent (opened 2026-05-13).

## Quick fixes

1. Confirm the exact error signature matches `Fireworks AI rejects tool schemas with "default": null — drop_params doesn't sanitize nested schemas`.
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

Evidence note: When using Claude Code with Kimi K2P6 via Fireworks AI, tool calls fail because Fireworks rejects JSON Schema properties containing 'default: null' and 'title' fields inside tool parameter definitions. drop_params: true is set but has no effect on nested fields. Issue is very recent (opened 2026-05-13).

## Related errors

- LiteLLM drop_params not working
- Fireworks AI tool calling error
- LiteLLM JSON Schema validation error

## FAQ

### What should I check first?

Start with the exact `Fireworks AI rejects tool schemas with "default": null — drop_params doesn't sanitize nested schemas` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Fireworks AI rejects tool schemas with "default": null — drop_params doesn't sanitize nested schemas`.
