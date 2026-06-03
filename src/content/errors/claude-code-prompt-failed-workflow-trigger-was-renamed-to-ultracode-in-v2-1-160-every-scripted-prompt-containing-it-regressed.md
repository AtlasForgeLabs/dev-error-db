---
title: "Claude Code v2.1.160 renamed workflow trigger to ultracode — all scripted prompts just broke"
description: "Fix Claude Code prompts that stopped working after upgrading to v2.1.160 because 'workflow' keyword no longer triggers dynamic workflows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "[prompt] failed: 'workflow' trigger was renamed to 'ultracode' in v2.1.160, every scripted prompt containing it regressed"
common_causes:
  - "Found on dev.to (published 2026-06-02). Author reports Claude Code v2.1.160 single-line change silently broke all prompt templates/runbooks/CI scripts using the 'workflow' keyword. High commercial value: affects paid Anthropic API users, breaks production automation. Category mapped to AI Coding Tools per SKILL.md rules."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-03"
published_at: "2026-06-03T15:44:33.093Z"
updated_at: "2026-06-03T15:44:33.093Z"
---

## What this error means

`[prompt] failed: 'workflow' trigger was renamed to 'ultracode' in v2.1.160, every scripted prompt containing it regressed` is a Claude Code failure pattern reported for developers trying to fix claude code prompts that stopped working after upgrading to v2.1.160 because 'workflow' keyword no longer triggers dynamic workflows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on dev.to (published 2026-06-02). Author reports Claude Code v2.1.160 single-line change silently broke all prompt templates/runbooks/CI scripts using the 'workflow' keyword. High commercial value: affects paid Anthropic API users, breaks production automation. Category mapped to AI Coding Tools per SKILL.md rules.

## Common causes

- Found on dev.to (published 2026-06-02). Author reports Claude Code v2.1.160 single-line change silently broke all prompt templates/runbooks/CI scripts using the 'workflow' keyword. High commercial value: affects paid Anthropic API users, breaks production automation. Category mapped to AI Coding Tools per SKILL.md rules.

## Quick fixes

1. Confirm the exact error signature matches `[prompt] failed: 'workflow' trigger was renamed to 'ultracode' in v2.1.160, every scripted prompt containing it regressed`.
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

- https://dev.to/layzerzero105/claude-code-v21160-renamed-the-workflow-trigger-to-ultracode-every-scripted-prompt-that-288n

Evidence note: Found on dev.to (published 2026-06-02). Author reports Claude Code v2.1.160 single-line change silently broke all prompt templates/runbooks/CI scripts using the 'workflow' keyword. High commercial value: affects paid Anthropic API users, breaks production automation. Category mapped to AI Coding Tools per SKILL.md rules.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `[prompt] failed: 'workflow' trigger was renamed to 'ultracode' in v2.1.160, every scripted prompt containing it regressed` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `[prompt] failed: 'workflow' trigger was renamed to 'ultracode' in v2.1.160, every scripted prompt containing it regressed`.
