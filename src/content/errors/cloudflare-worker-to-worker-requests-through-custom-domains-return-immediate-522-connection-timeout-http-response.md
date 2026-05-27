---
title: "Cloudflare Workers Custom Domain Request Returns 522 Timeout Immediately"
description: "Fix 522 timeout when making same-zone worker-to-worker requests via custom domains on Cloudflare Workers Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Worker-to-worker requests through custom domains return immediate 522 Connection timeout HTTP response"
common_causes:
  - "GitHub issue cloudflare/workerd#787 confirms that custom domain worker-to-worker routing on some POPs immediately returns 522 instead of proxying. Wrangler 2.9.0 on Mac. Distinct from covered 'Cloudflare Error 522' (generic origin unreachable). This is a product-level bug in custom domain routing for Workers. Category: Cloudflare per mapping rules. High commercial value as it blocks production inter-service communication."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-27"
published_at: "2026-05-27T01:43:18.591Z"
updated_at: "2026-05-27T01:43:18.591Z"
---

## What this error means

`Worker-to-worker requests through custom domains return immediate 522 Connection timeout HTTP response` is a Cloudflare failure pattern reported for developers trying to fix 522 timeout when making same-zone worker-to-worker requests via custom domains on cloudflare workers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue cloudflare/workerd#787 confirms that custom domain worker-to-worker routing on some POPs immediately returns 522 instead of proxying. Wrangler 2.9.0 on Mac. Distinct from covered 'Cloudflare Error 522' (generic origin unreachable). This is a product-level bug in custom domain routing for Workers. Category: Cloudflare per mapping rules. High commercial value as it blocks production inter-service communication.

## Common causes

- GitHub issue cloudflare/workerd#787 confirms that custom domain worker-to-worker routing on some POPs immediately returns 522 instead of proxying. Wrangler 2.9.0 on Mac. Distinct from covered 'Cloudflare Error 522' (generic origin unreachable). This is a product-level bug in custom domain routing for Workers. Category: Cloudflare per mapping rules. High commercial value as it blocks production inter-service communication.

## Quick fixes

1. Confirm the exact error signature matches `Worker-to-worker requests through custom domains return immediate 522 Connection timeout HTTP response`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workerd/issues/787

Evidence note: GitHub issue cloudflare/workerd#787 confirms that custom domain worker-to-worker routing on some POPs immediately returns 522 instead of proxying. Wrangler 2.9.0 on Mac. Distinct from covered 'Cloudflare Error 522' (generic origin unreachable). This is a product-level bug in custom domain routing for Workers. Category: Cloudflare per mapping rules. High commercial value as it blocks production inter-service communication.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Worker-to-worker requests through custom domains return immediate 522 Connection timeout HTTP response` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Worker-to-worker requests through custom domains return immediate 522 Connection timeout HTTP response`.
