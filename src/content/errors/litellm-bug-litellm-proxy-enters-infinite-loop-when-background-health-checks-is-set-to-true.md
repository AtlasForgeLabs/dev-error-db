---
title: "LiteLLM Background Health Check Infinite Loop on Model Verification"
description: "Fix LiteLLM proxy entering infinite health check loop after setting background_health_checks: true, blocking model provisioning and API availability Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "[Bug]: LiteLLM proxy enters infinite loop when background_health_checks is set to true"
common_causes:
  - "Found in BerriAI/litellm GitHub issue #8248 (Feb 4, 2025). When background_health_checks=true is set in LiteLLM docker configuration, the proxy enters a continuous loop checking models, preventing normal operation. Critical for enterprise users running LiteLLM as their LLM gateway since a broken proxy means ALL downstream services lose access to LLM APIs. Commercial value is high due to proxy billing and cost tracking disruption. Category mapping: LiteLLM proxy/server errors → LiteLLM per exact SKILL.md mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-17"
published_at: "2026-05-17T19:37:10.847Z"
updated_at: "2026-05-17T19:37:10.847Z"
---

## What this error means

`[Bug]: LiteLLM proxy enters infinite loop when background_health_checks is set to true` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy entering infinite health check loop after setting background_health_checks: true, blocking model provisioning and api availability. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in BerriAI/litellm GitHub issue #8248 (Feb 4, 2025). When background_health_checks=true is set in LiteLLM docker configuration, the proxy enters a continuous loop checking models, preventing normal operation. Critical for enterprise users running LiteLLM as their LLM gateway since a broken proxy means ALL downstream services lose access to LLM APIs. Commercial value is high due to proxy billing and cost tracking disruption. Category mapping: LiteLLM proxy/server errors → LiteLLM per exact SKILL.md mapping.

## Common causes

- Found in BerriAI/litellm GitHub issue #8248 (Feb 4, 2025). When background_health_checks=true is set in LiteLLM docker configuration, the proxy enters a continuous loop checking models, preventing normal operation. Critical for enterprise users running LiteLLM as their LLM gateway since a broken proxy means ALL downstream services lose access to LLM APIs. Commercial value is high due to proxy billing and cost tracking disruption. Category mapping: LiteLLM proxy/server errors → LiteLLM per exact SKILL.md mapping.

## Quick fixes

1. Confirm the exact error signature matches `[Bug]: LiteLLM proxy enters infinite loop when background_health_checks is set to true`.
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

- https://github.com/BerriAI/litellm/issues/8248

Evidence note: Found in BerriAI/litellm GitHub issue #8248 (Feb 4, 2025). When background_health_checks=true is set in LiteLLM docker configuration, the proxy enters a continuous loop checking models, preventing normal operation. Critical for enterprise users running LiteLLM as their LLM gateway since a broken proxy means ALL downstream services lose access to LLM APIs. Commercial value is high due to proxy billing and cost tracking disruption. Category mapping: LiteLLM proxy/server errors → LiteLLM per exact SKILL.md mapping.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `[Bug]: LiteLLM proxy enters infinite loop when background_health_checks is set to true` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Bug]: LiteLLM proxy enters infinite loop when background_health_checks is set to true`.
