---
title: "OpenRouter provider returns 401 unauthorized error in Cline and other AI tools"
description: "Fix OpenRouter 401 authentication error when using Cline, Aider, or other AI coding tools Includes evidence for OpenRouter troubleshooting demand."
category: "Cloud Platforms"
technology: "OpenRouter"
error_signature: "Provider returned error"
common_causes:
  - "OpenRouter is a major paid AI API gateway. Users report intermittent 401 errors despite valid API keys with credits. Error appears across multiple tools (Cline, Aider, Home Assistant), indicating a broader API-level issue. High commercial value."
  - "Multiple GitHub issues report OpenRouter returning 401 unauthorized despite valid API keys with credits. Cline issue #813 shows users creating 'a dozen API keys' with no success. Aider #853 reports no API activity in dashboard after upgrade."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "OpenRouter API key not working"
  - "OpenRouter authentication failed"
  - "OpenRouter 401 error after upgrade"
updated: "2026-05-11"
---

## What this error means

`Provider returned error` is a OpenRouter failure pattern reported for developers trying to fix openrouter 401 authentication error when using cline, aider, or other ai coding tools. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Multiple GitHub issues report OpenRouter returning 401 unauthorized despite valid API keys with credits. Cline issue #813 shows users creating 'a dozen API keys' with no success. Aider #853 reports no API activity in dashboard after upgrade.

## Common causes

- OpenRouter is a major paid AI API gateway. Users report intermittent 401 errors despite valid API keys with credits. Error appears across multiple tools (Cline, Aider, Home Assistant), indicating a broader API-level issue. High commercial value.
- Multiple GitHub issues report OpenRouter returning 401 unauthorized despite valid API keys with credits. Cline issue #813 shows users creating 'a dozen API keys' with no success. Aider #853 reports no API activity in dashboard after upgrade.

## Quick fixes

1. Confirm the exact error signature matches `Provider returned error`.
2. Check the OpenRouter account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the account session, API key, provider settings, and environment where the failing tool is running.

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

- https://github.com/cline/cline/issues/813
- https://github.com/Aider-AI/aider/issues/853

Evidence note: Multiple GitHub issues report OpenRouter returning 401 unauthorized despite valid API keys with credits. Cline issue #813 shows users creating 'a dozen API keys' with no success. Aider #853 reports no API activity in dashboard after upgrade.

## Related errors

- OpenRouter API key not working
- OpenRouter authentication failed
- OpenRouter 401 error after upgrade

## FAQ

### What should I check first?

Start with the exact `Provider returned error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenRouter workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Provider returned error`.
