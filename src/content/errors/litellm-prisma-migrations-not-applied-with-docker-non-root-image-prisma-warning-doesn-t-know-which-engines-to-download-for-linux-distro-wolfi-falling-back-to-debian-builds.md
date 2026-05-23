---
title: "LiteLLM Prisma migrations fail with non-root Docker image on Alpine-based distros"
description: "Fix LiteLLM proxy Prisma migration failure when running in non-root Docker container on Alpine/Wolfi-based images Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "Prisma migrations not applied with docker non_root image — Prisma warning: doesn't know which engines to download for Linux distro wolfi, falling back to debian builds"
common_causes:
  - "GitHub Issue #18851 on BerriAI/litellm (created 2026-01-09, 5 comments): Running LiteLLM proxy in non-root Docker image based on Alpine/Wolfi causes Prisma migrate deploy to fallback to debian-built engines with warnings. Database version works but UI migration fails. Affects self-hosted LiteLLM proxy deployments — operational blocker for teams using minimal Docker images. Maps to LiteLLM per approved category mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-23"
published_at: "2026-05-23T09:39:50.268Z"
updated_at: "2026-05-23T09:39:50.268Z"
---

## What this error means

`Prisma migrations not applied with docker non_root image — Prisma warning: doesn't know which engines to download for Linux distro wolfi, falling back to debian builds` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy prisma migration failure when running in non-root docker container on alpine/wolfi-based images. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #18851 on BerriAI/litellm (created 2026-01-09, 5 comments): Running LiteLLM proxy in non-root Docker image based on Alpine/Wolfi causes Prisma migrate deploy to fallback to debian-built engines with warnings. Database version works but UI migration fails. Affects self-hosted LiteLLM proxy deployments — operational blocker for teams using minimal Docker images. Maps to LiteLLM per approved category mapping.

## Common causes

- GitHub Issue #18851 on BerriAI/litellm (created 2026-01-09, 5 comments): Running LiteLLM proxy in non-root Docker image based on Alpine/Wolfi causes Prisma migrate deploy to fallback to debian-built engines with warnings. Database version works but UI migration fails. Affects self-hosted LiteLLM proxy deployments — operational blocker for teams using minimal Docker images. Maps to LiteLLM per approved category mapping.

## Quick fixes

1. Confirm the exact error signature matches `Prisma migrations not applied with docker non_root image — Prisma warning: doesn't know which engines to download for Linux distro wolfi, falling back to debian builds`.
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

- https://github.com/BerriAI/litellm/issues/18851

Evidence note: GitHub Issue #18851 on BerriAI/litellm (created 2026-01-09, 5 comments): Running LiteLLM proxy in non-root Docker image based on Alpine/Wolfi causes Prisma migrate deploy to fallback to debian-built engines with warnings. Database version works but UI migration fails. Affects self-hosted LiteLLM proxy deployments — operational blocker for teams using minimal Docker images. Maps to LiteLLM per approved category mapping.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `Prisma migrations not applied with docker non_root image — Prisma warning: doesn't know which engines to download for Linux distro wolfi, falling back to debian builds` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Prisma migrations not applied with docker non_root image — Prisma warning: doesn't know which engines to download for Linux distro wolfi, falling back to debian builds`.
