---
title: "Claude Code gives improper 429 rate limit error at end of 5-hour usage window"
description: "Fix unexpected 429 rate limit error appearing near the end of a usage window in Claude Code/Codex, where the usage counter shows remaining quota but requests are rejected Includes evidence for Claude Code / Codex troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code / Codex"
error_signature: "improper 429 error near the end of a 5-hour window, usage display inside Codex shows unexpected rate limit"
common_causes:
  - "GitHub Issue #9135 in openai/codex (Jan 2026) reports that Codex throws 429 rate limit errors unexpectedly close to the end of a 5-hour window, with usage display inconsistency between internal tracker and API. Category mapping: AI Coding Tool (Claude Code/Codex). Not covered in dev-error-db which only lists generic OpenAI 429."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-30"
published_at: "2026-05-30T04:43:28.259Z"
updated_at: "2026-05-30T04:43:28.259Z"
---

## What this error means

`improper 429 error near the end of a 5-hour window, usage display inside Codex shows unexpected rate limit` is a Claude Code / Codex failure pattern reported for developers trying to fix unexpected 429 rate limit error appearing near the end of a usage window in claude code/codex, where the usage counter shows remaining quota but requests are rejected. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #9135 in openai/codex (Jan 2026) reports that Codex throws 429 rate limit errors unexpectedly close to the end of a 5-hour window, with usage display inconsistency between internal tracker and API. Category mapping: AI Coding Tool (Claude Code/Codex). Not covered in dev-error-db which only lists generic OpenAI 429.

## Common causes

- GitHub Issue #9135 in openai/codex (Jan 2026) reports that Codex throws 429 rate limit errors unexpectedly close to the end of a 5-hour window, with usage display inconsistency between internal tracker and API. Category mapping: AI Coding Tool (Claude Code/Codex). Not covered in dev-error-db which only lists generic OpenAI 429.

## Quick fixes

1. Confirm the exact error signature matches `improper 429 error near the end of a 5-hour window, usage display inside Codex shows unexpected rate limit`.
2. Check the Claude Code / Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/9135

Evidence note: GitHub Issue #9135 in openai/codex (Jan 2026) reports that Codex throws 429 rate limit errors unexpectedly close to the end of a 5-hour window, with usage display inconsistency between internal tracker and API. Category mapping: AI Coding Tool (Claude Code/Codex). Not covered in dev-error-db which only lists generic OpenAI 429.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `improper 429 error near the end of a 5-hour window, usage display inside Codex shows unexpected rate limit` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code / Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `improper 429 error near the end of a 5-hour window, usage display inside Codex shows unexpected rate limit`.
