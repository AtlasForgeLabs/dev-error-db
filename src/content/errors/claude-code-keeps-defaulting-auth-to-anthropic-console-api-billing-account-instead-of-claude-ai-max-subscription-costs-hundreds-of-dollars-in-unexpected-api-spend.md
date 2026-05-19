---
title: "Claude Code Billing Defaults to API Instead of Max Subscription — Accidental $$$ Spend"
description: "Fix Claude Code accidentally charging via API console billing instead of claude.ai Max subscription; stop unauthorized API charges Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "keeps defaulting auth to Anthropic Console API billing account instead of claude.ai Max subscription; costs hundreds of dollars in unexpected API spend"
common_causes:
  - "GitHub Issue #60422 (anthropics/claude-code), opened 2026-05-19T02:51:50Z. User reports /login keeps reverting to Anthropic Console API even after explicitly selecting claude.ai Max. Mapping: Claude Code-specific authentication/billing bug → AI Coding Tools."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T03:37:15.016Z"
updated_at: "2026-05-19T03:37:15.016Z"
---

## What this error means

`keeps defaulting auth to Anthropic Console API billing account instead of claude.ai Max subscription; costs hundreds of dollars in unexpected API spend` is a Claude Code failure pattern reported for developers trying to fix claude code accidentally charging via api console billing instead of claude.ai max subscription; stop unauthorized api charges. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #60422 (anthropics/claude-code), opened 2026-05-19T02:51:50Z. User reports /login keeps reverting to Anthropic Console API even after explicitly selecting claude.ai Max. Mapping: Claude Code-specific authentication/billing bug → AI Coding Tools.

## Common causes

- GitHub Issue #60422 (anthropics/claude-code), opened 2026-05-19T02:51:50Z. User reports /login keeps reverting to Anthropic Console API even after explicitly selecting claude.ai Max. Mapping: Claude Code-specific authentication/billing bug → AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `keeps defaulting auth to Anthropic Console API billing account instead of claude.ai Max subscription; costs hundreds of dollars in unexpected API spend`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/anthropics/claude-code/issues/60422

Evidence note: GitHub Issue #60422 (anthropics/claude-code), opened 2026-05-19T02:51:50Z. User reports /login keeps reverting to Anthropic Console API even after explicitly selecting claude.ai Max. Mapping: Claude Code-specific authentication/billing bug → AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `keeps defaulting auth to Anthropic Console API billing account instead of claude.ai Max subscription; costs hundreds of dollars in unexpected API spend` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `keeps defaulting auth to Anthropic Console API billing account instead of claude.ai Max subscription; costs hundreds of dollars in unexpected API spend`.
