---
title: "Azure OpenAI Realtime API token usage mismatch between response.done server event and actual consumption"
description: "Understand why Azure OpenAI Realtime API token counts from the response.done event don't match expected/consumed tokens; fix billing measurement accuracy Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "response.done server event usage object does not match actual token consumption — measuring token usage via OpenAI.Realtime .NET SDK shows discrepancy between reported and expected values"
common_causes:
  - "Stack Overflow question (id 79918080) asked Apr 1 2025: developer using Azure OpenAI Realtime C# SDK logs token usage from response_done events and finds discrepancies. Real-time audio sessions are high-value production use cases. Category: OpenAI API per mapping rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-20"
published_at: "2026-05-20T12:38:29.459Z"
updated_at: "2026-05-20T12:38:29.459Z"
---

## What this error means

`response.done server event usage object does not match actual token consumption — measuring token usage via OpenAI.Realtime .NET SDK shows discrepancy between reported and expected values` is a OpenAI API failure pattern reported for developers trying to understand why azure openai realtime api token counts from the response.done event don't match expected/consumed tokens; fix billing measurement accuracy. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow question (id 79918080) asked Apr 1 2025: developer using Azure OpenAI Realtime C# SDK logs token usage from response_done events and finds discrepancies. Real-time audio sessions are high-value production use cases. Category: OpenAI API per mapping rules.

## Common causes

- Stack Overflow question (id 79918080) asked Apr 1 2025: developer using Azure OpenAI Realtime C# SDK logs token usage from response_done events and finds discrepancies. Real-time audio sessions are high-value production use cases. Category: OpenAI API per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `response.done server event usage object does not match actual token consumption — measuring token usage via OpenAI.Realtime .NET SDK shows discrepancy between reported and expected values`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: Stack Overflow question (id 79918080) asked Apr 1 2025: developer using Azure OpenAI Realtime C# SDK logs token usage from response_done events and finds discrepancies. Real-time audio sessions are high-value production use cases. Category: OpenAI API per mapping rules.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `response.done server event usage object does not match actual token consumption — measuring token usage via OpenAI.Realtime .NET SDK shows discrepancy between reported and expected values` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `response.done server event usage object does not match actual token consumption — measuring token usage via OpenAI.Realtime .NET SDK shows discrepancy between reported and expected values`.
