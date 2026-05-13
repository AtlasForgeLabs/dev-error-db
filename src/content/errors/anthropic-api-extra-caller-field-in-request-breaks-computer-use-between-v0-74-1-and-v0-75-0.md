---
title: "Anthropic SDK computer-use Broken by Extra 'caller' Field in v0.75.0"
description: "Fix Anthropic SDK computer-use feature broken after upgrading to v0.75.0 Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "Extra 'caller' Field in Request Breaks computer-use Between v0.74.1 and v0.75.0"
common_causes:
  - "Computer-use is a premium Anthropic API feature; breaking changes between SDK versions block automated desktop agents and RPA workflows"
  - "Closed issue (11 comments) on official Anthropic SDK repo. Extra 'caller' field in API requests broke computer-use functionality between SDK v0.74.1 and v0.75.0. Breaking change affects production agents."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API computer-use browser tool error"
  - "Claude computer-use screenshot failed"
  - "Anthropic SDK version compatibility computer-use"
updated: "2026-05-13"
published_at: "2026-05-13T19:13:17.554Z"
updated_at: "2026-05-13T19:13:17.554Z"
---

## What this error means

`Extra 'caller' Field in Request Breaks computer-use Between v0.74.1 and v0.75.0` is a Anthropic API failure pattern reported for developers trying to fix anthropic sdk computer-use feature broken after upgrading to v0.75.0. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Closed issue (11 comments) on official Anthropic SDK repo. Extra 'caller' field in API requests broke computer-use functionality between SDK v0.74.1 and v0.75.0. Breaking change affects production agents.

## Common causes

- Computer-use is a premium Anthropic API feature; breaking changes between SDK versions block automated desktop agents and RPA workflows
- Closed issue (11 comments) on official Anthropic SDK repo. Extra 'caller' field in API requests broke computer-use functionality between SDK v0.74.1 and v0.75.0. Breaking change affects production agents.

## Quick fixes

1. Confirm the exact error signature matches `Extra 'caller' Field in Request Breaks computer-use Between v0.74.1 and v0.75.0`.
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

- https://github.com/anthropics/anthropic-sdk-python/issues/1112

Evidence note: Closed issue (11 comments) on official Anthropic SDK repo. Extra 'caller' field in API requests broke computer-use functionality between SDK v0.74.1 and v0.75.0. Breaking change affects production agents.

## Related errors

- Anthropic API computer-use browser tool error
- Claude computer-use screenshot failed
- Anthropic SDK version compatibility computer-use

## FAQ

### What should I check first?

Start with the exact `Extra 'caller' Field in Request Breaks computer-use Between v0.74.1 and v0.75.0` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Extra 'caller' Field in Request Breaks computer-use Between v0.74.1 and v0.75.0`.
