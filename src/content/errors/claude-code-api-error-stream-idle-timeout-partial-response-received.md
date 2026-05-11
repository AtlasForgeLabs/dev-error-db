---
title: "Claude Code Stream Idle Timeout Error with Opus Model"
description: "Fix Claude Code 'Stream idle timeout — partial response received' error during tool calls and code generation Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Stream idle timeout — partial response received"
common_causes:
  - "Claude Code with Opus model intermittently fails mid-conversation with stream idle timeout errors, losing partial responses. This disrupts active development workflows, especially during multi-step agentic tasks. A regression since version 2.1.90. 183+ comments confirm widespread impact."
  - "Open GitHub issue with 183 comments. Error occurs between tool calls when requesting code plans. Affects Opus model on Claude Code 2.1.92+. Regression from 2.1.90. Exact error string available for SEO targeting."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code SSE connection dropped"
  - "Claude Code partial response lost"
  - "Claude Code streaming timeout error"
updated: "2026-05-11"
---

## What this error means

`API Error: Stream idle timeout — partial response received` is a Claude Code failure pattern reported for developers trying to fix claude code 'stream idle timeout — partial response received' error during tool calls and code generation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open GitHub issue with 183 comments. Error occurs between tool calls when requesting code plans. Affects Opus model on Claude Code 2.1.92+. Regression from 2.1.90. Exact error string available for SEO targeting.

## Common causes

- Claude Code with Opus model intermittently fails mid-conversation with stream idle timeout errors, losing partial responses. This disrupts active development workflows, especially during multi-step agentic tasks. A regression since version 2.1.90. 183+ comments confirm widespread impact.
- Open GitHub issue with 183 comments. Error occurs between tool calls when requesting code plans. Affects Opus model on Claude Code 2.1.92+. Regression from 2.1.90. Exact error string available for SEO targeting.

## Quick fixes

1. Confirm the exact error signature matches `API Error: Stream idle timeout — partial response received`.
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

- https://github.com/anthropics/claude-code/issues/46987

Evidence note: Open GitHub issue with 183 comments. Error occurs between tool calls when requesting code plans. Affects Opus model on Claude Code 2.1.92+. Regression from 2.1.90. Exact error string available for SEO targeting.

## Related errors

- Claude Code SSE connection dropped
- Claude Code partial response lost
- Claude Code streaming timeout error

## FAQ

### What should I check first?

Start with the exact `API Error: Stream idle timeout — partial response received` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Stream idle timeout — partial response received`.
