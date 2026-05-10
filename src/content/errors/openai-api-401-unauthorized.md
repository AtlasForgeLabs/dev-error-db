---
title: "OpenAI API 401 Unauthorized"
description: "Fix OpenAI API 401 Unauthorized errors caused by missing keys, revoked keys, wrong project access, or mismatched provider configuration."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "401 Unauthorized"
common_causes:
  - "API key is missing from the runtime environment"
  - "API key was revoked, rotated, or copied incorrectly"
  - "Application is reading the wrong environment variable"
  - "Key belongs to a different project or organization"
  - "Base URL points to a different OpenAI-compatible provider"
quick_fix: "Verify the API key is present in the process sending the request, confirm project/provider settings, restart the app after secret changes, and retry a minimal authenticated request."
related_errors:
  - "Cursor model not available"
  - "Cursor OpenAI API key not working"
  - "OpenAI API context length exceeded"
  - "OpenAI API insufficient quota"
updated: "2026-05-10"
---

## What this error means

`401 Unauthorized` means the OpenAI API rejected the request before processing it because authentication failed. The request is reaching an API endpoint, but the key, project, organization, environment variable, or provider/base URL does not match what that endpoint expects.

## Why this happens

A 401 is an authentication problem, not a rate-limit or model-size problem. The most common cause is that the runtime sending the request does not have the key you think it has.

It can also happen after rotating keys, switching projects, changing provider settings in an AI coding tool, or pointing OpenAI SDK code at an OpenAI-compatible provider with the wrong base URL.

## Common causes

- API key is missing from the runtime environment
- API key was revoked, rotated, or copied incorrectly
- Application is reading the wrong environment variable
- Key belongs to a different project or organization
- Base URL points to a different OpenAI-compatible provider

## Quick fixes

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

## Real-world fixes

- If local requests work but CI fails, the CI secret may be missing, scoped to a different environment, or unavailable to pull requests from forks.
- If a new key was created, restart the server, worker, notebook kernel, or editor window so the process reads the updated environment.
- If you recently switched to a compatible provider, pair that provider base URL with that provider key instead of mixing it with an OpenAI API key.

## Step-by-step troubleshooting

1. Confirm the response status or error body contains `401 Unauthorized`.
2. Check the environment variable in the same shell, process manager, container, or CI job that sends the request.
3. Send a minimal `curl` request to `/v1/models` with the same key to separate SDK configuration from credentials.
4. Verify project, organization, provider base URL, and key source are from the same account or provider.
5. Rotate the key only after confirming the app is not reading an old `.env`, secret, or editor setting.

## Platform-specific fixes

### CI/CD

- Set the key as a CI secret, verify the job has access to secrets for that event type, and rerun the job after updating the secret.

### AI coding tools

- Check the tool provider settings separately from shell environment variables; editors often store provider keys outside `.env`.

## How to prevent it

- Keep API key names consistent across local, CI, and deployment environments.
- Log non-secret provider metadata such as base URL, model name, and project identifier for debugging.
- Restart long-running processes after secret rotation.

## Related errors

- Cursor model not available
- Cursor OpenAI API key not working
- OpenAI API context length exceeded
- OpenAI API insufficient quota

## FAQ

### What should I check first?

Check whether the process sending the request has the expected API key. For `401 Unauthorized`, missing or stale credentials are more likely than request volume or model size.

### Can a wrong base URL cause this?

Yes. If OpenAI SDK code points at another provider or proxy, that endpoint may reject an OpenAI key, or OpenAI may reject a provider-specific key.

### Why does this work locally but fail in CI?

Your local shell may have a valid key while CI has no secret, a secret with a different name, or restricted secret access for the workflow event.

### How do I know authentication is fixed?

The same minimal request should stop returning `401 Unauthorized`. After that, retry the application request with the same key and provider configuration.
