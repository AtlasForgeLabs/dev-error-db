---
title: "Opus 4.6 Cache Read Tokens Counted at Full Rate Despite Cache Hits on Max 20x"
description: "Fix incorrect billing where Opus 4.6 cached read tokens are charged at full input rate instead of discounted cache-hit rate on Claude Code Max plan Includes evidence for Claude Code troubleshooting demand."
category: "AI Coding Tools"
technology: "Claude Code"
error_signature: "cache_read tokens counted at full rate despite cache hits on Max 20x — billing system not applying discounted cache read pricing"
common_causes:
  - "GitHub anthropics/claude-code#59872 opened May 17, 2026: Users report that despite cache hits providing 20x speedup, the billing system charges the full token price rather than the reduced cache-read rate. Direct financial impact on paid users — every repeated interaction costs more than expected. Category: AI Coding Tools."
quick_fix: "Reduce request pressure, check quota or plan limits, and retry with backoff instead of immediate repeated requests."
related_errors:
  - "AI Coding Tools"
updated: "2026-05-19"
published_at: "2026-05-19T00:37:14.654Z"
updated_at: "2026-05-19T00:37:14.654Z"
---

## What this error means

`cache_read tokens counted at full rate despite cache hits on Max 20x — billing system not applying discounted cache read pricing` is a Claude Code failure pattern reported for developers trying to fix incorrect billing where opus 4.6 cached read tokens are charged at full input rate instead of discounted cache-hit rate on claude code max plan. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

GitHub anthropics/claude-code#59872 opened May 17, 2026: Users report that despite cache hits providing 20x speedup, the billing system charges the full token price rather than the reduced cache-read rate. Direct financial impact on paid users — every repeated interaction costs more than expected. Category: AI Coding Tools.

## Common causes

- GitHub anthropics/claude-code#59872 opened May 17, 2026: Users report that despite cache hits providing 20x speedup, the billing system charges the full token price rather than the reduced cache-read rate. Direct financial impact on paid users — every repeated interaction costs more than expected. Category: AI Coding Tools.

## Quick fixes

1. Confirm the exact error signature matches `cache_read tokens counted at full rate despite cache hits on Max 20x — billing system not applying discounted cache read pricing`.
2. Check the Claude Code account, local tool state, and provider configuration involved in the failing workflow.
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

- https://github.com/anthropics/claude-code/issues/59872

Evidence note: GitHub anthropics/claude-code#59872 opened May 17, 2026: Users report that despite cache hits providing 20x speedup, the billing system charges the full token price rather than the reduced cache-read rate. Direct financial impact on paid users — every repeated interaction costs more than expected. Category: AI Coding Tools.

## Related errors

- AI Coding Tools

## FAQ

### What should I check first?

Start with the exact `cache_read tokens counted at full rate despite cache hits on Max 20x — billing system not applying discounted cache read pricing` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Claude Code workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `cache_read tokens counted at full rate despite cache hits on Max 20x — billing system not applying discounted cache read pricing`.
