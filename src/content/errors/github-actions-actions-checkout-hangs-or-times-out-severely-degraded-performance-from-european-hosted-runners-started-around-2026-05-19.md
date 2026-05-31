---
title: "GitHub Actions actions/checkout extremely slow or timing out from European runners"
description: "Fix sudden degradation in GitHub Actions checkout speed for EU-region runners blocking CI/CD pipelines for teams using self-hosted or GitHub-hosted EU runners Includes evidence for GitHub Actions troubleshooting demand."
category: "GitHub Actions"
technology: "GitHub Actions"
error_signature: "actions/checkout hangs or times out severely degraded performance from European hosted runners — started around 2026-05-19"
common_causes:
  - "GitHub Issue #2441 on actions/checkout (created 2026-05-24). Multiple workflows reporting severe slowdown starting 2026-05-19, affecting EU runner regions specifically. Impacts paid team CI/CD pipelines. Category mapping: GitHub Actions workflow failed → GitHub Actions per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Actions"
updated: "2026-05-31"
published_at: "2026-05-31T00:43:30.096Z"
updated_at: "2026-05-31T00:43:30.096Z"
---

## What this error means

`actions/checkout hangs or times out severely degraded performance from European hosted runners — started around 2026-05-19` is a GitHub Actions failure pattern reported for developers trying to fix sudden degradation in github actions checkout speed for eu-region runners blocking ci/cd pipelines for teams using self-hosted or github-hosted eu runners. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #2441 on actions/checkout (created 2026-05-24). Multiple workflows reporting severe slowdown starting 2026-05-19, affecting EU runner regions specifically. Impacts paid team CI/CD pipelines. Category mapping: GitHub Actions workflow failed → GitHub Actions per SKILL.md.

## Common causes

- GitHub Issue #2441 on actions/checkout (created 2026-05-24). Multiple workflows reporting severe slowdown starting 2026-05-19, affecting EU runner regions specifically. Impacts paid team CI/CD pipelines. Category mapping: GitHub Actions workflow failed → GitHub Actions per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `actions/checkout hangs or times out severely degraded performance from European hosted runners — started around 2026-05-19`.
2. Check the GitHub Actions account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/actions/checkout/issues/2441

Evidence note: GitHub Issue #2441 on actions/checkout (created 2026-05-24). Multiple workflows reporting severe slowdown starting 2026-05-19, affecting EU runner regions specifically. Impacts paid team CI/CD pipelines. Category mapping: GitHub Actions workflow failed → GitHub Actions per SKILL.md.

## Related errors

- GitHub Actions

## FAQ

### What should I check first?

Start with the exact `actions/checkout hangs or times out severely degraded performance from European hosted runners — started around 2026-05-19` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Actions workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `actions/checkout hangs or times out severely degraded performance from European hosted runners — started around 2026-05-19`.
