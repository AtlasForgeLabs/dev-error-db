---
title: "Cursor v3.1 No models available in IDE while they show up on web — Picker Bug"
description: "Restore missing AI models in Cursor IDE when model picker is empty despite having active subscription and models showing on web dashboard Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "No models available at all in IDE picker while website shows models fine — Authentication UI Timeout waiting for EverythingProvider; Agent Endpoint fails"
common_causes:
  - "Cursor Community Forum thread #157722: Multiple users report models disappearing from IDE across both Windows and Mac. Error logs show 'Timeout waiting for EverythingProvider' affecting Auth UI, Tab, Agent Endpoint, and Codebase Indexing simultaneously. Root cause in version 3.1.14 model picker broken."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T13:44:29.961Z"
updated_at: "2026-06-02T13:44:29.961Z"
---

## What this error means

`No models available at all in IDE picker while website shows models fine — Authentication UI Timeout waiting for EverythingProvider; Agent Endpoint fails` is a Cursor failure pattern reported for developers trying to restore missing ai models in cursor ide when model picker is empty despite having active subscription and models showing on web dashboard. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor Community Forum thread #157722: Multiple users report models disappearing from IDE across both Windows and Mac. Error logs show 'Timeout waiting for EverythingProvider' affecting Auth UI, Tab, Agent Endpoint, and Codebase Indexing simultaneously. Root cause in version 3.1.14 model picker broken.

## Common causes

- Cursor Community Forum thread #157722: Multiple users report models disappearing from IDE across both Windows and Mac. Error logs show 'Timeout waiting for EverythingProvider' affecting Auth UI, Tab, Agent Endpoint, and Codebase Indexing simultaneously. Root cause in version 3.1.14 model picker broken.

## Quick fixes

1. Confirm the exact error signature matches `No models available at all in IDE picker while website shows models fine — Authentication UI Timeout waiting for EverythingProvider; Agent Endpoint fails`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
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

- https://forum.cursor.com/t/no-models-available-at-all/157722
- https://forum.cursor.com/t/cursor-v3-1-no-models-available-in-ide-but-showing-up-in-web/157780

Evidence note: Cursor Community Forum thread #157722: Multiple users report models disappearing from IDE across both Windows and Mac. Error logs show 'Timeout waiting for EverythingProvider' affecting Auth UI, Tab, Agent Endpoint, and Codebase Indexing simultaneously. Root cause in version 3.1.14 model picker broken.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `No models available at all in IDE picker while website shows models fine — Authentication UI Timeout waiting for EverythingProvider; Agent Endpoint fails` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `No models available at all in IDE picker while website shows models fine — Authentication UI Timeout waiting for EverythingProvider; Agent Endpoint fails`.
