---
title: "Ollama Connection Refused — ECONNREFUSED Error on localhost:11434"
description: "Fix Ollama connection refused ECONNREFUSED error when Ollama service is not running Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "ECONNREFUSED — Ollama connection refused on localhost:11434"
common_causes:
  - "Ollama must be running as a background daemon. When it crashes, is killed, or hasn't been started, any application trying to connect gets ECONNREFUSED. The error is confusing because there's no indication that Ollama itself needs restarting."
  - "Multiple projects reporting ECONNREFUSED errors when Ollama is offline. One project (openhuman) saw 226 Sentry events/day from this error noise. Another project added explicit OLLAMA-DOWN error categorization."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "Ollama service not starting on macOS"
  - "Ollama ETIMEDOUT timeout error"
  - "Ollama model not found 404 error"
updated: "2026-05-13"
published_at: "2026-05-13T20:13:17.679Z"
updated_at: "2026-05-13T20:13:17.679Z"
---

## What this error means

`ECONNREFUSED — Ollama connection refused on localhost:11434` is a Ollama failure pattern reported for developers trying to fix ollama connection refused econnrefused error when ollama service is not running. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple projects reporting ECONNREFUSED errors when Ollama is offline. One project (openhuman) saw 226 Sentry events/day from this error noise. Another project added explicit OLLAMA-DOWN error categorization.

## Common causes

- Ollama must be running as a background daemon. When it crashes, is killed, or hasn't been started, any application trying to connect gets ECONNREFUSED. The error is confusing because there's no indication that Ollama itself needs restarting.
- Multiple projects reporting ECONNREFUSED errors when Ollama is offline. One project (openhuman) saw 226 Sentry events/day from this error noise. Another project added explicit OLLAMA-DOWN error categorization.

## Quick fixes

1. Confirm the exact error signature matches `ECONNREFUSED — Ollama connection refused on localhost:11434`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://github.com/why-pengo/claude-ollama-orchestrator/pull/11
- https://github.com/tinyhumansai/openhuman/pull/1546
- https://github.com/Tracer-Cloud/opensre/pull/1863

Evidence note: Multiple projects reporting ECONNREFUSED errors when Ollama is offline. One project (openhuman) saw 226 Sentry events/day from this error noise. Another project added explicit OLLAMA-DOWN error categorization.

## Related errors

- Ollama service not starting on macOS
- Ollama ETIMEDOUT timeout error
- Ollama model not found 404 error

## FAQ

### What should I check first?

Start with the exact `ECONNREFUSED — Ollama connection refused on localhost:11434` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ECONNREFUSED — Ollama connection refused on localhost:11434`.
