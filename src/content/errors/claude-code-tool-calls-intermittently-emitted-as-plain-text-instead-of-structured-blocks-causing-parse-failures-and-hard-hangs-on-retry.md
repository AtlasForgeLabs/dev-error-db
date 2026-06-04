---
title: "Tool Calls Intermittently Emitted As Plain Text Instead Of Structured Blocks — Parse Failures And Hard Hangs On Retry"
description: "Claude Code intermittently emits tool use calls as plain text instead of parseable XML/JSON blocks, causing downstream tool execution failures and dead locks during agent retries Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Tool calls intermittently emitted as plain text instead of structured blocks, causing parse failures and hard hangs on retry"
common_causes:
  - "GitHub issue #65130 opened Jun 4 2026 by @macaroni-lab on anthropics/claude-code. Critical runtime bug affecting AI coding reliability. Labels: area:tools, bug, has repro, platform:wsl. Distinct from other MCP issues — this is about the LLM output formatting layer. High severity because it causes hard hangs."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-04"
published_at: "2026-06-04T07:44:35.266Z"
updated_at: "2026-06-04T07:44:35.266Z"
---

## What this error means

`Tool calls intermittently emitted as plain text instead of structured blocks, causing parse failures and hard hangs on retry` is a Claude Code failure pattern reported for developers trying to claude code intermittently emits tool use calls as plain text instead of parseable xml/json blocks, causing downstream tool execution failures and dead locks during agent retries. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #65130 opened Jun 4 2026 by @macaroni-lab on anthropics/claude-code. Critical runtime bug affecting AI coding reliability. Labels: area:tools, bug, has repro, platform:wsl. Distinct from other MCP issues — this is about the LLM output formatting layer. High severity because it causes hard hangs.

## Common causes

- GitHub issue #65130 opened Jun 4 2026 by @macaroni-lab on anthropics/claude-code. Critical runtime bug affecting AI coding reliability. Labels: area:tools, bug, has repro, platform:wsl. Distinct from other MCP issues — this is about the LLM output formatting layer. High severity because it causes hard hangs.

## Quick fixes

1. Confirm the exact error signature matches `Tool calls intermittently emitted as plain text instead of structured blocks, causing parse failures and hard hangs on retry`.
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

- https://github.com/anthropics/claude-code/issues/65130

Evidence note: GitHub issue #65130 opened Jun 4 2026 by @macaroni-lab on anthropics/claude-code. Critical runtime bug affecting AI coding reliability. Labels: area:tools, bug, has repro, platform:wsl. Distinct from other MCP issues — this is about the LLM output formatting layer. High severity because it causes hard hangs.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Tool calls intermittently emitted as plain text instead of structured blocks, causing parse failures and hard hangs on retry` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Tool calls intermittently emitted as plain text instead of structured blocks, causing parse failures and hard hangs on retry`.
