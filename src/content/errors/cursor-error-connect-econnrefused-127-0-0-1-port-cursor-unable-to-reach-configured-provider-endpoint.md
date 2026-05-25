---
title: "Cursor ECONNREFUSED when connecting to custom endpoint"
description: "Fix Cursor IDE connection refused errors when using custom API providers or proxy configurations Includes evidence for Cursor troubleshooting demand."
category: "Cursor"
technology: "Cursor"
error_signature: "Error: connect ECONNREFUSED 127.0.0.1:PORT — Cursor unable to reach configured provider endpoint"
common_causes:
  - "Cursor IDE fails with ECONNREFUSED when configured to use self-hosted or proxy API endpoints — a paid coding tool authentication/connectivity error. Directly maps to Cursor category. Distinct from 'model not available' which is covered in covered-errors."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "Cursor"
updated: "2026-05-25"
published_at: "2026-05-25T02:43:12.473Z"
updated_at: "2026-05-25T02:43:12.473Z"
---

## What this error means

`Error: connect ECONNREFUSED 127.0.0.1:PORT — Cursor unable to reach configured provider endpoint` is a Cursor failure pattern reported for developers trying to fix cursor ide connection refused errors when using custom api providers or proxy configurations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Cursor IDE fails with ECONNREFUSED when configured to use self-hosted or proxy API endpoints — a paid coding tool authentication/connectivity error. Directly maps to Cursor category. Distinct from 'model not available' which is covered in covered-errors.

## Common causes

- Cursor IDE fails with ECONNREFUSED when configured to use self-hosted or proxy API endpoints — a paid coding tool authentication/connectivity error. Directly maps to Cursor category. Distinct from 'model not available' which is covered in covered-errors.

## Quick fixes

1. Confirm the exact error signature matches `Error: connect ECONNREFUSED 127.0.0.1:PORT — Cursor unable to reach configured provider endpoint`.
2. Check the Cursor account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://docs.cursor.com/context/configure-model

Evidence note: Cursor IDE fails with ECONNREFUSED when configured to use self-hosted or proxy API endpoints — a paid coding tool authentication/connectivity error. Directly maps to Cursor category. Distinct from 'model not available' which is covered in covered-errors.

## Related errors

- Cursor

## FAQ

### What should I check first?

Start with the exact `Error: connect ECONNREFUSED 127.0.0.1:PORT — Cursor unable to reach configured provider endpoint` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cursor workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: connect ECONNREFUSED 127.0.0.1:PORT — Cursor unable to reach configured provider endpoint`.
