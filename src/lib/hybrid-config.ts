export type HybridConfig = {
  maxStaticErrorPages: number;
  enableDataOnlyForNewRecords: boolean;
  preserveLegacyErrorRoutes: boolean;
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

export function getHybridConfig(): HybridConfig {
  return {
    maxStaticErrorPages: readEnvInt('MAX_STATIC_ERROR_PAGES', 0),
    enableDataOnlyForNewRecords: readEnvBool('ENABLE_DATA_ONLY_FOR_NEW_RECORDS', true),
    preserveLegacyErrorRoutes: readEnvBool('PRESERVE_LEGACY_ERROR_ROUTES', true),
  };
}
