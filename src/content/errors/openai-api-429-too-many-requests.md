---
title: "OpenAI API 429 Too Many Requests"
description: "Fix OpenAI API 429 Too Many Requests errors by reducing bursts, adding retry backoff, lowering concurrency, and checking rate or quota limits."
category: "OpenAI API"
technology: "OpenAI API"
error_signature: "429 Too Many Requests"
common_causes:
  - "Requests are sent in bursts or large parallel batches"
  - "Retry logic immediately repeats failed requests"
  - "Request-per-minute or token-per-minute limits are exceeded"
  - "Worker or queue concurrency is too high"
  - "Project quota or usage limits are exhausted"
quick_fix: "Reduce concurrency and request volume, add exponential backoff with jitter, respect Retry-After when present, and check provider usage and rate-limit dashboards."
related_errors:
  - "Cursor model not available"
  - "Cursor OpenAI API key not working"
  - "OpenAI API context length exceeded"
  - "OpenAI API insufficient quota"
updated: "2026-05-10"
---

## What this error means

`429 Too Many Requests` means the API accepted your authentication but throttled the workload because requests arrived too quickly, too many tokens were sent, concurrency was too high, or the account/project is constrained by rate or usage limits.

## Why this happens

A 429 is mainly a traffic-shaping problem. It is different from a 401 authentication failure: the key can be valid while the request pattern still exceeds request-per-minute, token-per-minute, or concurrency limits.

Bursty retries can make the problem worse. If every failed request immediately retries, a short throttle can turn into a sustained overload.

## Common causes

- Requests are sent in bursts or large parallel batches
- Retry logic immediately repeats failed requests
- Request-per-minute or token-per-minute limits are exceeded
- Worker or queue concurrency is too high
- Project quota or usage limits are exhausted

## Quick fixes

1. Reduce concurrent requests and batch size before retrying the same workload.
2. Add exponential backoff with jitter and respect any `Retry-After` header returned by the provider.
3. Lower prompt size or max output tokens if token-per-minute limits are being hit.
4. Check usage, quota, and rate-limit settings in the provider dashboard to distinguish throttling from exhausted quota.

## Copy-paste commands

### Send one request and inspect rate-limit headers

```bash
curl -i https://api.openai.com/v1/models \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  | grep -iE "HTTP/|retry-after|rate|limit|remaining"
```

### Find aggressive retry loops in JavaScript or TypeScript

```bash
rg -n "retry|setTimeout|setInterval|Promise\.all|concurr|p-limit|queue" src scripts .
```

### Find retry loops in Python

```bash
rg -n "retry|backoff|sleep|asyncio\.gather|ThreadPoolExecutor|concurrent" .
```

### Confirm the request volume from local logs

```bash
rg -n "429|Too Many Requests|rate limit|Retry-After" logs .
```

## Platform-specific fixes

### CI/CD

- Avoid running many API-heavy tests in parallel jobs unless the test suite uses mocks or a shared throttling queue.

### Production workers

- Cap worker concurrency and queue API jobs so deploys or cron runs do not start a burst of requests at the same time.

## Real-world fixes

- If the error appears after adding retries, make sure retries wait longer after each failure instead of firing immediately.
- If the error appears only with long prompts, token-per-minute limits may be the bottleneck even when request count looks low.
- If the dashboard shows exhausted quota or billing limits, treat it as a quota problem; retry backoff alone will not restore capacity.

## Step-by-step troubleshooting

1. Confirm the error is `429 Too Many Requests` and not a 401 or insufficient-quota response.
2. Check whether the response includes `Retry-After` or rate-limit headers and log them without logging request content.
3. Temporarily run the workload with concurrency set to `1`; if it succeeds, add a queue or limiter.
4. Inspect retry code for immediate loops, nested retries, or `Promise.all` over large request batches.
5. Compare request count and token usage in the provider dashboard before asking for higher limits.

## How to prevent it

- Use exponential backoff with jitter for retryable 429 responses.
- Set explicit concurrency limits around API calls.
- Track request count, token usage, and 429 rate in application metrics.
- Use mocks or fixtures for tests that do not need live API calls.

## Related errors

- Cursor model not available
- Cursor OpenAI API key not working
- OpenAI API context length exceeded
- OpenAI API insufficient quota

## FAQ

### Is this caused by an invalid API key?

Usually no. `429 Too Many Requests` means the request is being throttled. Invalid or missing keys usually produce 401-style authentication errors instead.

### What should I check first?

Check concurrency, retry behavior, and recent request volume. A single deploy, queue drain, or test run can create a burst that crosses request-per-minute or token-per-minute limits.

### What is exponential backoff?

It means waiting progressively longer between retries, often with a small random jitter, so clients do not retry in synchronized bursts.

### How do I know the fix worked?

Run the same workload with logging for 429 responses. The fix is working when request volume stays under the limit and `429 Too Many Requests` no longer appears during normal traffic.
