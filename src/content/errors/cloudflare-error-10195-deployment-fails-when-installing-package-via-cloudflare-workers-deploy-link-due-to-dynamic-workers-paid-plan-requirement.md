---
title: "Cloudflare Workers Deployment Fails with Dynamic Workers Paid Plan Required (Error 10195)"
description: "Resolve Cloudflare Workers deployment failure caused by requiring Dynamic Workers paid plan when deploying certain npm packages via npx templates Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 10195: deployment fails when installing package via Cloudflare Workers deploy link due to Dynamic Workers paid plan requirement"
common_causes:
  - "GitHub issue in cloudflare/workers-sdk (#13264) reporting deployment failures when deploying emdash via Cloudflare Workers deploy link. Error 10195 indicates a paid plan gate — users attempting free-tier deploys hit an unexpected paywall. Distinguishable from existing covered Cloudflare 522/525 errors; this is a deployment-stage error specific to the Workers SDK template system."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloudflare"
updated: "2026-05-26"
published_at: "2026-05-26T19:43:17.735Z"
updated_at: "2026-05-26T19:43:17.735Z"
---

## What this error means

`Error 10195: deployment fails when installing package via Cloudflare Workers deploy link due to Dynamic Workers paid plan requirement` is a Cloudflare failure pattern reported for developers trying to resolve cloudflare workers deployment failure caused by requiring dynamic workers paid plan when deploying certain npm packages via npx templates. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue in cloudflare/workers-sdk (#13264) reporting deployment failures when deploying emdash via Cloudflare Workers deploy link. Error 10195 indicates a paid plan gate — users attempting free-tier deploys hit an unexpected paywall. Distinguishable from existing covered Cloudflare 522/525 errors; this is a deployment-stage error specific to the Workers SDK template system.

## Common causes

- GitHub issue in cloudflare/workers-sdk (#13264) reporting deployment failures when deploying emdash via Cloudflare Workers deploy link. Error 10195 indicates a paid plan gate — users attempting free-tier deploys hit an unexpected paywall. Distinguishable from existing covered Cloudflare 522/525 errors; this is a deployment-stage error specific to the Workers SDK template system.

## Quick fixes

1. Confirm the exact error signature matches `Error 10195: deployment fails when installing package via Cloudflare Workers deploy link due to Dynamic Workers paid plan requirement`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/13264

Evidence note: GitHub issue in cloudflare/workers-sdk (#13264) reporting deployment failures when deploying emdash via Cloudflare Workers deploy link. Error 10195 indicates a paid plan gate — users attempting free-tier deploys hit an unexpected paywall. Distinguishable from existing covered Cloudflare 522/525 errors; this is a deployment-stage error specific to the Workers SDK template system.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 10195: deployment fails when installing package via Cloudflare Workers deploy link due to Dynamic Workers paid plan requirement` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 10195: deployment fails when installing package via Cloudflare Workers deploy link due to Dynamic Workers paid plan requirement`.
