---
title: "Azure OpenAI preview API version causes NotFoundError 404 due to double path segment injection"
description: "Fix Azure OpenAI SDK build_request adding /deployments/{model} to base_url that already contains /openai/v1/, producing malformed URLs like /openai/v1/openai/deployments/gpt-5-chat/chat/completions when using preview api-version Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "openai.NotFoundError: Error code: 404 - Resource not found — Azure OpenAI preview api-version builds incorrect URL with duplicated /openai/deployments/ path"
common_causes:
  - "Specific error pattern discovered while fetching openai-python issue list. Root cause: Azure changed preview API version to use base_url approach, but SDK still appends /deployments/{model} regardless of whether base_url already includes the path prefix. Causes 404 on gpt-5 and other newer models. Requires conditional logic to skip appending when /deployments already present in base_url path."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "OpenAI API"
updated: "2026-05-23"
published_at: "2026-05-23T10:39:50.317Z"
updated_at: "2026-05-23T10:39:50.317Z"
---

## What this error means

`openai.NotFoundError: Error code: 404 - Resource not found — Azure OpenAI preview api-version builds incorrect URL with duplicated /openai/deployments/ path` is a OpenAI API failure pattern reported for developers trying to fix azure openai sdk build_request adding /deployments/{model} to base_url that already contains /openai/v1/, producing malformed urls like /openai/v1/openai/deployments/gpt-5-chat/chat/completions when using preview api-version. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Specific error pattern discovered while fetching openai-python issue list. Root cause: Azure changed preview API version to use base_url approach, but SDK still appends /deployments/{model} regardless of whether base_url already includes the path prefix. Causes 404 on gpt-5 and other newer models. Requires conditional logic to skip appending when /deployments already present in base_url path.

## Common causes

- Specific error pattern discovered while fetching openai-python issue list. Root cause: Azure changed preview API version to use base_url approach, but SDK still appends /deployments/{model} regardless of whether base_url already includes the path prefix. Causes 404 on gpt-5 and other newer models. Requires conditional logic to skip appending when /deployments already present in base_url path.

## Quick fixes

1. Confirm the exact error signature matches `openai.NotFoundError: Error code: 404 - Resource not found — Azure OpenAI preview api-version builds incorrect URL with duplicated /openai/deployments/ path`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://github.com/openai/openai-python/issues?q=is%3Aissue+is%3Aopen&per_page=10

Evidence note: Specific error pattern discovered while fetching openai-python issue list. Root cause: Azure changed preview API version to use base_url approach, but SDK still appends /deployments/{model} regardless of whether base_url already includes the path prefix. Causes 404 on gpt-5 and other newer models. Requires conditional logic to skip appending when /deployments already present in base_url path.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `openai.NotFoundError: Error code: 404 - Resource not found — Azure OpenAI preview api-version builds incorrect URL with duplicated /openai/deployments/ path` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `openai.NotFoundError: Error code: 404 - Resource not found — Azure OpenAI preview api-version builds incorrect URL with duplicated /openai/deployments/ path`.
