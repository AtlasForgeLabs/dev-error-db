---
title: "Codex Usage/Limits UI Inconsistently Broken — Rate Limits Not Displaying"
description: "Paid Codex users unable to monitor remaining rate limits, causing anxiety and unpredictable billing Includes evidence for OpenAI Codex troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI Codex"
error_signature: "The UI that shows usage / limits is inconsistently not working from time to time — rate limits remaining suddenly disappear"
common_causes:
  - "GitHub issue openai/codex#20829 opened April 3; 3+ comments confirming intermittent disappearance of rate limit display. Category: OpenAI API because this directly impacts pay-per-token usage visibility. Distinct from #14593 (token burn regression vs. UI display bug)."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "OpenAI API"
updated: "2026-05-19"
published_at: "2026-05-19T06:37:15.411Z"
updated_at: "2026-05-19T06:37:15.411Z"
---

## What this error means

`The UI that shows usage / limits is inconsistently not working from time to time — rate limits remaining suddenly disappear` is a OpenAI Codex failure pattern reported for developers trying to paid codex users unable to monitor remaining rate limits, causing anxiety and unpredictable billing. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub issue openai/codex#20829 opened April 3; 3+ comments confirming intermittent disappearance of rate limit display. Category: OpenAI API because this directly impacts pay-per-token usage visibility. Distinct from #14593 (token burn regression vs. UI display bug).

## Common causes

- GitHub issue openai/codex#20829 opened April 3; 3+ comments confirming intermittent disappearance of rate limit display. Category: OpenAI API because this directly impacts pay-per-token usage visibility. Distinct from #14593 (token burn regression vs. UI display bug).

## Quick fixes

1. Confirm the exact error signature matches `The UI that shows usage / limits is inconsistently not working from time to time — rate limits remaining suddenly disappear`.
2. Check the OpenAI Codex account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/openai/codex/issues/20829

Evidence note: GitHub issue openai/codex#20829 opened April 3; 3+ comments confirming intermittent disappearance of rate limit display. Category: OpenAI API because this directly impacts pay-per-token usage visibility. Distinct from #14593 (token burn regression vs. UI display bug).

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `The UI that shows usage / limits is inconsistently not working from time to time — rate limits remaining suddenly disappear` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI Codex workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `The UI that shows usage / limits is inconsistently not working from time to time — rate limits remaining suddenly disappear`.
