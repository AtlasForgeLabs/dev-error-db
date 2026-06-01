---
title: "OpenRouter Rate Limit Failover Bug: Hitting $5 Spending Cap Triggers 'Model Not Allowed' For All Models Including Non-OpenRouter"
description: "Fix OpenRouter spending cap bug where exceeding $5 budget causes 'model not allowed' error globally, preventing model switching even after limit is removed or increased Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "model set failed: Error: model not allowed: <model_name> — persists for ALL models (including non-OpenRouter) after hitting OpenRouter $5 spending limit"
common_causes:
  - "Source: GitHub openclaw/openclaw issue #1405. After hitting OpenRouter API rate limit ($5 spending cap), switching models fails with 'model not allowed' for ALL models including locally-configured ones. Error persists even after removing spending limit and restarting. Suggests model path parsing issue with duplicated provider prefixes (openrouter/openrouter/auto). Commercial value: blocks developers using OpenRouter as proxy/router."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-06-01"
published_at: "2026-06-01T15:44:27.260Z"
updated_at: "2026-06-01T15:44:27.260Z"
---

## What this error means

`model set failed: Error: model not allowed: <model_name> — persists for ALL models (including non-OpenRouter) after hitting OpenRouter $5 spending limit` is a OpenRouter failure pattern reported for developers trying to fix openrouter spending cap bug where exceeding $5 budget causes 'model not allowed' error globally, preventing model switching even after limit is removed or increased. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: GitHub openclaw/openclaw issue #1405. After hitting OpenRouter API rate limit ($5 spending cap), switching models fails with 'model not allowed' for ALL models including locally-configured ones. Error persists even after removing spending limit and restarting. Suggests model path parsing issue with duplicated provider prefixes (openrouter/openrouter/auto). Commercial value: blocks developers using OpenRouter as proxy/router.

## Common causes

- Source: GitHub openclaw/openclaw issue #1405. After hitting OpenRouter API rate limit ($5 spending cap), switching models fails with 'model not allowed' for ALL models including locally-configured ones. Error persists even after removing spending limit and restarting. Suggests model path parsing issue with duplicated provider prefixes (openrouter/openrouter/auto). Commercial value: blocks developers using OpenRouter as proxy/router.

## Quick fixes

1. Confirm the exact error signature matches `model set failed: Error: model not allowed: <model_name> — persists for ALL models (including non-OpenRouter) after hitting OpenRouter $5 spending limit`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openclaw/openclaw/issues/1405

Evidence note: Source: GitHub openclaw/openclaw issue #1405. After hitting OpenRouter API rate limit ($5 spending cap), switching models fails with 'model not allowed' for ALL models including locally-configured ones. Error persists even after removing spending limit and restarting. Suggests model path parsing issue with duplicated provider prefixes (openrouter/openrouter/auto). Commercial value: blocks developers using OpenRouter as proxy/router.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `model set failed: Error: model not allowed: <model_name> — persists for ALL models (including non-OpenRouter) after hitting OpenRouter $5 spending limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model set failed: Error: model not allowed: <model_name> — persists for ALL models (including non-OpenRouter) after hitting OpenRouter $5 spending limit`.
