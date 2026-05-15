---
title: "Cloudflare Wrangler Container App Registration Fails with Error 10007 on Dispatch Namespace"
description: "Fix Cloudflare Workers for Platforms container deployment error 10007 with dispatch namespace Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "A request to the Cloudflare API (/accounts/{ACCOUNT_ID}/workers/scripts/{name}/versions/{VERSION_ID}) failed. This Worker does not exist on your account. [code: 10007]"
common_causes:
  - "GitHub issue cloudflare/workers-sdk#13936 (May 15, 2026): wrangler deploy --dispatch-namespace for Workers with containers fails because container-application registration targets /workers/scripts/ instead of /workers/dispatch/namespaces/{ns}/scripts/. Image builds and pushes succeed but registration fails with 404/10007. Category: Cloudflare (Workers SDK)."
quick_fix: "Check the build output, project root, and deployment platform configuration before redeploying."
related_errors:
  - "Cloudflare"
updated: "2026-05-15"
published_at: "2026-05-15T20:13:23.513Z"
updated_at: "2026-05-15T20:13:23.513Z"
---

## What this error means

`A request to the Cloudflare API (/accounts/{ACCOUNT_ID}/workers/scripts/{name}/versions/{VERSION_ID}) failed. This Worker does not exist on your account. [code: 10007]` is a Cloudflare failure pattern reported for developers trying to fix cloudflare workers for platforms container deployment error 10007 with dispatch namespace. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue cloudflare/workers-sdk#13936 (May 15, 2026): wrangler deploy --dispatch-namespace for Workers with containers fails because container-application registration targets /workers/scripts/ instead of /workers/dispatch/namespaces/{ns}/scripts/. Image builds and pushes succeed but registration fails with 404/10007. Category: Cloudflare (Workers SDK).

## Common causes

- GitHub issue cloudflare/workers-sdk#13936 (May 15, 2026): wrangler deploy --dispatch-namespace for Workers with containers fails because container-application registration targets /workers/scripts/ instead of /workers/dispatch/namespaces/{ns}/scripts/. Image builds and pushes succeed but registration fails with 404/10007. Category: Cloudflare (Workers SDK).

## Quick fixes

1. Confirm the exact error signature matches `A request to the Cloudflare API (/accounts/{ACCOUNT_ID}/workers/scripts/{name}/versions/{VERSION_ID}) failed. This Worker does not exist on your account. [code: 10007]`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/cloudflare/workers-sdk/issues/13936

Evidence note: GitHub issue cloudflare/workers-sdk#13936 (May 15, 2026): wrangler deploy --dispatch-namespace for Workers with containers fails because container-application registration targets /workers/scripts/ instead of /workers/dispatch/namespaces/{ns}/scripts/. Image builds and pushes succeed but registration fails with 404/10007. Category: Cloudflare (Workers SDK).

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `A request to the Cloudflare API (/accounts/{ACCOUNT_ID}/workers/scripts/{name}/versions/{VERSION_ID}) failed. This Worker does not exist on your account. [code: 10007]` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `A request to the Cloudflare API (/accounts/{ACCOUNT_ID}/workers/scripts/{name}/versions/{VERSION_ID}) failed. This Worker does not exist on your account. [code: 10007]`.
