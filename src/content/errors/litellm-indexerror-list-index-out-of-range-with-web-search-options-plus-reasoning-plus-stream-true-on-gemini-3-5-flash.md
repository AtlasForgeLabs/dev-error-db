---
title: "Gemini-3.5-Flash streaming with web_search_options + reasoning causes IndexError list index out of range"
description: "Fix IndexError crash in LiteLLM when combining Gemini 3.5 Flash web search with reasoning mode and streaming Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "IndexError: list index out of range with web_search_options + reasoning + stream=True on Gemini-3.5-Flash"
common_causes:
  - "GitHub issue BerriAI/litellm#28884 — Combining web_search_options, thinking/reasoning, and streaming triggers IndexError due to parsing gap in Gemini response chunks. Very recent issue (opened May 26). Category: LiteLLM (new Gemini model support bug)."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "LiteLLM"
updated: "2026-05-26"
published_at: "2026-05-26T22:43:18.176Z"
updated_at: "2026-05-26T22:43:18.176Z"
---

## What this error means

`IndexError: list index out of range with web_search_options + reasoning + stream=True on Gemini-3.5-Flash` is a LiteLLM failure pattern reported for developers trying to fix indexerror crash in litellm when combining gemini 3.5 flash web search with reasoning mode and streaming. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue BerriAI/litellm#28884 — Combining web_search_options, thinking/reasoning, and streaming triggers IndexError due to parsing gap in Gemini response chunks. Very recent issue (opened May 26). Category: LiteLLM (new Gemini model support bug).

## Common causes

- GitHub issue BerriAI/litellm#28884 — Combining web_search_options, thinking/reasoning, and streaming triggers IndexError due to parsing gap in Gemini response chunks. Very recent issue (opened May 26). Category: LiteLLM (new Gemini model support bug).

## Quick fixes

1. Confirm the exact error signature matches `IndexError: list index out of range with web_search_options + reasoning + stream=True on Gemini-3.5-Flash`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/BerriAI/litellm/issues/28884

Evidence note: GitHub issue BerriAI/litellm#28884 — Combining web_search_options, thinking/reasoning, and streaming triggers IndexError due to parsing gap in Gemini response chunks. Very recent issue (opened May 26). Category: LiteLLM (new Gemini model support bug).

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `IndexError: list index out of range with web_search_options + reasoning + stream=True on Gemini-3.5-Flash` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `IndexError: list index out of range with web_search_options + reasoning + stream=True on Gemini-3.5-Flash`.
