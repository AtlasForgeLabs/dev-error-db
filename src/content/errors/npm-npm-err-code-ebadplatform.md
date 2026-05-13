---
title: "npm EBADPLATFORM Error — Platform-Specific Package Install Failure"
description: "Fix npm EBADPLATFORM error when installing platform-specific packages Includes evidence for npm troubleshooting demand."
category: "npm"
technology: "npm"
error_signature: "npm ERR! code EBADPLATFORM"
common_causes:
  - "When packages declare os/cpu restrictions (e.g., @esbuild packages), npm install fails on incompatible platforms. This commonly breaks CI pipelines when moving between darwin-arm64 and linux-x64 runners, blocking deployments."
  - "EBADPLATFORM blocks CI on multiple repos: monorepo publish workflow (darwin packages on ubuntu runner), WASM packages (cpu:wasm32 on arm64/x64), esbuild optional platform packages in CI runners."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "npm optionalDependencies EBADPLATFORM CI fix"
  - "npm ci strict mode vs npm install optional packages"
  - "esbuild platform-specific package install error"
updated: "2026-05-13"
published_at: "2026-05-13T20:13:17.679Z"
updated_at: "2026-05-13T20:13:17.679Z"
---

## What this error means

`npm ERR! code EBADPLATFORM` is a npm failure pattern reported for developers trying to fix npm ebadplatform error when installing platform-specific packages. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

EBADPLATFORM blocks CI on multiple repos: monorepo publish workflow (darwin packages on ubuntu runner), WASM packages (cpu:wasm32 on arm64/x64), esbuild optional platform packages in CI runners.

## Common causes

- When packages declare os/cpu restrictions (e.g., @esbuild packages), npm install fails on incompatible platforms. This commonly breaks CI pipelines when moving between darwin-arm64 and linux-x64 runners, blocking deployments.
- EBADPLATFORM blocks CI on multiple repos: monorepo publish workflow (darwin packages on ubuntu runner), WASM packages (cpu:wasm32 on arm64/x64), esbuild optional platform packages in CI runners.

## Quick fixes

1. Confirm the exact error signature matches `npm ERR! code EBADPLATFORM`.
2. Check the npm account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/forwardimpact/monorepo/issues/580
- https://github.com/runyaga/dart_monty_core/pull/49
- https://github.com/JMCSolutionsLtd/jmcsolutions-site/pull/9

Evidence note: EBADPLATFORM blocks CI on multiple repos: monorepo publish workflow (darwin packages on ubuntu runner), WASM packages (cpu:wasm32 on arm64/x64), esbuild optional platform packages in CI runners.

## Related errors

- npm optionalDependencies EBADPLATFORM CI fix
- npm ci strict mode vs npm install optional packages
- esbuild platform-specific package install error

## FAQ

### What should I check first?

Start with the exact `npm ERR! code EBADPLATFORM` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed npm workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `npm ERR! code EBADPLATFORM`.
