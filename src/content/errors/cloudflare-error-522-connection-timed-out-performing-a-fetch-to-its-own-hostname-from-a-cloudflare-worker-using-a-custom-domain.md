---
title: "Cloudflare Pages Workers Custom Domain fetch() Returns Error 522 — global_fetch_strictly_public Flag"
description: "Developer calling fetch() from a Cloudflare Worker that targets its own custom domain hostname receives 522 timeout instead of expected response; need routing workaround or compatibility flag Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: Connection timed out — performing a fetch to its own hostname from a Cloudflare Worker using a Custom Domain"
common_causes:
  - "Official Cloudflare docs (updated May 15, 2026) document this specific scenario: Workers making fetch() to their own Custom Domain hostname cause self-referencing 522. Solution: use a Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. Official docs = highest authority source. Additional 522/524/530 troubleshooting resources available. Category: Cloudflare per mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-02"
published_at: "2026-06-02T03:44:28.659Z"
updated_at: "2026-06-02T03:44:28.659Z"
---

## What this error means

`Error 522: Connection timed out — performing a fetch to its own hostname from a Cloudflare Worker using a Custom Domain` is a Cloudflare failure pattern reported for developers trying to developer calling fetch() from a cloudflare worker that targets its own custom domain hostname receives 522 timeout instead of expected response; need routing workaround or compatibility flag. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Cloudflare docs (updated May 15, 2026) document this specific scenario: Workers making fetch() to their own Custom Domain hostname cause self-referencing 522. Solution: use a Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. Official docs = highest authority source. Additional 522/524/530 troubleshooting resources available. Category: Cloudflare per mapping.

## Common causes

- Official Cloudflare docs (updated May 15, 2026) document this specific scenario: Workers making fetch() to their own Custom Domain hostname cause self-referencing 522. Solution: use a Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. Official docs = highest authority source. Additional 522/524/530 troubleshooting resources available. Category: Cloudflare per mapping.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: Connection timed out — performing a fetch to its own hostname from a Cloudflare Worker using a Custom Domain`.
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

- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522
- https://http.dev/522

Evidence note: Official Cloudflare docs (updated May 15, 2026) document this specific scenario: Workers making fetch() to their own Custom Domain hostname cause self-referencing 522. Solution: use a Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. Official docs = highest authority source. Additional 522/524/530 troubleshooting resources available. Category: Cloudflare per mapping.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: Connection timed out — performing a fetch to its own hostname from a Cloudflare Worker using a Custom Domain` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: Connection timed out — performing a fetch to its own hostname from a Cloudflare Worker using a Custom Domain`.
