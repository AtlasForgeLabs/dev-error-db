---
title: "Portkey Gateway rewrites service_tier to deprecated Anthropic 'speed' field causing 400 errors"
description: "Fix Anthropic API 400 error when using service_tier through Portkey gateway Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Claude API 400 Bad Request — service_tier rewritten to deprecated 'speed' field"
common_causes:
  - "Developers using Portkey as an LLM gateway to route requests to the Anthropic API receive HTTP 400 errors because Portkey incorrectly translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field. This makes Priority Tier (fast mode) completely unreachable through the gateway, blocking production workloads that depend on reduced latency."
  - "Official Portkey-AI/gateway GitHub issue. Portkey gateway translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field per docs-core #869, but Anthropic's Messages API no longer accepts 'speed' — it uses service_tier natively. Result: any request with service_tier set returns HTTP 400. Priority Tier unreachable through gateway."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API 400 error through proxy"
  - "Portkey gateway Anthropic routing error"
  - "Anthropic service_tier not working with OpenAI SDK"
updated: "2026-05-12"
published_at: "2026-05-12T21:12:18.504Z"
updated_at: "2026-05-12T21:12:18.504Z"
---

## What this error means

`Claude API 400 Bad Request — service_tier rewritten to deprecated 'speed' field` is a Anthropic API failure pattern reported for developers trying to fix anthropic api 400 error when using service_tier through portkey gateway. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Portkey-AI/gateway GitHub issue. Portkey gateway translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field per docs-core #869, but Anthropic's Messages API no longer accepts 'speed' — it uses service_tier natively. Result: any request with service_tier set returns HTTP 400. Priority Tier unreachable through gateway.

## Common causes

- Developers using Portkey as an LLM gateway to route requests to the Anthropic API receive HTTP 400 errors because Portkey incorrectly translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field. This makes Priority Tier (fast mode) completely unreachable through the gateway, blocking production workloads that depend on reduced latency.
- Official Portkey-AI/gateway GitHub issue. Portkey gateway translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field per docs-core #869, but Anthropic's Messages API no longer accepts 'speed' — it uses service_tier natively. Result: any request with service_tier set returns HTTP 400. Priority Tier unreachable through gateway.

## Quick fixes

1. Confirm the exact error signature matches `Claude API 400 Bad Request — service_tier rewritten to deprecated 'speed' field`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/Portkey-AI/gateway/issues/1645

Evidence note: Official Portkey-AI/gateway GitHub issue. Portkey gateway translates OpenAI-style service_tier to Anthropic's deprecated 'speed' field per docs-core #869, but Anthropic's Messages API no longer accepts 'speed' — it uses service_tier natively. Result: any request with service_tier set returns HTTP 400. Priority Tier unreachable through gateway.

## Related errors

- Anthropic API 400 error through proxy
- Portkey gateway Anthropic routing error
- Anthropic service_tier not working with OpenAI SDK

## FAQ

### What should I check first?

Start with the exact `Claude API 400 Bad Request — service_tier rewritten to deprecated 'speed' field` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Claude API 400 Bad Request — service_tier rewritten to deprecated 'speed' field`.
