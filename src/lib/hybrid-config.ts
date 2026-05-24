export type PublishGateConfig = {
  maxStaticErrorPages: number;
  maxNewHtmlPerRun: number;
  minSourceCountForNewHtml: number;
  minContentDepthForNewHtml: number;
  preserveLegacyErrorRoutes: boolean;
  enableDataOnlyForNewRecords: boolean;
  softTotalPageLimit: number;
};

function readEnvInt(name: string, fallback: number) {
  const raw = import.meta.env?.[name] ?? process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const parsed = Number.parseInt(String(raw), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function readEnvBool(name: string, fallback: boolean) {
  const raw = import.meta.env?.[name] ?? process.env[name];
  if (raw === undefined || raw === '') return fallback;
  const normalized = String(raw).trim().toLowerCase();
  if (['1', 'true', 'yes', 'on'].includes(normalized)) return true;
  if (['0', 'false', 'no', 'off'].includes(normalized)) return false;
  return fallback;
}

export function getPublishGateConfig(): PublishGateConfig {
  return {
    maxStaticErrorPages: readEnvInt('MAX_STATIC_ERROR_PAGES', 0),
    maxNewHtmlPerRun: readEnvInt('MAX_NEW_HTML_PER_RUN', 100),
    minSourceCountForNewHtml: readEnvInt('MIN_SOURCE_COUNT_FOR_NEW_HTML', 1),
    minContentDepthForNewHtml: readEnvInt('MIN_CONTENT_DEPTH_FOR_NEW_HTML', 1200),
    preserveLegacyErrorRoutes: readEnvBool('PRESERVE_LEGACY_ERROR_ROUTES', true),
    enableDataOnlyForNewRecords: readEnvBool('ENABLE_DATA_ONLY_FOR_NEW_RECORDS', true),
    softTotalPageLimit: readEnvInt('SOFT_TOTAL_PAGE_LIMIT', 2500),
  };
}

export function getHybridConfigFromPublishGate(config: PublishGateConfig = getPublishGateConfig()) {
  return {
    maxStaticErrorPages: config.maxStaticErrorPages,
    enableDataOnlyForNewRecords: config.enableDataOnlyForNewRecords,
    preserveLegacyErrorRoutes: config.preserveLegacyErrorRoutes,
  };
}

export function getJsonIndexShardSize() {
  return readEnvInt('JSON_INDEX_SHARD_SIZE', 500);
}
