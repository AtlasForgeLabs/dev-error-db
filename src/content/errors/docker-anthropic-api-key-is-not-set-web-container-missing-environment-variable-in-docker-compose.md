---
title: "Docker Compose ANTHROPIC_API_KEY Not Forwarded to Web Container"
description: "Fix ANTHROPIC_API_KEY not set error in Docker Compose web container Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "ANTHROPIC_API_KEY is not set — web container missing environment variable in Docker Compose"
common_causes:
  - "Developers running LLM-integrated applications in Docker Compose find that the web container fails with 'ANTHROPIC_API_KEY is not set' even though the host has the variable configured. The docker-compose.yml environment block doesn't forward ANTHROPIC_API_KEY from the host, causing all LLM calls (prep brief, clinical analysis, protocol generation) to fail silently."
  - "PR #199 (May 2026) fixes a Docker Compose issue where the web service's environment block didn't forward ANTHROPIC_API_KEY from the host. The web container had no Anthropic key, causing all LLM calls to fail with 'ANTHROPIC_API_KEY is not set'. Surfaced during May 11 smoke test."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker environment variable not passed to container"
  - "Docker Compose secrets not forwarded"
  - "Container missing API key environment variable"
updated: "2026-05-12"
---

## What this error means

`ANTHROPIC_API_KEY is not set — web container missing environment variable in Docker Compose` is a Docker failure pattern reported for developers trying to fix anthropic_api_key not set error in docker compose web container. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

PR #199 (May 2026) fixes a Docker Compose issue where the web service's environment block didn't forward ANTHROPIC_API_KEY from the host. The web container had no Anthropic key, causing all LLM calls to fail with 'ANTHROPIC_API_KEY is not set'. Surfaced during May 11 smoke test.

## Common causes

- Developers running LLM-integrated applications in Docker Compose find that the web container fails with 'ANTHROPIC_API_KEY is not set' even though the host has the variable configured. The docker-compose.yml environment block doesn't forward ANTHROPIC_API_KEY from the host, causing all LLM calls (prep brief, clinical analysis, protocol generation) to fail silently.
- PR #199 (May 2026) fixes a Docker Compose issue where the web service's environment block didn't forward ANTHROPIC_API_KEY from the host. The web container had no Anthropic key, causing all LLM calls to fail with 'ANTHROPIC_API_KEY is not set'. Surfaced during May 11 smoke test.

## Quick fixes

1. Confirm the exact error signature matches `ANTHROPIC_API_KEY is not set — web container missing environment variable in Docker Compose`.
2. Check the Docker account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/Clinical-Signal/clinical-signal-main/pull/199

Evidence note: PR #199 (May 2026) fixes a Docker Compose issue where the web service's environment block didn't forward ANTHROPIC_API_KEY from the host. The web container had no Anthropic key, causing all LLM calls to fail with 'ANTHROPIC_API_KEY is not set'. Surfaced during May 11 smoke test.

## Related errors

- Docker environment variable not passed to container
- Docker Compose secrets not forwarded
- Container missing API key environment variable

## FAQ

### What should I check first?

Start with the exact `ANTHROPIC_API_KEY is not set — web container missing environment variable in Docker Compose` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `ANTHROPIC_API_KEY is not set — web container missing environment variable in Docker Compose`.
