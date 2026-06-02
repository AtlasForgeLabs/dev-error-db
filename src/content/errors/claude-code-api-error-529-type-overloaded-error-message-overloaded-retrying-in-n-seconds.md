---
title: "Claude Code API Error 529 — overloaded_error vs 429 rate_limit: How to Tell the Difference"
description: "Developer sees 529 in Claude Code and is confused whether it is a rate limit or server overload; needs branching diagnosis path and correct fix Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 529 — type: \"overloaded_error\", message: \"Overloaded\"; retrying in N seconds"
common_causes:
  - "Multiple sources confirm 529 is classified as overloaded_error separate from 429 rate_limit_error. Blog post at blog.laozhang.ai details 30-second route board for diagnosis. GitHub issue #2907 on anthropics/claude-code shows real user reports of 529 retries exhausting. Category mapping: Claude Code errors go to 'AI Coding Tools' per SKILL.md."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-06-02"
published_at: "2026-06-02T03:44:28.659Z"
updated_at: "2026-06-02T03:44:28.659Z"
---

## What this error means

`API Error: 529 — type: "overloaded_error", message: "Overloaded"; retrying in N seconds` is a Claude Code failure pattern reported for developers trying to developer sees 529 in claude code and is confused whether it is a rate limit or server overload; needs branching diagnosis path and correct fix. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple sources confirm 529 is classified as overloaded_error separate from 429 rate_limit_error. Blog post at blog.laozhang.ai details 30-second route board for diagnosis. GitHub issue #2907 on anthropics/claude-code shows real user reports of 529 retries exhausting. Category mapping: Claude Code errors go to 'AI Coding Tools' per SKILL.md.

## Common causes

- Multiple sources confirm 529 is classified as overloaded_error separate from 429 rate_limit_error. Blog post at blog.laozhang.ai details 30-second route board for diagnosis. GitHub issue #2907 on anthropics/claude-code shows real user reports of 529 retries exhausting. Category mapping: Claude Code errors go to 'AI Coding Tools' per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `API Error: 529 — type: "overloaded_error", message: "Overloaded"; retrying in N seconds`.
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

- https://blog.laozhang.ai/en/posts/claude-code-overloaded-error
- https://github.com/anthropics/claude-code/issues/2907
- https://www.sitepoint.com/claude-code-rate-limits-explained

Evidence note: Multiple sources confirm 529 is classified as overloaded_error separate from 429 rate_limit_error. Blog post at blog.laozhang.ai details 30-second route board for diagnosis. GitHub issue #2907 on anthropics/claude-code shows real user reports of 529 retries exhausting. Category mapping: Claude Code errors go to 'AI Coding Tools' per SKILL.md.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: 529 — type: "overloaded_error", message: "Overloaded"; retrying in N seconds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: 529 — type: "overloaded_error", message: "Overloaded"; retrying in N seconds`.
