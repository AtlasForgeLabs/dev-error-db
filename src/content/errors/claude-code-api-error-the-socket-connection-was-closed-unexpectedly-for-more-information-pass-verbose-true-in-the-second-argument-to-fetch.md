---
title: "Intermittent socket connection was closed unexpectedly (ECONNRESET) on startup — ~40-70% failure rate across parallel startup fetches"
description: "Fix Claude Code startup failures where 40-70% of invocations fail with ECONNRESET/TCP RST errors during parallel HTTPS requests at bootstrap, especially for responses >~30 words Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()"
common_causes:
  - "GitHub Issue #62327 opened May 26 2026 by eduardoforlog on anthropics/claude-code. Has repro label, detailed debug logs showing four parallel endpoints failing simultaneously in ~167ms. Failure rate scales with response size (0% for 1-word, 33% for ~30-word, 40-70% for ~250-word). Root cause hypothesis: race condition in Bun HTTP client when N parallel HTTPS requests dispatched against freshly-constructed mTLS agent. Affects Claude Max users, has no workaround tried (env vars all ineffective). Category: AI Coding Tools per approved mapping."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-26"
published_at: "2026-05-26T02:43:15.627Z"
updated_at: "2026-05-26T02:43:15.627Z"
---

## What this error means

`API Error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()` is a Claude Code failure pattern reported for developers trying to fix claude code startup failures where 40-70% of invocations fail with econnreset/tcp rst errors during parallel https requests at bootstrap, especially for responses >~30 words. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub Issue #62327 opened May 26 2026 by eduardoforlog on anthropics/claude-code. Has repro label, detailed debug logs showing four parallel endpoints failing simultaneously in ~167ms. Failure rate scales with response size (0% for 1-word, 33% for ~30-word, 40-70% for ~250-word). Root cause hypothesis: race condition in Bun HTTP client when N parallel HTTPS requests dispatched against freshly-constructed mTLS agent. Affects Claude Max users, has no workaround tried (env vars all ineffective). Category: AI Coding Tools per approved mapping.

## Common causes

- GitHub Issue #62327 opened May 26 2026 by eduardoforlog on anthropics/claude-code. Has repro label, detailed debug logs showing four parallel endpoints failing simultaneously in ~167ms. Failure rate scales with response size (0% for 1-word, 33% for ~30-word, 40-70% for ~250-word). Root cause hypothesis: race condition in Bun HTTP client when N parallel HTTPS requests dispatched against freshly-constructed mTLS agent. Affects Claude Max users, has no workaround tried (env vars all ineffective). Category: AI Coding Tools per approved mapping.

## Quick fixes

1. Confirm the exact error signature matches `API Error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()`.
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

- https://github.com/anthropics/claude-code/issues/62327

Evidence note: GitHub Issue #62327 opened May 26 2026 by eduardoforlog on anthropics/claude-code. Has repro label, detailed debug logs showing four parallel endpoints failing simultaneously in ~167ms. Failure rate scales with response size (0% for 1-word, 33% for ~30-word, 40-70% for ~250-word). Root cause hypothesis: race condition in Bun HTTP client when N parallel HTTPS requests dispatched against freshly-constructed mTLS agent. Affects Claude Max users, has no workaround tried (env vars all ineffective). Category: AI Coding Tools per approved mapping.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `API Error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error: The socket connection was closed unexpectedly. For more information, pass `verbose: true` in the second argument to fetch()`.
