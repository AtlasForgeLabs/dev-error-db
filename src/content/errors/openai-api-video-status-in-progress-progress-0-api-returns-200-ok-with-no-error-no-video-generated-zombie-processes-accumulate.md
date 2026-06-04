---
title: "OpenAI Sora API fails to generate videos silently — returns 200 OK with no content"
description: "Developer trying to use Sora API to generate videos is getting silent failures — no error returned but no video either; needs to understand why and how to resolve or recover stuck jobs Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "Video status: in_progress, progress: 0 — API returns 200 OK with no error, no video generated; zombie processes accumulate"
common_causes:
  - "Found on OpenAI Developer Community (May 30–July 2). Multiple EdTech users reporting identical behavior: Sora API job stays 'in_progress' with progress=0 forever. API returns HTTP 200 but no media output. Affected user reports 46+ accumulated 'zombie processes'. High engagement (610 views, 62 likes, 25 replies). Verified by multiple independent users. Category: OpenAI API since it directly involves OpenAI's Sora API endpoint."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-06-04"
published_at: "2026-06-04T08:44:35.345Z"
updated_at: "2026-06-04T08:44:35.345Z"
---

## What this error means

`Video status: in_progress, progress: 0 — API returns 200 OK with no error, no video generated; zombie processes accumulate` is a OpenAI API failure pattern reported for developers trying to developer trying to use sora api to generate videos is getting silent failures — no error returned but no video either; needs to understand why and how to resolve or recover stuck jobs. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on OpenAI Developer Community (May 30–July 2). Multiple EdTech users reporting identical behavior: Sora API job stays 'in_progress' with progress=0 forever. API returns HTTP 200 but no media output. Affected user reports 46+ accumulated 'zombie processes'. High engagement (610 views, 62 likes, 25 replies). Verified by multiple independent users. Category: OpenAI API since it directly involves OpenAI's Sora API endpoint.

## Common causes

- Found on OpenAI Developer Community (May 30–July 2). Multiple EdTech users reporting identical behavior: Sora API job stays 'in_progress' with progress=0 forever. API returns HTTP 200 but no media output. Affected user reports 46+ accumulated 'zombie processes'. High engagement (610 views, 62 likes, 25 replies). Verified by multiple independent users. Category: OpenAI API since it directly involves OpenAI's Sora API endpoint.

## Quick fixes

1. Confirm the exact error signature matches `Video status: in_progress, progress: 0 — API returns 200 OK with no error, no video generated; zombie processes accumulate`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
3. Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests.

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

- https://community.openai.com/t/sora-api-fails-to-generate-videos-starting-may-29/1382050

Evidence note: Found on OpenAI Developer Community (May 30–July 2). Multiple EdTech users reporting identical behavior: Sora API job stays 'in_progress' with progress=0 forever. API returns HTTP 200 but no media output. Affected user reports 46+ accumulated 'zombie processes'. High engagement (610 views, 62 likes, 25 replies). Verified by multiple independent users. Category: OpenAI API since it directly involves OpenAI's Sora API endpoint.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `Video status: in_progress, progress: 0 — API returns 200 OK with no error, no video generated; zombie processes accumulate` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Video status: in_progress, progress: 0 — API returns 200 OK with no error, no video generated; zombie processes accumulate`.
