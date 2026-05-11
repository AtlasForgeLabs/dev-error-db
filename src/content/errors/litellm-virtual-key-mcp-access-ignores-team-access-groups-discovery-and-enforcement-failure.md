---
title: "LiteLLM Virtual Key MCP Access Bypasses Team Access Group Controls"
description: "Fix LiteLLM virtual key MCP endpoints ignoring team access group restrictions Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Virtual key MCP access ignores team access groups — discovery and enforcement failure"
common_causes:
  - "Enterprise teams using LiteLLM proxy rely on team access groups to control which tools/API keys each team can access. Virtual keys are completely bypassing these controls on MCP endpoints (GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call). This is a security access control failure that undermines LiteLLM's enterprise team management features."
  - "GitHub issue 27657 (2026-05-11) reports that virtual key MCP access completely ignores team access groups. Both discovery and enforcement are broken. Severity: High. Confirmed on v1.83.14-stable.patch.3. Affects GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call endpoints. Not fixed in latest stable."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM virtual key permissions not enforced on custom endpoints"
  - "LiteLLM team access group rules bypassed in API v1"
  - "LiteLLM RBAC not applied to MCP protocol endpoints"
updated: "2026-05-11"
---

## What this error means

`Virtual key MCP access ignores team access groups — discovery and enforcement failure` is a LiteLLM failure pattern reported for developers trying to fix litellm virtual key mcp endpoints ignoring team access group restrictions. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue 27657 (2026-05-11) reports that virtual key MCP access completely ignores team access groups. Both discovery and enforcement are broken. Severity: High. Confirmed on v1.83.14-stable.patch.3. Affects GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call endpoints. Not fixed in latest stable.

## Common causes

- Enterprise teams using LiteLLM proxy rely on team access groups to control which tools/API keys each team can access. Virtual keys are completely bypassing these controls on MCP endpoints (GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call). This is a security access control failure that undermines LiteLLM's enterprise team management features.
- GitHub issue 27657 (2026-05-11) reports that virtual key MCP access completely ignores team access groups. Both discovery and enforcement are broken. Severity: High. Confirmed on v1.83.14-stable.patch.3. Affects GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call endpoints. Not fixed in latest stable.

## Quick fixes

1. Confirm the exact error signature matches `Virtual key MCP access ignores team access groups — discovery and enforcement failure`.
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

- https://github.com/BerriAI/litellm/issues/27657

Evidence note: GitHub issue 27657 (2026-05-11) reports that virtual key MCP access completely ignores team access groups. Both discovery and enforcement are broken. Severity: High. Confirmed on v1.83.14-stable.patch.3. Affects GET /v1/mcp/server, GET /v1/mcp/toolset, POST /mcp-rest/tools/call endpoints. Not fixed in latest stable.

## Related errors

- LiteLLM virtual key permissions not enforced on custom endpoints
- LiteLLM team access group rules bypassed in API v1
- LiteLLM RBAC not applied to MCP protocol endpoints

## FAQ

### What should I check first?

Start with the exact `Virtual key MCP access ignores team access groups — discovery and enforcement failure` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Virtual key MCP access ignores team access groups — discovery and enforcement failure`.
