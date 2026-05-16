---
title: "Docker Container Creation Failed No Such Image public.ecr.aws SAM Build Python"
description: "Fix Docker container creation failure when running sam build --use-container with missing ECR image on Apple Silicon Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Container creation failed: No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64"
common_causes:
  - "Stack Overflow user on M2 Pro with Docker v29.2.0 gets 'No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64' when running sam build --use-container. ARM64 vs x86_64 architecture mismatch issue with AWS SAM CLI Docker images. Category is Docker (container runtime error)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-16"
published_at: "2026-05-16T10:13:25.259Z"
updated_at: "2026-05-16T10:13:25.259Z"
---

## What this error means

`Container creation failed: No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64` is a Docker failure pattern reported for developers trying to fix docker container creation failure when running sam build --use-container with missing ecr image on apple silicon. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Stack Overflow user on M2 Pro with Docker v29.2.0 gets 'No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64' when running sam build --use-container. ARM64 vs x86_64 architecture mismatch issue with AWS SAM CLI Docker images. Category is Docker (container runtime error).

## Common causes

- Stack Overflow user on M2 Pro with Docker v29.2.0 gets 'No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64' when running sam build --use-container. ARM64 vs x86_64 architecture mismatch issue with AWS SAM CLI Docker images. Category is Docker (container runtime error).

## Quick fixes

1. Confirm the exact error signature matches `Container creation failed: No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79936520/error-container-creation-failed-no-such-image-public-ecr-aws-sam-build-python

Evidence note: Stack Overflow user on M2 Pro with Docker v29.2.0 gets 'No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64' when running sam build --use-container. ARM64 vs x86_64 architecture mismatch issue with AWS SAM CLI Docker images. Category is Docker (container runtime error).

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Container creation failed: No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Container creation failed: No such image: public.ecr.aws/sam/build-python3.12:latest-x86_64`.
