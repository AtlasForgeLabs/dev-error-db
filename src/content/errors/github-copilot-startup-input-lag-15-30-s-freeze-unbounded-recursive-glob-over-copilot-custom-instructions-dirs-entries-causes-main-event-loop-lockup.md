---
title: "GitHub Copilot CLI startup freezes 15–30 seconds due to unbounded recursive glob over custom instructions dirs"
description: "Fix Copilot CLI startup freeze caused by recursive directory scanning without depth limit or node_modules exclusion Includes evidence for GitHub Copilot troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot"
error_signature: "Startup input lag (15–30 s freeze): unbounded recursive glob over $COPILOT_CUSTOM_INSTRUCTIONS_DIRS entries causes main event loop lockup"
common_causes:
  - "Issue #3543 on github/copilot-cli (created 2026-05-27): COPILOT_CUSTOM_INSTRUCTIONS_DIRS pointing to large directories triggers unbounded glob('**/*.instructions.md') with no depth limit and no skip list. On realistic home directories this fires 600,000+ readdir callbacks on the main thread, freezing the TUI completely including Ctrl-C. Started in v1.0.52. Production impact: developers lose significant startup time. Category: GitHub Copilot."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-27"
published_at: "2026-05-27T20:43:21.012Z"
updated_at: "2026-05-27T20:43:21.012Z"
---

## What this error means

`Startup input lag (15–30 s freeze): unbounded recursive glob over $COPILOT_CUSTOM_INSTRUCTIONS_DIRS entries causes main event loop lockup` is a GitHub Copilot failure pattern reported for developers trying to fix copilot cli startup freeze caused by recursive directory scanning without depth limit or node_modules exclusion. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #3543 on github/copilot-cli (created 2026-05-27): COPILOT_CUSTOM_INSTRUCTIONS_DIRS pointing to large directories triggers unbounded glob('**/*.instructions.md') with no depth limit and no skip list. On realistic home directories this fires 600,000+ readdir callbacks on the main thread, freezing the TUI completely including Ctrl-C. Started in v1.0.52. Production impact: developers lose significant startup time. Category: GitHub Copilot.

## Common causes

- Issue #3543 on github/copilot-cli (created 2026-05-27): COPILOT_CUSTOM_INSTRUCTIONS_DIRS pointing to large directories triggers unbounded glob('**/*.instructions.md') with no depth limit and no skip list. On realistic home directories this fires 600,000+ readdir callbacks on the main thread, freezing the TUI completely including Ctrl-C. Started in v1.0.52. Production impact: developers lose significant startup time. Category: GitHub Copilot.

## Quick fixes

1. Confirm the exact error signature matches `Startup input lag (15–30 s freeze): unbounded recursive glob over $COPILOT_CUSTOM_INSTRUCTIONS_DIRS entries causes main event loop lockup`.
2. Check the GitHub Copilot account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/github/copilot-cli/issues/3543

Evidence note: Issue #3543 on github/copilot-cli (created 2026-05-27): COPILOT_CUSTOM_INSTRUCTIONS_DIRS pointing to large directories triggers unbounded glob('**/*.instructions.md') with no depth limit and no skip list. On realistic home directories this fires 600,000+ readdir callbacks on the main thread, freezing the TUI completely including Ctrl-C. Started in v1.0.52. Production impact: developers lose significant startup time. Category: GitHub Copilot.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `Startup input lag (15–30 s freeze): unbounded recursive glob over $COPILOT_CUSTOM_INSTRUCTIONS_DIRS entries causes main event loop lockup` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Startup input lag (15–30 s freeze): unbounded recursive glob over $COPILOT_CUSTOM_INSTRUCTIONS_DIRS entries causes main event loop lockup`.
