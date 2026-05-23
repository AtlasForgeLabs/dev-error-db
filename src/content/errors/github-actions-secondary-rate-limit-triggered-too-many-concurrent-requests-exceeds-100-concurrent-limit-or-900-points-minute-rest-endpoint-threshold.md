---
title: "GitHub Actions GITHUB_TOKEN Secondary Rate Limit — Concurrent Requests Exceeded"
description: "Resolve secondary rate limit error in GitHub Actions workflow caused by excessive concurrent API calls; understand point calculation for secondary limits Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Secondary rate limit triggered: too many concurrent requests (exceeds 100 concurrent limit) or 900 points/minute REST endpoint threshold"
common_causes:
  - "GITHUB_TOKEN primary rate limit is only 1,000 requests/hour (vs 5,000 for PAT). Secondary rate limits include 100 concurrent request cap, 900 points/minute for REST, and 60s CPU/60s wall time per minute. Fetched from official GitHub docs. High commercial value because CI/CD pipeline failures affect paid GitHub teams and enterprise orgs."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Actions"
updated: "2026-05-23"
published_at: "2026-05-23T04:39:49.734Z"
updated_at: "2026-05-23T04:39:49.734Z"
---

## What this error means

`Secondary rate limit triggered: too many concurrent requests (exceeds 100 concurrent limit) or 900 points/minute REST endpoint threshold` is a GitHub Actions failure pattern reported for developers trying to resolve secondary rate limit error in github actions workflow caused by excessive concurrent api calls; understand point calculation for secondary limits. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GITHUB_TOKEN primary rate limit is only 1,000 requests/hour (vs 5,000 for PAT). Secondary rate limits include 100 concurrent request cap, 900 points/minute for REST, and 60s CPU/60s wall time per minute. Fetched from official GitHub docs. High commercial value because CI/CD pipeline failures affect paid GitHub teams and enterprise orgs.

## Common causes

- GITHUB_TOKEN primary rate limit is only 1,000 requests/hour (vs 5,000 for PAT). Secondary rate limits include 100 concurrent request cap, 900 points/minute for REST, and 60s CPU/60s wall time per minute. Fetched from official GitHub docs. High commercial value because CI/CD pipeline failures affect paid GitHub teams and enterprise orgs.

## Quick fixes

1. Confirm the exact error signature matches `Secondary rate limit triggered: too many concurrent requests (exceeds 100 concurrent limit) or 900 points/minute REST endpoint threshold`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api

Evidence note: GITHUB_TOKEN primary rate limit is only 1,000 requests/hour (vs 5,000 for PAT). Secondary rate limits include 100 concurrent request cap, 900 points/minute for REST, and 60s CPU/60s wall time per minute. Fetched from official GitHub docs. High commercial value because CI/CD pipeline failures affect paid GitHub teams and enterprise orgs.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Secondary rate limit triggered: too many concurrent requests (exceeds 100 concurrent limit) or 900 points/minute REST endpoint threshold` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Secondary rate limit triggered: too many concurrent requests (exceeds 100 concurrent limit) or 900 points/minute REST endpoint threshold`.
