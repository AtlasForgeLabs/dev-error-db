---
title: "LiteLLM Realtime WebSocket backend sends bytes instead of TEXT frames — clients miss server events"
description: "Fix LiteLLM realtime proxy sending raw bytes instead of decoded TEXT frames over WebSocket, causing OpenAI-compatible clients to silently miss server events. Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Missing required parameter: session.audio.input.turn_detection.type — LiveKit / openai-python clients silently missing server events due to backend WebSocket recv returning bytes instead of str"
common_causes:
  - "GitHub PR BerriAI/litellm#28848 submitted May 26 2026 (today!). Proxy incorrectly passes raw bytes from backend WebSocket recv() to client send(), fixing to decode to str before send_text. Also fixes missing guardrail session.update parameter. Affects production LiteLLM realtime proxy deployments. Both bug and fix documented in same PR. Category: LiteLLM per mapping table."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T07:43:16.222Z"
updated_at: "2026-05-26T07:43:16.222Z"
---

## What this error means

`Missing required parameter: session.audio.input.turn_detection.type — LiveKit / openai-python clients silently missing server events due to backend WebSocket recv returning bytes instead of str` is a LiteLLM failure pattern reported for developers trying to fix litellm realtime proxy sending raw bytes instead of decoded text frames over websocket, causing openai-compatible clients to silently miss server events.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub PR BerriAI/litellm#28848 submitted May 26 2026 (today!). Proxy incorrectly passes raw bytes from backend WebSocket recv() to client send(), fixing to decode to str before send_text. Also fixes missing guardrail session.update parameter. Affects production LiteLLM realtime proxy deployments. Both bug and fix documented in same PR. Category: LiteLLM per mapping table.

## Common causes

- GitHub PR BerriAI/litellm#28848 submitted May 26 2026 (today!). Proxy incorrectly passes raw bytes from backend WebSocket recv() to client send(), fixing to decode to str before send_text. Also fixes missing guardrail session.update parameter. Affects production LiteLLM realtime proxy deployments. Both bug and fix documented in same PR. Category: LiteLLM per mapping table.

## Quick fixes

1. Confirm the exact error signature matches `Missing required parameter: session.audio.input.turn_detection.type — LiveKit / openai-python clients silently missing server events due to backend WebSocket recv returning bytes instead of str`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/pull/28848

Evidence note: GitHub PR BerriAI/litellm#28848 submitted May 26 2026 (today!). Proxy incorrectly passes raw bytes from backend WebSocket recv() to client send(), fixing to decode to str before send_text. Also fixes missing guardrail session.update parameter. Affects production LiteLLM realtime proxy deployments. Both bug and fix documented in same PR. Category: LiteLLM per mapping table.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Missing required parameter: session.audio.input.turn_detection.type — LiveKit / openai-python clients silently missing server events due to backend WebSocket recv returning bytes instead of str` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Missing required parameter: session.audio.input.turn_detection.type — LiveKit / openai-python clients silently missing server events due to backend WebSocket recv returning bytes instead of str`.
