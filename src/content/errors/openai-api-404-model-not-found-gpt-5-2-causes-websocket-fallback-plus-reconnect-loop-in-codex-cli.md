---
title: "OpenAI Codex CLI: 404 Model Not Found gpt-5.2 Triggers WebSocket Reconnect Loop"
description: "Stop infinite reconnection loop when Codex CLI encounters unavailable model — recover cleanly instead of looping forever Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "404 \"Model not found gpt-5.2\" causes WebSocket fallback + reconnect loop in Codex CLI"
common_causes:
  - "GitHub Issue #22368 on openai/codex opened ~7 days ago. When model gpt-5.2 returns 404, Codex CLI falls back to WebSocket then enters reconnection loop. Affects developers using Codex app with new/ephemeral models. High frustration signal. Category: OpenAI API (subscription tool broken)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-20"
published_at: "2026-05-20T14:38:29.678Z"
updated_at: "2026-05-20T14:38:29.678Z"
---

## What this error means

`404 "Model not found gpt-5.2" causes WebSocket fallback + reconnect loop in Codex CLI` is a OpenAI API failure pattern reported for developers trying to stop infinite reconnection loop when codex cli encounters unavailable model — recover cleanly instead of looping forever. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #22368 on openai/codex opened ~7 days ago. When model gpt-5.2 returns 404, Codex CLI falls back to WebSocket then enters reconnection loop. Affects developers using Codex app with new/ephemeral models. High frustration signal. Category: OpenAI API (subscription tool broken).

## Common causes

- GitHub Issue #22368 on openai/codex opened ~7 days ago. When model gpt-5.2 returns 404, Codex CLI falls back to WebSocket then enters reconnection loop. Affects developers using Codex app with new/ephemeral models. High frustration signal. Category: OpenAI API (subscription tool broken).

## Quick fixes

1. Confirm the exact error signature matches `404 "Model not found gpt-5.2" causes WebSocket fallback + reconnect loop in Codex CLI`.
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

- https://github.com/openai/codex/issues/22368

Evidence note: GitHub Issue #22368 on openai/codex opened ~7 days ago. When model gpt-5.2 returns 404, Codex CLI falls back to WebSocket then enters reconnection loop. Affects developers using Codex app with new/ephemeral models. High frustration signal. Category: OpenAI API (subscription tool broken).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `404 "Model not found gpt-5.2" causes WebSocket fallback + reconnect loop in Codex CLI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `404 "Model not found gpt-5.2" causes WebSocket fallback + reconnect loop in Codex CLI`.
