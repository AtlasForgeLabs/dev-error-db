---
title: "OpenAI-compatible API stream returns server_is_overloaded without automatic retry"
description: "Developer using OpenAI-compatible proxy/APIs where streaming responses fail with server_is_overloaded errors and no automatic retry mechanism is implemented Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "server_is_overloaded / service_unavailable_error returned as stream error event in OpenAI-compatible APIs"
common_causes:
  - "Found via GitHub REST API: anomalyco/opencode#25886. PR fixes missing retry mapping for server_is_overloaded and service_unavailable_error stream events in OpenAI-compatible clients. Relevant for developers using any OpenAI-compatible endpoint (LiteLLM, local vLLM, etc.) that returns non-Standard OpenAI error formats during overload conditions."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-05-24"
published_at: "2026-05-24T20:43:11.690Z"
updated_at: "2026-05-24T20:43:11.690Z"
---

## What this error means

`server_is_overloaded / service_unavailable_error returned as stream error event in OpenAI-compatible APIs` is a OpenAI API failure pattern reported for developers trying to developer using openai-compatible proxy/apis where streaming responses fail with server_is_overloaded errors and no automatic retry mechanism is implemented. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub REST API: anomalyco/opencode#25886. PR fixes missing retry mapping for server_is_overloaded and service_unavailable_error stream events in OpenAI-compatible clients. Relevant for developers using any OpenAI-compatible endpoint (LiteLLM, local vLLM, etc.) that returns non-Standard OpenAI error formats during overload conditions.

## Common causes

- Found via GitHub REST API: anomalyco/opencode#25886. PR fixes missing retry mapping for server_is_overloaded and service_unavailable_error stream events in OpenAI-compatible clients. Relevant for developers using any OpenAI-compatible endpoint (LiteLLM, local vLLM, etc.) that returns non-Standard OpenAI error formats during overload conditions.

## Quick fixes

1. Confirm the exact error signature matches `server_is_overloaded / service_unavailable_error returned as stream error event in OpenAI-compatible APIs`.
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

- https://github.com/anomalyco/opencode/pull/25886

Evidence note: Found via GitHub REST API: anomalyco/opencode#25886. PR fixes missing retry mapping for server_is_overloaded and service_unavailable_error stream events in OpenAI-compatible clients. Relevant for developers using any OpenAI-compatible endpoint (LiteLLM, local vLLM, etc.) that returns non-Standard OpenAI error formats during overload conditions.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `server_is_overloaded / service_unavailable_error returned as stream error event in OpenAI-compatible APIs` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `server_is_overloaded / service_unavailable_error returned as stream error event in OpenAI-compatible APIs`.
