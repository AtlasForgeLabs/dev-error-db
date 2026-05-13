---
title: "Bun.serve Default idleTimeout Cuts LLM Streaming Responses at 10 Seconds"
description: "Fix Bun.serve cutting off LLM streaming responses due to missing idleTimeout configuration Includes evidence for Node.js troubleshooting demand."
category: "Node.js"
technology: "Node.js"
error_signature: "Bun.serve missing idleTimeout — slow LLM streams cut at 10s default, retry loop burns 300s run timeout"
common_causes:
  - "Developers building AI agent sidecars with Bun.serve find that LLM streams get cut off during reasoning phases or parallel tool-call generation when there's a >10s pause. The default 10s idleTimeout triggers a retry loop that burns through the run timeout."
  - "appstrate/appstrate issue #426: Bun.serve uses 10s default idleTimeout. LLM streams pause during reasoning phase (>10s) → connection cut → retry loop → burns 300s run timeout. Fix: set explicit idleTimeout on Bun.serve."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Bun.serve connection timeout LLM"
  - "SSE stream timeout Node.js"
updated: "2026-05-13"
published_at: "2026-05-13T15:13:17.078Z"
updated_at: "2026-05-13T15:13:17.078Z"
---

## What this error means

`Bun.serve missing idleTimeout — slow LLM streams cut at 10s default, retry loop burns 300s run timeout` is a Node.js failure pattern reported for developers trying to fix bun.serve cutting off llm streaming responses due to missing idletimeout configuration. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

appstrate/appstrate issue #426: Bun.serve uses 10s default idleTimeout. LLM streams pause during reasoning phase (>10s) → connection cut → retry loop → burns 300s run timeout. Fix: set explicit idleTimeout on Bun.serve.

## Common causes

- Developers building AI agent sidecars with Bun.serve find that LLM streams get cut off during reasoning phases or parallel tool-call generation when there's a >10s pause. The default 10s idleTimeout triggers a retry loop that burns through the run timeout.
- appstrate/appstrate issue #426: Bun.serve uses 10s default idleTimeout. LLM streams pause during reasoning phase (>10s) → connection cut → retry loop → burns 300s run timeout. Fix: set explicit idleTimeout on Bun.serve.

## Quick fixes

1. Confirm the exact error signature matches `Bun.serve missing idleTimeout — slow LLM streams cut at 10s default, retry loop burns 300s run timeout`.
2. Check the Node.js account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/appstrate/appstrate/issues/426

Evidence note: appstrate/appstrate issue #426: Bun.serve uses 10s default idleTimeout. LLM streams pause during reasoning phase (>10s) → connection cut → retry loop → burns 300s run timeout. Fix: set explicit idleTimeout on Bun.serve.

## Related errors

- Bun.serve connection timeout LLM
- SSE stream timeout Node.js

## FAQ

### What should I check first?

Start with the exact `Bun.serve missing idleTimeout — slow LLM streams cut at 10s default, retry loop burns 300s run timeout` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Node.js workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Bun.serve missing idleTimeout — slow LLM streams cut at 10s default, retry loop burns 300s run timeout`.
