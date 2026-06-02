---
title: "LiteLLM Streaming Mid-Session 429 Rate Limit Does Not Trigger Fallback Correctly"
description: "Using LiteLLM proxy with Pydantic-AI agent, when 429 rate limit hit during ACTIVE streaming, fallback to next model in the chain fails — session continues failing instead of switching models mid-stream Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.RateLimitError: vertex_ai_beta Exception 429 RESOURCE_EXHAUSTED — fallback to next model during active streaming does not work"
common_causes:
  - "GitHub issue #20870 on BerriAI/litellm (Feb 2026) documents this bug. Fix commits (#22296, #22297) added mid-stream fallback for deferred-HTTP providers in async streaming plus 429 handling for all streaming modes. User reports gemini-3-flash hitting quota with RESOURCE_EXHAUSTED status while fallback should kick in. LiteLLM proxy load balancing docs show order-based fallback exists but mid-stream gap confirmed as bug. Category: LiteLLM per mapping."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "LiteLLM"
updated: "2026-06-02"
published_at: "2026-06-02T03:44:28.659Z"
updated_at: "2026-06-02T03:44:28.659Z"
---

## What this error means

`litellm.RateLimitError: vertex_ai_beta Exception 429 RESOURCE_EXHAUSTED — fallback to next model during active streaming does not work` is a LiteLLM failure pattern reported for developers trying to using litellm proxy with pydantic-ai agent, when 429 rate limit hit during active streaming, fallback to next model in the chain fails — session continues failing instead of switching models mid-stream. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20870 on BerriAI/litellm (Feb 2026) documents this bug. Fix commits (#22296, #22297) added mid-stream fallback for deferred-HTTP providers in async streaming plus 429 handling for all streaming modes. User reports gemini-3-flash hitting quota with RESOURCE_EXHAUSTED status while fallback should kick in. LiteLLM proxy load balancing docs show order-based fallback exists but mid-stream gap confirmed as bug. Category: LiteLLM per mapping.

## Common causes

- GitHub issue #20870 on BerriAI/litellm (Feb 2026) documents this bug. Fix commits (#22296, #22297) added mid-stream fallback for deferred-HTTP providers in async streaming plus 429 handling for all streaming modes. User reports gemini-3-flash hitting quota with RESOURCE_EXHAUSTED status while fallback should kick in. LiteLLM proxy load balancing docs show order-based fallback exists but mid-stream gap confirmed as bug. Category: LiteLLM per mapping.

## Quick fixes

1. Confirm the exact error signature matches `litellm.RateLimitError: vertex_ai_beta Exception 429 RESOURCE_EXHAUSTED — fallback to next model during active streaming does not work`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/BerriAI/litellm/issues/20870
- https://docs.litellm.ai/docs/proxy/load_balancing

Evidence note: GitHub issue #20870 on BerriAI/litellm (Feb 2026) documents this bug. Fix commits (#22296, #22297) added mid-stream fallback for deferred-HTTP providers in async streaming plus 429 handling for all streaming modes. User reports gemini-3-flash hitting quota with RESOURCE_EXHAUSTED status while fallback should kick in. LiteLLM proxy load balancing docs show order-based fallback exists but mid-stream gap confirmed as bug. Category: LiteLLM per mapping.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.RateLimitError: vertex_ai_beta Exception 429 RESOURCE_EXHAUSTED — fallback to next model during active streaming does not work` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.RateLimitError: vertex_ai_beta Exception 429 RESOURCE_EXHAUSTED — fallback to next model during active streaming does not work`.
