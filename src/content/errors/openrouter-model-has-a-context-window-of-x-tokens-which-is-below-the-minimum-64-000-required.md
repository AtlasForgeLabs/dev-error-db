---
title: "OpenRouter All Models Rejected — Context Window Below Minimum 64000 Tokens"
description: "Fix OpenRouter model rejection due to insufficient context window Includes evidence for OpenRouter troubleshooting demand."
category: "AI Coding Tools"
technology: "OpenRouter"
error_signature: "Model has a context window of X tokens, which is below the minimum 64,000 required"
common_causes:
  - "OpenRouter is a paid API proxy aggregating multiple model providers. When all models are rejected for context window limits, entire AI workflows break."
  - "All models on OpenRouter went down on Telegram with 'context window below minimum 64,000 tokens' error. Complete service disruption affecting all users simultaneously."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenRouter model not found"
  - "OpenRouter API key invalid"
  - "OpenRouter rate limit exceeded"
updated: "2026-05-12"
published_at: "2026-05-12T04:10:49.025Z"
updated_at: "2026-05-12T04:10:49.025Z"
---

## What this error means

`Model has a context window of X tokens, which is below the minimum 64,000 required` is a OpenRouter failure pattern reported for developers trying to fix openrouter model rejection due to insufficient context window. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

All models on OpenRouter went down on Telegram with 'context window below minimum 64,000 tokens' error. Complete service disruption affecting all users simultaneously.

## Common causes

- OpenRouter is a paid API proxy aggregating multiple model providers. When all models are rejected for context window limits, entire AI workflows break.
- All models on OpenRouter went down on Telegram with 'context window below minimum 64,000 tokens' error. Complete service disruption affecting all users simultaneously.

## Quick fixes

1. Confirm the exact error signature matches `Model has a context window of X tokens, which is below the minimum 64,000 required`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/NousResearch/hermes-agent/issues/24140

Evidence note: All models on OpenRouter went down on Telegram with 'context window below minimum 64,000 tokens' error. Complete service disruption affecting all users simultaneously.

## Related errors

- OpenRouter model not found
- OpenRouter API key invalid
- OpenRouter rate limit exceeded

## FAQ

### What should I check first?

Start with the exact `Model has a context window of X tokens, which is below the minimum 64,000 required` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Model has a context window of X tokens, which is below the minimum 64,000 required`.
