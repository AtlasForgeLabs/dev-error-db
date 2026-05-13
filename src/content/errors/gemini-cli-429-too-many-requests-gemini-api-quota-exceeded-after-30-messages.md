---
title: "Gemini CLI Hits 429 Rate Limit After Only 30 Messages Despite 60/hour Advertised Limit"
description: "Fix Gemini CLI 429 rate limiting that triggers far below the advertised 60 messages per hour limit Includes evidence for Gemini CLI troubleshooting demand."
category: "AI Coding Tools"
technology: "Gemini CLI"
error_signature: "429 Too Many Requests — Gemini API quota exceeded after ~30 messages"
common_causes:
  - "Google Gemini CLI advertises 60 messages per hour for free tier users, but developers report hitting 429 Too Many Requests after only ~30 messages. The quota doesn't reset even after 2+ hours, making the CLI unusable for extended coding sessions. This is a critical blocker for developers relying on Gemini CLI as their primary AI coding assistant."
  - "GitHub issue #2305 on google-gemini/gemini-cli reports 429 Too Many Requests after ~30 messages (expected 60/hour). The error persists for 2+ hours without reset. Uses gemini-2.5-flash model, CLI version 0.1.5. 11 comments indicate community interest."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "Gemini API quota not resetting after timeout"
  - "Gemini CLI message count lower than advertised"
  - "Gemini API 429 quota management"
updated: "2026-05-13"
published_at: "2026-05-13T00:12:19.399Z"
updated_at: "2026-05-13T00:12:19.399Z"
---

## What this error means

`429 Too Many Requests — Gemini API quota exceeded after ~30 messages` is a Gemini CLI failure pattern reported for developers trying to fix gemini cli 429 rate limiting that triggers far below the advertised 60 messages per hour limit. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #2305 on google-gemini/gemini-cli reports 429 Too Many Requests after ~30 messages (expected 60/hour). The error persists for 2+ hours without reset. Uses gemini-2.5-flash model, CLI version 0.1.5. 11 comments indicate community interest.

## Common causes

- Google Gemini CLI advertises 60 messages per hour for free tier users, but developers report hitting 429 Too Many Requests after only ~30 messages. The quota doesn't reset even after 2+ hours, making the CLI unusable for extended coding sessions. This is a critical blocker for developers relying on Gemini CLI as their primary AI coding assistant.
- GitHub issue #2305 on google-gemini/gemini-cli reports 429 Too Many Requests after ~30 messages (expected 60/hour). The error persists for 2+ hours without reset. Uses gemini-2.5-flash model, CLI version 0.1.5. 11 comments indicate community interest.

## Quick fixes

1. Confirm the exact error signature matches `429 Too Many Requests — Gemini API quota exceeded after ~30 messages`.
2. Check the Gemini CLI account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/google-gemini/gemini-cli/issues/2305

Evidence note: GitHub issue #2305 on google-gemini/gemini-cli reports 429 Too Many Requests after ~30 messages (expected 60/hour). The error persists for 2+ hours without reset. Uses gemini-2.5-flash model, CLI version 0.1.5. 11 comments indicate community interest.

## Related errors

- Gemini API quota not resetting after timeout
- Gemini CLI message count lower than advertised
- Gemini API 429 quota management

## FAQ

### What should I check first?

Start with the exact `429 Too Many Requests — Gemini API quota exceeded after ~30 messages` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Gemini CLI workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `429 Too Many Requests — Gemini API quota exceeded after ~30 messages`.
