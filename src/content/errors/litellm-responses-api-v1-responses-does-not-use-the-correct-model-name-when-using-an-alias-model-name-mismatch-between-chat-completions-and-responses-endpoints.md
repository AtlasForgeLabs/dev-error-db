---
title: "LiteLLM Response API Wrong Model Name Resolution with Aliases"
description: "Fix LiteLLM proxy returning wrong model name in responses API when configured with model aliases or group aliases Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Responses API (/v1/responses) does not use the correct model name when using an alias — model name mismatch between chat/completions and responses endpoints"
common_causes:
  - "GitHub issue BerriAI/litellm#26773 (bug+proxy+llm translation labels). User reports /chat/completions returns correct model alias ('mymodel') while /v1/responses returns incorrect/unexpected model name when both use same LiteLLM proxy config with OpenRouter backend. Bug labeled by maintainer as confirmed, closed as fixed. Strong commercial value — LiteLLM proxy handles billing/routing for enterprise deployments. Source observed 2026-04-29, resolved 2026-05-30."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-30"
published_at: "2026-05-30T11:43:28.507Z"
updated_at: "2026-05-30T11:43:28.507Z"
---

## What this error means

`Responses API (/v1/responses) does not use the correct model name when using an alias — model name mismatch between chat/completions and responses endpoints` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy returning wrong model name in responses api when configured with model aliases or group aliases. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#26773 (bug+proxy+llm translation labels). User reports /chat/completions returns correct model alias ('mymodel') while /v1/responses returns incorrect/unexpected model name when both use same LiteLLM proxy config with OpenRouter backend. Bug labeled by maintainer as confirmed, closed as fixed. Strong commercial value — LiteLLM proxy handles billing/routing for enterprise deployments. Source observed 2026-04-29, resolved 2026-05-30.

## Common causes

- GitHub issue BerriAI/litellm#26773 (bug+proxy+llm translation labels). User reports /chat/completions returns correct model alias ('mymodel') while /v1/responses returns incorrect/unexpected model name when both use same LiteLLM proxy config with OpenRouter backend. Bug labeled by maintainer as confirmed, closed as fixed. Strong commercial value — LiteLLM proxy handles billing/routing for enterprise deployments. Source observed 2026-04-29, resolved 2026-05-30.

## Quick fixes

1. Confirm the exact error signature matches `Responses API (/v1/responses) does not use the correct model name when using an alias — model name mismatch between chat/completions and responses endpoints`.
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

- https://api.github.com/repos/BerriAI/litellm/issues/26773

Evidence note: GitHub issue BerriAI/litellm#26773 (bug+proxy+llm translation labels). User reports /chat/completions returns correct model alias ('mymodel') while /v1/responses returns incorrect/unexpected model name when both use same LiteLLM proxy config with OpenRouter backend. Bug labeled by maintainer as confirmed, closed as fixed. Strong commercial value — LiteLLM proxy handles billing/routing for enterprise deployments. Source observed 2026-04-29, resolved 2026-05-30.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Responses API (/v1/responses) does not use the correct model name when using an alias — model name mismatch between chat/completions and responses endpoints` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Responses API (/v1/responses) does not use the correct model name when using an alias — model name mismatch between chat/completions and responses endpoints`.
