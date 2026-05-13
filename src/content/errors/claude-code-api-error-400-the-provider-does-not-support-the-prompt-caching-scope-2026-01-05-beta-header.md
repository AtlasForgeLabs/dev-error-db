---
title: "Claude Code Sends Prompt-Caching Beta Header to Custom Endpoints Even When Disabled"
description: "Fix Claude Code sending prompt-caching beta header to custom API endpoints (ANTHROPIC_BASE_URL) when caching is disabled Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API error 400: The provider does not support the prompt-caching-scope-2026-01-05 beta header"
common_causes:
  - "Even when users explicitly disable prompt caching in VS Code settings (claudeCode.enablePromptCaching: false) and unset beta headers (claudeCode.useAnthropicBetaHeaders: false), Claude Code v2.1.23 still sends the 'prompt-caching-scope-2026-01-05' beta header to custom API endpoints. This breaks integration with self-hosted or proxy API servers that don't support the beta."
  - "GitHub issue #21644 in anthropics/claude-code: With enablePromptCaching=false and useAnthropicBetaHeaders=false set in VS Code settings.json, and a custom ANTHROPIC_BASE_URL that doesn't support prompt-caching-scope-2026-01-05, the beta header is still sent, causing API errors when using claude-4.5-opus model."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code ANTHROPIC_BASE_URL custom endpoint errors"
  - "Claude Code prompt caching header ignored settings"
  - "Custom Claude API proxy beta header issues"
updated: "2026-05-13"
published_at: "2026-05-13T13:13:16.834Z"
updated_at: "2026-05-13T13:13:16.834Z"
---

## What this error means

`API error 400: The provider does not support the prompt-caching-scope-2026-01-05 beta header` is a Claude Code failure pattern reported for developers trying to fix claude code sending prompt-caching beta header to custom api endpoints (anthropic_base_url) when caching is disabled. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #21644 in anthropics/claude-code: With enablePromptCaching=false and useAnthropicBetaHeaders=false set in VS Code settings.json, and a custom ANTHROPIC_BASE_URL that doesn't support prompt-caching-scope-2026-01-05, the beta header is still sent, causing API errors when using claude-4.5-opus model.

## Common causes

- Even when users explicitly disable prompt caching in VS Code settings (claudeCode.enablePromptCaching: false) and unset beta headers (claudeCode.useAnthropicBetaHeaders: false), Claude Code v2.1.23 still sends the 'prompt-caching-scope-2026-01-05' beta header to custom API endpoints. This breaks integration with self-hosted or proxy API servers that don't support the beta.
- GitHub issue #21644 in anthropics/claude-code: With enablePromptCaching=false and useAnthropicBetaHeaders=false set in VS Code settings.json, and a custom ANTHROPIC_BASE_URL that doesn't support prompt-caching-scope-2026-01-05, the beta header is still sent, causing API errors when using claude-4.5-opus model.

## Quick fixes

1. Confirm the exact error signature matches `API error 400: The provider does not support the prompt-caching-scope-2026-01-05 beta header`.
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

Evidence note: GitHub issue #21644 in anthropics/claude-code: With enablePromptCaching=false and useAnthropicBetaHeaders=false set in VS Code settings.json, and a custom ANTHROPIC_BASE_URL that doesn't support prompt-caching-scope-2026-01-05, the beta header is still sent, causing API errors when using claude-4.5-opus model.

## Related errors

- Claude Code ANTHROPIC_BASE_URL custom endpoint errors
- Claude Code prompt caching header ignored settings
- Custom Claude API proxy beta header issues

## FAQ

### What should I check first?

Start with the exact `API error 400: The provider does not support the prompt-caching-scope-2026-01-05 beta header` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API error 400: The provider does not support the prompt-caching-scope-2026-01-05 beta header`.
