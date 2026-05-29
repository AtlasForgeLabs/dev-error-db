---
title: "Cloudflare Miniflare Hangs Indefinitely When workerd Exits Before Sending Listen Events"
description: "Fix Cloudflare Miniflare/wrangler local development hang when workerd crashes before sending listen events, causing indefinite wait state Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "wrangler dev stalls at Starting local server... — Miniflare waitForPorts() blocks forever when workerd exits before writing expected listen events to control FD"
common_causes:
  - "Issue #14077 on cloudflare/workers-sdk. Miniflare internal waitForPorts() blocks forever if workerd exits prematurely. Stalls at 'Starting local server...' indefinitely. Developer-facing blocking issue with clear reproduction conditions. Part of Cloudflare Workers ecosystem used for paid edge compute."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-29"
published_at: "2026-05-29T17:43:26.857Z"
updated_at: "2026-05-29T17:43:26.857Z"
---

## What this error means

`wrangler dev stalls at Starting local server... — Miniflare waitForPorts() blocks forever when workerd exits before writing expected listen events to control FD` is a Cloudflare failure pattern reported for developers trying to fix cloudflare miniflare/wrangler local development hang when workerd crashes before sending listen events, causing indefinite wait state. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #14077 on cloudflare/workers-sdk. Miniflare internal waitForPorts() blocks forever if workerd exits prematurely. Stalls at 'Starting local server...' indefinitely. Developer-facing blocking issue with clear reproduction conditions. Part of Cloudflare Workers ecosystem used for paid edge compute.

## Common causes

- Issue #14077 on cloudflare/workers-sdk. Miniflare internal waitForPorts() blocks forever if workerd exits prematurely. Stalls at 'Starting local server...' indefinitely. Developer-facing blocking issue with clear reproduction conditions. Part of Cloudflare Workers ecosystem used for paid edge compute.

## Quick fixes

1. Confirm the exact error signature matches `wrangler dev stalls at Starting local server... — Miniflare waitForPorts() blocks forever when workerd exits before writing expected listen events to control FD`.
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

- https://github.com/cloudflare/workers-sdk/issues/14077

Evidence note: Issue #14077 on cloudflare/workers-sdk. Miniflare internal waitForPorts() blocks forever if workerd exits prematurely. Stalls at 'Starting local server...' indefinitely. Developer-facing blocking issue with clear reproduction conditions. Part of Cloudflare Workers ecosystem used for paid edge compute.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `wrangler dev stalls at Starting local server... — Miniflare waitForPorts() blocks forever when workerd exits before writing expected listen events to control FD` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler dev stalls at Starting local server... — Miniflare waitForPorts() blocks forever when workerd exits before writing expected listen events to control FD`.
