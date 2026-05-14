---
title: "Ollama Model Pull Terminated When Chat GUI Closed — Download Progress Lost"
description: "Fix Ollama model pull being killed when Chat GUI is closed, and download not resuming from last checkpoint Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "Error: Post \"http://127.0.0.1:11434/api/show\": dial tcp 127.0.0.1:11434: connectex: No connection could be made because the target machine actively refused it."
common_causes:
  - "Closing the Ollama Chat GUI during an active model pull terminates the entire download process. The error shows 'connection refused' because the server shuts down. Download progress is completely lost — re-running starts from 0%. This is a data loss issue for users pulling large models (18GB+)."
  - "Issue #11742 on ollama/ollama: user pulling qwen3-coder (18GB), closed Chat GUI at 33%, download terminated and restarted from 0%. Error: connection refused to localhost:11434. Ollama v0.11.2 on Windows."
quick_fix: "Verify the model name, local service connectivity, and network access before retrying the model pull."
related_errors:
  - "Ollama model download not resuming after interruption"
  - "Ollama server shutdown kills active model pull"
  - "Ollama download progress lost on restart"
updated: "2026-05-14"
published_at: "2026-05-14T19:13:20.626Z"
updated_at: "2026-05-14T19:13:20.626Z"
---

## What this error means

`Error: Post "http://127.0.0.1:11434/api/show": dial tcp 127.0.0.1:11434: connectex: No connection could be made because the target machine actively refused it.` is a Ollama failure pattern reported for developers trying to fix ollama model pull being killed when chat gui is closed, and download not resuming from last checkpoint. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Issue #11742 on ollama/ollama: user pulling qwen3-coder (18GB), closed Chat GUI at 33%, download terminated and restarted from 0%. Error: connection refused to localhost:11434. Ollama v0.11.2 on Windows.

## Common causes

- Closing the Ollama Chat GUI during an active model pull terminates the entire download process. The error shows 'connection refused' because the server shuts down. Download progress is completely lost — re-running starts from 0%. This is a data loss issue for users pulling large models (18GB+).
- Issue #11742 on ollama/ollama: user pulling qwen3-coder (18GB), closed Chat GUI at 33%, download terminated and restarted from 0%. Error: connection refused to localhost:11434. Ollama v0.11.2 on Windows.

## Quick fixes

1. Confirm the exact error signature matches `Error: Post "http://127.0.0.1:11434/api/show": dial tcp 127.0.0.1:11434: connectex: No connection could be made because the target machine actively refused it.`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
3. Verify the model name, local service connectivity, and network access before retrying the model pull.

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

- https://github.com/ollama/ollama/issues/11742

Evidence note: Issue #11742 on ollama/ollama: user pulling qwen3-coder (18GB), closed Chat GUI at 33%, download terminated and restarted from 0%. Error: connection refused to localhost:11434. Ollama v0.11.2 on Windows.

## Related errors

- Ollama model download not resuming after interruption
- Ollama server shutdown kills active model pull
- Ollama download progress lost on restart

## FAQ

### What should I check first?

Start with the exact `Error: Post "http://127.0.0.1:11434/api/show": dial tcp 127.0.0.1:11434: connectex: No connection could be made because the target machine actively refused it.` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error: Post "http://127.0.0.1:11434/api/show": dial tcp 127.0.0.1:11434: connectex: No connection could be made because the target machine actively refused it.`.
