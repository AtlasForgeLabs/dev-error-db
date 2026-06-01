---
title: "AWS Lambda UnrecognizedClientException Invalid Security Token"
description: "AWS Lambda function calls return UnrecognizedClientException due to expired or invalid IAM role session tokens or temporary credential propagation delays; developer needs fix for cross-account Lambda-to-service calls Includes evidence for AWS troubleshooting demand."
category: "Cloud Platforms"
technology: "AWS"
error_signature: "An error occurred (UnrecognizedClientException) when calling CreateFunction ListClusters: The security token included in the request is invalid"
common_causes:
  - "AWS re:Post and Stack Overflow. UnrecognizedClientException in Lambda when calling AWS services including EKS ListClusters and Lambda CreateFunction. Common causes: expired STS assume-role sessions, wrong region, missing sessionToken, inactive access key."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloud Platforms"
updated: "2026-06-01"
published_at: "2026-06-01T19:44:27.672Z"
updated_at: "2026-06-01T19:44:27.672Z"
---

## What this error means

`An error occurred (UnrecognizedClientException) when calling CreateFunction ListClusters: The security token included in the request is invalid` is a AWS failure pattern reported for developers trying to aws lambda function calls return unrecognizedclientexception due to expired or invalid iam role session tokens or temporary credential propagation delays; developer needs fix for cross-account lambda-to-service calls. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

AWS re:Post and Stack Overflow. UnrecognizedClientException in Lambda when calling AWS services including EKS ListClusters and Lambda CreateFunction. Common causes: expired STS assume-role sessions, wrong region, missing sessionToken, inactive access key.

## Common causes

- AWS re:Post and Stack Overflow. UnrecognizedClientException in Lambda when calling AWS services including EKS ListClusters and Lambda CreateFunction. Common causes: expired STS assume-role sessions, wrong region, missing sessionToken, inactive access key.

## Quick fixes

1. Confirm the exact error signature matches `An error occurred (UnrecognizedClientException) when calling CreateFunction ListClusters: The security token included in the request is invalid`.
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

- https://repost.aws/questions/QUJ_tReBmXQzOFot6PMuY5AA/an-error-occurred-unrecognizedclientexception-when-calling-the-listclusters-operation-the-security-token-included-in-the-request-is-invalid
- https://repost.aws/questions/QUHjanNSLjT5uHH9qwQNrVUw/following-error-when-trying-to-create-a-lambda-function-an-error-occurred-accessdeniedexception-when-calling-the-createfunction-operation-none

Evidence note: AWS re:Post and Stack Overflow. UnrecognizedClientException in Lambda when calling AWS services including EKS ListClusters and Lambda CreateFunction. Common causes: expired STS assume-role sessions, wrong region, missing sessionToken, inactive access key.

## Related errors

- Cloud Platforms

## FAQ

### What should I check first?

Start with the exact `An error occurred (UnrecognizedClientException) when calling CreateFunction ListClusters: The security token included in the request is invalid` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed AWS workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `An error occurred (UnrecognizedClientException) when calling CreateFunction ListClusters: The security token included in the request is invalid`.
