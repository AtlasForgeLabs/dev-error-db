---
title: "OpenAI API invalid API key"
description: "Fix OpenAI API authentication failures caused by missing, invalid, or incorrectly loaded API keys."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "401 Incorrect API key provided"
common_causes:
  - "API key is missing from the environment"
  - "API key was copied with extra whitespace"
  - "Application is reading the wrong environment variable"
  - "Key was revoked or belongs to a different project"
quick_fix: "Create or copy the correct API key, set it in the expected environment variable, restart the app, and retry the request."
related_errors:
  - "OpenAI API rate limit error"
  - "OpenAI API insufficient quota"
  - "OpenAI API model not found"
updated: "2026-05-10"
---

## What this error means

`401 Incorrect API key provided` means the API or AI coding tool rejected the request because credentials, model access, quota, context size, or provider configuration does not match the request being sent.

## Why this happens

OpenAI-compatible tooling usually has three moving parts: API key, selected model, and request size.

For OpenAI API invalid API key, debug the smallest request that uses the same provider, model, and environment variable.

## Common causes

- API key is missing from the environment
- API key was copied with extra whitespace
- Application is reading the wrong environment variable
- Key was revoked or belongs to a different project

## Quick fixes

1. Verify the API key is present without printing its value.
2. Check the configured model name and provider/base URL.
3. Create or copy the correct API key, set it in the expected environment variable, restart the app, and retry the request.
4. Retry with a minimal request before rerunning the full app or editor workflow.

## Copy-paste commands

### Check whether the key is set

```bash
printf "OPENAI_API_KEY=%s\n" "${OPENAI_API_KEY:+set}"
```

### Send a minimal API request

```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

### Inspect app environment without exposing the key

```bash
env | grep -E "OPENAI|MODEL|BASE_URL" | sed "s/=.*/=<redacted>/"
```

## Platform-specific fixes

### CI/CD

- Set API keys as CI secrets, then restart or rerun the job so the process reads the updated environment.

## Real-world fixes

- If a tool works in one editor window but not another, compare provider settings and restart the editor.
- If a model fails but authentication works, test a known available model before changing application code.
- Create or copy the correct API key, set it in the expected environment variable, restart the app, and retry the request.

## Step-by-step troubleshooting

1. Record the request path, model, and `401 Incorrect API key provided` without logging secret values.
2. Verify `OPENAI_API_KEY` or the provider-specific key exists in the process that sends the request.
3. Send a minimal API request with curl to separate SDK bugs from account or credential issues.
4. If the error mentions context, reduce prompt history and requested output tokens.
5. If the error mentions quota or rate limits, reduce concurrency before requesting higher limits.

## How to prevent it

- Centralize model names and provider base URLs in configuration.
- Add retry backoff for rate-limit errors, not for quota or credential errors.
- Log request IDs and non-secret configuration for production debugging.

## Related errors

- OpenAI API rate limit error
- OpenAI API insufficient quota
- OpenAI API model not found

## FAQ

### What should I check first?

Start with the exact `401 Incorrect API key provided` line and the command, request, or workflow step that produced it. In OpenAI API or AI coding tool, the first useful clue is usually near the first failure line, not the final stack trace.

### Can I ignore this error?

No. Treat it as a failed OpenAI API or AI coding tool step. A temporary bypass may help diagnosis, but the underlying cause should be fixed before shipping or publishing changes.

### Why does this work locally but fail elsewhere?

Local machines often have cached credentials, old dependencies, different runtime versions, or network settings that CI and production do not share. Reproduce from a clean shell or clean install when possible.

### How do I know the fix worked?

Rerun the smallest command, request, or deployment step that produced `401 Incorrect API key provided`. The fix is working when that step completes without the same signature and produces the expected output.
