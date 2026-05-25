---
title: "AWS SDK AccessDenied / InvalidClientTokenId — IAM Permission Troubleshooting"
description: "Resolve AWS IAM permission errors when SDK calls return AccessDenied or InvalidClientTokenId — determine correct policy fixes for EC2, S3, Lambda operations Includes evidence for AWS troubleshooting demand."
category: "Cloud Platforms"
technology: "AWS"
error_signature: "AccessDenied / InvalidClientTokenId — botocore.exceptions.ClientError"
common_causes:
  - "Found in pulumi/docs#19250 (PR 2026-05-20) rewriting InvalidClientTokenId documentation. AWS SDK auth failures are high-value commercial intent — developers hitting these errors are production-deploying cloud services. Currently no AWS-related entries in covered-errors.md. Distinct from DNS_PROBE_FINISHED_NXDOMAIN and generic SSL errors already covered."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-25"
published_at: "2026-05-25T15:43:14.100Z"
updated_at: "2026-05-25T15:43:14.100Z"
---

## What this error means

`AccessDenied / InvalidClientTokenId — botocore.exceptions.ClientError` is a AWS failure pattern reported for developers trying to resolve aws iam permission errors when sdk calls return accessdenied or invalidclienttokenid — determine correct policy fixes for ec2, s3, lambda operations. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found in pulumi/docs#19250 (PR 2026-05-20) rewriting InvalidClientTokenId documentation. AWS SDK auth failures are high-value commercial intent — developers hitting these errors are production-deploying cloud services. Currently no AWS-related entries in covered-errors.md. Distinct from DNS_PROBE_FINISHED_NXDOMAIN and generic SSL errors already covered.

## Common causes

- Found in pulumi/docs#19250 (PR 2026-05-20) rewriting InvalidClientTokenId documentation. AWS SDK auth failures are high-value commercial intent — developers hitting these errors are production-deploying cloud services. Currently no AWS-related entries in covered-errors.md. Distinct from DNS_PROBE_FINISHED_NXDOMAIN and generic SSL errors already covered.

## Quick fixes

1. Confirm the exact error signature matches `AccessDenied / InvalidClientTokenId — botocore.exceptions.ClientError`.
2. Check the AWS account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/pulumi/docs/pull/19250

Evidence note: Found in pulumi/docs#19250 (PR 2026-05-20) rewriting InvalidClientTokenId documentation. AWS SDK auth failures are high-value commercial intent — developers hitting these errors are production-deploying cloud services. Currently no AWS-related entries in covered-errors.md. Distinct from DNS_PROBE_FINISHED_NXDOMAIN and generic SSL errors already covered.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `AccessDenied / InvalidClientTokenId — botocore.exceptions.ClientError` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed AWS workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AccessDenied / InvalidClientTokenId — botocore.exceptions.ClientError`.
