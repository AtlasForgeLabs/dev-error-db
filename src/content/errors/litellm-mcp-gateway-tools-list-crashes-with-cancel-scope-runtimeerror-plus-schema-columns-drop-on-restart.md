---
title: "LiteLLM MCP Gateway tools/list Crashes with Cancel-Scope RuntimeError + Schema Columns Drop"
description: "LiteLLM MCP (Model Context Protocol) gateway crashes when listing available tools; concurrent cancel-scope causes RuntimeError; schema migration drops columns on service restart breaking persisted tool configs Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart"
common_causes:
  - "GitHub issue #28391 on BerriAI/litellm opened May 21, 2026 by gnummynum. Labels include claude code (issues related to Claude Code usage via MCP). The MCP gateway is a recently added feature enabling Claude Code to discover LiteLLM-managed tools. Both the async cancellation bug and schema migration loss affect production MCP integrations. Category: LiteLLM (direct mapping)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-21"
published_at: "2026-05-21T08:39:43.927Z"
updated_at: "2026-05-21T08:39:43.927Z"
---

## What this error means

`MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart` is a LiteLLM failure pattern reported for developers trying to litellm mcp (model context protocol) gateway crashes when listing available tools; concurrent cancel-scope causes runtimeerror; schema migration drops columns on service restart breaking persisted tool configs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #28391 on BerriAI/litellm opened May 21, 2026 by gnummynum. Labels include claude code (issues related to Claude Code usage via MCP). The MCP gateway is a recently added feature enabling Claude Code to discover LiteLLM-managed tools. Both the async cancellation bug and schema migration loss affect production MCP integrations. Category: LiteLLM (direct mapping).

## Common causes

- GitHub issue #28391 on BerriAI/litellm opened May 21, 2026 by gnummynum. Labels include claude code (issues related to Claude Code usage via MCP). The MCP gateway is a recently added feature enabling Claude Code to discover LiteLLM-managed tools. Both the async cancellation bug and schema migration loss affect production MCP integrations. Category: LiteLLM (direct mapping).

## Quick fixes

1. Confirm the exact error signature matches `MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart`.
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

- https://github.com/BerriAI/litellm/issues/28391

Evidence note: GitHub issue #28391 on BerriAI/litellm opened May 21, 2026 by gnummynum. Labels include claude code (issues related to Claude Code usage via MCP). The MCP gateway is a recently added feature enabling Claude Code to discover LiteLLM-managed tools. Both the async cancellation bug and schema migration loss affect production MCP integrations. Category: LiteLLM (direct mapping).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `MCP Gateway: tools/list crashes with cancel-scope RuntimeError + schema columns drop on restart`.
