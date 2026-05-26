---
title: "CLIProxyAPI: Codex returns payment_required despite remaining credits, then gpt-5.5 unavailable auth"
description: "Fix incorrect billing status causing Codex to reject authenticated requests even when account has sufficient credits Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "OAuth client marked payment_required despite remaining credits; subsequently gpt-5.5 unavailable auth"
common_causes:
  - "Issue #3491 from router-for-me/CLIProxyAPI, opened ~6 days ago. Reports that Codex OAuth client receives payment_required flag despite having remaining balance, blocking subsequent gpt-5.5 access. Affects self-hosted proxy users routing OpenAI-compatible API calls. High commercial value as it impacts paid API billing decisions. Tagged: bug, priority-high."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "OpenAI API"
updated: "2026-05-26"
published_at: "2026-05-26T20:43:17.883Z"
updated_at: "2026-05-26T20:43:17.883Z"
---

## What this error means

`OAuth client marked payment_required despite remaining credits; subsequently gpt-5.5 unavailable auth` is a OpenAI API failure pattern reported for developers trying to fix incorrect billing status causing codex to reject authenticated requests even when account has sufficient credits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3491 from router-for-me/CLIProxyAPI, opened ~6 days ago. Reports that Codex OAuth client receives payment_required flag despite having remaining balance, blocking subsequent gpt-5.5 access. Affects self-hosted proxy users routing OpenAI-compatible API calls. High commercial value as it impacts paid API billing decisions. Tagged: bug, priority-high.

## Common causes

- Issue #3491 from router-for-me/CLIProxyAPI, opened ~6 days ago. Reports that Codex OAuth client receives payment_required flag despite having remaining balance, blocking subsequent gpt-5.5 access. Affects self-hosted proxy users routing OpenAI-compatible API calls. High commercial value as it impacts paid API billing decisions. Tagged: bug, priority-high.

## Quick fixes

1. Confirm the exact error signature matches `OAuth client marked payment_required despite remaining credits; subsequently gpt-5.5 unavailable auth`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/router-for-me/CLIProxyAPI/issues/3491

Evidence note: Issue #3491 from router-for-me/CLIProxyAPI, opened ~6 days ago. Reports that Codex OAuth client receives payment_required flag despite having remaining balance, blocking subsequent gpt-5.5 access. Affects self-hosted proxy users routing OpenAI-compatible API calls. High commercial value as it impacts paid API billing decisions. Tagged: bug, priority-high.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `OAuth client marked payment_required despite remaining credits; subsequently gpt-5.5 unavailable auth` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OAuth client marked payment_required despite remaining credits; subsequently gpt-5.5 unavailable auth`.
