---
title: "VS Code: AWS Bedrock Model Configured but Not Selectable in GitHub Copilot Chat Picker"
description: "Fix AWS Bedrock model appearing in VS Code Language Models but not selectable in Copilot chat dropdown Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "AWS Bedrock model shows in Language Models UI but not in Copilot chat picker"
common_causes:
  - "Enterprise users who configure AWS Bedrock as a custom model for GitHub Copilot see it in the Language Models settings UI, but it doesn't appear in the chat model picker dropdown. This blocks the entire BYOK (Bring Your Own Key) workflow for enterprise Bedrock deployments."
  - "Enterprise user report with screenshots. Model loads in settings but not in chat picker. Labeled info-needed and model-byok. AWS Bedrock is enterprise-priced cloud AI service with high commercial intent."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "VS Code BYOK model configuration errors"
  - "AWS Bedrock VS Code integration issues"
  - "VS Code Copilot custom model endpoint failures"
updated: "2026-05-13"
published_at: "2026-05-13T17:13:17.288Z"
updated_at: "2026-05-13T17:13:17.288Z"
---

## What this error means

`AWS Bedrock model shows in Language Models UI but not in Copilot chat picker` is a GitHub Copilot failure pattern reported for developers trying to fix aws bedrock model appearing in vs code language models but not selectable in copilot chat dropdown. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Enterprise user report with screenshots. Model loads in settings but not in chat picker. Labeled info-needed and model-byok. AWS Bedrock is enterprise-priced cloud AI service with high commercial intent.

## Common causes

- Enterprise users who configure AWS Bedrock as a custom model for GitHub Copilot see it in the Language Models settings UI, but it doesn't appear in the chat model picker dropdown. This blocks the entire BYOK (Bring Your Own Key) workflow for enterprise Bedrock deployments.
- Enterprise user report with screenshots. Model loads in settings but not in chat picker. Labeled info-needed and model-byok. AWS Bedrock is enterprise-priced cloud AI service with high commercial intent.

## Quick fixes

1. Confirm the exact error signature matches `AWS Bedrock model shows in Language Models UI but not in Copilot chat picker`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/microsoft/vscode/issues/315246

Evidence note: Enterprise user report with screenshots. Model loads in settings but not in chat picker. Labeled info-needed and model-byok. AWS Bedrock is enterprise-priced cloud AI service with high commercial intent.

## Related errors

- VS Code BYOK model configuration errors
- AWS Bedrock VS Code integration issues
- VS Code Copilot custom model endpoint failures

## FAQ

### What should I check first?

Start with the exact `AWS Bedrock model shows in Language Models UI but not in Copilot chat picker` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AWS Bedrock model shows in Language Models UI but not in Copilot chat picker`.
