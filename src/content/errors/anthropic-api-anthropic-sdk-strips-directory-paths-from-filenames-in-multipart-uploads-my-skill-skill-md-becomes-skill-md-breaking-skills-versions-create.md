---
title: "Anthropic TypeScript SDK Strips Directory Paths from File Uploads — Breaks Skills API"
description: "Fix Anthropic SDK stripping file paths during multipart upload for skills API Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Anthropic SDK strips directory paths from filenames in multipart uploads — my-skill/SKILL.md becomes SKILL.md, breaking skills.versions.create()"
common_causes:
  - "The SDK's internal uploads.js getName function strips directory paths by default (stripPath=true). This breaks client.beta.skills.versions.create() which requires files to maintain their directory structure (e.g., my-skill/SKILL.md). Developers get API errors with no obvious cause."
  - "4 comments. SDK's getName() does val.split(/[\\\\/]/).pop() with stripPath=true default. Transforms my-skill/SKILL.md → SKILL.md. Breaks beta.skills.versions.create() API which requires top-level directory structure. Affects skill/agent development workflows."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic skills API file upload error"
  - "Anthropic beta.skills.versions.create fails"
  - "Anthropic SDK multipart form filename handling"
updated: "2026-05-12"
published_at: "2026-05-12T23:12:19.303Z"
updated_at: "2026-05-12T23:12:19.303Z"
---

## What this error means

`Anthropic SDK strips directory paths from filenames in multipart uploads — my-skill/SKILL.md becomes SKILL.md, breaking skills.versions.create()` is a Anthropic API failure pattern reported for developers trying to fix anthropic sdk stripping file paths during multipart upload for skills api. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

4 comments. SDK's getName() does val.split(/[\\/]/).pop() with stripPath=true default. Transforms my-skill/SKILL.md → SKILL.md. Breaks beta.skills.versions.create() API which requires top-level directory structure. Affects skill/agent development workflows.

## Common causes

- The SDK's internal uploads.js getName function strips directory paths by default (stripPath=true). This breaks client.beta.skills.versions.create() which requires files to maintain their directory structure (e.g., my-skill/SKILL.md). Developers get API errors with no obvious cause.
- 4 comments. SDK's getName() does val.split(/[\\/]/).pop() with stripPath=true default. Transforms my-skill/SKILL.md → SKILL.md. Breaks beta.skills.versions.create() API which requires top-level directory structure. Affects skill/agent development workflows.

## Quick fixes

1. Confirm the exact error signature matches `Anthropic SDK strips directory paths from filenames in multipart uploads — my-skill/SKILL.md becomes SKILL.md, breaking skills.versions.create()`.
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

Evidence note: 4 comments. SDK's getName() does val.split(/[\\/]/).pop() with stripPath=true default. Transforms my-skill/SKILL.md → SKILL.md. Breaks beta.skills.versions.create() API which requires top-level directory structure. Affects skill/agent development workflows.

## Related errors

- Anthropic skills API file upload error
- Anthropic beta.skills.versions.create fails
- Anthropic SDK multipart form filename handling

## FAQ

### What should I check first?

Start with the exact `Anthropic SDK strips directory paths from filenames in multipart uploads — my-skill/SKILL.md becomes SKILL.md, breaking skills.versions.create()` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Anthropic SDK strips directory paths from filenames in multipart uploads — my-skill/SKILL.md becomes SKILL.md, breaking skills.versions.create()`.
