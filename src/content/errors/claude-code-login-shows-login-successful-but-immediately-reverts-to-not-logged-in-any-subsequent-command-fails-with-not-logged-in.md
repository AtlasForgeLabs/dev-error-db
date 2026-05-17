---
title: "Claude Code /login Shows Success But Reverts to Not Logged In — Auth Persistence Bug"
description: "User ran /login in Claude Code on Windows, sees success message but tool remains unauthenticated and rejects all commands afterward Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "/login shows \"Login successful\" but immediately reverts to \"Not logged in\". Any subsequent command fails with \"Not logged in\"."
common_causes:
  - "Found on anthropics/claude-code#44585 (open, 2026-05-17, 5 comments, labels: bug, has repro, platform:windows, area:auth). Clear auth persistence bug on paid AI coding tool — users pay monthly but can't authenticate. Maps to approved category AI Coding Tools (Claude Code specific)."
quick_fix: "Verify the account session, API key, provider settings, and environment where the failing tool is running."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-17"
published_at: "2026-05-17T10:35:57.282Z"
updated_at: "2026-05-17T10:35:57.282Z"
---

## What this error means

`/login shows "Login successful" but immediately reverts to "Not logged in". Any subsequent command fails with "Not logged in".` is a Claude Code failure pattern reported for developers trying to user ran /login in claude code on windows, sees success message but tool remains unauthenticated and rejects all commands afterward. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on anthropics/claude-code#44585 (open, 2026-05-17, 5 comments, labels: bug, has repro, platform:windows, area:auth). Clear auth persistence bug on paid AI coding tool — users pay monthly but can't authenticate. Maps to approved category AI Coding Tools (Claude Code specific).

## Common causes

- Found on anthropics/claude-code#44585 (open, 2026-05-17, 5 comments, labels: bug, has repro, platform:windows, area:auth). Clear auth persistence bug on paid AI coding tool — users pay monthly but can't authenticate. Maps to approved category AI Coding Tools (Claude Code specific).

## Quick fixes

1. Confirm the exact error signature matches `/login shows "Login successful" but immediately reverts to "Not logged in". Any subsequent command fails with "Not logged in".`.
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

- https://github.com/anthropics/claude-code/issues/44585

Evidence note: Found on anthropics/claude-code#44585 (open, 2026-05-17, 5 comments, labels: bug, has repro, platform:windows, area:auth). Clear auth persistence bug on paid AI coding tool — users pay monthly but can't authenticate. Maps to approved category AI Coding Tools (Claude Code specific).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `/login shows "Login successful" but immediately reverts to "Not logged in". Any subsequent command fails with "Not logged in".` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `/login shows "Login successful" but immediately reverts to "Not logged in". Any subsequent command fails with "Not logged in".`.
