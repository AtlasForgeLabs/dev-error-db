---
title: "Installing AWS EB CLI fails due to urllib v2 breaking changes in GitHub Actions CI"
description: "CI/CD pipeline fails during AWS EB CLI installation due to urllib3 version conflict introduced by botocore breaking change. Enterprise teams need fix to restore deployment pipeline. Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "ERROR: botocore 1.29.81 has requirement urllib3<1.27,>=1.25.4, but you'll have urllib3 2.0.2 — ImportError: cannot import name 'DEFAULT_CIPHERS' from 'urllib3.util.ssl_'"
common_causes:
  - "Stack Overflow Q76270084 — GitHub Actions CI workflow blocked by urllib3 version incompatibility when installing AWS EB CLI. Specific error signature with exact line numbers and stack trace. High production impact as it blocks CI/CD. Mapped to GitHub Actions approved category."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "GitHub Actions"
updated: "2026-05-28"
published_at: "2026-05-28T03:43:21.935Z"
updated_at: "2026-05-28T03:43:21.935Z"
---

## What this error means

`ERROR: botocore 1.29.81 has requirement urllib3<1.27,>=1.25.4, but you'll have urllib3 2.0.2 — ImportError: cannot import name 'DEFAULT_CIPHERS' from 'urllib3.util.ssl_'` is a GitHub Actions failure pattern reported for developers trying to ci/cd pipeline fails during aws eb cli installation due to urllib3 version conflict introduced by botocore breaking change. enterprise teams need fix to restore deployment pipeline.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow Q76270084 — GitHub Actions CI workflow blocked by urllib3 version incompatibility when installing AWS EB CLI. Specific error signature with exact line numbers and stack trace. High production impact as it blocks CI/CD. Mapped to GitHub Actions approved category.

## Common causes

- Stack Overflow Q76270084 — GitHub Actions CI workflow blocked by urllib3 version incompatibility when installing AWS EB CLI. Specific error signature with exact line numbers and stack trace. High production impact as it blocks CI/CD. Mapped to GitHub Actions approved category.

## Quick fixes

1. Confirm the exact error signature matches `ERROR: botocore 1.29.81 has requirement urllib3<1.27,>=1.25.4, but you'll have urllib3 2.0.2 — ImportError: cannot import name 'DEFAULT_CIPHERS' from 'urllib3.util.ssl_'`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
3. Check the build output, project root, and deployment platform configuration before redeploying.

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

- https://stackoverflow.com/questions/76270084/installing-aws-eb-cli-using-pip-fails-due-to-breaking-changes-in-urllib-2

Evidence note: Stack Overflow Q76270084 — GitHub Actions CI workflow blocked by urllib3 version incompatibility when installing AWS EB CLI. Specific error signature with exact line numbers and stack trace. High production impact as it blocks CI/CD. Mapped to GitHub Actions approved category.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `ERROR: botocore 1.29.81 has requirement urllib3<1.27,>=1.25.4, but you'll have urllib3 2.0.2 — ImportError: cannot import name 'DEFAULT_CIPHERS' from 'urllib3.util.ssl_'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ERROR: botocore 1.29.81 has requirement urllib3<1.27,>=1.25.4, but you'll have urllib3 2.0.2 — ImportError: cannot import name 'DEFAULT_CIPHERS' from 'urllib3.util.ssl_'`.
