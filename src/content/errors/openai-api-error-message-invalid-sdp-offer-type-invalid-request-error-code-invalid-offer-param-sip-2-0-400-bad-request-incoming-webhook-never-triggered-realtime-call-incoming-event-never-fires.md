---
title: "OpenAI Realtime API SIP inbound calls fail with Invalid SDP offer before webhook dispatch"
description: "Production voice service using Twilio SIP trunk to OpenAI Realtime API experiencing recurring SIP call rejections at ingress layer; no changes made to code/config; callers need workaround or timeline for fix affecting live customer-facing voice feature Includes evidence for OpenAI API troubleshooting demand."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "{\"error\": {\"message\": \"Invalid SDP offer.\", \"type\": \"invalid_request_error\", \"code\": \"invalid_offer\", \"param\": \"\"}} — SIP/2.0 400 Bad Request, incoming webhook never triggered, realtime.call.incoming event never fires"
common_causes:
  - "Found on OpenAI Developer Community (May 13). Recurrence of previous known SIP SDP validation regression. Multiple users affected including direct PBX trunking (not just Twilio). Error occurs pre-webhook — requests rejected before reaching application layer. Production impact confirmed by at least 2 separate teams. 467 views, 38 likes, 24 replies. Previous similar thread also reported. Category: OpenAI API since it affects the Realtime API SIP ingestion endpoint used by developers building voice applications."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "OpenAI API"
updated: "2026-06-04"
published_at: "2026-06-04T08:44:35.345Z"
updated_at: "2026-06-04T08:44:35.345Z"
---

## What this error means

`{"error": {"message": "Invalid SDP offer.", "type": "invalid_request_error", "code": "invalid_offer", "param": ""}} — SIP/2.0 400 Bad Request, incoming webhook never triggered, realtime.call.incoming event never fires` is a OpenAI API failure pattern reported for developers trying to production voice service using twilio sip trunk to openai realtime api experiencing recurring sip call rejections at ingress layer; no changes made to code/config; callers need workaround or timeline for fix affecting live customer-facing voice feature. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Found on OpenAI Developer Community (May 13). Recurrence of previous known SIP SDP validation regression. Multiple users affected including direct PBX trunking (not just Twilio). Error occurs pre-webhook — requests rejected before reaching application layer. Production impact confirmed by at least 2 separate teams. 467 views, 38 likes, 24 replies. Previous similar thread also reported. Category: OpenAI API since it affects the Realtime API SIP ingestion endpoint used by developers building voice applications.

## Common causes

- Found on OpenAI Developer Community (May 13). Recurrence of previous known SIP SDP validation regression. Multiple users affected including direct PBX trunking (not just Twilio). Error occurs pre-webhook — requests rejected before reaching application layer. Production impact confirmed by at least 2 separate teams. 467 views, 38 likes, 24 replies. Previous similar thread also reported. Category: OpenAI API since it affects the Realtime API SIP ingestion endpoint used by developers building voice applications.

## Quick fixes

1. Confirm the exact error signature matches `{"error": {"message": "Invalid SDP offer.", "type": "invalid_request_error", "code": "invalid_offer", "param": ""}} — SIP/2.0 400 Bad Request, incoming webhook never triggered, realtime.call.incoming event never fires`.
2. Check the OpenAI API account, local tool state, and provider configuration involved in the failing workflow.
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

- https://community.openai.com/t/realtime-api-sip-inbound-calls-failing-again-before-webhook-dispatch/1380763

Evidence note: Found on OpenAI Developer Community (May 13). Recurrence of previous known SIP SDP validation regression. Multiple users affected including direct PBX trunking (not just Twilio). Error occurs pre-webhook — requests rejected before reaching application layer. Production impact confirmed by at least 2 separate teams. 467 views, 38 likes, 24 replies. Previous similar thread also reported. Category: OpenAI API since it affects the Realtime API SIP ingestion endpoint used by developers building voice applications.

## Related errors

- OpenAI API

## FAQ

### What should I check first?

Start with the exact `{"error": {"message": "Invalid SDP offer.", "type": "invalid_request_error", "code": "invalid_offer", "param": ""}} — SIP/2.0 400 Bad Request, incoming webhook never triggered, realtime.call.incoming event never fires` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed OpenAI API workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `{"error": {"message": "Invalid SDP offer.", "type": "invalid_request_error", "code": "invalid_offer", "param": ""}} — SIP/2.0 400 Bad Request, incoming webhook never triggered, realtime.call.incoming event never fires`.
