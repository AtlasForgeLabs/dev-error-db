---
title: "LiteLLM proxy silently drops all models after extended runtime — config-only NoDB mode bug"
description: "After LiteLLM upgrade, proxy returns empty model list and all model calls fail with 400; users cannot use any routed model until proxy restart Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400 Bad Request"
common_causes:
  - "Source: Dev Error DB LiteLLM category listing (dev-error-db.com/categories/litellm). Specifically reports: LiteLLM Proxy Silently Drops All Models After Extended Runtime — Config-Only No-DB Mode Bug (June 1, 2026). Also: LiteLLM model list becomes empty after upgrading v1.79.1 to v1.83.5. Affects enterprise proxy deployments. Category: LiteLLM per SKILL.md."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-06-03"
published_at: "2026-06-03T02:44:31.544Z"
updated_at: "2026-06-03T02:44:31.544Z"
---

## What this error means

`model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400 Bad Request` is a LiteLLM failure pattern reported for developers trying to after litellm upgrade, proxy returns empty model list and all model calls fail with 400; users cannot use any routed model until proxy restart. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: Dev Error DB LiteLLM category listing (dev-error-db.com/categories/litellm). Specifically reports: LiteLLM Proxy Silently Drops All Models After Extended Runtime — Config-Only No-DB Mode Bug (June 1, 2026). Also: LiteLLM model list becomes empty after upgrading v1.79.1 to v1.83.5. Affects enterprise proxy deployments. Category: LiteLLM per SKILL.md.

## Common causes

- Source: Dev Error DB LiteLLM category listing (dev-error-db.com/categories/litellm). Specifically reports: LiteLLM Proxy Silently Drops All Models After Extended Runtime — Config-Only No-DB Mode Bug (June 1, 2026). Also: LiteLLM model list becomes empty after upgrading v1.79.1 to v1.83.5. Affects enterprise proxy deployments. Category: LiteLLM per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400 Bad Request`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://dev-error-db.com/categories/litellm

Evidence note: Source: Dev Error DB LiteLLM category listing (dev-error-db.com/categories/litellm). Specifically reports: LiteLLM Proxy Silently Drops All Models After Extended Runtime — Config-Only No-DB Mode Bug (June 1, 2026). Also: LiteLLM model list becomes empty after upgrading v1.79.1 to v1.83.5. Affects enterprise proxy deployments. Category: LiteLLM per SKILL.md.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400 Bad Request` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `model list becomes empty after upgrading v1.79.1 to v1.83.5, model calls return 400 Bad Request`.
