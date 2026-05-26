---
title: "Claude Code OAuth session lost due to macOS Keychain ACL silently resetting"
description: "用户在 macOS Tahoe 上通过 OAuth 登录 Claude Code 后，Keychain 权限每约 5 分钟被系统静默重置，导致会话不断中断要求重新登录，需要找到持久化修复方法 Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Not logged in · Please run /login — caused by Keychain credential partition_id silently reverting to apple-tool: alone on ~5min cycle after OAuth login"
common_causes:
  - "Source: github.com/anthropics/claude-code/issues/62361 (P0 tech, reported today). Auth loop triggered by OS-level Keychain ACL change. Category mapping: AI Coding Tools → Claude Code (specific IDE auth bug)。Duplicate check: not in covered-errors.md. Direct revenue impact — prevents productive use of paid Claude Code subscription."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T21:43:18.050Z"
updated_at: "2026-05-26T21:43:18.050Z"
---

## What this error means

`Not logged in · Please run /login — caused by Keychain credential partition_id silently reverting to apple-tool: alone on ~5min cycle after OAuth login` is a Claude Code failure pattern reported for developers trying to 用户在 macos tahoe 上通过 oauth 登录 claude code 后，keychain 权限每约 5 分钟被系统静默重置，导致会话不断中断要求重新登录，需要找到持久化修复方法. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: github.com/anthropics/claude-code/issues/62361 (P0 tech, reported today). Auth loop triggered by OS-level Keychain ACL change. Category mapping: AI Coding Tools → Claude Code (specific IDE auth bug)。Duplicate check: not in covered-errors.md. Direct revenue impact — prevents productive use of paid Claude Code subscription.

## Common causes

- Source: github.com/anthropics/claude-code/issues/62361 (P0 tech, reported today). Auth loop triggered by OS-level Keychain ACL change. Category mapping: AI Coding Tools → Claude Code (specific IDE auth bug)。Duplicate check: not in covered-errors.md. Direct revenue impact — prevents productive use of paid Claude Code subscription.

## Quick fixes

1. Confirm the exact error signature matches `Not logged in · Please run /login — caused by Keychain credential partition_id silently reverting to apple-tool: alone on ~5min cycle after OAuth login`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/62361

Evidence note: Source: github.com/anthropics/claude-code/issues/62361 (P0 tech, reported today). Auth loop triggered by OS-level Keychain ACL change. Category mapping: AI Coding Tools → Claude Code (specific IDE auth bug)。Duplicate check: not in covered-errors.md. Direct revenue impact — prevents productive use of paid Claude Code subscription.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Not logged in · Please run /login — caused by Keychain credential partition_id silently reverting to apple-tool: alone on ~5min cycle after OAuth login` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Not logged in · Please run /login — caused by Keychain credential partition_id silently reverting to apple-tool: alone on ~5min cycle after OAuth login`.
