---
title: "Claude Code WebSearch Fails with tool_choice Error on deepseek-reasoner"
description: "Fix WebSearch tool returning 400 tool_choice error when using deepseek-reasoner model in Claude Code Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 400 deepseek-reasoner does not support this tool_choice"
common_causes:
  - "When using deepseek-reasoner model in Claude Code, the WebSearch tool consistently fails with a 400 error about unsupported tool_choice. Affects both Chinese and English queries. Regression issue — previously worked. Developers searching because a core tool (web search) becomes unusable."
  - "GitHub issue #58590 reports WebSearch tool universally fails with 'API Error: 400 deepseek-reasoner does not support this tool_choice' on Claude Code v2.1.140. Confirmed as regression affecting all query types."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code tool_choice error with reasoning models"
  - "WebSearch tool not working with custom models"
updated: "2026-05-13"
published_at: "2026-05-13T08:13:16.216Z"
updated_at: "2026-05-13T08:13:16.216Z"
---

## What this error means

`API Error: 400 deepseek-reasoner does not support this tool_choice` is a Claude Code failure pattern reported for developers trying to fix websearch tool returning 400 tool_choice error when using deepseek-reasoner model in claude code. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #58590 reports WebSearch tool universally fails with 'API Error: 400 deepseek-reasoner does not support this tool_choice' on Claude Code v2.1.140. Confirmed as regression affecting all query types.

## Common causes

- When using deepseek-reasoner model in Claude Code, the WebSearch tool consistently fails with a 400 error about unsupported tool_choice. Affects both Chinese and English queries. Regression issue — previously worked. Developers searching because a core tool (web search) becomes unusable.
- GitHub issue #58590 reports WebSearch tool universally fails with 'API Error: 400 deepseek-reasoner does not support this tool_choice' on Claude Code v2.1.140. Confirmed as regression affecting all query types.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 400 deepseek-reasoner does not support this tool_choice`.
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

- https://github.com/anthropics/claude-code/issues/58590

Evidence note: GitHub issue #58590 reports WebSearch tool universally fails with 'API Error: 400 deepseek-reasoner does not support this tool_choice' on Claude Code v2.1.140. Confirmed as regression affecting all query types.

## Related errors

- Claude Code tool_choice error with reasoning models
- WebSearch tool not working with custom models

## FAQ

### What should I check first?

Start with the exact `API Error: 400 deepseek-reasoner does not support this tool_choice` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 400 deepseek-reasoner does not support this tool_choice`.
