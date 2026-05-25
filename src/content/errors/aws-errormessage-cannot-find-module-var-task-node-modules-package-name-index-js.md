---
title: "AWS Lambda 'Cannot find module' for bundled dependencies"
description: "Fix AWS Lambda function cold-start failures caused by missing or corrupted node_modules in deployment package Includes evidence for AWS troubleshooting demand."
category: "Cloud Platforms"
technology: "AWS"
error_signature: "errorMessage: Cannot find module '/var/task/node_modules/package-name/index.js'"
common_causes:
  - "AWS Lambda deployments fail with module-not-found when bundling tools (esbuild/webpack) omit or misplace dependencies. Enterprise cloud service with strong billing impact. Maps to Cloud Platforms. Not in covered-errors (Python SSL cert error is the only Python error listed, not Node.js lambda module issues)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-25"
published_at: "2026-05-25T02:43:12.473Z"
updated_at: "2026-05-25T02:43:12.473Z"
---

## What this error means

`errorMessage: Cannot find module '/var/task/node_modules/package-name/index.js'` is a AWS failure pattern reported for developers trying to fix aws lambda function cold-start failures caused by missing or corrupted node_modules in deployment package. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

AWS Lambda deployments fail with module-not-found when bundling tools (esbuild/webpack) omit or misplace dependencies. Enterprise cloud service with strong billing impact. Maps to Cloud Platforms. Not in covered-errors (Python SSL cert error is the only Python error listed, not Node.js lambda module issues).

## Common causes

- AWS Lambda deployments fail with module-not-found when bundling tools (esbuild/webpack) omit or misplace dependencies. Enterprise cloud service with strong billing impact. Maps to Cloud Platforms. Not in covered-errors (Python SSL cert error is the only Python error listed, not Node.js lambda module issues).

## Quick fixes

1. Confirm the exact error signature matches `errorMessage: Cannot find module '/var/task/node_modules/package-name/index.js'`.
2. Check the AWS account, local tool state, and provider configuration involved in the failing workflow.
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

- https://docs.aws.amazon.com/lambda/latest/dg/python-error-and-log-types.html

Evidence note: AWS Lambda deployments fail with module-not-found when bundling tools (esbuild/webpack) omit or misplace dependencies. Enterprise cloud service with strong billing impact. Maps to Cloud Platforms. Not in covered-errors (Python SSL cert error is the only Python error listed, not Node.js lambda module issues).

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `errorMessage: Cannot find module '/var/task/node_modules/package-name/index.js'` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed AWS workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `errorMessage: Cannot find module '/var/task/node_modules/package-name/index.js'`.
