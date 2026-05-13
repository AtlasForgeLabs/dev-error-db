---
title: "Docker Hub Pull Rate Limit Exceeded (429) in CI/CD — Fix ImagePullBackOff"
description: "Fix Docker Hub 429 pull rate limit errors causing ImagePullBackOff in CI/CD pipelines and Kubernetes clusters Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "429 Too Many Requests — toomanyrequests: You have reached your pull rate limit"
common_causes:
  - "Docker Hub enforces pull rate limits on unauthenticated requests (100 pulls/6h for anonymous, 200 pulls/6h for free accounts). CI/CD pipelines and Kubernetes clusters exceeding these limits get '429 Too Many Requests' errors, causing pods stuck in ImagePullBackOff state and CI jobs failing intermittently. This is a persistent problem for teams scaling CI without Docker Hub Pro authentication."
  - "Multiple GitHub issues (2026-04) report Docker Hub rate limit errors. kruize-operator issue #87: optimizer pod stuck in ImagePullBackOff due to unauthenticated pull limits. grove issue #538: CI pipeline fails intermittently with 'toomanyrequests: You have reached your pull rate limit' when pulling without authentication. Both resolved by adding Docker Hub authentication."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Docker Hub authentication in GitHub Actions"
  - "Kubernetes ImagePullBackOff Docker rate limit"
  - "Docker pull rate limit CI/CD fix"
updated: "2026-05-13"
published_at: "2026-05-13T02:12:22.017Z"
updated_at: "2026-05-13T02:12:22.017Z"
---

## What this error means

`429 Too Many Requests — toomanyrequests: You have reached your pull rate limit` is a Docker failure pattern reported for developers trying to fix docker hub 429 pull rate limit errors causing imagepullbackoff in ci/cd pipelines and kubernetes clusters. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues (2026-04) report Docker Hub rate limit errors. kruize-operator issue #87: optimizer pod stuck in ImagePullBackOff due to unauthenticated pull limits. grove issue #538: CI pipeline fails intermittently with 'toomanyrequests: You have reached your pull rate limit' when pulling without authentication. Both resolved by adding Docker Hub authentication.

## Common causes

- Docker Hub enforces pull rate limits on unauthenticated requests (100 pulls/6h for anonymous, 200 pulls/6h for free accounts). CI/CD pipelines and Kubernetes clusters exceeding these limits get '429 Too Many Requests' errors, causing pods stuck in ImagePullBackOff state and CI jobs failing intermittently. This is a persistent problem for teams scaling CI without Docker Hub Pro authentication.
- Multiple GitHub issues (2026-04) report Docker Hub rate limit errors. kruize-operator issue #87: optimizer pod stuck in ImagePullBackOff due to unauthenticated pull limits. grove issue #538: CI pipeline fails intermittently with 'toomanyrequests: You have reached your pull rate limit' when pulling without authentication. Both resolved by adding Docker Hub authentication.

## Quick fixes

1. Confirm the exact error signature matches `429 Too Many Requests — toomanyrequests: You have reached your pull rate limit`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/kruize/kruize-operator/issues/87
- https://github.com/ai-dynamo/grove/issues/538

Evidence note: Multiple GitHub issues (2026-04) report Docker Hub rate limit errors. kruize-operator issue #87: optimizer pod stuck in ImagePullBackOff due to unauthenticated pull limits. grove issue #538: CI pipeline fails intermittently with 'toomanyrequests: You have reached your pull rate limit' when pulling without authentication. Both resolved by adding Docker Hub authentication.

## Related errors

- Docker Hub authentication in GitHub Actions
- Kubernetes ImagePullBackOff Docker rate limit
- Docker pull rate limit CI/CD fix

## FAQ

### What should I check first?

Start with the exact `429 Too Many Requests — toomanyrequests: You have reached your pull rate limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 Too Many Requests — toomanyrequests: You have reached your pull rate limit`.
