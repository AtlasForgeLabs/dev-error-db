export const SITE_URL = 'https://dev-error-db.com';
export const SITE_NAME = 'Dev Error DB';

export function absoluteUrl(pathname: string, site = SITE_URL) {
  return new URL(pathname, site).toString();
}

export function titleWithSite(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}
