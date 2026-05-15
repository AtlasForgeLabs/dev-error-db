---
title: "AWS Bedrock InvokeModel Fails: Claude Haiku On-Demand Throughput Not Supported"
description: "fix AWS Bedrock anthropic claude haiku on-demand throughput not supported error Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported. Retry your request with the ID or ARN of an inference profile"
common_causes:
  - "Developers migrating to AWS Bedrock for Claude models get ValidationException because model ID format changed; requires inference profile ARN instead of model ID"
  - "AWS Bedrock InvokeModel throws ValidationException: 'Invocation of model ID anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported.' Must use inference profile ARN instead. Migration guide needed."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Bedrock model invocation error"
  - "Claude on-demand throughput error"
  - "AWS Bedrock inference profile"
updated: "2026-05-15"
published_at: "2026-05-15T06:13:21.857Z"
updated_at: "2026-05-15T06:13:21.857Z"
---

## What this error means

`anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported. Retry your request with the ID or ARN of an inference profile` is a Anthropic API failure pattern reported for developers trying to fix aws bedrock anthropic claude haiku on-demand throughput not supported error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

AWS Bedrock InvokeModel throws ValidationException: 'Invocation of model ID anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported.' Must use inference profile ARN instead. Migration guide needed.

## Common causes

- Developers migrating to AWS Bedrock for Claude models get ValidationException because model ID format changed; requires inference profile ARN instead of model ID
- AWS Bedrock InvokeModel throws ValidationException: 'Invocation of model ID anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported.' Must use inference profile ARN instead. Migration guide needed.

## Quick fixes

1. Confirm the exact error signature matches `anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported. Retry your request with the ID or ARN of an inference profile`.
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

- https://stackoverflow.com/questions/79510407

Evidence note: AWS Bedrock InvokeModel throws ValidationException: 'Invocation of model ID anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported.' Must use inference profile ARN instead. Migration guide needed.

## Related errors

- Bedrock model invocation error
- Claude on-demand throughput error
- AWS Bedrock inference profile

## FAQ

### What should I check first?

Start with the exact `anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported. Retry your request with the ID or ARN of an inference profile` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `anthropic.claude-3-haiku-20240307-v1:0 with on-demand throughput isn't supported. Retry your request with the ID or ARN of an inference profile`.
