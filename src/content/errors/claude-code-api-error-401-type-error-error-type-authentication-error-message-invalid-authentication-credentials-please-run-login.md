---
title: "Fix Claude Code 'API Error: 401' When /login Fails — Stale OAuth Cache Lockout"
description: "Developer locked out of Claude Code because expired/stale OAuth token causes persistent 401 errors; /login command itself also fails with 401, creating a bootstrapping lockout loop Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "API Error: 401 {\"type\":\"error\",\"error\":{\"type\":\"authentication_error\",\"message\":\"Invalid authentication credentials\"}} Please run /login"
common_causes:
  - "Source: https://smartscope.blog/en/generative-ai/claude/claude-code-401-auth-error-fix/ — detailed walkthrough of the 401 lockout scenario where /login and /logout both return 401 after cached credentials expire. Cross-referenced with GitHub anthropics/claude-code issue #9885 confirming this is a known bug pattern. Category: AI Coding Tools (Claude Code). This is distinct from basic 'auth failed' errors — it specifically targets the CLI login recovery loop failure mode."
quick_fix: "Review the source evidence, verify configuration, and rerun the smallest failing command."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-24"
published_at: "2026-05-24T05:36:58.175Z"
updated_at: "2026-05-24T05:36:58.175Z"
---

## What this error means

`API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid authentication credentials"}} Please run /login` means the OpenAI API rejected the request before processing it because authentication failed. The request is reaching an API endpoint, but the key, project, organization, environment variable, or provider/base URL does not match what that endpoint expects.

## Common causes

- Source: https://smartscope.blog/en/generative-ai/claude/claude-code-401-auth-error-fix/ — detailed walkthrough of the 401 lockout scenario where /login and /logout both return 401 after cached credentials expire. Cross-referenced with GitHub anthropics/claude-code issue #9885 confirming this is a known bug pattern. Category: AI Coding Tools (Claude Code). This is distinct from basic 'auth failed' errors — it specifically targets the CLI login recovery loop failure mode.

## How to fix API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid authentication credentials"}} Please run /login

1. Verify the key exists without printing the secret value.
2. Confirm the app reads the same environment variable name you set, such as `OPENAI_API_KEY`.
3. Check that the key belongs to the intended project or organization.
4. If you use a proxy or OpenAI-compatible provider, verify the base URL and provider-specific key match.

## Copy-paste commands

### Check whether the OpenAI key is present

```bash
printf "OPENAI_API_KEY=%s\n" "${OPENAI_API_KEY:+set}"
```

### Check provider-related environment names without exposing values

```bash
env | grep -E "OPENAI|MODEL|BASE_URL|ORGANIZATION|PROJECT" | sed "s/=.*/=<redacted>/"
```

### Send a minimal authenticated request

```bash
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY"
```

### Check for whitespace around the key length without printing it

```bash
python3 - <<'PY'
import os
key = os.getenv("OPENAI_API_KEY", "")
print("set:", bool(key))
print("starts_with_sk:", key.startswith("sk-"))
print("has_outer_whitespace:", key != key.strip())
PY
```

## Quick fix

1. Verify the key exists without printing the secret value.
2. Confirm the app reads the same environment variable name you set, such as `OPENAI_API_KEY`.
3. Check that the key belongs to the intended project or organization.
4. If you use a proxy or OpenAI-compatible provider, verify the base URL and provider-specific key match.

## Step-by-step troubleshooting

1. Confirm the response status or error body contains `API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid authentication credentials"}} Please run /login`.
2. Check the environment variable in the same shell, process manager, container, or CI job that sends the request.
3. Send a minimal `curl` request to `/v1/models` with the same key to separate SDK configuration from credentials.
4. Verify project, organization, provider base URL, and key source are from the same account or provider.
5. Rotate the key only after confirming the app is not reading an old `.env`, secret, or editor setting.

## Platform-specific fixes

### CI/CD

- Set the key as a CI secret, verify the job has access to secrets for that event type, and rerun the job after updating the secret.

### AI coding tools

- Check the tool provider settings separately from shell environment variables; editors often store provider keys outside `.env`.

## Real-world fixes

- If local requests work but CI fails, the CI secret may be missing, scoped to a different environment, or unavailable to pull requests from forks.
- If a new key was created, restart the server, worker, notebook kernel, or editor window so the process reads the updated environment.
- If you recently switched to a compatible provider, pair that provider base URL with that provider key instead of mixing it with an OpenAI API key.

## How to prevent it

- Keep API key names consistent across local, CI, and deployment environments.
- Log non-secret provider metadata such as base URL, model name, and project identifier for debugging.
- Restart long-running processes after secret rotation.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Check whether the process sending the request has the expected API key. For `API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid authentication credentials"}} Please run /login`, missing or stale credentials are more likely than request volume or model size.

### Can a wrong base URL cause this?

Yes. If OpenAI SDK code points at another provider or proxy, that endpoint may reject an OpenAI key, or OpenAI may reject a provider-specific key.

### Why does this work locally but fail in CI?

Your local shell may have a valid key while CI has no secret, a secret with a different name, or restricted secret access for the workflow event.

### How do I know authentication is fixed?

The same minimal request should stop returning `API Error: 401 {"type":"error","error":{"type":"authentication_error","message":"Invalid authentication credentials"}} Please run /login`. After that, retry the application request with the same key and provider configuration.

## Sources checked

- https://smartscope.blog/en/generative-ai/claude/claude-code-401-auth-error-fix/
- https://markaicode.com/errors/claude-code-authentication-failed-fix/
