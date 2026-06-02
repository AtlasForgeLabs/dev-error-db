---
title: "Cursor v3.1 No Models Available in IDE Despite Showing Up in Web — Timeout for EverythingProvider"
description: "Fix Cursor v3.1 where all models disappear from IDE after update, even though they appear in browser/web; caused by auth UI timeout on EverythingProvider Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Error: Timeout waiting for EverythingProvider / No models available in IDE but showing up in web"
common_causes:
  - "Forum.cursor.com thread reports Cursor v3.1+ breaking model picker entirely. Logs show 'Timeout waiting for EverythingProvider' across Authentication UI, Codebase Indexing, Agent Endpoint. Known regression — multiple users affected. Workaround: rollback to v3.0 or delete appdata and reinstall. Covers both Model Not Available and general model unavailability. Category: Cursor."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cursor"
updated: "2026-06-02"
published_at: "2026-06-02T01:44:28.440Z"
updated_at: "2026-06-02T01:44:28.440Z"
---

## What this error means

`Error: Timeout waiting for EverythingProvider / No models available in IDE but showing up in web` is a Cursor failure pattern reported for developers trying to fix cursor v3.1 where all models disappear from ide after update, even though they appear in browser/web; caused by auth ui timeout on everythingprovider. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Forum.cursor.com thread reports Cursor v3.1+ breaking model picker entirely. Logs show 'Timeout waiting for EverythingProvider' across Authentication UI, Codebase Indexing, Agent Endpoint. Known regression — multiple users affected. Workaround: rollback to v3.0 or delete appdata and reinstall. Covers both Model Not Available and general model unavailability. Category: Cursor.

## Common causes

- Forum.cursor.com thread reports Cursor v3.1+ breaking model picker entirely. Logs show 'Timeout waiting for EverythingProvider' across Authentication UI, Codebase Indexing, Agent Endpoint. Known regression — multiple users affected. Workaround: rollback to v3.0 or delete appdata and reinstall. Covers both Model Not Available and general model unavailability. Category: Cursor.

## Quick fixes

1. Confirm the exact error signature matches `Error: Timeout waiting for EverythingProvider / No models available in IDE but showing up in web`.
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

- https://forum.cursor.com/t/cursor-v3-1-no-models-available-in-ide-but-showing-up-in-web/157780
- https://forum.cursor.com/t/no-way-to-select-a-model-in-new-agent-in-3-1-14/157692

Evidence note: Forum.cursor.com thread reports Cursor v3.1+ breaking model picker entirely. Logs show 'Timeout waiting for EverythingProvider' across Authentication UI, Codebase Indexing, Agent Endpoint. Known regression — multiple users affected. Workaround: rollback to v3.0 or delete appdata and reinstall. Covers both Model Not Available and general model unavailability. Category: Cursor.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Error: Timeout waiting for EverythingProvider / No models available in IDE but showing up in web` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Timeout waiting for EverythingProvider / No models available in IDE but showing up in web`.
