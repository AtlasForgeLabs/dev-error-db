export const ADSENSE_PUBLISHER_ID = 'pub-6843790293923678';
export const ADSENSE_CLIENT_ID = `ca-${ADSENSE_PUBLISHER_ID}`;
export const ADSENSE_SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
export const ADS_TXT_EXPECTED_LINE = `google.com, ${ADSENSE_PUBLISHER_ID}, DIRECT, f08c47fec0942fa0`;

export const monetizationConfig = {
  provider: 'Google AdSense',
  publisher_id: ADSENSE_PUBLISHER_ID,
  auto_ads_enabled: true,
  ads_txt_expected_line: ADS_TXT_EXPECTED_LINE,
} as const;
