---
title: "Ollama Launch Claude Fails with API Error 400 When CLAUDE_CODE_USE_BEDROCK Is Set"
description: "Fix ollama launch claude 400 error when CLAUDE_CODE_USE_BEDROCK is enabled in settings Includes evidence for Ollama troubleshooting demand."
category: "Ollama"
technology: "Ollama"
error_signature: "API Error (model_name): 400 Bad Request — Bedrock rejects Ollama model name"
common_causes:
  - "When developers run `ollama launch claude` to use a local Ollama model with Claude Code, but have `CLAUDE_CODE_USE_BEDROCK=1` set in `~/.claude/settings.json`, Claude Code routes requests to AWS Bedrock instead of Ollama. Bedrock rejects the local model name (e.g., 'gemma4') with a 400 error. This is a subtle configuration conflict that's hard to diagnose without knowing both tools' settings interactions."
  - "Active GitHub issue on ollama/ollama (May 2026). `ollama launch claude` sets the model name to the pulled local model (e.g., gemma4) but does not override backend routing. When CLAUDE_CODE_USE_BEDROCK=1 is in Claude Code settings.json, requests route to AWS Bedrock which rejects the model name with 'API Error (gemma4): 400'."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Claude Code model routing not respecting local provider"
  - "AWS Bedrock model name not found error"
  - "CLAUDE_CODE_USE_BEDROCK environment variable conflicts"
updated: "2026-05-12"
---

## What this error means

`API Error (model_name): 400 Bad Request — Bedrock rejects Ollama model name` is a Ollama failure pattern reported for developers trying to fix ollama launch claude 400 error when claude_code_use_bedrock is enabled in settings. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Active GitHub issue on ollama/ollama (May 2026). `ollama launch claude` sets the model name to the pulled local model (e.g., gemma4) but does not override backend routing. When CLAUDE_CODE_USE_BEDROCK=1 is in Claude Code settings.json, requests route to AWS Bedrock which rejects the model name with 'API Error (gemma4): 400'.

## Common causes

- When developers run `ollama launch claude` to use a local Ollama model with Claude Code, but have `CLAUDE_CODE_USE_BEDROCK=1` set in `~/.claude/settings.json`, Claude Code routes requests to AWS Bedrock instead of Ollama. Bedrock rejects the local model name (e.g., 'gemma4') with a 400 error. This is a subtle configuration conflict that's hard to diagnose without knowing both tools' settings interactions.
- Active GitHub issue on ollama/ollama (May 2026). `ollama launch claude` sets the model name to the pulled local model (e.g., gemma4) but does not override backend routing. When CLAUDE_CODE_USE_BEDROCK=1 is in Claude Code settings.json, requests route to AWS Bedrock which rejects the model name with 'API Error (gemma4): 400'.

## Quick fixes

1. Confirm the exact error signature matches `API Error (model_name): 400 Bad Request — Bedrock rejects Ollama model name`.
2. Check the Ollama account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/ollama/ollama/issues/16097

Evidence note: Active GitHub issue on ollama/ollama (May 2026). `ollama launch claude` sets the model name to the pulled local model (e.g., gemma4) but does not override backend routing. When CLAUDE_CODE_USE_BEDROCK=1 is in Claude Code settings.json, requests route to AWS Bedrock which rejects the model name with 'API Error (gemma4): 400'.

## Related errors

- Claude Code model routing not respecting local provider
- AWS Bedrock model name not found error
- CLAUDE_CODE_USE_BEDROCK environment variable conflicts

## FAQ

### What should I check first?

Start with the exact `API Error (model_name): 400 Bad Request — Bedrock rejects Ollama model name` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `API Error (model_name): 400 Bad Request — Bedrock rejects Ollama model name`.
