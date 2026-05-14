---
title: "Netlify Deploy Succeeds But Only 2 Files Uploaded — Site Returns 404 on All Routes"
description: "Fix Netlify deployment showing success but site returning 404 because only partial files uploaded Includes evidence for Netlify troubleshooting demand."
category: "Deployment"
technology: "Netlify"
error_signature: "Netlify deploys succeed but only 2 files uploaded — live site returns 404 on all routes"
common_causes:
  - "Netlify reports deploy as 'ready' but only uploads 2 files instead of 1027. Site returns 404 on all routes including root. Long-lived CDN cache (1-year TTL) may have hidden the issue for days. Breaking production sites silently."
  - "Deploy summary shows 2 files uploaded vs 1027 on prior successful deploys. Build state says 'ready' but site returns 404. Long-lived Netlify Durable CDN cache (1-year TTL) returned stale 200 to visitors hiding the broken state."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Netlify deploy incomplete file upload"
  - "Netlify CDN cache stale serving old content"
  - "Netlify build command succeeding but output wrong"
updated: "2026-05-14"
published_at: "2026-05-14T21:13:20.822Z"
updated_at: "2026-05-14T21:13:20.822Z"
---

## What this error means

`Netlify deploys succeed but only 2 files uploaded — live site returns 404 on all routes` is a Netlify failure pattern reported for developers trying to fix netlify deployment showing success but site returning 404 because only partial files uploaded. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Deploy summary shows 2 files uploaded vs 1027 on prior successful deploys. Build state says 'ready' but site returns 404. Long-lived Netlify Durable CDN cache (1-year TTL) returned stale 200 to visitors hiding the broken state.

## Common causes

- Netlify reports deploy as 'ready' but only uploads 2 files instead of 1027. Site returns 404 on all routes including root. Long-lived CDN cache (1-year TTL) may have hidden the issue for days. Breaking production sites silently.
- Deploy summary shows 2 files uploaded vs 1027 on prior successful deploys. Build state says 'ready' but site returns 404. Long-lived Netlify Durable CDN cache (1-year TTL) returned stale 200 to visitors hiding the broken state.

## Quick fixes

1. Confirm the exact error signature matches `Netlify deploys succeed but only 2 files uploaded — live site returns 404 on all routes`.
2. Check the Netlify account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/Sam-B-afk/lehmhub/issues/5

Evidence note: Deploy summary shows 2 files uploaded vs 1027 on prior successful deploys. Build state says 'ready' but site returns 404. Long-lived Netlify Durable CDN cache (1-year TTL) returned stale 200 to visitors hiding the broken state.

## Related errors

- Netlify deploy incomplete file upload
- Netlify CDN cache stale serving old content
- Netlify build command succeeding but output wrong

## FAQ

### What should I check first?

Start with the exact `Netlify deploys succeed but only 2 files uploaded — live site returns 404 on all routes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Netlify workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Netlify deploys succeed but only 2 files uploaded — live site returns 404 on all routes`.
