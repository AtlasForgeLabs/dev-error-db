---
title: "AWS Lambda AccessDeniedException when updating function code via AWS CLI"
description: "Developers configuring Lambda via AWS CLI get AccessDeniedException even after adding IAM policies; the issue often involves missing resource-level permissions or trust relationships. Includes evidence for AWS troubleshooting demand."
category: "Cloud Platforms"
technology: "AWS"
error_signature: "AccessDeniedException: User is not authorized to perform lambda:UpdateFunctionCode — Lambda function deployment via AWS CLI fails despite IAM policy"
common_causes:
  - "AWS re:Post thread QUcSHvVHpkT8ad4EmspXORvA documents this exact scenario — AccessDeniedException when attempting to update Lambda function code via AWS CLI, despite having multiple permissions configured. Also corroborated by general security token troubleshooting guide. Category: Cloud Platforms. Medium-high commercial value as Lambda is heavily used in serverless production."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloud Platforms"
updated: "2026-06-10"
published_at: "2026-06-10T13:36:11.861Z"
updated_at: "2026-06-10T13:36:11.861Z"
---

## What this error means

`AccessDeniedException: User is not authorized to perform lambda:UpdateFunctionCode — Lambda function deployment via AWS CLI fails despite IAM policy` is a AWS failure pattern reported for developers trying to developers configuring lambda via aws cli get accessdeniedexception even after adding iam policies; the issue often involves missing resource-level permissions or trust relationships.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

AWS re:Post thread QUcSHvVHpkT8ad4EmspXORvA documents this exact scenario — AccessDeniedException when attempting to update Lambda function code via AWS CLI, despite having multiple permissions configured. Also corroborated by general security token troubleshooting guide. Category: Cloud Platforms. Medium-high commercial value as Lambda is heavily used in serverless production.

## Common causes

- AWS re:Post thread QUcSHvVHpkT8ad4EmspXORvA documents this exact scenario — AccessDeniedException when attempting to update Lambda function code via AWS CLI, despite having multiple permissions configured. Also corroborated by general security token troubleshooting guide. Category: Cloud Platforms. Medium-high commercial value as Lambda is heavily used in serverless production.

## Quick fixes

1. Confirm the exact error signature matches `AccessDeniedException: User is not authorized to perform lambda:UpdateFunctionCode — Lambda function deployment via AWS CLI fails despite IAM policy`.
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

- https://repost.aws/questions/QUcSHvVHpkT8ad4EmspXORvA/lambda-accessdeniedexception-issue
- https://repost.aws/knowledge-center/iam-credentials-token

Evidence note: AWS re:Post thread QUcSHvVHpkT8ad4EmspXORvA documents this exact scenario — AccessDeniedException when attempting to update Lambda function code via AWS CLI, despite having multiple permissions configured. Also corroborated by general security token troubleshooting guide. Category: Cloud Platforms. Medium-high commercial value as Lambda is heavily used in serverless production.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `AccessDeniedException: User is not authorized to perform lambda:UpdateFunctionCode — Lambda function deployment via AWS CLI fails despite IAM policy` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed AWS workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `AccessDeniedException: User is not authorized to perform lambda:UpdateFunctionCode — Lambda function deployment via AWS CLI fails despite IAM policy`.
