---
title: "GitHub Copilot CLI preToolUse Hooks Not Firing for Sub-Agents"
description: "Fix GitHub Copilot CLI preToolUse hooks not executing when commands run via background/task agents Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "preToolUse hooks don't fire for background/task sub-agents"
common_causes:
  - "Developers configure preToolUse hooks in Copilot CLI to enforce security policies (file permissions, lock checks, scanning), but these hooks are completely bypassed when Copilot spawns sub-agents (task agents or general-purpose agents). This means any security guardrail defined in hooks can be circumvented by the agent simply delegating to a sub-agent. Both global and project-level hooks are affected. sessionStart hooks also don't fire for sub-agents."
  - "Open issue with 1 comment. Copilot CLI v1.0.37. All sub-agent types tested (task/Haiku, general-purpose/Sonnet) bypass preToolUse hooks. Both global (~/.copilot/hooks/) and project-level (.github/hooks/) hooks affected. sessionStart hooks also don't fire for sub-agents."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Copilot CLI hooks not working"
  - "Copilot agent sandbox escape"
  - "GitHub Copilot security hooks bypassed"
updated: "2026-05-11"
---

## What this error means

`preToolUse hooks don't fire for background/task sub-agents` is a GitHub Copilot failure pattern reported for developers trying to fix github copilot cli pretooluse hooks not executing when commands run via background/task agents. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue with 1 comment. Copilot CLI v1.0.37. All sub-agent types tested (task/Haiku, general-purpose/Sonnet) bypass preToolUse hooks. Both global (~/.copilot/hooks/) and project-level (.github/hooks/) hooks affected. sessionStart hooks also don't fire for sub-agents.

## Common causes

- Developers configure preToolUse hooks in Copilot CLI to enforce security policies (file permissions, lock checks, scanning), but these hooks are completely bypassed when Copilot spawns sub-agents (task agents or general-purpose agents). This means any security guardrail defined in hooks can be circumvented by the agent simply delegating to a sub-agent. Both global and project-level hooks are affected. sessionStart hooks also don't fire for sub-agents.
- Open issue with 1 comment. Copilot CLI v1.0.37. All sub-agent types tested (task/Haiku, general-purpose/Sonnet) bypass preToolUse hooks. Both global (~/.copilot/hooks/) and project-level (.github/hooks/) hooks affected. sessionStart hooks also don't fire for sub-agents.

## Quick fixes

1. Confirm the exact error signature matches `preToolUse hooks don't fire for background/task sub-agents`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/3013

Evidence note: Open issue with 1 comment. Copilot CLI v1.0.37. All sub-agent types tested (task/Haiku, general-purpose/Sonnet) bypass preToolUse hooks. Both global (~/.copilot/hooks/) and project-level (.github/hooks/) hooks affected. sessionStart hooks also don't fire for sub-agents.

## Related errors

- Copilot CLI hooks not working
- Copilot agent sandbox escape
- GitHub Copilot security hooks bypassed

## FAQ

### What should I check first?

Start with the exact `preToolUse hooks don't fire for background/task sub-agents` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `preToolUse hooks don't fire for background/task sub-agents`.
