---
title: "Cloudflared Tunnel Docker Mac Returns 502 Host Error After Reboot Despite Healthy Local Service"
description: "Fix Cloudflare 502 Host error in cloudflared Docker tunnel setup on Apple Silicon Mac after reboot when local FastAPI/uvicorn service responds correctly via curl health checks pass Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Cloudflared tunnel (Docker on Mac) returns 502 \"Host error\" even though local service is healthy — worked yesterday, broke after reboot; QUIC stream timeout: failed to accept QUIC stream: timeout: no recent network activity"
common_causes:
  - "Sources: Cross-posted on r/CloudFlare and r/devops with full reproduction details including docker-compose.yml, ingress config, cloudflared logs showing QUIC timeouts, and ERR Cannot determine default origin certificate path warning even for token-based Zero Trust tunnels. Includes verified workaround attempts (switching radscribe:7860 vs host.docker.internal:7860, restarts, DNS CNAME verification). Mapping: direct Cloudflare product error → Cloudflare category."
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-17"
published_at: "2026-05-17T16:37:10.446Z"
updated_at: "2026-05-17T16:37:10.446Z"
---

## What this error means

`Cloudflared tunnel (Docker on Mac) returns 502 "Host error" even though local service is healthy — worked yesterday, broke after reboot; QUIC stream timeout: failed to accept QUIC stream: timeout: no recent network activity` is a Cloudflare failure pattern reported for developers trying to fix cloudflare 502 host error in cloudflared docker tunnel setup on apple silicon mac after reboot when local fastapi/uvicorn service responds correctly via curl health checks pass. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

Sources: Cross-posted on r/CloudFlare and r/devops with full reproduction details including docker-compose.yml, ingress config, cloudflared logs showing QUIC timeouts, and ERR Cannot determine default origin certificate path warning even for token-based Zero Trust tunnels. Includes verified workaround attempts (switching radscribe:7860 vs host.docker.internal:7860, restarts, DNS CNAME verification). Mapping: direct Cloudflare product error → Cloudflare category.

## Common causes

- Sources: Cross-posted on r/CloudFlare and r/devops with full reproduction details including docker-compose.yml, ingress config, cloudflared logs showing QUIC timeouts, and ERR Cannot determine default origin certificate path warning even for token-based Zero Trust tunnels. Includes verified workaround attempts (switching radscribe:7860 vs host.docker.internal:7860, restarts, DNS CNAME verification). Mapping: direct Cloudflare product error → Cloudflare category.

## Quick fixes

1. Confirm the exact error signature matches `Cloudflared tunnel (Docker on Mac) returns 502 "Host error" even though local service is healthy — worked yesterday, broke after reboot; QUIC stream timeout: failed to accept QUIC stream: timeout: no recent network activity`.
2. Check the Cloudflare account, local tool state, and provider configuration involved in the failing workflow.
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

- https://www.reddit.com/r/CloudFlare/comments/1onnjdk/cloudflared_tunnel_docker_on_mac_returns_502_host/
- https://www.reddit.com/r/devops/comments/1onnnj5/cloudflared_tunnel_docker_on_mac_returns_502_host/

Evidence note: Sources: Cross-posted on r/CloudFlare and r/devops with full reproduction details including docker-compose.yml, ingress config, cloudflared logs showing QUIC timeouts, and ERR Cannot determine default origin certificate path warning even for token-based Zero Trust tunnels. Includes verified workaround attempts (switching radscribe:7860 vs host.docker.internal:7860, restarts, DNS CNAME verification). Mapping: direct Cloudflare product error → Cloudflare category.

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Cloudflared tunnel (Docker on Mac) returns 502 "Host error" even though local service is healthy — worked yesterday, broke after reboot; QUIC stream timeout: failed to accept QUIC stream: timeout: no recent network activity` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Cloudflared tunnel (Docker on Mac) returns 502 "Host error" even though local service is healthy — worked yesterday, broke after reboot; QUIC stream timeout: failed to accept QUIC stream: timeout: no recent network activity`.
