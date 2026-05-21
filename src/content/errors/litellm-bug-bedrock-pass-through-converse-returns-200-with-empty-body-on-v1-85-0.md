---
title: "LiteLLM Bedrock Pass-Through Returns 200 with Empty Body on v1.85.0"
description: "After upgrading to LiteLLM v1.85.0, AWS Bedrock proxy requests return HTTP 200 but with empty response body — clients receive success status but no content; silent data loss affecting production inference pipelines Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "[Bug]: Bedrock pass-through /converse returns 200 with empty body on v1.85.0"
common_causes:
  - "GitHub issue #28388 on BerriAI/litellm opened May 26, 2026 by luiz-berto. Labels: bug, llm translation, proxy. A regression in v1.85.0 where the Bedrock passthrough layer fails to forward the actual API response body while still returning 200 OK. This silent failure pattern is particularly dangerous for production systems that won't detect the error. Category: LiteLLM (direct mapping)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T08:39:43.927Z"
updated_at: "2026-05-21T08:39:43.927Z"
---

## What this error means

`[Bug]: Bedrock pass-through /converse returns 200 with empty body on v1.85.0` is a LiteLLM failure pattern reported for developers trying to after upgrading to litellm v1.85.0, aws bedrock proxy requests return http 200 but with empty response body — clients receive success status but no content; silent data loss affecting production inference pipelines. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28388 on BerriAI/litellm opened May 26, 2026 by luiz-berto. Labels: bug, llm translation, proxy. A regression in v1.85.0 where the Bedrock passthrough layer fails to forward the actual API response body while still returning 200 OK. This silent failure pattern is particularly dangerous for production systems that won't detect the error. Category: LiteLLM (direct mapping).

## Common causes

- GitHub issue #28388 on BerriAI/litellm opened May 26, 2026 by luiz-berto. Labels: bug, llm translation, proxy. A regression in v1.85.0 where the Bedrock passthrough layer fails to forward the actual API response body while still returning 200 OK. This silent failure pattern is particularly dangerous for production systems that won't detect the error. Category: LiteLLM (direct mapping).

## Quick fixes

1. Confirm the exact error signature matches `[Bug]: Bedrock pass-through /converse returns 200 with empty body on v1.85.0`.
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

- https://github.com/BerriAI/litellm/issues/28388

Evidence note: GitHub issue #28388 on BerriAI/litellm opened May 26, 2026 by luiz-berto. Labels: bug, llm translation, proxy. A regression in v1.85.0 where the Bedrock passthrough layer fails to forward the actual API response body while still returning 200 OK. This silent failure pattern is particularly dangerous for production systems that won't detect the error. Category: LiteLLM (direct mapping).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `[Bug]: Bedrock pass-through /converse returns 200 with empty body on v1.85.0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[Bug]: Bedrock pass-through /converse returns 200 with empty body on v1.85.0`.
