---
title: "GitHub Actions Cache Service v2 Migration Breaking Workflows — Cache Not Found"
description: "Fix GitHub Actions workflows failing to restore build caches after GitHub's February 2025 cache service v2 migration, especially on self-hosted runners with outdated versions. Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "Cache not found for input keys: generated-repository-lib-* — GitHub Actions Actions Cache v2 service migration causing intermittent cache restore failures"
common_causes:
  - "Herodevs blog and GitHub discussions document ongoing cache restore failures following the Feb 1, 2025 cache service deprecation. Self-hosted runners below v2.327.1 (required for actions/cache@v5) show 'Cache not found' despite successful saves. Multiple GitHub Discussions threads confirm this remains unresolved into March 2026. Distinct from the already-covered 'npm ci lockfile' error. High commercial impact — CI/CD pipelines for paid Teams plans blocked."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "GitHub Actions"
updated: "2026-06-02"
published_at: "2026-06-02T05:44:28.945Z"
updated_at: "2026-06-02T05:44:28.945Z"
---

## What this error means

`Cache not found for input keys: generated-repository-lib-* — GitHub Actions Actions Cache v2 service migration causing intermittent cache restore failures` is a GitHub Actions failure pattern reported for developers trying to fix github actions workflows failing to restore build caches after github's february 2025 cache service v2 migration, especially on self-hosted runners with outdated versions.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Herodevs blog and GitHub discussions document ongoing cache restore failures following the Feb 1, 2025 cache service deprecation. Self-hosted runners below v2.327.1 (required for actions/cache@v5) show 'Cache not found' despite successful saves. Multiple GitHub Discussions threads confirm this remains unresolved into March 2026. Distinct from the already-covered 'npm ci lockfile' error. High commercial impact — CI/CD pipelines for paid Teams plans blocked.

## Common causes

- Herodevs blog and GitHub discussions document ongoing cache restore failures following the Feb 1, 2025 cache service deprecation. Self-hosted runners below v2.327.1 (required for actions/cache@v5) show 'Cache not found' despite successful saves. Multiple GitHub Discussions threads confirm this remains unresolved into March 2026. Distinct from the already-covered 'npm ci lockfile' error. High commercial impact — CI/CD pipelines for paid Teams plans blocked.

## Quick fixes

1. Confirm the exact error signature matches `Cache not found for input keys: generated-repository-lib-* — GitHub Actions Actions Cache v2 service migration causing intermittent cache restore failures`.
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

- https://www.herodevs.com/blog-posts/github-actions-cache-service-goes-dark-what-devops-teams-need-to-know
- https://github.com/orgs/community/discussions/163260
- https://github.com/actions/cache

Evidence note: Herodevs blog and GitHub discussions document ongoing cache restore failures following the Feb 1, 2025 cache service deprecation. Self-hosted runners below v2.327.1 (required for actions/cache@v5) show 'Cache not found' despite successful saves. Multiple GitHub Discussions threads confirm this remains unresolved into March 2026. Distinct from the already-covered 'npm ci lockfile' error. High commercial impact — CI/CD pipelines for paid Teams plans blocked.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `Cache not found for input keys: generated-repository-lib-* — GitHub Actions Actions Cache v2 service migration causing intermittent cache restore failures` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cache not found for input keys: generated-repository-lib-* — GitHub Actions Actions Cache v2 service migration causing intermittent cache restore failures`.
