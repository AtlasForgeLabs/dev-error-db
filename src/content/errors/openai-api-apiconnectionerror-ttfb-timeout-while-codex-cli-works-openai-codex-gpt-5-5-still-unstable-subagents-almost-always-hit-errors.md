---
title: "OpenAI Codex gpt-5.5 unstable in Hermes agent: APIConnectionError and TTFB timeout on subagents"
description: "Resolve intermittent API connection failures and request timeouts when calling gpt-5.5 via Claude Code/Codex tool delegation from within an agent framework Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "APIConnectionError/TTFB timeout while Codex CLI works; openai-codex/gpt-5.5 still unstable subagents almost always hit errors"
common_causes:
  - "Source: https://github.com/NousResearch/hermes-agent/issues/33075 — Recent (2026-05-27) bug report showing subagent calls to gpt-5.5 consistently failing with APIConnectionError and TTFB timeout, while standalone Codex CLI works fine. 9 comments. P3/Copilot/provider tags. Maps to OpenAI API category due to billing-impact of repeated failed API calls."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-27"
published_at: "2026-05-27T11:43:19.817Z"
updated_at: "2026-05-27T11:43:19.817Z"
---

## What this error means

`APIConnectionError/TTFB timeout while Codex CLI works; openai-codex/gpt-5.5 still unstable subagents almost always hit errors` is a OpenAI API failure pattern reported for developers trying to resolve intermittent api connection failures and request timeouts when calling gpt-5.5 via claude code/codex tool delegation from within an agent framework. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/NousResearch/hermes-agent/issues/33075 — Recent (2026-05-27) bug report showing subagent calls to gpt-5.5 consistently failing with APIConnectionError and TTFB timeout, while standalone Codex CLI works fine. 9 comments. P3/Copilot/provider tags. Maps to OpenAI API category due to billing-impact of repeated failed API calls.

## Common causes

- Source: https://github.com/NousResearch/hermes-agent/issues/33075 — Recent (2026-05-27) bug report showing subagent calls to gpt-5.5 consistently failing with APIConnectionError and TTFB timeout, while standalone Codex CLI works fine. 9 comments. P3/Copilot/provider tags. Maps to OpenAI API category due to billing-impact of repeated failed API calls.

## Quick fixes

1. Confirm the exact error signature matches `APIConnectionError/TTFB timeout while Codex CLI works; openai-codex/gpt-5.5 still unstable subagents almost always hit errors`.
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

- https://github.com/NousResearch/hermes-agent/issues/33075

Evidence note: Source: https://github.com/NousResearch/hermes-agent/issues/33075 — Recent (2026-05-27) bug report showing subagent calls to gpt-5.5 consistently failing with APIConnectionError and TTFB timeout, while standalone Codex CLI works fine. 9 comments. P3/Copilot/provider tags. Maps to OpenAI API category due to billing-impact of repeated failed API calls.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `APIConnectionError/TTFB timeout while Codex CLI works; openai-codex/gpt-5.5 still unstable subagents almost always hit errors` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `APIConnectionError/TTFB timeout while Codex CLI works; openai-codex/gpt-5.5 still unstable subagents almost always hit errors`.
