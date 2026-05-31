---
title: "LiteLLM Helm chart default image tag missing → ImagePullBackOff on stable releases"
description: "Fix LiteLLM Helm chart default image tag so stable kubernetes deployments succeed without manual image.tag override — systemic across versions 1.84.x–1.86.2 Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "ImagePullBackOff: helm chart defaults to main-<appVersion> tag which does not exist on ghcr — e.g., ghcr.io/berriai/litellm-database:main-1.86.2 returns 404 while plain 1.86.2 tag exists"
common_causes:
  - "GitHub Issue #29348 on BerriAI/litellm (created 2026-05-30). The chart renders main-<AppVersion> but only <AppVersion> plain tags are published to GHCR. This blocks ALL default installations across 6+ recent versions. Category mapping: LiteLLM K8s deployment failure → LiteLLM per SKILL.md."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "LiteLLM"
updated: "2026-05-31"
published_at: "2026-05-31T00:43:30.096Z"
updated_at: "2026-05-31T00:43:30.096Z"
---

## What this error means

`ImagePullBackOff: helm chart defaults to main-<appVersion> tag which does not exist on ghcr — e.g., ghcr.io/berriai/litellm-database:main-1.86.2 returns 404 while plain 1.86.2 tag exists` is a LiteLLM failure pattern reported for developers trying to fix litellm helm chart default image tag so stable kubernetes deployments succeed without manual image.tag override — systemic across versions 1.84.x–1.86.2. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #29348 on BerriAI/litellm (created 2026-05-30). The chart renders main-<AppVersion> but only <AppVersion> plain tags are published to GHCR. This blocks ALL default installations across 6+ recent versions. Category mapping: LiteLLM K8s deployment failure → LiteLLM per SKILL.md.

## Common causes

- GitHub Issue #29348 on BerriAI/litellm (created 2026-05-30). The chart renders main-<AppVersion> but only <AppVersion> plain tags are published to GHCR. This blocks ALL default installations across 6+ recent versions. Category mapping: LiteLLM K8s deployment failure → LiteLLM per SKILL.md.

## Quick fixes

1. Confirm the exact error signature matches `ImagePullBackOff: helm chart defaults to main-<appVersion> tag which does not exist on ghcr — e.g., ghcr.io/berriai/litellm-database:main-1.86.2 returns 404 while plain 1.86.2 tag exists`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/BerriAI/litellm/issues/29348

Evidence note: GitHub Issue #29348 on BerriAI/litellm (created 2026-05-30). The chart renders main-<AppVersion> but only <AppVersion> plain tags are published to GHCR. This blocks ALL default installations across 6+ recent versions. Category mapping: LiteLLM K8s deployment failure → LiteLLM per SKILL.md.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `ImagePullBackOff: helm chart defaults to main-<appVersion> tag which does not exist on ghcr — e.g., ghcr.io/berriai/litellm-database:main-1.86.2 returns 404 while plain 1.86.2 tag exists` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ImagePullBackOff: helm chart defaults to main-<appVersion> tag which does not exist on ghcr — e.g., ghcr.io/berriai/litellm-database:main-1.86.2 returns 404 while plain 1.86.2 tag exists`.
