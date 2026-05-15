---
title: "Claude Code Explore Subagent Fails with 400 Invalid JSON Schema on Every Dispatch"
description: "Fix Claude Code Explore subagent 400 error JSON schema is invalid Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "tools.153.custom.input_schema: JSON schema is invalid"
common_causes:
  - "The built-in Explore subagent is broken for many users — every dispatch fails with a 400 error. This blocks a core feature of Claude Code that developers rely on for codebase exploration."
  - "Every dispatch of the built-in Explore subagent (via Agent tool with subagent_type: 'Explore') is rejected by the Anthropic API with 400: tools.153.custom.input_schema: JSON schema is invalid. Must match JSON Schema draft 2020-12."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code tool call validation error"
  - "Anthropic API tools parameter rejected"
updated: "2026-05-15"
published_at: "2026-05-15T12:13:22.569Z"
updated_at: "2026-05-15T12:13:22.569Z"
---

## What this error means

`tools.153.custom.input_schema: JSON schema is invalid` is a Claude Code failure pattern reported for developers trying to fix claude code explore subagent 400 error json schema is invalid. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Every dispatch of the built-in Explore subagent (via Agent tool with subagent_type: 'Explore') is rejected by the Anthropic API with 400: tools.153.custom.input_schema: JSON schema is invalid. Must match JSON Schema draft 2020-12.

## Common causes

- The built-in Explore subagent is broken for many users — every dispatch fails with a 400 error. This blocks a core feature of Claude Code that developers rely on for codebase exploration.
- Every dispatch of the built-in Explore subagent (via Agent tool with subagent_type: 'Explore') is rejected by the Anthropic API with 400: tools.153.custom.input_schema: JSON schema is invalid. Must match JSON Schema draft 2020-12.

## Quick fixes

1. Confirm the exact error signature matches `tools.153.custom.input_schema: JSON schema is invalid`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59354

Evidence note: Every dispatch of the built-in Explore subagent (via Agent tool with subagent_type: 'Explore') is rejected by the Anthropic API with 400: tools.153.custom.input_schema: JSON schema is invalid. Must match JSON Schema draft 2020-12.

## Related errors

- Claude Code tool call validation error
- Anthropic API tools parameter rejected

## FAQ

### What should I check first?

Start with the exact `tools.153.custom.input_schema: JSON schema is invalid` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `tools.153.custom.input_schema: JSON schema is invalid`.
