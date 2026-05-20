---
title: "LangChain ChatAnthropic Fails on base64 File Blocks With Non-PDF Text Mime Types"
description: "Fix Anthropic document block translation in LangChain that rejects CSV/text base64 content with invalid media_type validation errors Includes evidence for Anthropic API troubleshooting demand."
category: "Anthropic API"
technology: "Anthropic API"
error_signature: "langchain-anthropic: base64 file blocks with non-PDF text mime types fail with media_type validation error"
common_causes:
  - "Open issue #37576 on langchain-ai/langchain (created May 20, 2026). When sending base64-encoded text files (CSV, etc.) through ChatAnthropic, the SDK hard-codes mime_type='application/pdf' for all document blocks. Any non-PDF text mime type triggers a media_type validation error. This breaks multimodal workflows where users need to upload documents with various text-based mime types. Directly related to core-level bug #36939."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Anthropic API"
updated: "2026-05-20"
published_at: "2026-05-20T10:38:29.159Z"
updated_at: "2026-05-20T10:38:29.159Z"
---

## What this error means

`langchain-anthropic: base64 file blocks with non-PDF text mime types fail with media_type validation error` is a Anthropic API failure pattern reported for developers trying to fix anthropic document block translation in langchain that rejects csv/text base64 content with invalid media_type validation errors. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Open issue #37576 on langchain-ai/langchain (created May 20, 2026). When sending base64-encoded text files (CSV, etc.) through ChatAnthropic, the SDK hard-codes mime_type='application/pdf' for all document blocks. Any non-PDF text mime type triggers a media_type validation error. This breaks multimodal workflows where users need to upload documents with various text-based mime types. Directly related to core-level bug #36939.

## Common causes

- Open issue #37576 on langchain-ai/langchain (created May 20, 2026). When sending base64-encoded text files (CSV, etc.) through ChatAnthropic, the SDK hard-codes mime_type='application/pdf' for all document blocks. Any non-PDF text mime type triggers a media_type validation error. This breaks multimodal workflows where users need to upload documents with various text-based mime types. Directly related to core-level bug #36939.

## Quick fixes

1. Confirm the exact error signature matches `langchain-anthropic: base64 file blocks with non-PDF text mime types fail with media_type validation error`.
2. Check the Anthropic API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/langchain-ai/langchain/issues/37576

Evidence note: Open issue #37576 on langchain-ai/langchain (created May 20, 2026). When sending base64-encoded text files (CSV, etc.) through ChatAnthropic, the SDK hard-codes mime_type='application/pdf' for all document blocks. Any non-PDF text mime type triggers a media_type validation error. This breaks multimodal workflows where users need to upload documents with various text-based mime types. Directly related to core-level bug #36939.

## Related errors

- Anthropic API

## FAQ

### What should I check first?

Start with the exact `langchain-anthropic: base64 file blocks with non-PDF text mime types fail with media_type validation error` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Anthropic API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `langchain-anthropic: base64 file blocks with non-PDF text mime types fail with media_type validation error`.
