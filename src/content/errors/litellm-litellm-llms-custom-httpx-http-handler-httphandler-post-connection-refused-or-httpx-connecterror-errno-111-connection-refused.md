---
title: "LiteLLM Connection Refused Error — Proxy Misconfiguration"
description: "Fix LiteLLM proxy ConnectionRefusedError by verifying proxy process is running on expected host:port, resolving Docker network isolation, unsetting conflicting LITELLM_PORT env variable Includes evidence for LiteLLM troubleshooting demand."
category: "LiteLLM"
technology: "LiteLLM"
error_signature: "litellm.llms.custom_httpx.http_handler.HTTPHandler.post: Connection refused OR httpx.ConnectError: [Errno 111] Connection refused"
common_causes:
  - "Markaicode article (June 2026) documents that ConnectionRefusedError accounts for ~40% of all LiteLLM startup errors. Root causes are port mismatch, wrong host inside Docker (localhost vs host.docker.internal), and firewall/SELinux blocking port 4000. GitHub issue #27823 notes RouterRateLimitError masking underlying quota errors without Retry-After header. Category mapping: LiteLLM → LiteLLM."
quick_fix: "Confirm the local service is running on the expected host and port, then retry the smallest request."
related_errors:
  - "LiteLLM"
updated: "2026-06-10"
published_at: "2026-06-10T16:36:12.194Z"
updated_at: "2026-06-10T16:36:12.194Z"
---

## What this error means

`litellm.llms.custom_httpx.http_handler.HTTPHandler.post: Connection refused OR httpx.ConnectError: [Errno 111] Connection refused` is a LiteLLM failure pattern reported for developers trying to fix litellm proxy connectionrefusederror by verifying proxy process is running on expected host:port, resolving docker network isolation, unsetting conflicting litellm_port env variable. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Markaicode article (June 2026) documents that ConnectionRefusedError accounts for ~40% of all LiteLLM startup errors. Root causes are port mismatch, wrong host inside Docker (localhost vs host.docker.internal), and firewall/SELinux blocking port 4000. GitHub issue #27823 notes RouterRateLimitError masking underlying quota errors without Retry-After header. Category mapping: LiteLLM → LiteLLM.

## Common causes

- Markaicode article (June 2026) documents that ConnectionRefusedError accounts for ~40% of all LiteLLM startup errors. Root causes are port mismatch, wrong host inside Docker (localhost vs host.docker.internal), and firewall/SELinux blocking port 4000. GitHub issue #27823 notes RouterRateLimitError masking underlying quota errors without Retry-After header. Category mapping: LiteLLM → LiteLLM.

## Quick fixes

1. Confirm the exact error signature matches `litellm.llms.custom_httpx.http_handler.HTTPHandler.post: Connection refused OR httpx.ConnectError: [Errno 111] Connection refused`.
2. Check the LiteLLM account, local tool state, and provider configuration involved in the failing workflow.
3. Confirm the local service is running on the expected host and port, then retry the smallest request.

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

- https://markaicode.com/errors/litellm-connection-refused-error-fix/
- https://github.com/BerriAI/litellm/issues/27823
- https://github.com/BerriAI/litellm/issues/9035
- https://github.com/BerriAI/litellm/issues/8448

Evidence note: Markaicode article (June 2026) documents that ConnectionRefusedError accounts for ~40% of all LiteLLM startup errors. Root causes are port mismatch, wrong host inside Docker (localhost vs host.docker.internal), and firewall/SELinux blocking port 4000. GitHub issue #27823 notes RouterRateLimitError masking underlying quota errors without Retry-After header. Category mapping: LiteLLM → LiteLLM.

## Related errors

- LiteLLM

## FAQ

### What should I check first?

Start with the exact `litellm.llms.custom_httpx.http_handler.HTTPHandler.post: Connection refused OR httpx.ConnectError: [Errno 111] Connection refused` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed LiteLLM workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `litellm.llms.custom_httpx.http_handler.HTTPHandler.post: Connection refused OR httpx.ConnectError: [Errno 111] Connection refused`.
