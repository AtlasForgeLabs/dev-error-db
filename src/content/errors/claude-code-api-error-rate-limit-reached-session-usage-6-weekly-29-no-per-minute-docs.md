---
title: "Anthropic API rate limit reached despite low session/weekly usage in Claude Code"
description: "User blocked by undocumented per-minute rate limits in Claude Code despite low overall usage; needs workaround or per-minute limit documentation Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: Rate limit reached (session usage 6%, weekly 29%, no per-minute docs)"
common_causes:
  - "GitHub issue #39948 on anthropics/claude-code — user processing 148 PDFs hits rate limit at 6% session / 29% weekly usage, waited 3+ hours with no resolution. No short-term per-minute limit docs exist. High commercial value: Claude Code Pro/Pro+ subscription broken for paying users. Category: AI Coding Tools (Claude Code)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-20"
published_at: "2026-05-20T04:38:28.367Z"
updated_at: "2026-05-20T04:38:28.367Z"
---

## What this error means

`API Error: Rate limit reached (session usage 6%, weekly 29%, no per-minute docs)` is a Claude Code failure pattern reported for developers trying to user blocked by undocumented per-minute rate limits in claude code despite low overall usage; needs workaround or per-minute limit documentation. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #39948 on anthropics/claude-code — user processing 148 PDFs hits rate limit at 6% session / 29% weekly usage, waited 3+ hours with no resolution. No short-term per-minute limit docs exist. High commercial value: Claude Code Pro/Pro+ subscription broken for paying users. Category: AI Coding Tools (Claude Code).

## Common causes

- GitHub issue #39948 on anthropics/claude-code — user processing 148 PDFs hits rate limit at 6% session / 29% weekly usage, waited 3+ hours with no resolution. No short-term per-minute limit docs exist. High commercial value: Claude Code Pro/Pro+ subscription broken for paying users. Category: AI Coding Tools (Claude Code).

## Quick fixes

1. Confirm the exact error signature matches `API Error: Rate limit reached (session usage 6%, weekly 29%, no per-minute docs)`.
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

- https://github.com/anthropics/claude-code/issues/39948

Evidence note: GitHub issue #39948 on anthropics/claude-code — user processing 148 PDFs hits rate limit at 6% session / 29% weekly usage, waited 3+ hours with no resolution. No short-term per-minute limit docs exist. High commercial value: Claude Code Pro/Pro+ subscription broken for paying users. Category: AI Coding Tools (Claude Code).

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: Rate limit reached (session usage 6%, weekly 29%, no per-minute docs)` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: Rate limit reached (session usage 6%, weekly 29%, no per-minute docs)`.
