---
title: "OpenAI Codex 'Model not found gpt-5.2' Causes WebSocket Reconnection Loop"
description: "Fix OpenAI Codex CLI crash and WebSocket loop when model is not found Includes evidence for OpenAI Codex troubleshooting demand."
category: "AI Coding Tools"
technology: "OpenAI Codex"
error_signature: "Model not found gpt-5.2 causes WebSocket reconnection loop in Codex CLI"
common_causes:
  - "When an invalid or unavailable model reference (e.g., gpt-5.2) is used, the Codex CLI enters an infinite WebSocket crash/reconnect loop instead of failing gracefully. This causes the CLI to become unresponsive and requires manual intervention. Backend model availability changes trigger this instability."
  - "GitHub issue #22368 reports that an invalid model reference causes the CLI to crash and reconnect via WebSocket infinitely rather than failing gracefully. Affects CLI stability when model availability changes on the backend."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "codex cli websocket connection failed"
  - "openai codex model not available"
  - "codex cli unresponsive crash loop"
updated: "2026-05-14"
published_at: "2026-05-14T03:13:18.606Z"
updated_at: "2026-05-14T03:13:18.606Z"
---

## What this error means

`Model not found gpt-5.2 causes WebSocket reconnection loop in Codex CLI` is a OpenAI Codex failure pattern reported for developers trying to fix openai codex cli crash and websocket loop when model is not found. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #22368 reports that an invalid model reference causes the CLI to crash and reconnect via WebSocket infinitely rather than failing gracefully. Affects CLI stability when model availability changes on the backend.

## Common causes

- When an invalid or unavailable model reference (e.g., gpt-5.2) is used, the Codex CLI enters an infinite WebSocket crash/reconnect loop instead of failing gracefully. This causes the CLI to become unresponsive and requires manual intervention. Backend model availability changes trigger this instability.
- GitHub issue #22368 reports that an invalid model reference causes the CLI to crash and reconnect via WebSocket infinitely rather than failing gracefully. Affects CLI stability when model availability changes on the backend.

## Quick fixes

1. Confirm the exact error signature matches `Model not found gpt-5.2 causes WebSocket reconnection loop in Codex CLI`.
2. Check the OpenAI Codex account, local tool state, and provider configuration involved in the failing workflow.
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

Evidence note: GitHub issue #22368 reports that an invalid model reference causes the CLI to crash and reconnect via WebSocket infinitely rather than failing gracefully. Affects CLI stability when model availability changes on the backend.

## Related errors

- codex cli websocket connection failed
- openai codex model not available
- codex cli unresponsive crash loop

## FAQ

### What should I check first?

Start with the exact `Model not found gpt-5.2 causes WebSocket reconnection loop in Codex CLI` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Model not found gpt-5.2 causes WebSocket reconnection loop in Codex CLI`.
