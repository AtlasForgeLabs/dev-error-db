---
title: "No longer able to use API token for auth — wrangler returns 'Failed to fetch auth token: 400 Bad Request'"
description: "Restore API token authentication in Cloudflare Wrangler CLI after it stopped working; user needs non-interactive auth for CI/CD pipelines. Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "wrangler whoami: Failed to fetch auth token: 400 Bad Request — 'You are logged in with an API Token. Unset the CLOUDFLARE_API_TOKEN' — cannot use OAuth for CI/CD"
common_causes:
  - "GitHub issue cloudflare/workers-sdk#13744: `wrangler whoami` started returning 400 Bad Request even with active API tokens. User cannot fall back to OAuth due to automation requirements. Covers Account API Tokens, User API Tokens, Global API Key. Created 2026-04-29, 4 comments. Critical auth regression affecting deployments."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "Cloudflare"
updated: "2026-05-17"
published_at: "2026-05-17T18:37:10.682Z"
updated_at: "2026-05-17T18:37:10.682Z"
---

## What this error means

`wrangler whoami: Failed to fetch auth token: 400 Bad Request — 'You are logged in with an API Token. Unset the CLOUDFLARE_API_TOKEN' — cannot use OAuth for CI/CD` is a Cloudflare failure pattern reported for developers trying to restore api token authentication in cloudflare wrangler cli after it stopped working; user needs non-interactive auth for ci/cd pipelines.. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue cloudflare/workers-sdk#13744: `wrangler whoami` started returning 400 Bad Request even with active API tokens. User cannot fall back to OAuth due to automation requirements. Covers Account API Tokens, User API Tokens, Global API Key. Created 2026-04-29, 4 comments. Critical auth regression affecting deployments.

## Common causes

- GitHub issue cloudflare/workers-sdk#13744: `wrangler whoami` started returning 400 Bad Request even with active API tokens. User cannot fall back to OAuth due to automation requirements. Covers Account API Tokens, User API Tokens, Global API Key. Created 2026-04-29, 4 comments. Critical auth regression affecting deployments.

## Quick fixes

1. Confirm the exact error signature matches `wrangler whoami: Failed to fetch auth token: 400 Bad Request — 'You are logged in with an API Token. Unset the CLOUDFLARE_API_TOKEN' — cannot use OAuth for CI/CD`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/cloudflare/workers-sdk/issues/13744

Evidence note: GitHub issue cloudflare/workers-sdk#13744: `wrangler whoami` started returning 400 Bad Request even with active API tokens. User cannot fall back to OAuth due to automation requirements. Covers Account API Tokens, User API Tokens, Global API Key. Created 2026-04-29, 4 comments. Critical auth regression affecting deployments.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `wrangler whoami: Failed to fetch auth token: 400 Bad Request — 'You are logged in with an API Token. Unset the CLOUDFLARE_API_TOKEN' — cannot use OAuth for CI/CD` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `wrangler whoami: Failed to fetch auth token: 400 Bad Request — 'You are logged in with an API Token. Unset the CLOUDFLARE_API_TOKEN' — cannot use OAuth for CI/CD`.
