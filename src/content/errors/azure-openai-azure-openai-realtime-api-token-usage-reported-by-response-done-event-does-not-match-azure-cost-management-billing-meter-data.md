---
title: "Azure OpenAI token usage from response.done event does not match Azure Cost Management meter data"
description: "Reconcile discrepancy between API-reported token counts and Azure portal cost estimates — need to understand why client-side token counts differ from backend billing metrics Includes evidence for Azure OpenAI troubleshooting demand."
category: "Cloud Platforms"
technology: "Azure OpenAI"
error_signature: "Azure OpenAI Realtime API: Token usage reported by `response.done` event does not match Azure Cost Management billing meter data"
common_causes:
  - "Stack Overflow Q79918080 (May 2026) — Client library reports certain token counts in response.done events but Azure Cost Management shows different totals. Critical for enterprise customers managing budgets and chargebacks. Category: Cloud Platforms (Azure). Not yet covered by dev-error-db. Strong commercial value due to direct billing/finance impact."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-27"
published_at: "2026-05-27T12:43:19.992Z"
updated_at: "2026-05-27T12:43:19.992Z"
---

## What this error means

`Azure OpenAI Realtime API: Token usage reported by `response.done` event does not match Azure Cost Management billing meter data` is a Azure OpenAI failure pattern reported for developers trying to reconcile discrepancy between api-reported token counts and azure portal cost estimates — need to understand why client-side token counts differ from backend billing metrics. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q79918080 (May 2026) — Client library reports certain token counts in response.done events but Azure Cost Management shows different totals. Critical for enterprise customers managing budgets and chargebacks. Category: Cloud Platforms (Azure). Not yet covered by dev-error-db. Strong commercial value due to direct billing/finance impact.

## Common causes

- Stack Overflow Q79918080 (May 2026) — Client library reports certain token counts in response.done events but Azure Cost Management shows different totals. Critical for enterprise customers managing budgets and chargebacks. Category: Cloud Platforms (Azure). Not yet covered by dev-error-db. Strong commercial value due to direct billing/finance impact.

## Quick fixes

1. Confirm the exact error signature matches `Azure OpenAI Realtime API: Token usage reported by `response.done` event does not match Azure Cost Management billing meter data`.
2. Check the Azure OpenAI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79918080/azure-openai-realtime-api-token-usage-from-response-done-event-does-not-match

Evidence note: Stack Overflow Q79918080 (May 2026) — Client library reports certain token counts in response.done events but Azure Cost Management shows different totals. Critical for enterprise customers managing budgets and chargebacks. Category: Cloud Platforms (Azure). Not yet covered by dev-error-db. Strong commercial value due to direct billing/finance impact.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `Azure OpenAI Realtime API: Token usage reported by `response.done` event does not match Azure Cost Management billing meter data` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Azure OpenAI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Azure OpenAI Realtime API: Token usage reported by `response.done` event does not match Azure Cost Management billing meter data`.
