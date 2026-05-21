---
title: "Cline free models return 'Insufficient balance' with negative $-0.1 balance"
description: "Fix unexpected negative balance and access denial on Cline's free tier model endpoints Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "\"Insufficient balance\" showing balance of $-0.1 for free model usage"
common_causes:
  - "GitHub issue cline/cline#10952 — users attempting free agent usage get 'insufficient balance' error with $-0.1 balance displayed. Never used paid tier before. Affects Cline's free model offerings which drive adoption. Category mapped to AI Coding Tools as it involves third-party model routing provider."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-05-21"
published_at: "2026-05-21T19:39:45.463Z"
updated_at: "2026-05-21T19:39:45.463Z"
---

## What this error means

`"Insufficient balance" showing balance of $-0.1 for free model usage` is a Cursor failure pattern reported for developers trying to fix unexpected negative balance and access denial on cline's free tier model endpoints. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue cline/cline#10952 — users attempting free agent usage get 'insufficient balance' error with $-0.1 balance displayed. Never used paid tier before. Affects Cline's free model offerings which drive adoption. Category mapped to AI Coding Tools as it involves third-party model routing provider.

## Common causes

- GitHub issue cline/cline#10952 — users attempting free agent usage get 'insufficient balance' error with $-0.1 balance displayed. Never used paid tier before. Affects Cline's free model offerings which drive adoption. Category mapped to AI Coding Tools as it involves third-party model routing provider.

## Quick fixes

1. Confirm the exact error signature matches `"Insufficient balance" showing balance of $-0.1 for free model usage`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cline/cline/issues/10952

Evidence note: GitHub issue cline/cline#10952 — users attempting free agent usage get 'insufficient balance' error with $-0.1 balance displayed. Never used paid tier before. Affects Cline's free model offerings which drive adoption. Category mapped to AI Coding Tools as it involves third-party model routing provider.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `"Insufficient balance" showing balance of $-0.1 for free model usage` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `"Insufficient balance" showing balance of $-0.1 for free model usage`.
