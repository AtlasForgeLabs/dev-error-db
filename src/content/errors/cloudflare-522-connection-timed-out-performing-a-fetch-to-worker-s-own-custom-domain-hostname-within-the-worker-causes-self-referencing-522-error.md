---
title: "Cloudflare Workers fetch to own hostname causes recursive 522 connection timeout"
description: "Developer deploys Cloudflare Worker with custom domain and tries to internally fetch() from that same hostname inside the Worker code, resulting in 522 timeout due to self-routing loop through Cloudflare edge Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "522 connection timed out — performing a fetch() to Worker's own custom domain hostname within the Worker causes self-referencing 522 error"
common_causes:
  - "Source: Cloudflare official docs (developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/index.md). Explicitly documented: 'If you are using Workers with a Custom Domain, performing a fetch to its own hostname will cause a 522 error.' Workaround: use Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. High-value because it's an undocumented-looking gotcha that confuses many developers. Category: Cloudflare per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-06-03"
published_at: "2026-06-03T02:44:31.544Z"
updated_at: "2026-06-03T02:44:31.544Z"
---

## What this error means

`522 connection timed out — performing a fetch() to Worker's own custom domain hostname within the Worker causes self-referencing 522 error` is a Cloudflare failure pattern reported for developers trying to developer deploys cloudflare worker with custom domain and tries to internally fetch() from that same hostname inside the worker code, resulting in 522 timeout due to self-routing loop through cloudflare edge. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Cloudflare official docs (developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/index.md). Explicitly documented: 'If you are using Workers with a Custom Domain, performing a fetch to its own hostname will cause a 522 error.' Workaround: use Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. High-value because it's an undocumented-looking gotcha that confuses many developers. Category: Cloudflare per SKILL.md.

## Common causes

- Source: Cloudflare official docs (developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/index.md). Explicitly documented: 'If you are using Workers with a Custom Domain, performing a fetch to its own hostname will cause a 522 error.' Workaround: use Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. High-value because it's an undocumented-looking gotcha that confuses many developers. Category: Cloudflare per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `522 connection timed out — performing a fetch() to Worker's own custom domain hostname within the Worker causes self-referencing 522 error`.
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

- https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/index.md

Evidence note: Source: Cloudflare official docs (developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-522/index.md). Explicitly documented: 'If you are using Workers with a Custom Domain, performing a fetch to its own hostname will cause a 522 error.' Workaround: use Route targeting another hostname, or enable global_fetch_strictly_public compatibility flag. High-value because it's an undocumented-looking gotcha that confuses many developers. Category: Cloudflare per SKILL.md.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `522 connection timed out — performing a fetch() to Worker's own custom domain hostname within the Worker causes self-referencing 522 error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `522 connection timed out — performing a fetch() to Worker's own custom domain hostname within the Worker causes self-referencing 522 error`.
