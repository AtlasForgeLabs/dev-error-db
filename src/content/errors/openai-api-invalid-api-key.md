---
title: "OpenAI API invalid API key"
description: "Fix OpenAI API authentication failures caused by missing, invalid, or incorrectly loaded API keys."
category: "APIs"
technology: "OpenAI API"
error_signature: "401 Incorrect API key provided"
common_causes:
  - "API key is missing from the environment"
  - "API key was copied with extra whitespace"
  - "Application is reading the wrong environment variable"
  - "Key was revoked or belongs to a different project"
quick_fix: "Create or copy the correct API key, set it in the expected environment variable, restart the app, and retry the request."
updated: "2026-05-10"
---

## What this error means

`401 Incorrect API key provided` means OpenAI API rejected the credentials used by your command, app, workflow, or editor. In practice, the key, token, SSH key, or account setting being sent is missing, expired, malformed, or not allowed to access the requested resource. This page helps you resolve OpenAI API 401 authentication errors and verify API key configuration.

## Common causes

- API key is missing from the environment
- API key was copied with extra whitespace
- Application is reading the wrong environment variable
- Key was revoked or belongs to a different project

## Quick fixes

1. Confirm the API key is being loaded by the command that fails.
2. Create or copy the correct API key, set it in the expected environment variable, restart the app, and retry the request.
3. Restart the shell, app, CI job, or editor after changing credentials so it reads the new value.
4. Send a minimal API request with the same key, project, and model.

## Step-by-step troubleshooting

1. Start with the exact signature: `401 Incorrect API key provided`. Confirm it appears on the failing command, request, or deployment log you are debugging.
2. Print or inspect whether the expected environment variable is set without exposing the secret value.
3. Check whether the API key has access to the specific project, repo, registry, or model.
4. Look for whitespace, copied quotes, wrong provider fields, or credentials from another organization or project.
5. Log the configured model name and project or organization identifier without exposing the API key.
6. If the error mentions context, count prompt, history, tool, and requested output tokens together.
7. If the error mentions access, verify the selected project can use that model.

## Related errors

- OpenAI API rate limit error
- OpenAI API insufficient quota
- OpenAI API model not found

## FAQ

### What should I check first?

Start with the exact `401 Incorrect API key provided` message and the API key source being used by the failing process. That usually tells you whether this is a credential, configuration, dependency, network, or runtime issue.

### Can I ignore this error?

No. Treat it as a failed OpenAI API step. Temporary bypasses can be useful for diagnosis, but publish or deploy only after the underlying cause is fixed.

### Why does this work locally but fail in CI?

Local tools may read credentials from your shell, keychain, or editor, while CI only sees explicitly configured secrets. Check secret names, event permissions, and whether the workflow is allowed to access them.

### How do I know the fix worked?

Rerun the smallest command, request, workflow, or deployment that previously produced `401 Incorrect API key provided`. The fix is working when that step completes without the same signature and the expected artifact, response, or connection is produced.
