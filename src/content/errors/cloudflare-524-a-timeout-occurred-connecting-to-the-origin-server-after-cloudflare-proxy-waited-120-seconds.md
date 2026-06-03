---
title: "Cloudflare 524 Timeout When Proxying Long-Running AI API Requests via NewAPI"
description: "Handle Cloudflare 524 timeout errors when making long-running LLM inference requests through the Cloudflare proxy layer, which cuts off responses before they complete Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "524 A timeout occurred connecting to the origin server after Cloudflare proxy waited 120 seconds"
common_causes:
  - "GitHub Issue QuantumNous/new-api#4972 (May 19 2026) reports Cloudflare proxy returning 524 errors when AI model inference takes longer than 120 seconds. Also confirmed by NousResearch/hermes-agent#23566 (May 10). Multiple Reddit threads report the same pattern. Directly affects production systems routing large-model inference through Cloudflare."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-03"
published_at: "2026-06-03T19:44:33.643Z"
updated_at: "2026-06-03T19:44:33.643Z"
---

## What this error means

`524 A timeout occurred connecting to the origin server after Cloudflare proxy waited 120 seconds` is a Cloudflare failure pattern reported for developers trying to handle cloudflare 524 timeout errors when making long-running llm inference requests through the cloudflare proxy layer, which cuts off responses before they complete. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue QuantumNous/new-api#4972 (May 19 2026) reports Cloudflare proxy returning 524 errors when AI model inference takes longer than 120 seconds. Also confirmed by NousResearch/hermes-agent#23566 (May 10). Multiple Reddit threads report the same pattern. Directly affects production systems routing large-model inference through Cloudflare.

## Common causes

- GitHub Issue QuantumNous/new-api#4972 (May 19 2026) reports Cloudflare proxy returning 524 errors when AI model inference takes longer than 120 seconds. Also confirmed by NousResearch/hermes-agent#23566 (May 10). Multiple Reddit threads report the same pattern. Directly affects production systems routing large-model inference through Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `524 A timeout occurred connecting to the origin server after Cloudflare proxy waited 120 seconds`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/QuantumNous/new-api/issues/4972
- https://github.com/NousResearch/hermes-agent/issues/23566

Evidence note: GitHub Issue QuantumNous/new-api#4972 (May 19 2026) reports Cloudflare proxy returning 524 errors when AI model inference takes longer than 120 seconds. Also confirmed by NousResearch/hermes-agent#23566 (May 10). Multiple Reddit threads report the same pattern. Directly affects production systems routing large-model inference through Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `524 A timeout occurred connecting to the origin server after Cloudflare proxy waited 120 seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `524 A timeout occurred connecting to the origin server after Cloudflare proxy waited 120 seconds`.
