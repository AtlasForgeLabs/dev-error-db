---
title: "GitHub Actions Checkout Fails with 'Not Found' on SSO-Protected Enterprise Repository"
description: "Fix GitHub Actions checkout 'Not Found' error when accessing SSO-protected enterprise repositories despite having a valid PAT Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "checkout fails with 'Not Found' error for SSO-protected enterprise repository"
common_causes:
  - "Enterprise developers using GitHub Actions with SAML SSO encounter checkout failures even with valid personal access tokens. This blocks CI/CD pipelines for organizations using enterprise GitHub with SSO requirements"
  - "Stack Overflow question with 1 answer. Tagged authentication/github-actions/single-sign-on/github-api/github-enterprise. Checkout fails with 'Not Found' for SSO-protected enterprise repo despite valid PAT."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions authentication failed for pushing"
  - "GitHub Actions permission denied workflow"
  - "GitHub Actions PAT expired or insufficient scopes"
updated: "2026-05-13"
published_at: "2026-05-13T06:13:15.878Z"
updated_at: "2026-05-13T06:13:15.878Z"
---

## What this error means

`checkout fails with 'Not Found' error for SSO-protected enterprise repository` is a GitHub Actions failure pattern reported for developers trying to fix github actions checkout 'not found' error when accessing sso-protected enterprise repositories despite having a valid pat. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow question with 1 answer. Tagged authentication/github-actions/single-sign-on/github-api/github-enterprise. Checkout fails with 'Not Found' for SSO-protected enterprise repo despite valid PAT.

## Common causes

- Enterprise developers using GitHub Actions with SAML SSO encounter checkout failures even with valid personal access tokens. This blocks CI/CD pipelines for organizations using enterprise GitHub with SSO requirements
- Stack Overflow question with 1 answer. Tagged authentication/github-actions/single-sign-on/github-api/github-enterprise. Checkout fails with 'Not Found' for SSO-protected enterprise repo despite valid PAT.

## Quick fixes

1. Confirm the exact error signature matches `checkout fails with 'Not Found' error for SSO-protected enterprise repository`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79874764/github-actions-checkout-fails-with-not-found-error-for-sso-protected-enterpris

Evidence note: Stack Overflow question with 1 answer. Tagged authentication/github-actions/single-sign-on/github-api/github-enterprise. Checkout fails with 'Not Found' for SSO-protected enterprise repo despite valid PAT.

## Related errors

- GitHub Actions authentication failed for pushing
- GitHub Actions permission denied workflow
- GitHub Actions PAT expired or insufficient scopes

## FAQ

### What should I check first?

Start with the exact `checkout fails with 'Not Found' error for SSO-protected enterprise repository` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `checkout fails with 'Not Found' error for SSO-protected enterprise repository`.
