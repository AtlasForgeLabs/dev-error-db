---
title: "Claude Code Extra Usage Required for 1M Context Error Fix"
description: "Fix the 'extra usage is required for 1M context' error when using Claude Code with long context windows Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Extra usage is required for 1M context · enable extra usage at claude.ai/settings/usage, or use --model to switch to standard context"
common_causes:
  - "Claude Code users hitting the 1M context limit see this error when they haven't enabled extra usage. This blocks long-context workflows and forces users to upgrade or switch models. High search volume from frustrated paid users."
  - "Open issue on anthropics/claude-code repo. Users report getting API error requiring extra usage purchase to access 1M context window in Claude Code. Direct billing/quota escalation path."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code context window exceeded"
  - "Claude Code upgrade to Max plan"
  - "claude-code --model flag not recognized"
updated: "2026-05-13"
published_at: "2026-05-13T16:13:17.180Z"
updated_at: "2026-05-13T16:13:17.180Z"
---

## What this error means

`API Error: Extra usage is required for 1M context · enable extra usage at claude.ai/settings/usage, or use --model to switch to standard context` is a Claude Code failure pattern reported for developers trying to fix the 'extra usage is required for 1m context' error when using claude code with long context windows. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue on anthropics/claude-code repo. Users report getting API error requiring extra usage purchase to access 1M context window in Claude Code. Direct billing/quota escalation path.

## Common causes

- Claude Code users hitting the 1M context limit see this error when they haven't enabled extra usage. This blocks long-context workflows and forces users to upgrade or switch models. High search volume from frustrated paid users.
- Open issue on anthropics/claude-code repo. Users report getting API error requiring extra usage purchase to access 1M context window in Claude Code. Direct billing/quota escalation path.

## Quick fixes

1. Confirm the exact error signature matches `API Error: Extra usage is required for 1M context · enable extra usage at claude.ai/settings/usage, or use --model to switch to standard context`.
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

- https://github.com/anthropics/claude-code/issues/58730

Evidence note: Open issue on anthropics/claude-code repo. Users report getting API error requiring extra usage purchase to access 1M context window in Claude Code. Direct billing/quota escalation path.

## Related errors

- Claude Code context window exceeded
- Claude Code upgrade to Max plan
- claude-code --model flag not recognized

## FAQ

### What should I check first?

Start with the exact `API Error: Extra usage is required for 1M context · enable extra usage at claude.ai/settings/usage, or use --model to switch to standard context` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Extra usage is required for 1M context · enable extra usage at claude.ai/settings/usage, or use --model to switch to standard context`.
