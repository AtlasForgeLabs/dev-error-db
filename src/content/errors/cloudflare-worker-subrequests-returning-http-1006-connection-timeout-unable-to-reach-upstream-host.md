---
title: "Cloudflare Workers Subrequests Returning 1006 Timeout Error"
description: "Fix Cloudflare Workers subrequest timeout errors (1006) when making internal fetch calls within Workers Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Worker subrequests returning HTTP 1006 (connection timeout / unable to reach upstream host)"
common_causes:
  - "Incident reported on isdown.app — Cloudflare Workers experienced widespread subrequests returning 1006 errors affecting Sites and Services platforms. Lasted ~2.4 hours starting May 20, 2026. Affects all paid plan users whose Workers depend on internal subrequests. Category: Cloudflare (official mapping). Already published: Cloudflare 522/525 are covered, but Worker-specific 1006 subrequest timeout is not."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-26"
published_at: "2026-05-26T19:43:17.735Z"
updated_at: "2026-05-26T19:43:17.735Z"
---

## What this error means

`Worker subrequests returning HTTP 1006 (connection timeout / unable to reach upstream host)` is a Cloudflare failure pattern reported for developers trying to fix cloudflare workers subrequest timeout errors (1006) when making internal fetch calls within workers. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Incident reported on isdown.app — Cloudflare Workers experienced widespread subrequests returning 1006 errors affecting Sites and Services platforms. Lasted ~2.4 hours starting May 20, 2026. Affects all paid plan users whose Workers depend on internal subrequests. Category: Cloudflare (official mapping). Already published: Cloudflare 522/525 are covered, but Worker-specific 1006 subrequest timeout is not.

## Common causes

- Incident reported on isdown.app — Cloudflare Workers experienced widespread subrequests returning 1006 errors affecting Sites and Services platforms. Lasted ~2.4 hours starting May 20, 2026. Affects all paid plan users whose Workers depend on internal subrequests. Category: Cloudflare (official mapping). Already published: Cloudflare 522/525 are covered, but Worker-specific 1006 subrequest timeout is not.

## Quick fixes

1. Confirm the exact error signature matches `Worker subrequests returning HTTP 1006 (connection timeout / unable to reach upstream host)`.
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

- https://isdown.app/status/cloudflare/incidents/592056-workers-subrequests-returning-1006
- https://community.cloudflare.com/t/deployment-issue/887435

Evidence note: Incident reported on isdown.app — Cloudflare Workers experienced widespread subrequests returning 1006 errors affecting Sites and Services platforms. Lasted ~2.4 hours starting May 20, 2026. Affects all paid plan users whose Workers depend on internal subrequests. Category: Cloudflare (official mapping). Already published: Cloudflare 522/525 are covered, but Worker-specific 1006 subrequest timeout is not.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Worker subrequests returning HTTP 1006 (connection timeout / unable to reach upstream host)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Worker subrequests returning HTTP 1006 (connection timeout / unable to reach upstream host)`.
