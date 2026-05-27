---
title: "Unable to connect to Anthropic API via proxy — ConnectionRefused Retrying attempt 9/10"
description: "Debug and fix connection refused errors when LiteLLM proxies Anthropic API calls — proxy configuration or network routing issue Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 9/10"
common_causes:
  - "Source: anthropics/claude-code#62793 (labels: api:anthropic, area:networking, needs-info), opened May 27 2026. While filed under Claude Code repo, the underlying issue is Proxy/API connectivity — relevant for LiteLLM users configuring proxy routes to Anthropic. High retry attempts indicate persistent production-blocking error. Category: LiteLLM (proxy layer connectivity)."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "LiteLLM"
updated: "2026-05-27"
published_at: "2026-05-27T14:43:20.179Z"
updated_at: "2026-05-27T14:43:20.179Z"
---

## What this error means

`Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 9/10` is a LiteLLM failure pattern reported for developers trying to debug and fix connection refused errors when litellm proxies anthropic api calls — proxy configuration or network routing issue. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: anthropics/claude-code#62793 (labels: api:anthropic, area:networking, needs-info), opened May 27 2026. While filed under Claude Code repo, the underlying issue is Proxy/API connectivity — relevant for LiteLLM users configuring proxy routes to Anthropic. High retry attempts indicate persistent production-blocking error. Category: LiteLLM (proxy layer connectivity).

## Common causes

- Source: anthropics/claude-code#62793 (labels: api:anthropic, area:networking, needs-info), opened May 27 2026. While filed under Claude Code repo, the underlying issue is Proxy/API connectivity — relevant for LiteLLM users configuring proxy routes to Anthropic. High retry attempts indicate persistent production-blocking error. Category: LiteLLM (proxy layer connectivity).

## Quick fixes

1. Confirm the exact error signature matches `Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 9/10`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/62793

Evidence note: Source: anthropics/claude-code#62793 (labels: api:anthropic, area:networking, needs-info), opened May 27 2026. While filed under Claude Code repo, the underlying issue is Proxy/API connectivity — relevant for LiteLLM users configuring proxy routes to Anthropic. High retry attempts indicate persistent production-blocking error. Category: LiteLLM (proxy layer connectivity).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 9/10` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unable to connect to API (ConnectionRefused) Retrying in 2s · attempt 9/10`.
