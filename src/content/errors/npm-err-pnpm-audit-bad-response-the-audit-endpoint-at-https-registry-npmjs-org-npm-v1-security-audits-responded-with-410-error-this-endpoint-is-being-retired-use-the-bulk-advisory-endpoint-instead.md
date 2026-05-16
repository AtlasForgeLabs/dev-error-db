---
title: "pnpm audit Returns 410 Endpoint Retired Use Bulk Advisory Endpoint Instead"
description: "Fix pnpm audit 410 error after npm registry retired the v1 security audits endpoint Includes evidence for npm troubleshooting demand."
category: "npm"
technology: "npm"
error_signature: "ERR_PNPM_AUDIT_BAD_RESPONSE — The audit endpoint (at https://registry.npmjs.org/-/npm/v1/security/audits) responded with 410: {\"error\":\"This endpoint is being retired. Use the bulk advisory endpoint instead.\"}"
common_causes:
  - "Stack Overflow user reports pnpm audit suddenly returns 410 error because npmjs.org retired the /-/npm/v1/security/audits endpoint. Breaking change affecting all pnpm/npm audit users. Requires migration to new bulk advisory endpoint. High impact: security audit workflow broken for entire npm ecosystem."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "npm"
updated: "2026-05-16"
published_at: "2026-05-16T10:13:25.259Z"
updated_at: "2026-05-16T10:13:25.259Z"
---

## What this error means

`ERR_PNPM_AUDIT_BAD_RESPONSE — The audit endpoint (at https://registry.npmjs.org/-/npm/v1/security/audits) responded with 410: {"error":"This endpoint is being retired. Use the bulk advisory endpoint instead."}` is a npm failure pattern reported for developers trying to fix pnpm audit 410 error after npm registry retired the v1 security audits endpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow user reports pnpm audit suddenly returns 410 error because npmjs.org retired the /-/npm/v1/security/audits endpoint. Breaking change affecting all pnpm/npm audit users. Requires migration to new bulk advisory endpoint. High impact: security audit workflow broken for entire npm ecosystem.

## Common causes

- Stack Overflow user reports pnpm audit suddenly returns 410 error because npmjs.org retired the /-/npm/v1/security/audits endpoint. Breaking change affecting all pnpm/npm audit users. Requires migration to new bulk advisory endpoint. High impact: security audit workflow broken for entire npm ecosystem.

## Quick fixes

1. Confirm the exact error signature matches `ERR_PNPM_AUDIT_BAD_RESPONSE — The audit endpoint (at https://registry.npmjs.org/-/npm/v1/security/audits) responded with 410: {"error":"This endpoint is being retired. Use the bulk advisory endpoint instead."}`.
2. Check the npm account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79926699/pnpm-audit-responded-with-410-errorthis-endpoint-is-being-retired-use-the

Evidence note: Stack Overflow user reports pnpm audit suddenly returns 410 error because npmjs.org retired the /-/npm/v1/security/audits endpoint. Breaking change affecting all pnpm/npm audit users. Requires migration to new bulk advisory endpoint. High impact: security audit workflow broken for entire npm ecosystem.

## Related errors

- npm

## FAQ

### What should I check first?

Start with the exact `ERR_PNPM_AUDIT_BAD_RESPONSE — The audit endpoint (at https://registry.npmjs.org/-/npm/v1/security/audits) responded with 410: {"error":"This endpoint is being retired. Use the bulk advisory endpoint instead."}` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed npm workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERR_PNPM_AUDIT_BAD_RESPONSE — The audit endpoint (at https://registry.npmjs.org/-/npm/v1/security/audits) responded with 410: {"error":"This endpoint is being retired. Use the bulk advisory endpoint instead."}`.
