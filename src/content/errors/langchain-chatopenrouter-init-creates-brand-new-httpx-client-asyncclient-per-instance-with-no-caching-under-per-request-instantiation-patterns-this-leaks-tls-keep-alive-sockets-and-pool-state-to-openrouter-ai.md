---
title: "langchain-openrouter ChatOpenRouter creates fresh httpx clients per instantiation causing resource leaks"
description: "Fix resource leak in langchain-openrouter where each model instantiation creates unclosed httpx connections, especially problematic with FastAPI dependency injection and LangGraph factory graphs Includes evidence for LangChain troubleshooting demand."
category: "AI Coding Tools"
technology: "LangChain"
error_signature: "ChatOpenRouter.__init__ creates brand-new httpx.Client/AsyncClient per instance with no caching; under per-request instantiation patterns this leaks TLS keep-alive sockets and pool state to openrouter.ai"
common_causes:
  - "GitHub issues #37497/#37498 on langchain-ai/langchain report LangChain OpenRouter wrapper creating new httpx clients per instantiation without pooling, same class of bug fixed previously for AzureChatOpenAI (#32489). Impacts developers building LLM applications that create model instances per request. Category maps to AI Coding Tools since LangChain is listed in approved category mapping table."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T00:39:51.863Z"
updated_at: "2026-05-24T00:39:51.863Z"
---

## What this error means

`ChatOpenRouter.__init__ creates brand-new httpx.Client/AsyncClient per instance with no caching; under per-request instantiation patterns this leaks TLS keep-alive sockets and pool state to openrouter.ai` is a LangChain failure pattern reported for developers trying to fix resource leak in langchain-openrouter where each model instantiation creates unclosed httpx connections, especially problematic with fastapi dependency injection and langgraph factory graphs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issues #37497/#37498 on langchain-ai/langchain report LangChain OpenRouter wrapper creating new httpx clients per instantiation without pooling, same class of bug fixed previously for AzureChatOpenAI (#32489). Impacts developers building LLM applications that create model instances per request. Category maps to AI Coding Tools since LangChain is listed in approved category mapping table.

## Common causes

- GitHub issues #37497/#37498 on langchain-ai/langchain report LangChain OpenRouter wrapper creating new httpx clients per instantiation without pooling, same class of bug fixed previously for AzureChatOpenAI (#32489). Impacts developers building LLM applications that create model instances per request. Category maps to AI Coding Tools since LangChain is listed in approved category mapping table.

## Quick fixes

1. Confirm the exact error signature matches `ChatOpenRouter.__init__ creates brand-new httpx.Client/AsyncClient per instance with no caching; under per-request instantiation patterns this leaks TLS keep-alive sockets and pool state to openrouter.ai`.
2. Check the LangChain account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/langchain-ai/langchain/issues/37497
- https://github.com/langchain-ai/langchain/issues/37498

Evidence note: GitHub issues #37497/#37498 on langchain-ai/langchain report LangChain OpenRouter wrapper creating new httpx clients per instantiation without pooling, same class of bug fixed previously for AzureChatOpenAI (#32489). Impacts developers building LLM applications that create model instances per request. Category maps to AI Coding Tools since LangChain is listed in approved category mapping table.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `ChatOpenRouter.__init__ creates brand-new httpx.Client/AsyncClient per instance with no caching; under per-request instantiation patterns this leaks TLS keep-alive sockets and pool state to openrouter.ai` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LangChain workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ChatOpenRouter.__init__ creates brand-new httpx.Client/AsyncClient per instance with no caching; under per-request instantiation patterns this leaks TLS keep-alive sockets and pool state to openrouter.ai`.
