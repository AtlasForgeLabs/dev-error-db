---
title: "Cursor IDE Model Picker Empty — Timeout waiting for EverythingProvider Across All Versions"
description: "Cursor IDE refuses to load any AI models in the agent panel despite web version showing models; full quit+restart needed; affects v2.6, v3.0, and v3.1 simultaneously Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Error: Timeout waiting for EverythingProvider (Authentication UI / Cursor Tab / Agent Endpoint / Codebase Indexing all FAILED); No model available in IDE but showing up in web version"
common_causes:
  - "Cursor forum post (#157780) — users report zero models in IDE while web interface works. Network diagnostics show Authentication UI, Cursor Tab, Agent Endpoint, and Codebase Indexing all FAILED with 'Timeout waiting for EverythingProvider'. Affects all recent versions. Related issue (#156074) shows similar behavior with ERROR_PROVIDER_ERROR. Requires disabling extensions (cursor --disable-extensions) and checking antivirus interference."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cursor"
updated: "2026-06-01"
published_at: "2026-06-01T05:44:26.150Z"
updated_at: "2026-06-01T05:44:26.150Z"
---

## What this error means

`Error: Timeout waiting for EverythingProvider (Authentication UI / Cursor Tab / Agent Endpoint / Codebase Indexing all FAILED); No model available in IDE but showing up in web version` is a Cursor failure pattern reported for developers trying to cursor ide refuses to load any ai models in the agent panel despite web version showing models; full quit+restart needed; affects v2.6, v3.0, and v3.1 simultaneously. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor forum post (#157780) — users report zero models in IDE while web interface works. Network diagnostics show Authentication UI, Cursor Tab, Agent Endpoint, and Codebase Indexing all FAILED with 'Timeout waiting for EverythingProvider'. Affects all recent versions. Related issue (#156074) shows similar behavior with ERROR_PROVIDER_ERROR. Requires disabling extensions (cursor --disable-extensions) and checking antivirus interference.

## Common causes

- Cursor forum post (#157780) — users report zero models in IDE while web interface works. Network diagnostics show Authentication UI, Cursor Tab, Agent Endpoint, and Codebase Indexing all FAILED with 'Timeout waiting for EverythingProvider'. Affects all recent versions. Related issue (#156074) shows similar behavior with ERROR_PROVIDER_ERROR. Requires disabling extensions (cursor --disable-extensions) and checking antivirus interference.

## Quick fixes

1. Confirm the exact error signature matches `Error: Timeout waiting for EverythingProvider (Authentication UI / Cursor Tab / Agent Endpoint / Codebase Indexing all FAILED); No model available in IDE but showing up in web version`.
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
- https://forum.cursor.com/t/cursor-cant-connect-to-model-provider/156074

Evidence note: Cursor forum post (#157780) — users report zero models in IDE while web interface works. Network diagnostics show Authentication UI, Cursor Tab, Agent Endpoint, and Codebase Indexing all FAILED with 'Timeout waiting for EverythingProvider'. Affects all recent versions. Related issue (#156074) shows similar behavior with ERROR_PROVIDER_ERROR. Requires disabling extensions (cursor --disable-extensions) and checking antivirus interference.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Error: Timeout waiting for EverythingProvider (Authentication UI / Cursor Tab / Agent Endpoint / Codebase Indexing all FAILED); No model available in IDE but showing up in web version` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Timeout waiting for EverythingProvider (Authentication UI / Cursor Tab / Agent Endpoint / Codebase Indexing all FAILED); No model available in IDE but showing up in web version`.
