---
title: "Cloudflare Worker-to-Worker Requests Over Custom Domain Return Instant 522 Timeout"
description: "Debug and fix Cloudflare Workers returning 522 timeout errors for intra-zone worker-to-worker requests routed through custom domains Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Worker <-> Worker request over custom_domain returns immediate 522 timeout http response"
common_causes:
  - "GitHub Issue #787 in cloudflare/workerd repo. Reported in Wrangler 2.9.0 on macOS. Same-zone worker-to-worker requests through custom domains return 522 immediately. Related to Cloudflare's feature designed specifically for inter-worker communication. Affects production serverless applications on Cloudflare platform."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-29"
published_at: "2026-05-29T13:43:26.409Z"
updated_at: "2026-05-29T13:43:26.409Z"
---

## What this error means

`Worker <-> Worker request over custom_domain returns immediate 522 timeout http response` is a Cloudflare failure pattern reported for developers trying to debug and fix cloudflare workers returning 522 timeout errors for intra-zone worker-to-worker requests routed through custom domains. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #787 in cloudflare/workerd repo. Reported in Wrangler 2.9.0 on macOS. Same-zone worker-to-worker requests through custom domains return 522 immediately. Related to Cloudflare's feature designed specifically for inter-worker communication. Affects production serverless applications on Cloudflare platform.

## Common causes

- GitHub Issue #787 in cloudflare/workerd repo. Reported in Wrangler 2.9.0 on macOS. Same-zone worker-to-worker requests through custom domains return 522 immediately. Related to Cloudflare's feature designed specifically for inter-worker communication. Affects production serverless applications on Cloudflare platform.

## Quick fixes

1. Confirm the exact error signature matches `Worker <-> Worker request over custom_domain returns immediate 522 timeout http response`.
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

Evidence note: GitHub Issue #787 in cloudflare/workerd repo. Reported in Wrangler 2.9.0 on macOS. Same-zone worker-to-worker requests through custom domains return 522 immediately. Related to Cloudflare's feature designed specifically for inter-worker communication. Affects production serverless applications on Cloudflare platform.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Worker <-> Worker request over custom_domain returns immediate 522 timeout http response` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Worker <-> Worker request over custom_domain returns immediate 522 timeout http response`.
