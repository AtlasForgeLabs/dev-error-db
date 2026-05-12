---
title: "Anthropic SDK strips directory paths from filenames breaking skills.versions.create() API"
description: "Fix Anthropic SDK stripping directory paths from filenames during multipart file uploads, causing 400 errors with skills.versions.create() Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "400 invalid_request_error — skills.versions.create() requires SKILL.md inside top-level directory"
common_causes:
  - "The Anthropic SDK's getName function strips directory paths from filenames by default (stripPath=true), turning my-skill/SKILL.md into just SKILL.md. This breaks client.beta.skills.versions.create() which requires files in a top-level directory structure"
  - "GitHub issue #968 (created 2026-03-31, 4 comments). SDK's internal/uploads.js calls getName with stripPath=true, stripping paths. API returns 400 invalid_request_error. Affects skills.versions.create() and any multipart upload requiring directory structure."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API file upload 400 error"
  - "Anthropic SDK multipart upload path stripped"
  - "Anthropic skills API upload failed"
updated: "2026-05-12"
published_at: "2026-05-12T19:12:17.878Z"
updated_at: "2026-05-12T19:12:17.878Z"
---

## What this error means

`400 invalid_request_error — skills.versions.create() requires SKILL.md inside top-level directory` is a Anthropic API failure pattern reported for developers trying to fix anthropic sdk stripping directory paths from filenames during multipart file uploads, causing 400 errors with skills.versions.create(). Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #968 (created 2026-03-31, 4 comments). SDK's internal/uploads.js calls getName with stripPath=true, stripping paths. API returns 400 invalid_request_error. Affects skills.versions.create() and any multipart upload requiring directory structure.

## Common causes

- The Anthropic SDK's getName function strips directory paths from filenames by default (stripPath=true), turning my-skill/SKILL.md into just SKILL.md. This breaks client.beta.skills.versions.create() which requires files in a top-level directory structure
- GitHub issue #968 (created 2026-03-31, 4 comments). SDK's internal/uploads.js calls getName with stripPath=true, stripping paths. API returns 400 invalid_request_error. Affects skills.versions.create() and any multipart upload requiring directory structure.

## Quick fixes

1. Confirm the exact error signature matches `400 invalid_request_error — skills.versions.create() requires SKILL.md inside top-level directory`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/anthropic-sdk-typescript/issues/968

Evidence note: GitHub issue #968 (created 2026-03-31, 4 comments). SDK's internal/uploads.js calls getName with stripPath=true, stripping paths. API returns 400 invalid_request_error. Affects skills.versions.create() and any multipart upload requiring directory structure.

## Related errors

- Anthropic API file upload 400 error
- Anthropic SDK multipart upload path stripped
- Anthropic skills API upload failed

## FAQ

### What should I check first?

Start with the exact `400 invalid_request_error — skills.versions.create() requires SKILL.md inside top-level directory` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `400 invalid_request_error — skills.versions.create() requires SKILL.md inside top-level directory`.
