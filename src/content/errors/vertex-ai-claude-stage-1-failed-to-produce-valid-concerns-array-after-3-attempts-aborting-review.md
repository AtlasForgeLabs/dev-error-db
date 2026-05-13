---
title: "Vertex AI Claude Provider Drops response_format — Structured Output Always Fails"
description: "Fix Vertex AI Claude provider silently dropping response_format field, causing structured JSON output failures Includes evidence for Vertex AI / Claude troubleshooting demand."
category: "AI Coding Tools"
technology: "Vertex AI / Claude"
error_signature: "Stage 1 failed to produce valid 'concerns' array after 3 attempts — aborting review"
common_causes:
  - "When using Claude models through Google Vertex AI (not direct Anthropic API), the response_format field is silently dropped from requests. This causes any tool or application that expects structured JSON output (via response_format) to fail with parsing errors. The Vertex API endpoint itself works fine for free-form responses, making this a subtle integration bug that only surfaces with structured output requirements."
  - "Sashiko issue #171: Vertex AI Claude provider (claude-sonnet-4-6 and claude-opus-4-6 in us-east5) drops response_format field in generate_claude(), causing Stage 1 AI review to always fail with 'failed to produce valid concerns array after 3 attempts'. Direct rawPredict calls with same credentials work fine — the bug is in the SDK layer not forwarding response_format to Vertex ClaudeRequest. 12 comments."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Vertex AI Claude response_format not supported"
  - "Claude structured output via Vertex AI fails"
  - "Vertex Claude rawPredict vs Anthropic API differences"
updated: "2026-05-13"
published_at: "2026-05-13T00:12:19.399Z"
updated_at: "2026-05-13T00:12:19.399Z"
---

## What this error means

`Stage 1 failed to produce valid 'concerns' array after 3 attempts — aborting review` is a Vertex AI / Claude failure pattern reported for developers trying to fix vertex ai claude provider silently dropping response_format field, causing structured json output failures. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Sashiko issue #171: Vertex AI Claude provider (claude-sonnet-4-6 and claude-opus-4-6 in us-east5) drops response_format field in generate_claude(), causing Stage 1 AI review to always fail with 'failed to produce valid concerns array after 3 attempts'. Direct rawPredict calls with same credentials work fine — the bug is in the SDK layer not forwarding response_format to Vertex ClaudeRequest. 12 comments.

## Common causes

- When using Claude models through Google Vertex AI (not direct Anthropic API), the response_format field is silently dropped from requests. This causes any tool or application that expects structured JSON output (via response_format) to fail with parsing errors. The Vertex API endpoint itself works fine for free-form responses, making this a subtle integration bug that only surfaces with structured output requirements.
- Sashiko issue #171: Vertex AI Claude provider (claude-sonnet-4-6 and claude-opus-4-6 in us-east5) drops response_format field in generate_claude(), causing Stage 1 AI review to always fail with 'failed to produce valid concerns array after 3 attempts'. Direct rawPredict calls with same credentials work fine — the bug is in the SDK layer not forwarding response_format to Vertex ClaudeRequest. 12 comments.

## Quick fixes

1. Confirm the exact error signature matches `Stage 1 failed to produce valid 'concerns' array after 3 attempts — aborting review`.
2. Check the Vertex AI / Claude account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/sashiko-dev/sashiko/issues/171

Evidence note: Sashiko issue #171: Vertex AI Claude provider (claude-sonnet-4-6 and claude-opus-4-6 in us-east5) drops response_format field in generate_claude(), causing Stage 1 AI review to always fail with 'failed to produce valid concerns array after 3 attempts'. Direct rawPredict calls with same credentials work fine — the bug is in the SDK layer not forwarding response_format to Vertex ClaudeRequest. 12 comments.

## Related errors

- Vertex AI Claude response_format not supported
- Claude structured output via Vertex AI fails
- Vertex Claude rawPredict vs Anthropic API differences

## FAQ

### What should I check first?

Start with the exact `Stage 1 failed to produce valid 'concerns' array after 3 attempts — aborting review` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Vertex AI / Claude workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Stage 1 failed to produce valid 'concerns' array after 3 attempts — aborting review`.
