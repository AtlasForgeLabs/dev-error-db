---
title: "LiteLLM v1.84.0 Vertex AI models incorrectly reported as Unhealthy in Model Health Status dashboard"
description: "Fix LiteLLM model health monitoring regression where Vertex AI models falsely report unhealthy status Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Vertex AI models show as 'Unhealthy' in Model Health Status dashboard since v1.84.0; health check returns healthy_count: 0 and unhealthy_count: 0 despite models being operational"
common_causes:
  - "Issue #28206 on BerriAI/litellm (labels: bug, proxy, llm translation). Proxy monitoring false positive affects LLM routing reliability for teams using Vertex AI via LiteLLM. Recent regression (v1.84.0). Tier 0 API fetched. Category: LiteLLM (exact match)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T04:43:15.855Z"
updated_at: "2026-05-26T04:43:15.855Z"
---

## What this error means

`Vertex AI models show as 'Unhealthy' in Model Health Status dashboard since v1.84.0; health check returns healthy_count: 0 and unhealthy_count: 0 despite models being operational` is a LiteLLM failure pattern reported for developers trying to fix litellm model health monitoring regression where vertex ai models falsely report unhealthy status. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #28206 on BerriAI/litellm (labels: bug, proxy, llm translation). Proxy monitoring false positive affects LLM routing reliability for teams using Vertex AI via LiteLLM. Recent regression (v1.84.0). Tier 0 API fetched. Category: LiteLLM (exact match).

## Common causes

- Issue #28206 on BerriAI/litellm (labels: bug, proxy, llm translation). Proxy monitoring false positive affects LLM routing reliability for teams using Vertex AI via LiteLLM. Recent regression (v1.84.0). Tier 0 API fetched. Category: LiteLLM (exact match).

## Quick fixes

1. Confirm the exact error signature matches `Vertex AI models show as 'Unhealthy' in Model Health Status dashboard since v1.84.0; health check returns healthy_count: 0 and unhealthy_count: 0 despite models being operational`.
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

- https://github.com/BerriAI/litellm/issues/28206

Evidence note: Issue #28206 on BerriAI/litellm (labels: bug, proxy, llm translation). Proxy monitoring false positive affects LLM routing reliability for teams using Vertex AI via LiteLLM. Recent regression (v1.84.0). Tier 0 API fetched. Category: LiteLLM (exact match).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Vertex AI models show as 'Unhealthy' in Model Health Status dashboard since v1.84.0; health check returns healthy_count: 0 and unhealthy_count: 0 despite models being operational` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Vertex AI models show as 'Unhealthy' in Model Health Status dashboard since v1.84.0; health check returns healthy_count: 0 and unhealthy_count: 0 despite models being operational`.
