---
title: "LiteLLM BadRequestError Azure tools Array Exceeds 128 Limit — MCP Server Fix"
description: "Fix LiteLLM BadRequestError when MCP server tools array exceeds Azure OpenAI's 128 tool limit Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "LiteLLM BadRequestError: tools array exceeds Azure limit of 128"
common_causes:
  - "Developers using LiteLLM to proxy MCP servers (e.g., Chemlit) through Azure OpenAI hit BadRequestError when the tools array exceeds Azure's 128-tool maximum, breaking AI agent workflows"
  - "Bug report from 2026-05-11: LiteLLM raises BadRequestError because Chemlit MCP server generates 144 tools, exceeding Azure OpenAI's maximum of 128 tools. Error: 'litellm.BadRequestError: AzureExcept...'"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM Azure OpenAI tool count limit"
  - "Azure OpenAI max tools per request exceeded"
  - "MCP server too many tools LiteLLM proxy"
updated: "2026-05-11"
---

## What this error means

`LiteLLM BadRequestError: tools array exceeds Azure limit of 128` is a LiteLLM failure pattern reported for developers trying to fix litellm badrequesterror when mcp server tools array exceeds azure openai's 128 tool limit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Bug report from 2026-05-11: LiteLLM raises BadRequestError because Chemlit MCP server generates 144 tools, exceeding Azure OpenAI's maximum of 128 tools. Error: 'litellm.BadRequestError: AzureExcept...'

## Common causes

- Developers using LiteLLM to proxy MCP servers (e.g., Chemlit) through Azure OpenAI hit BadRequestError when the tools array exceeds Azure's 128-tool maximum, breaking AI agent workflows
- Bug report from 2026-05-11: LiteLLM raises BadRequestError because Chemlit MCP server generates 144 tools, exceeding Azure OpenAI's maximum of 128 tools. Error: 'litellm.BadRequestError: AzureExcept...'

## Quick fixes

1. Confirm the exact error signature matches `LiteLLM BadRequestError: tools array exceeds Azure limit of 128`.
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

- https://github.com/NIEHS/ToxPipe/issues/67

Evidence note: Bug report from 2026-05-11: LiteLLM raises BadRequestError because Chemlit MCP server generates 144 tools, exceeding Azure OpenAI's maximum of 128 tools. Error: 'litellm.BadRequestError: AzureExcept...'

## Related errors

- LiteLLM Azure OpenAI tool count limit
- Azure OpenAI max tools per request exceeded
- MCP server too many tools LiteLLM proxy

## FAQ

### What should I check first?

Start with the exact `LiteLLM BadRequestError: tools array exceeds Azure limit of 128` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `LiteLLM BadRequestError: tools array exceeds Azure limit of 128`.
