---
title: "LiteLLM A2A Endpoint Returns 'Stream Consumed' Error on JSON-RPC POST"
description: "Fix LiteLLM A2A /a2a/{id}/message/send returning -32603 Stream consumed error Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "-32603 Internal error: Stream consumed"
common_causes:
  - "LiteLLM's A2A (Agent-to-Agent) endpoints return a JSON-RPC 2.0 error 'Stream consumed' when invoked via raw HTTP POST. This blocks developers building multi-agent systems that rely on the A2A protocol through LiteLLM proxy."
  - "Bug report on BerriAI/litellm repo: POST /a2a/{agent_id}/message/send returns {\"jsonrpc\":\"2.0\",\"id\":null,\"error\":{\"code\":-32603,\"message\":\"Internal error: Stream consumed\"}}. Affects LiteLLM main branch as of 2026-05-13 on Docker image ghcr.io/berriai/litellm-non_root:main-stable."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM A2A agent registration fails"
  - "LiteLLM streaming response drops tool_use arguments"
  - "LiteLLM JSON-RPC error handling"
updated: "2026-05-14"
published_at: "2026-05-14T17:13:20.396Z"
updated_at: "2026-05-14T17:13:20.396Z"
---

## What this error means

`-32603 Internal error: Stream consumed` is a LiteLLM failure pattern reported for developers trying to fix litellm a2a /a2a/{id}/message/send returning -32603 stream consumed error. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report on BerriAI/litellm repo: POST /a2a/{agent_id}/message/send returns {"jsonrpc":"2.0","id":null,"error":{"code":-32603,"message":"Internal error: Stream consumed"}}. Affects LiteLLM main branch as of 2026-05-13 on Docker image ghcr.io/berriai/litellm-non_root:main-stable.

## Common causes

- LiteLLM's A2A (Agent-to-Agent) endpoints return a JSON-RPC 2.0 error 'Stream consumed' when invoked via raw HTTP POST. This blocks developers building multi-agent systems that rely on the A2A protocol through LiteLLM proxy.
- Bug report on BerriAI/litellm repo: POST /a2a/{agent_id}/message/send returns {"jsonrpc":"2.0","id":null,"error":{"code":-32603,"message":"Internal error: Stream consumed"}}. Affects LiteLLM main branch as of 2026-05-13 on Docker image ghcr.io/berriai/litellm-non_root:main-stable.

## Quick fixes

1. Confirm the exact error signature matches `-32603 Internal error: Stream consumed`.
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

- https://github.com/BerriAI/litellm/issues/27836

Evidence note: Bug report on BerriAI/litellm repo: POST /a2a/{agent_id}/message/send returns {"jsonrpc":"2.0","id":null,"error":{"code":-32603,"message":"Internal error: Stream consumed"}}. Affects LiteLLM main branch as of 2026-05-13 on Docker image ghcr.io/berriai/litellm-non_root:main-stable.

## Related errors

- LiteLLM A2A agent registration fails
- LiteLLM streaming response drops tool_use arguments
- LiteLLM JSON-RPC error handling

## FAQ

### What should I check first?

Start with the exact `-32603 Internal error: Stream consumed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `-32603 Internal error: Stream consumed`.
