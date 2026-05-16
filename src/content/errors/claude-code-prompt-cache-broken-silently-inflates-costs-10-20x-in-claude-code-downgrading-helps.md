---
title: "Claude Code Prompt Cache Bugs Inflating Costs by 10-20x"
description: "Developer discovers unexpectedly high token usage in Claude Code, searching for causes beyond normal rate limits — specifically cache-related cost inflation Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Prompt cache broken — silently inflates costs 10-20x in Claude Code; downgrading helps"
common_causes:
  - "Confirmed via The Register reporting on reverse-engineered Claude Code binary bugs. Two independent prompt cache bugs cause silent 10-20x cost inflation. Users confirmed downgrading to v2.1.34 reduced usage. This is distinct from general quota exhaustion — it's a specific root cause (cache bug). Commercially valuable: affects paid users billing for wasted tokens."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-16"
published_at: "2026-05-16T19:13:51.021Z"
updated_at: "2026-05-16T19:13:51.021Z"
---

## What this error means

`Prompt cache broken — silently inflates costs 10-20x in Claude Code; downgrading helps` is a Claude Code failure pattern reported for developers trying to developer discovers unexpectedly high token usage in claude code, searching for causes beyond normal rate limits — specifically cache-related cost inflation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Confirmed via The Register reporting on reverse-engineered Claude Code binary bugs. Two independent prompt cache bugs cause silent 10-20x cost inflation. Users confirmed downgrading to v2.1.34 reduced usage. This is distinct from general quota exhaustion — it's a specific root cause (cache bug). Commercially valuable: affects paid users billing for wasted tokens.

## Common causes

- Confirmed via The Register reporting on reverse-engineered Claude Code binary bugs. Two independent prompt cache bugs cause silent 10-20x cost inflation. Users confirmed downgrading to v2.1.34 reduced usage. This is distinct from general quota exhaustion — it's a specific root cause (cache bug). Commercially valuable: affects paid users billing for wasted tokens.

## Quick fixes

1. Confirm the exact error signature matches `Prompt cache broken — silently inflates costs 10-20x in Claude Code; downgrading helps`.
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

- https://www.theregister.com/software/2026/03/31/anthropic-admits-claude-code-quotas-running-out-too-fast/5223468

Evidence note: Confirmed via The Register reporting on reverse-engineered Claude Code binary bugs. Two independent prompt cache bugs cause silent 10-20x cost inflation. Users confirmed downgrading to v2.1.34 reduced usage. This is distinct from general quota exhaustion — it's a specific root cause (cache bug). Commercially valuable: affects paid users billing for wasted tokens.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Prompt cache broken — silently inflates costs 10-20x in Claude Code; downgrading helps` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Prompt cache broken — silently inflates costs 10-20x in Claude Code; downgrading helps`.
