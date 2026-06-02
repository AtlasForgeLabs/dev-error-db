---
title: "Cloudflare Error 522 Connection Timed Out On Workers Custom Domain"
description: "Fix Cloudflare Error 522 (connection timed out) on Worker custom domains where self-fetching triggers timeout; also covers 520-526 origin error spectrum for developer-side troubleshooting Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 522: connection timed out — Cloudflare times out contacting the origin web server, specifically occurs when Workers with Custom Domain performs fetch to its own hostname"
common_causes:
  - "Official Cloudflare docs document Error 522 with specific edge case: fetching from a Worker's own hostname via fetch() causes a 522 error. Workarounds include using Route, targeting another hostname, or enabling global_fetch_strictly_public compatibility flag. Also covers full 52x error spectrum (520-526) origin troubleshooting. Official documentation provides authoritative error signatures. Category mapping: Cloudflare."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-02"
published_at: "2026-06-02T07:44:29.271Z"
updated_at: "2026-06-02T07:44:29.271Z"
---

## What this error means

`Error 522: connection timed out — Cloudflare times out contacting the origin web server, specifically occurs when Workers with Custom Domain performs fetch to its own hostname` is a Cloudflare failure pattern reported for developers trying to fix cloudflare error 522 (connection timed out) on worker custom domains where self-fetching triggers timeout; also covers 520-526 origin error spectrum for developer-side troubleshooting. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Official Cloudflare docs document Error 522 with specific edge case: fetching from a Worker's own hostname via fetch() causes a 522 error. Workarounds include using Route, targeting another hostname, or enabling global_fetch_strictly_public compatibility flag. Also covers full 52x error spectrum (520-526) origin troubleshooting. Official documentation provides authoritative error signatures. Category mapping: Cloudflare.

## Common causes

- Official Cloudflare docs document Error 522 with specific edge case: fetching from a Worker's own hostname via fetch() causes a 522 error. Workarounds include using Route, targeting another hostname, or enabling global_fetch_strictly_public compatibility flag. Also covers full 52x error spectrum (520-526) origin troubleshooting. Official documentation provides authoritative error signatures. Category mapping: Cloudflare.

## Quick fixes

1. Confirm the exact error signature matches `Error 522: connection timed out — Cloudflare times out contacting the origin web server, specifically occurs when Workers with Custom Domain performs fetch to its own hostname`.
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

Evidence note: Official Cloudflare docs document Error 522 with specific edge case: fetching from a Worker's own hostname via fetch() causes a 522 error. Workarounds include using Route, targeting another hostname, or enabling global_fetch_strictly_public compatibility flag. Also covers full 52x error spectrum (520-526) origin troubleshooting. Official documentation provides authoritative error signatures. Category mapping: Cloudflare.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 522: connection timed out — Cloudflare times out contacting the origin web server, specifically occurs when Workers with Custom Domain performs fetch to its own hostname` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 522: connection timed out — Cloudflare times out contacting the origin web server, specifically occurs when Workers with Custom Domain performs fetch to its own hostname`.
