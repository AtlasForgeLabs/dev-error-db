---
title: "Codex Desktop: gpt-5.5 xhigh turn stalled 30m before first output, then resumed normally"
description: "Fix or diagnose extremely long stalls (30+ minutes) in Codex Desktop turns using gpt-5.5 with xhigh reasoning where UI shows Thinking/Reconnecting but no output arrives despite successful backend submission Includes evidence for GitHub Copilot / OpenAI Codex troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot / OpenAI Codex"
error_signature: "turn stalled 30m before first output; Reconnecting... 2/5 visible while app-server transport remains connected; pre-first-output gap 1,838.5s on gpt-5.5 xhigh"
common_causes:
  - "Source: https://github.com/openai/codex/issues/24260 — Detailed report with log timestamps showing 30m38s stall, local rollout produced zero events for 30+ minutes, WebSocket vs HTTP fallback analysis. 9 comments, 7 👍 reactions. Category maps to GitHub Copilot as it is an OpenAI Codex desktop application issue."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "GitHub Copilot"
updated: "2026-05-27"
published_at: "2026-05-27T11:43:19.817Z"
updated_at: "2026-05-27T11:43:19.817Z"
---

## What this error means

`turn stalled 30m before first output; Reconnecting... 2/5 visible while app-server transport remains connected; pre-first-output gap 1,838.5s on gpt-5.5 xhigh` is a GitHub Copilot / OpenAI Codex failure pattern reported for developers trying to fix or diagnose extremely long stalls (30+ minutes) in codex desktop turns using gpt-5.5 with xhigh reasoning where ui shows thinking/reconnecting but no output arrives despite successful backend submission. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Source: https://github.com/openai/codex/issues/24260 — Detailed report with log timestamps showing 30m38s stall, local rollout produced zero events for 30+ minutes, WebSocket vs HTTP fallback analysis. 9 comments, 7 👍 reactions. Category maps to GitHub Copilot as it is an OpenAI Codex desktop application issue.

## Common causes

- Source: https://github.com/openai/codex/issues/24260 — Detailed report with log timestamps showing 30m38s stall, local rollout produced zero events for 30+ minutes, WebSocket vs HTTP fallback analysis. 9 comments, 7 👍 reactions. Category maps to GitHub Copilot as it is an OpenAI Codex desktop application issue.

## Quick fixes

1. Confirm the exact error signature matches `turn stalled 30m before first output; Reconnecting... 2/5 visible while app-server transport remains connected; pre-first-output gap 1,838.5s on gpt-5.5 xhigh`.
2. Check the GitHub Copilot / OpenAI Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/24260

Evidence note: Source: https://github.com/openai/codex/issues/24260 — Detailed report with log timestamps showing 30m38s stall, local rollout produced zero events for 30+ minutes, WebSocket vs HTTP fallback analysis. 9 comments, 7 👍 reactions. Category maps to GitHub Copilot as it is an OpenAI Codex desktop application issue.

## Related errors

- GitHub Copilot

## FAQ

### What should I check first?

Start with the exact `turn stalled 30m before first output; Reconnecting... 2/5 visible while app-server transport remains connected; pre-first-output gap 1,838.5s on gpt-5.5 xhigh` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot / OpenAI Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `turn stalled 30m before first output; Reconnecting... 2/5 visible while app-server transport remains connected; pre-first-output gap 1,838.5s on gpt-5.5 xhigh`.
