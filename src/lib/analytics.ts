export const GA4_MEASUREMENT_ID = 'G-91G3P935N5';
export const GA4_SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;

export const analyticsConfig = {
  provider: 'Google Analytics 4',
  measurement_id: GA4_MEASUREMENT_ID,
  enabled: true,
} as const;
