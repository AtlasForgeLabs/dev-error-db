---
title: "Cloudflare Error 524 — Application Layer Timeout After Successful TCP Handshake"
description: "网站通过 Cloudflare 代理返回 524 超时错误，源服务器已建立 TCP 连接但 TTFB 超过 Cloudflare 默认 100 秒超时阈值。 Includes evidence for Cloudflare troubleshooting demand."
category: "Cloudflare"
technology: "Cloudflare"
error_signature: "Error 524: A Timeout Occurred — TCP handshake succeeded but server failed to send HTTP response within 100s"
common_causes:
  - "从 iphalo.com 技术分析文章获得证据：Error 524 发生在应用层，区别于 Error 522 的网络层握手失败。TCP 连接成功建立但服务端挂起不回复 HTTP Response，常见于反 bot tar-pitting 机制、大导出请求超出 120s 超时、或高并发下后端响应极慢。Enterprise 客户可将 524 超时提升至 6000s，或将长请求放在 DNS-only 子域名后绕过 Cloudflare 代理。"
quick_fix: "Compare the failing environment with a known working setup, then change one configuration value at a time."
related_errors:
  - "Cloudflare"
updated: "2026-05-30"
published_at: "2026-05-30T01:43:27.914Z"
updated_at: "2026-05-30T01:43:27.914Z"
---

## What this error means

`Error 524: A Timeout Occurred — TCP handshake succeeded but server failed to send HTTP response within 100s` is a Cloudflare failure pattern reported for developers trying to 网站通过 cloudflare 代理返回 524 超时错误，源服务器已建立 tcp 连接但 ttfb 超过 cloudflare 默认 100 秒超时阈值。. Based on the imported evidence, treat this as a tool-specific troubleshooting page rather than a generic API error.

## Why this happens

从 iphalo.com 技术分析文章获得证据：Error 524 发生在应用层，区别于 Error 522 的网络层握手失败。TCP 连接成功建立但服务端挂起不回复 HTTP Response，常见于反 bot tar-pitting 机制、大导出请求超出 120s 超时、或高并发下后端响应极慢。Enterprise 客户可将 524 超时提升至 6000s，或将长请求放在 DNS-only 子域名后绕过 Cloudflare 代理。

## Common causes

- 从 iphalo.com 技术分析文章获得证据：Error 524 发生在应用层，区别于 Error 522 的网络层握手失败。TCP 连接成功建立但服务端挂起不回复 HTTP Response，常见于反 bot tar-pitting 机制、大导出请求超出 120s 超时、或高并发下后端响应极慢。Enterprise 客户可将 524 超时提升至 6000s，或将长请求放在 DNS-only 子域名后绕过 Cloudflare 代理。

## Quick fixes

1. Confirm the exact error signature matches `Error 524: A Timeout Occurred — TCP handshake succeeded but server failed to send HTTP response within 100s`.
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

- https://www.iphalo.com/blog/cloudflare-522-524-errors-fix/

Evidence note: 从 iphalo.com 技术分析文章获得证据：Error 524 发生在应用层，区别于 Error 522 的网络层握手失败。TCP 连接成功建立但服务端挂起不回复 HTTP Response，常见于反 bot tar-pitting 机制、大导出请求超出 120s 超时、或高并发下后端响应极慢。Enterprise 客户可将 524 超时提升至 6000s，或将长请求放在 DNS-only 子域名后绕过 Cloudflare 代理。

## Related errors

- Cloudflare

## FAQ

### What should I check first?

Start with the exact `Error 524: A Timeout Occurred — TCP handshake succeeded but server failed to send HTTP response within 100s` text and the smallest action that reproduces it.

### Can I ignore this error?

No. Treat it as a failed Cloudflare workflow until the root cause is understood.

### Is this guaranteed to have one fix?

No. The imported evidence supports the troubleshooting path above, but tool behavior can vary by account, plan, version, provider, and local configuration.

### How do I know the fix worked?

Rerun the same command, editor action, or request. The fix is working when that action completes without `Error 524: A Timeout Occurred — TCP handshake succeeded but server failed to send HTTP response within 100s`.
