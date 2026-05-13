---
title: "VS Code GitHub Copilot Chat Cannot Select Local Ollama Models Despite Being Detected"
description: "Fix VS Code Copilot Chat not listing local Ollama models in the model picker Includes evidence for GitHub Copilot + Ollama troubleshooting demand."
category: "GitHub Copilot"
technology: "GitHub Copilot + Ollama"
error_signature: "VS Code Copilot Chat does not show local Ollama models in selection menu despite detection in Language Models tab"
common_causes:
  - "VS Code detects local Ollama models in the Language Models tab but they don't appear in Copilot Chat's model selection dropdown. Developers using local LLMs with Copilot Chat are blocked from selecting their preferred models, defeating the purpose of local AI integration."
  - "StackOverflow question (score: 6, 3 answers) confirms this is a real, recurring issue. Models are detected by VS Code's Language Models infrastructure but not surfaced in Copilot Chat's picker. Affects the growing developer trend of local LLM + Copilot integration."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Ollama model not found in VS Code language model list"
  - "Copilot Chat custom model provider configuration"
updated: "2026-05-13"
published_at: "2026-05-13T18:13:17.420Z"
updated_at: "2026-05-13T18:13:17.420Z"
---

## What this error means

`VS Code Copilot Chat does not show local Ollama models in selection menu despite detection in Language Models tab` is a GitHub Copilot + Ollama failure pattern reported for developers trying to fix vs code copilot chat not listing local ollama models in the model picker. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

StackOverflow question (score: 6, 3 answers) confirms this is a real, recurring issue. Models are detected by VS Code's Language Models infrastructure but not surfaced in Copilot Chat's picker. Affects the growing developer trend of local LLM + Copilot integration.

## Common causes

- VS Code detects local Ollama models in the Language Models tab but they don't appear in Copilot Chat's model selection dropdown. Developers using local LLMs with Copilot Chat are blocked from selecting their preferred models, defeating the purpose of local AI integration.
- StackOverflow question (score: 6, 3 answers) confirms this is a real, recurring issue. Models are detected by VS Code's Language Models infrastructure but not surfaced in Copilot Chat's picker. Affects the growing developer trend of local LLM + Copilot integration.

## Quick fixes

1. Confirm the exact error signature matches `VS Code Copilot Chat does not show local Ollama models in selection menu despite detection in Language Models tab`.
2. Check the GitHub Copilot + Ollama account, local tool state, and provider configuration involved in the failing workflow.
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

- https://stackoverflow.com/questions/79888998

Evidence note: StackOverflow question (score: 6, 3 answers) confirms this is a real, recurring issue. Models are detected by VS Code's Language Models infrastructure but not surfaced in Copilot Chat's picker. Affects the growing developer trend of local LLM + Copilot integration.

## Related errors

- Ollama model not found in VS Code language model list
- Copilot Chat custom model provider configuration

## FAQ

### What should I check first?

Start with the exact `VS Code Copilot Chat does not show local Ollama models in selection menu despite detection in Language Models tab` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed GitHub Copilot + Ollama workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `VS Code Copilot Chat does not show local Ollama models in selection menu despite detection in Language Models tab`.
