---
title: "Cursor 'Model Not Available' Error — All AI Models Unavailable in Editor"
description: "Fix Cursor editor where no AI models work despite correct network — requires troubleshooting model provider API key status, subscription tier, or backend outage Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "model service unavailable / model not available (all models affected)"
common_causes:
  - "Found on forum.cursor.com (#118551, #118498) with multiple user reports describing identical symptoms: switching models yields 'not available' repeatedly. Commercially critical — breaks paid Cursor users entirely."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cursor"
updated: "2026-05-23"
published_at: "2026-05-23T18:39:51.124Z"
updated_at: "2026-05-23T18:39:51.124Z"
---

## What this error means

`model service unavailable / model not available (all models affected)` is a Cursor failure pattern reported for developers trying to fix cursor editor where no ai models work despite correct network — requires troubleshooting model provider api key status, subscription tier, or backend outage. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on forum.cursor.com (#118551, #118498) with multiple user reports describing identical symptoms: switching models yields 'not available' repeatedly. Commercially critical — breaks paid Cursor users entirely.

## Common causes

- Found on forum.cursor.com (#118551, #118498) with multiple user reports describing identical symptoms: switching models yields 'not available' repeatedly. Commercially critical — breaks paid Cursor users entirely.

## Quick fixes

1. Confirm the exact error signature matches `model service unavailable / model not available (all models affected)`.
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

- https://forum.cursor.com/t/model-not-available/118551
- https://forum.cursor.com/t/model-not-available/118498

Evidence note: Found on forum.cursor.com (#118551, #118498) with multiple user reports describing identical symptoms: switching models yields 'not available' repeatedly. Commercially critical — breaks paid Cursor users entirely.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `model service unavailable / model not available (all models affected)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model service unavailable / model not available (all models affected)`.
