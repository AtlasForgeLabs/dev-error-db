---
title: "MCP streamable HTTP client one concurrent error tears down all sibling requests"
description: "Fix MCP Python SDK where a single HTTP error in a concurrent JSON-RPC session causes all other in-flight requests to fail simultaneously Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "streamable_http_client: one concurrent request HTTPStatusError tears down sibling requests — transport task group disruption"
common_causes:
  - "MCP Python SDK #2604 (2026-05-15): Transport task group design flaw — one failing request escapes and cancels unrelated sibling requests. Impacts MCP tool-use workflows (including LiteLLM proxy integrations using MCP as tool provider). Category: LiteLLM (context-dependent — MCP protocol errors affect LLM proxy chains)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-19"
published_at: "2026-05-19T05:37:15.297Z"
updated_at: "2026-05-19T05:37:15.297Z"
---

## What this error means

`streamable_http_client: one concurrent request HTTPStatusError tears down sibling requests — transport task group disruption` is a LiteLLM failure pattern reported for developers trying to fix mcp python sdk where a single http error in a concurrent json-rpc session causes all other in-flight requests to fail simultaneously. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

MCP Python SDK #2604 (2026-05-15): Transport task group design flaw — one failing request escapes and cancels unrelated sibling requests. Impacts MCP tool-use workflows (including LiteLLM proxy integrations using MCP as tool provider). Category: LiteLLM (context-dependent — MCP protocol errors affect LLM proxy chains).

## Common causes

- MCP Python SDK #2604 (2026-05-15): Transport task group design flaw — one failing request escapes and cancels unrelated sibling requests. Impacts MCP tool-use workflows (including LiteLLM proxy integrations using MCP as tool provider). Category: LiteLLM (context-dependent — MCP protocol errors affect LLM proxy chains).

## Quick fixes

1. Confirm the exact error signature matches `streamable_http_client: one concurrent request HTTPStatusError tears down sibling requests — transport task group disruption`.
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

- https://github.com/modelcontextprotocol/python-sdk/issues/2604

Evidence note: MCP Python SDK #2604 (2026-05-15): Transport task group design flaw — one failing request escapes and cancels unrelated sibling requests. Impacts MCP tool-use workflows (including LiteLLM proxy integrations using MCP as tool provider). Category: LiteLLM (context-dependent — MCP protocol errors affect LLM proxy chains).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `streamable_http_client: one concurrent request HTTPStatusError tears down sibling requests — transport task group disruption` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `streamable_http_client: one concurrent request HTTPStatusError tears down sibling requests — transport task group disruption`.
