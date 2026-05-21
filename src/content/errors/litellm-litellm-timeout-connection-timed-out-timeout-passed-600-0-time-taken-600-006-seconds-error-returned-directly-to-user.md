---
title: "LiteLLM Timeout Silently Ignored for Bedrock and Vertex AI Providers"
description: "Users of LiteLLM proxy with AWS Bedrock or Vertex AI hit timeouts but the timeout config is silently ignored, leaving requests hanging for 600s before surfacing to user Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.Timeout: Connection timed out. Timeout passed=600.0, time taken=600.006 seconds; error returned directly to user"
common_causes:
  - "GitHub issue #23375 on BerriAI/litellm repo (Mar 11, 2026). Timeout parameter is completely ignored for Bedrock and Vertex AI providers in LiteLLM proxy layer, causing extreme latency. Distinct from issue #23707 which is about 429 swallowing."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T11:39:44.393Z"
updated_at: "2026-05-21T11:39:44.393Z"
---

## What this error means

`litellm.Timeout: Connection timed out. Timeout passed=600.0, time taken=600.006 seconds; error returned directly to user` is a LiteLLM failure pattern reported for developers trying to users of litellm proxy with aws bedrock or vertex ai hit timeouts but the timeout config is silently ignored, leaving requests hanging for 600s before surfacing to user. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #23375 on BerriAI/litellm repo (Mar 11, 2026). Timeout parameter is completely ignored for Bedrock and Vertex AI providers in LiteLLM proxy layer, causing extreme latency. Distinct from issue #23707 which is about 429 swallowing.

## Common causes

- GitHub issue #23375 on BerriAI/litellm repo (Mar 11, 2026). Timeout parameter is completely ignored for Bedrock and Vertex AI providers in LiteLLM proxy layer, causing extreme latency. Distinct from issue #23707 which is about 429 swallowing.

## Quick fixes

1. Confirm the exact error signature matches `litellm.Timeout: Connection timed out. Timeout passed=600.0, time taken=600.006 seconds; error returned directly to user`.
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

- https://github.com/BerriAI/litellm/issues/23375

Evidence note: GitHub issue #23375 on BerriAI/litellm repo (Mar 11, 2026). Timeout parameter is completely ignored for Bedrock and Vertex AI providers in LiteLLM proxy layer, causing extreme latency. Distinct from issue #23707 which is about 429 swallowing.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.Timeout: Connection timed out. Timeout passed=600.0, time taken=600.006 seconds; error returned directly to user` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.Timeout: Connection timed out. Timeout passed=600.0, time taken=600.006 seconds; error returned directly to user`.
