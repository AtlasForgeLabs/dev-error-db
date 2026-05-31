---
title: "Interactive CLI session does not auto-fallback on Codex 429 usage_limit_reached"
description: "Fix Codex 429 usage_limit_reached not triggering fallback_providers in interactive CLI sessions, while cron jobs succeed with the same chain Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "HTTP 429: The usage limit has been reached"
common_causes:
  - "GitHub issue #20465 (NousResearch/hermes-agent) documents that interactive mode hits a hard 429 wall when using openai-codex/gpt-5.5, failing after 3 retries instead of activating the configured fallback chain (Ollama + OpenRouter). Cron jobs work correctly. Category: OpenAI API because it affects paid Codex subscription users. Distinct from covered 'rate limit error' — this is about the specific failure to activate fallback providers in interactive context."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-31"
published_at: "2026-05-31T20:44:25.237Z"
updated_at: "2026-05-31T20:44:25.237Z"
---

## What this error means

`HTTP 429: The usage limit has been reached` is a OpenAI API failure pattern reported for developers trying to fix codex 429 usage_limit_reached not triggering fallback_providers in interactive cli sessions, while cron jobs succeed with the same chain. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #20465 (NousResearch/hermes-agent) documents that interactive mode hits a hard 429 wall when using openai-codex/gpt-5.5, failing after 3 retries instead of activating the configured fallback chain (Ollama + OpenRouter). Cron jobs work correctly. Category: OpenAI API because it affects paid Codex subscription users. Distinct from covered 'rate limit error' — this is about the specific failure to activate fallback providers in interactive context.

## Common causes

- GitHub issue #20465 (NousResearch/hermes-agent) documents that interactive mode hits a hard 429 wall when using openai-codex/gpt-5.5, failing after 3 retries instead of activating the configured fallback chain (Ollama + OpenRouter). Cron jobs work correctly. Category: OpenAI API because it affects paid Codex subscription users. Distinct from covered 'rate limit error' — this is about the specific failure to activate fallback providers in interactive context.

## Quick fixes

1. Confirm the exact error signature matches `HTTP 429: The usage limit has been reached`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/NousResearch/hermes-agent/issues/20465

Evidence note: GitHub issue #20465 (NousResearch/hermes-agent) documents that interactive mode hits a hard 429 wall when using openai-codex/gpt-5.5, failing after 3 retries instead of activating the configured fallback chain (Ollama + OpenRouter). Cron jobs work correctly. Category: OpenAI API because it affects paid Codex subscription users. Distinct from covered 'rate limit error' — this is about the specific failure to activate fallback providers in interactive context.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `HTTP 429: The usage limit has been reached` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `HTTP 429: The usage limit has been reached`.
