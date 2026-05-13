---
title: "LiteLLM APIConnectionError Cannot Connect to Host 11434 — Fix Ollama Connection"
description: "Fix LiteLLM failing to connect to local Ollama instance at 127.0.0.1:11434 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM APIConnectionError: Cannot connect to host 127.0.0.1:11434"
common_causes:
  - "Developers using LiteLLM as a unified API gateway to route requests to local Ollama instances encounter connection refused errors on port 11434. The error is confusing because the Ollama port is confirmed running and accessible via direct API calls. The issue specifically occurs when LiteLLM tries to proxy requests over HTTPS to the local Ollama instance, suggesting a protocol mismatch or LiteLLM configuration issue."
  - "GitHub issue reports LiteLLM APIConnectionError when connecting to localhost:11434 (Ollama). The user confirms the port is running and direct Ollama APIs are accessible. The issue occurs specifically when accessing via LiteLLM over HTTPS, indicating a LiteLLM proxy configuration or protocol handling problem."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM APIConnectionError general"
  - "LiteLLM unknown parameter extra_body"
  - "Ollama connection refused"
updated: "2026-05-13"
published_at: "2026-05-13T05:13:15.783Z"
updated_at: "2026-05-13T05:13:15.783Z"
---

## What this error means

`LiteLLM APIConnectionError: Cannot connect to host 127.0.0.1:11434` is a LiteLLM failure pattern reported for developers trying to fix litellm failing to connect to local ollama instance at 127.0.0.1:11434. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue reports LiteLLM APIConnectionError when connecting to localhost:11434 (Ollama). The user confirms the port is running and direct Ollama APIs are accessible. The issue occurs specifically when accessing via LiteLLM over HTTPS, indicating a LiteLLM proxy configuration or protocol handling problem.

## Common causes

- Developers using LiteLLM as a unified API gateway to route requests to local Ollama instances encounter connection refused errors on port 11434. The error is confusing because the Ollama port is confirmed running and accessible via direct API calls. The issue specifically occurs when LiteLLM tries to proxy requests over HTTPS to the local Ollama instance, suggesting a protocol mismatch or LiteLLM configuration issue.
- GitHub issue reports LiteLLM APIConnectionError when connecting to localhost:11434 (Ollama). The user confirms the port is running and direct Ollama APIs are accessible. The issue occurs specifically when accessing via LiteLLM over HTTPS, indicating a LiteLLM proxy configuration or protocol handling problem.

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM APIConnectionError: Cannot connect to host 127.0.0.1:11434`.
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

- https://github.com/BerriAI/litellm/issues/4494

Evidence note: GitHub issue reports LiteLLM APIConnectionError when connecting to localhost:11434 (Ollama). The user confirms the port is running and direct Ollama APIs are accessible. The issue occurs specifically when accessing via LiteLLM over HTTPS, indicating a LiteLLM proxy configuration or protocol handling problem.

## Related errors

- LiteLLM APIConnectionError general
- LiteLLM unknown parameter extra_body
- Ollama connection refused

## FAQ

### What should I check first?

Start with the exact `LiteLLM APIConnectionError: Cannot connect to host 127.0.0.1:11434` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM APIConnectionError: Cannot connect to host 127.0.0.1:11434`.
