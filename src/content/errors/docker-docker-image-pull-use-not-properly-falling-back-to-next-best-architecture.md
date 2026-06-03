---
title: "Docker/Moby v29 Image Pull not falling back to next-best architecture"
description: "Fix Docker engine failing to use multi-arch image fallback (arm64→amd64 or vice versa) causing pull failures Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "Docker Image Pull/use not properly falling back to next-best architecture"
common_causes:
  - "Source: github.com/moby/moby issue #52751 (the-hotmann, opened Jun 3). Multi-architecture image distribution regression — affects hybrid environments deploying containers across x86/arm clusters. Critical for CI/CD pipeline reliability. Category mapping: P0 technology → Docker approved category."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Docker"
updated: "2026-06-03"
published_at: "2026-06-03T14:44:32.999Z"
updated_at: "2026-06-03T14:44:32.999Z"
---

## What this error means

`Docker Image Pull/use not properly falling back to next-best architecture` is a Docker failure pattern reported for developers trying to fix docker engine failing to use multi-arch image fallback (arm64→amd64 or vice versa) causing pull failures. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/moby/moby issue #52751 (the-hotmann, opened Jun 3). Multi-architecture image distribution regression — affects hybrid environments deploying containers across x86/arm clusters. Critical for CI/CD pipeline reliability. Category mapping: P0 technology → Docker approved category.

## Common causes

- Source: github.com/moby/moby issue #52751 (the-hotmann, opened Jun 3). Multi-architecture image distribution regression — affects hybrid environments deploying containers across x86/arm clusters. Critical for CI/CD pipeline reliability. Category mapping: P0 technology → Docker approved category.

## Quick fixes

1. Confirm the exact error signature matches `Docker Image Pull/use not properly falling back to next-best architecture`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/moby/moby/issues/52751

Evidence note: Source: github.com/moby/moby issue #52751 (the-hotmann, opened Jun 3). Multi-architecture image distribution regression — affects hybrid environments deploying containers across x86/arm clusters. Critical for CI/CD pipeline reliability. Category mapping: P0 technology → Docker approved category.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `Docker Image Pull/use not properly falling back to next-best architecture` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Docker Image Pull/use not properly falling back to next-best architecture`.
