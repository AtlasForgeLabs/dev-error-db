---
title: "Claude Code WebSearch fails with 'deepseek-reasoner does not support this tool_choice' error"
description: "User wants to use Claude Code WebSearch tool but encounters a 400 API error when deepseek-reasoner model is used; needs fix to restore search functionality for both Chinese and English queries. Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "deepseek-reasoner does not support this tool_choice"
common_causes:
  - "GitHub Issue #58590 on anthropics/claude-code (updated 2026-05-20). Real user report: API Error 400 blocks WebSearch for all queries. Category maps to AI Coding Tools per SKILL.md rules (Claude Code errors → AI Coding Tools). High commercial value as Claude Code is a paid subscription IDE tool."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T08:38:28.904Z"
updated_at: "2026-05-20T08:38:28.904Z"
---

## What this error means

`deepseek-reasoner does not support this tool_choice` is a Claude Code failure pattern reported for developers trying to user wants to use claude code websearch tool but encounters a 400 api error when deepseek-reasoner model is used; needs fix to restore search functionality for both chinese and english queries.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #58590 on anthropics/claude-code (updated 2026-05-20). Real user report: API Error 400 blocks WebSearch for all queries. Category maps to AI Coding Tools per SKILL.md rules (Claude Code errors → AI Coding Tools). High commercial value as Claude Code is a paid subscription IDE tool.

## Common causes

- GitHub Issue #58590 on anthropics/claude-code (updated 2026-05-20). Real user report: API Error 400 blocks WebSearch for all queries. Category maps to AI Coding Tools per SKILL.md rules (Claude Code errors → AI Coding Tools). High commercial value as Claude Code is a paid subscription IDE tool.

## Quick fixes

1. Confirm the exact error signature matches `deepseek-reasoner does not support this tool_choice`.
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

Evidence note: GitHub Issue #58590 on anthropics/claude-code (updated 2026-05-20). Real user report: API Error 400 blocks WebSearch for all queries. Category maps to AI Coding Tools per SKILL.md rules (Claude Code errors → AI Coding Tools). High commercial value as Claude Code is a paid subscription IDE tool.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `deepseek-reasoner does not support this tool_choice` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `deepseek-reasoner does not support this tool_choice`.
