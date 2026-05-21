---
title: "LiteLLM proxy buffers Anthropic streamed responses instead of sending deltas incrementally"
description: "Production LiteLLM proxy user expects incremental streaming for Anthropic model calls but receives all content in a single buffered batch — breaks real-time chat UX Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Proxied Anthropic Response is Buffered: response is sent in one large batch despite stream=true setting; works correctly for OpenAI models under same config"
common_causes:
  - "GitHub Issue #28384 on BerriAI/litellm opened May 20, 2026 (13 hours ago) by dogmd. The bug is Anthropic-specific — OpenAI proxied calls stream fine with identical settings. User confirmed no nginx buffering (proxy_buffering off). Involves LiteLLM v1.85.0 running on Kubernetes with PostgreSQL DB. High urgency: broken streaming is critical for any production chat application using Anthropic models through LiteLLM proxy."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T09:39:44.069Z"
updated_at: "2026-05-21T09:39:44.069Z"
---

## What this error means

`Proxied Anthropic Response is Buffered: response is sent in one large batch despite stream=true setting; works correctly for OpenAI models under same config` is a LiteLLM failure pattern reported for developers trying to production litellm proxy user expects incremental streaming for anthropic model calls but receives all content in a single buffered batch — breaks real-time chat ux. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #28384 on BerriAI/litellm opened May 20, 2026 (13 hours ago) by dogmd. The bug is Anthropic-specific — OpenAI proxied calls stream fine with identical settings. User confirmed no nginx buffering (proxy_buffering off). Involves LiteLLM v1.85.0 running on Kubernetes with PostgreSQL DB. High urgency: broken streaming is critical for any production chat application using Anthropic models through LiteLLM proxy.

## Common causes

- GitHub Issue #28384 on BerriAI/litellm opened May 20, 2026 (13 hours ago) by dogmd. The bug is Anthropic-specific — OpenAI proxied calls stream fine with identical settings. User confirmed no nginx buffering (proxy_buffering off). Involves LiteLLM v1.85.0 running on Kubernetes with PostgreSQL DB. High urgency: broken streaming is critical for any production chat application using Anthropic models through LiteLLM proxy.

## Quick fixes

1. Confirm the exact error signature matches `Proxied Anthropic Response is Buffered: response is sent in one large batch despite stream=true setting; works correctly for OpenAI models under same config`.
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

- https://github.com/BerriAI/litellm/issues/28384

Evidence note: GitHub Issue #28384 on BerriAI/litellm opened May 20, 2026 (13 hours ago) by dogmd. The bug is Anthropic-specific — OpenAI proxied calls stream fine with identical settings. User confirmed no nginx buffering (proxy_buffering off). Involves LiteLLM v1.85.0 running on Kubernetes with PostgreSQL DB. High urgency: broken streaming is critical for any production chat application using Anthropic models through LiteLLM proxy.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Proxied Anthropic Response is Buffered: response is sent in one large batch despite stream=true setting; works correctly for OpenAI models under same config` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Proxied Anthropic Response is Buffered: response is sent in one large batch despite stream=true setting; works correctly for OpenAI models under same config`.
