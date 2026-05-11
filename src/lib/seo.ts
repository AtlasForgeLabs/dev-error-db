export const SITE_URL = 'https://dev-error-db.com';
export const SITE_NAME = 'Dev Error DB';
export const DEFAULT_OG_IMAGE = '/favicon.svg';

export function absoluteUrl(pathname: string, site = SITE_URL) {
  return new URL(pathname, site).toString();
}

export function titleWithSite(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

export function buildSeoTitle(title: string) {
  const cleaned = title.replace(/\s+/g, ' ').trim();
  return titleWithSite(cleaned);
}

export function buildMetaDescription(description: string, maxLength = 160) {
  const cleaned = description.replace(/\s+/g, ' ').trim();

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  return `${cleaned.slice(0, Math.max(0, maxLength - 1)).replace(/\s+\S*$/, '')}\u2026`;
}

export function ensureCanonicalUrl(pathname: string, canonical?: string, site = SITE_URL) {
  const fallback = absoluteUrl(pathname, site);

  if (!canonical) {
    return fallback;
  }

  try {
    const normalizedSite = new URL(site);
    const normalizedCanonical = new URL(canonical, site);

    if (normalizedCanonical.origin !== normalizedSite.origin) {
      return fallback;
    }

    return normalizedCanonical.toString();
  } catch {
    return fallback;
  }
}
