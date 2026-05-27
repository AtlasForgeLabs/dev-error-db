---
title: "docker context import TLS Entry Handling results in OOM (Out of Memory)"
description: "Fix Out of Memory crash in docker context import by adding decompression size limits for TLS entry branches matching the existing 10MB cap on meta.json Includes evidence for Docker troubleshooting demand."
category: "Docker"
technology: "Docker"
error_signature: "OOM killed during docker context import when zip archive contains large tls/ branch entries — io.ReadAll(f) used without size limit unlike meta.json limitedReader"
common_causes:
  - "GitHub issue #6917 on docker/cli. docker context import correctly caps meta.json decompression at 10MB but uses bare io.ReadAll() for tls/ branch entries with no size limit. Attacking or accidentally large zips trigger OOM kills. Affects Docker Desktop and CLI users importing contexts with embedded certs/tokens. Category = Docker per approved mapping."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Docker"
updated: "2026-05-27"
published_at: "2026-05-27T15:43:20.333Z"
updated_at: "2026-05-27T15:43:20.333Z"
---

## What this error means

`OOM killed during docker context import when zip archive contains large tls/ branch entries — io.ReadAll(f) used without size limit unlike meta.json limitedReader` is a Docker failure pattern reported for developers trying to fix out of memory crash in docker context import by adding decompression size limits for tls entry branches matching the existing 10mb cap on meta.json. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue #6917 on docker/cli. docker context import correctly caps meta.json decompression at 10MB but uses bare io.ReadAll() for tls/ branch entries with no size limit. Attacking or accidentally large zips trigger OOM kills. Affects Docker Desktop and CLI users importing contexts with embedded certs/tokens. Category = Docker per approved mapping.

## Common causes

- GitHub issue #6917 on docker/cli. docker context import correctly caps meta.json decompression at 10MB but uses bare io.ReadAll() for tls/ branch entries with no size limit. Attacking or accidentally large zips trigger OOM kills. Affects Docker Desktop and CLI users importing contexts with embedded certs/tokens. Category = Docker per approved mapping.

## Quick fixes

1. Confirm the exact error signature matches `OOM killed during docker context import when zip archive contains large tls/ branch entries — io.ReadAll(f) used without size limit unlike meta.json limitedReader`.
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

- https://github.com/docker/cli/issues/6917

Evidence note: GitHub issue #6917 on docker/cli. docker context import correctly caps meta.json decompression at 10MB but uses bare io.ReadAll() for tls/ branch entries with no size limit. Attacking or accidentally large zips trigger OOM kills. Affects Docker Desktop and CLI users importing contexts with embedded certs/tokens. Category = Docker per approved mapping.

## Related errors

- Docker

## FAQ

### What should I check first?

Start with the exact `OOM killed during docker context import when zip archive contains large tls/ branch entries — io.ReadAll(f) used without size limit unlike meta.json limitedReader` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Docker workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `OOM killed during docker context import when zip archive contains large tls/ branch entries — io.ReadAll(f) used without size limit unlike meta.json limitedReader`.
