---
title: "Claude Code Max Plan Rejected with 'Out of Extra Usage' Despite Quota Remaining"
description: "Fix claude CLI rejecting prompts with 'out of extra usage' error while Claude Desktop works fine on same account Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "You're out of extra usage · resets X; rateLimitType: five_hour; overageStatus: rejected; overageDisabledReason: out_of_credits"
common_causes:
  - "GitHub issue #57096 from anthropics/claude-code reports claude -p CLI gets rejected against empty extra-usage pool while Claude Desktop continues working. Same account, same minute, same model. This indicates asymmetric quota handling between Desktop and CLI — a real paid-service pain point for Max plan users. Category: AI Coding Tools (Claude Code)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-01"
published_at: "2026-06-01T09:44:26.593Z"
updated_at: "2026-06-01T09:44:26.593Z"
---

## What this error means

`You're out of extra usage · resets X; rateLimitType: five_hour; overageStatus: rejected; overageDisabledReason: out_of_credits` is a Claude Code failure pattern reported for developers trying to fix claude cli rejecting prompts with 'out of extra usage' error while claude desktop works fine on same account. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #57096 from anthropics/claude-code reports claude -p CLI gets rejected against empty extra-usage pool while Claude Desktop continues working. Same account, same minute, same model. This indicates asymmetric quota handling between Desktop and CLI — a real paid-service pain point for Max plan users. Category: AI Coding Tools (Claude Code).

## Common causes

- GitHub issue #57096 from anthropics/claude-code reports claude -p CLI gets rejected against empty extra-usage pool while Claude Desktop continues working. Same account, same minute, same model. This indicates asymmetric quota handling between Desktop and CLI — a real paid-service pain point for Max plan users. Category: AI Coding Tools (Claude Code).

## Quick fixes

1. Confirm the exact error signature matches `You're out of extra usage · resets X; rateLimitType: five_hour; overageStatus: rejected; overageDisabledReason: out_of_credits`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/claude-code/issues/57096

Evidence note: GitHub issue #57096 from anthropics/claude-code reports claude -p CLI gets rejected against empty extra-usage pool while Claude Desktop continues working. Same account, same minute, same model. This indicates asymmetric quota handling between Desktop and CLI — a real paid-service pain point for Max plan users. Category: AI Coding Tools (Claude Code).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `You're out of extra usage · resets X; rateLimitType: five_hour; overageStatus: rejected; overageDisabledReason: out_of_credits` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `You're out of extra usage · resets X; rateLimitType: five_hour; overageStatus: rejected; overageDisabledReason: out_of_credits`.
