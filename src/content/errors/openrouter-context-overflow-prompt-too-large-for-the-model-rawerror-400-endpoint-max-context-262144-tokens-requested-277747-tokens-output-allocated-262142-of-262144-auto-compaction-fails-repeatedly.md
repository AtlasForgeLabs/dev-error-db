---
title: "OpenClaw Context Overflow With OpenRouter Models: max_tokens Allocates Nearly Full Context Limit as Output"
description: "Developer using OpenRouter models in OpenClaw gets immediate context overflow because system allocates nearly entire context budget as output tokens, leaving zero room for prompt/tool tokens; /reset and /new don't help Includes evidence for OpenRouter troubleshooting demand."
category: "OpenAI API"
technology: "OpenRouter"
error_signature: "Context overflow: prompt too large for the model — rawError 400 endpoint max context 262144 tokens, requested 277747 tokens (output allocated 262142 of 262144), auto-compaction fails repeatedly"
common_causes:
  - "openclaw/openclaw Issue #86880 provides precise token arithmetic: context limit 262144, output request 262142 (leaving only ~26 for prompt+tools+history). Works correctly on ChatGPT/OpenAI providers but fails on OpenRouter. Confirmed across multiple OpenRouter models (moonshotai/kimi-k2.6 tested). Root cause likely in OpenRouter provider adapter max_tokens calculation."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-06-01"
published_at: "2026-06-01T06:44:26.304Z"
updated_at: "2026-06-01T06:44:26.304Z"
---

## What this error means

`Context overflow: prompt too large for the model — rawError 400 endpoint max context 262144 tokens, requested 277747 tokens (output allocated 262142 of 262144), auto-compaction fails repeatedly` is a OpenRouter failure pattern reported for developers trying to developer using openrouter models in openclaw gets immediate context overflow because system allocates nearly entire context budget as output tokens, leaving zero room for prompt/tool tokens; /reset and /new don't help. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

openclaw/openclaw Issue #86880 provides precise token arithmetic: context limit 262144, output request 262142 (leaving only ~26 for prompt+tools+history). Works correctly on ChatGPT/OpenAI providers but fails on OpenRouter. Confirmed across multiple OpenRouter models (moonshotai/kimi-k2.6 tested). Root cause likely in OpenRouter provider adapter max_tokens calculation.

## Common causes

- openclaw/openclaw Issue #86880 provides precise token arithmetic: context limit 262144, output request 262142 (leaving only ~26 for prompt+tools+history). Works correctly on ChatGPT/OpenAI providers but fails on OpenRouter. Confirmed across multiple OpenRouter models (moonshotai/kimi-k2.6 tested). Root cause likely in OpenRouter provider adapter max_tokens calculation.

## Quick fixes

1. Confirm the exact error signature matches `Context overflow: prompt too large for the model — rawError 400 endpoint max context 262144 tokens, requested 277747 tokens (output allocated 262142 of 262144), auto-compaction fails repeatedly`.
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

- https://github.com/openclaw/openclaw/issues/86880

Evidence note: openclaw/openclaw Issue #86880 provides precise token arithmetic: context limit 262144, output request 262142 (leaving only ~26 for prompt+tools+history). Works correctly on ChatGPT/OpenAI providers but fails on OpenRouter. Confirmed across multiple OpenRouter models (moonshotai/kimi-k2.6 tested). Root cause likely in OpenRouter provider adapter max_tokens calculation.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Context overflow: prompt too large for the model — rawError 400 endpoint max context 262144 tokens, requested 277747 tokens (output allocated 262142 of 262144), auto-compaction fails repeatedly` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Context overflow: prompt too large for the model — rawError 400 endpoint max context 262144 tokens, requested 277747 tokens (output allocated 262142 of 262144), auto-compaction fails repeatedly`.
