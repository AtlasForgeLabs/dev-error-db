---
title: "Claude Code Session Burns Tokens Without Interaction — File Does Not Exist Error Repeating"
description: "Claude Code automatically consumes 15% of user's 5-hour quota on session startup without any user input; repeated FileDoesNotExist errors suggest background process or config scanning bug wasting paid API tokens Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "Error: File does not exist. Note: your current working directory is /Users/edgar/Desktop/admin-app-ios at call (/$bunfs/root/src/entrypoints/cli.js:4299:9752)"
common_causes:
  - "GitHub issue #61084 on anthropics/claude-code opened May 21, 2026 by edgar5055. Labeled area:cost and platform:macos. Three identical errors logged within ~40 seconds showing the CLI repeatedly trying to access a non-existent file. This directly impacts paid users who get charged per token used. Category: AI Coding Tools since it's a Claude Code bug that wastes subscription credits."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-21"
published_at: "2026-05-21T08:39:43.927Z"
updated_at: "2026-05-21T08:39:43.927Z"
---

## What this error means

`Error: File does not exist. Note: your current working directory is /Users/edgar/Desktop/admin-app-ios at call (/$bunfs/root/src/entrypoints/cli.js:4299:9752)` is a Claude Code failure pattern reported for developers trying to claude code automatically consumes 15% of user's 5-hour quota on session startup without any user input; repeated filedoesnotexist errors suggest background process or config scanning bug wasting paid api tokens. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #61084 on anthropics/claude-code opened May 21, 2026 by edgar5055. Labeled area:cost and platform:macos. Three identical errors logged within ~40 seconds showing the CLI repeatedly trying to access a non-existent file. This directly impacts paid users who get charged per token used. Category: AI Coding Tools since it's a Claude Code bug that wastes subscription credits.

## Common causes

- GitHub issue #61084 on anthropics/claude-code opened May 21, 2026 by edgar5055. Labeled area:cost and platform:macos. Three identical errors logged within ~40 seconds showing the CLI repeatedly trying to access a non-existent file. This directly impacts paid users who get charged per token used. Category: AI Coding Tools since it's a Claude Code bug that wastes subscription credits.

## Quick fixes

1. Confirm the exact error signature matches `Error: File does not exist. Note: your current working directory is /Users/edgar/Desktop/admin-app-ios at call (/$bunfs/root/src/entrypoints/cli.js:4299:9752)`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://github.com/anthropics/claude-code/issues/61084

Evidence note: GitHub issue #61084 on anthropics/claude-code opened May 21, 2026 by edgar5055. Labeled area:cost and platform:macos. Three identical errors logged within ~40 seconds showing the CLI repeatedly trying to access a non-existent file. This directly impacts paid users who get charged per token used. Category: AI Coding Tools since it's a Claude Code bug that wastes subscription credits.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `Error: File does not exist. Note: your current working directory is /Users/edgar/Desktop/admin-app-ios at call (/$bunfs/root/src/entrypoints/cli.js:4299:9752)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: File does not exist. Note: your current working directory is /Users/edgar/Desktop/admin-app-ios at call (/$bunfs/root/src/entrypoints/cli.js:4299:9752)`.
