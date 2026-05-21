---
title: "AWS Lambda AccessDenied — s3:ListBucket unauthorised due to IAM propagation race condition"
description: "Fix AWS Lambda getting AccessDenied on S3 ListBucket due to IAM role/permission propagation delays between CDK/Terraform deploy and Lambda execution Includes evidence for AWS troubleshooting demand."
category: "Cloud Platforms"
technology: "AWS"
error_signature: "AccessDenied: User: arn:aws:sts::XXXXX:assumed-role/YYY-role-ZZZ is not authorized to perform: s3:ListBucket on resource: arn:aws:s3:::bucket-name"
common_causes:
  - "Multiple AWS-related issues — AWS CDK issue aws/aws-cdk#37939 shows IAM propagation race condition for OpenSearchPolicy; many StackOverflow/GitHub issues show AccessDenied on S3 ListBucket in Lambda. These are classic timing-race issues affecting production deployments. Category: Cloud Platforms per mapping rules."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloud Platforms"
updated: "2026-05-21"
published_at: "2026-05-21T03:39:43.505Z"
updated_at: "2026-05-21T03:39:43.505Z"
---

## What this error means

`AccessDenied: User: arn:aws:sts::XXXXX:assumed-role/YYY-role-ZZZ is not authorized to perform: s3:ListBucket on resource: arn:aws:s3:::bucket-name` is a AWS failure pattern reported for developers trying to fix aws lambda getting accessdenied on s3 listbucket due to iam role/permission propagation delays between cdk/terraform deploy and lambda execution. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple AWS-related issues — AWS CDK issue aws/aws-cdk#37939 shows IAM propagation race condition for OpenSearchPolicy; many StackOverflow/GitHub issues show AccessDenied on S3 ListBucket in Lambda. These are classic timing-race issues affecting production deployments. Category: Cloud Platforms per mapping rules.

## Common causes

- Multiple AWS-related issues — AWS CDK issue aws/aws-cdk#37939 shows IAM propagation race condition for OpenSearchPolicy; many StackOverflow/GitHub issues show AccessDenied on S3 ListBucket in Lambda. These are classic timing-race issues affecting production deployments. Category: Cloud Platforms per mapping rules.

## Quick fixes

1. Confirm the exact error signature matches `AccessDenied: User: arn:aws:sts::XXXXX:assumed-role/YYY-role-ZZZ is not authorized to perform: s3:ListBucket on resource: arn:aws:s3:::bucket-name`.
2. Check the AWS account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/aws/aws-cdk/issues/37939

Evidence note: Multiple AWS-related issues — AWS CDK issue aws/aws-cdk#37939 shows IAM propagation race condition for OpenSearchPolicy; many StackOverflow/GitHub issues show AccessDenied on S3 ListBucket in Lambda. These are classic timing-race issues affecting production deployments. Category: Cloud Platforms per mapping rules.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `AccessDenied: User: arn:aws:sts::XXXXX:assumed-role/YYY-role-ZZZ is not authorized to perform: s3:ListBucket on resource: arn:aws:s3:::bucket-name` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed AWS workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AccessDenied: User: arn:aws:sts::XXXXX:assumed-role/YYY-role-ZZZ is not authorized to perform: s3:ListBucket on resource: arn:aws:s3:::bucket-name`.
