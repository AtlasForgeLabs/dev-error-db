---
title: "Cloudflare Durable Objects RangeError — KV Value Exceeds 128 KiB"
description: "Developer storing data via Durable Object KV-backed put() hits undocumented limit; sees generic RangeError without guidance on 128 KiB cap. Includes evidence for Cloudflare Durable Objects / KV troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare Durable Objects / KV"
error_signature: "RangeError: Values cannot be larger than 131072 bytes"
common_causes:
  - "Found via GitHub API on cloudflare/workers-sdk/issues/14046 and cloudflare/cloudflare-docs/pull/31048 (2026-05-25). KV put() throws RangeError when serialized size exceeds 131072 bytes. The error message is not documented anywhere — developers get a confusing generic range error. Category: Cloudflare — Cloudflare platform storage limit error affecting Workers/Durable Objects production apps."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-26"
published_at: "2026-05-26T09:43:16.508Z"
updated_at: "2026-05-26T09:43:16.508Z"
---

## What this error means

`RangeError: Values cannot be larger than 131072 bytes` is a Cloudflare Durable Objects / KV failure pattern reported for developers trying to developer storing data via durable object kv-backed put() hits undocumented limit; sees generic rangeerror without guidance on 128 kib cap.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found via GitHub API on cloudflare/workers-sdk/issues/14046 and cloudflare/cloudflare-docs/pull/31048 (2026-05-25). KV put() throws RangeError when serialized size exceeds 131072 bytes. The error message is not documented anywhere — developers get a confusing generic range error. Category: Cloudflare — Cloudflare platform storage limit error affecting Workers/Durable Objects production apps.

## Common causes

- Found via GitHub API on cloudflare/workers-sdk/issues/14046 and cloudflare/cloudflare-docs/pull/31048 (2026-05-25). KV put() throws RangeError when serialized size exceeds 131072 bytes. The error message is not documented anywhere — developers get a confusing generic range error. Category: Cloudflare — Cloudflare platform storage limit error affecting Workers/Durable Objects production apps.

## Quick fixes

1. Confirm the exact error signature matches `RangeError: Values cannot be larger than 131072 bytes`.
2. Check the Cloudflare Durable Objects / KV account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/14046
- https://github.com/cloudflare/cloudflare-docs/pull/31048

Evidence note: Found via GitHub API on cloudflare/workers-sdk/issues/14046 and cloudflare/cloudflare-docs/pull/31048 (2026-05-25). KV put() throws RangeError when serialized size exceeds 131072 bytes. The error message is not documented anywhere — developers get a confusing generic range error. Category: Cloudflare — Cloudflare platform storage limit error affecting Workers/Durable Objects production apps.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `RangeError: Values cannot be larger than 131072 bytes` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare Durable Objects / KV workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `RangeError: Values cannot be larger than 131072 bytes`.
