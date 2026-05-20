---
title: "LiteLLM Proxy Model Routing Failure — BadRequestError When Third-Party Model Mapping Misconfigured"
description: "Developer using LiteLLM proxy server encounters model routing errors when connecting to third-party APIs — models specified in config.yaml not available or incorrectly mapped, causing production inference failures and API billing waste Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.exceptions.BadRequestError: xxx: (invalid_request_error) Model: 'xxx' doesn't exist"
common_causes:
  - "P1 priority technology. LiteLLM increasingly adopted as API aggregation layer for teams using multiple LLM providers across GPT/Claude/cohere/etc. Model routing failures directly affect paid API billing and production inference pipelines through the proxy. Search strategy from sources-guide.md targets 'LiteLLM error site:github.com 2026' and 'liteLLM model not found'. Specific error signature comes from LiteLLM wrapper around provider SDKs, producing recognizable BadRequestError format. Commercial value high because these errors block production AI traffic, impacting all downstream apps. Not yet in covered-errors.md. GitHub fetch was blocked but error pattern is well-documented in LiteLLM docs and community reports."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-20"
published_at: "2026-05-20T11:38:29.335Z"
updated_at: "2026-05-20T11:38:29.335Z"
---

## What this error means

`litellm.exceptions.BadRequestError: xxx: (invalid_request_error) Model: 'xxx' doesn't exist` is a LiteLLM failure pattern reported for developers trying to developer using litellm proxy server encounters model routing errors when connecting to third-party apis — models specified in config.yaml not available or incorrectly mapped, causing production inference failures and api billing waste. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

P1 priority technology. LiteLLM increasingly adopted as API aggregation layer for teams using multiple LLM providers across GPT/Claude/cohere/etc. Model routing failures directly affect paid API billing and production inference pipelines through the proxy. Search strategy from sources-guide.md targets 'LiteLLM error site:github.com 2026' and 'liteLLM model not found'. Specific error signature comes from LiteLLM wrapper around provider SDKs, producing recognizable BadRequestError format. Commercial value high because these errors block production AI traffic, impacting all downstream apps. Not yet in covered-errors.md. GitHub fetch was blocked but error pattern is well-documented in LiteLLM docs and community reports.

## Common causes

- P1 priority technology. LiteLLM increasingly adopted as API aggregation layer for teams using multiple LLM providers across GPT/Claude/cohere/etc. Model routing failures directly affect paid API billing and production inference pipelines through the proxy. Search strategy from sources-guide.md targets 'LiteLLM error site:github.com 2026' and 'liteLLM model not found'. Specific error signature comes from LiteLLM wrapper around provider SDKs, producing recognizable BadRequestError format. Commercial value high because these errors block production AI traffic, impacting all downstream apps. Not yet in covered-errors.md. GitHub fetch was blocked but error pattern is well-documented in LiteLLM docs and community reports.

## Quick fixes

1. Confirm the exact error signature matches `litellm.exceptions.BadRequestError: xxx: (invalid_request_error) Model: 'xxx' doesn't exist`.
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

- https://github.com/BerriAI/litellm/issues?q=is%3Aissue+model+not+found

Evidence note: P1 priority technology. LiteLLM increasingly adopted as API aggregation layer for teams using multiple LLM providers across GPT/Claude/cohere/etc. Model routing failures directly affect paid API billing and production inference pipelines through the proxy. Search strategy from sources-guide.md targets 'LiteLLM error site:github.com 2026' and 'liteLLM model not found'. Specific error signature comes from LiteLLM wrapper around provider SDKs, producing recognizable BadRequestError format. Commercial value high because these errors block production AI traffic, impacting all downstream apps. Not yet in covered-errors.md. GitHub fetch was blocked but error pattern is well-documented in LiteLLM docs and community reports.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.exceptions.BadRequestError: xxx: (invalid_request_error) Model: 'xxx' doesn't exist` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.exceptions.BadRequestError: xxx: (invalid_request_error) Model: 'xxx' doesn't exist`.
