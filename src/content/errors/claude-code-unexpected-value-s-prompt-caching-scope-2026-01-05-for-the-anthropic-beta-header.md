---
title: "Claude Code prompt-caching-scope Beta Header Error on Custom API Endpoints — Fix"
description: "Fix Claude Code sending prompt-caching-scope beta header to custom API endpoints that don't support it Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Unexpected value(s) prompt-caching-scope-2026-01-05 for the anthropic-beta header"
common_causes:
  - "When Claude Code is configured with ANTHROPIC_BASE_URL pointing to a custom endpoint (proxy, mock server, or alternative provider), it injects the prompt-caching-scope-2026-01-05 beta header even when prompt caching is disabled, causing 400 errors. Developers using custom API gateways encounter this incompatibility."
  - "Claude Code extension v2.1.23 sends prompt-caching-scope-2026-01-05 beta header to custom API endpoints (via ANTHROPIC_BASE_URL) even when enablePromptCaching and useAnthropicBetaHeaders are both set to false. Results in API error on incompatible endpoints."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code effort-2025-11-24 beta header error"
  - "Claude Code custom API endpoint incompatible"
updated: "2026-05-12"
published_at: "2026-05-12T02:10:48.323Z"
updated_at: "2026-05-12T02:10:48.323Z"
---

## What this error means

`Unexpected value(s) prompt-caching-scope-2026-01-05 for the anthropic-beta header` is a Claude Code failure pattern reported for developers trying to fix claude code sending prompt-caching-scope beta header to custom api endpoints that don't support it. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Claude Code extension v2.1.23 sends prompt-caching-scope-2026-01-05 beta header to custom API endpoints (via ANTHROPIC_BASE_URL) even when enablePromptCaching and useAnthropicBetaHeaders are both set to false. Results in API error on incompatible endpoints.

## Common causes

- When Claude Code is configured with ANTHROPIC_BASE_URL pointing to a custom endpoint (proxy, mock server, or alternative provider), it injects the prompt-caching-scope-2026-01-05 beta header even when prompt caching is disabled, causing 400 errors. Developers using custom API gateways encounter this incompatibility.
- Claude Code extension v2.1.23 sends prompt-caching-scope-2026-01-05 beta header to custom API endpoints (via ANTHROPIC_BASE_URL) even when enablePromptCaching and useAnthropicBetaHeaders are both set to false. Results in API error on incompatible endpoints.

## Quick fixes

1. Confirm the exact error signature matches `Unexpected value(s) prompt-caching-scope-2026-01-05 for the anthropic-beta header`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/21644

Evidence note: Claude Code extension v2.1.23 sends prompt-caching-scope-2026-01-05 beta header to custom API endpoints (via ANTHROPIC_BASE_URL) even when enablePromptCaching and useAnthropicBetaHeaders are both set to false. Results in API error on incompatible endpoints.

## Related errors

- Claude Code effort-2025-11-24 beta header error
- Claude Code custom API endpoint incompatible

## FAQ

### What should I check first?

Start with the exact `Unexpected value(s) prompt-caching-scope-2026-01-05 for the anthropic-beta header` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Unexpected value(s) prompt-caching-scope-2026-01-05 for the anthropic-beta header`.
