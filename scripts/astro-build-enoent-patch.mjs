import fs from 'node:fs';

const originalRm = fs.promises.rm.bind(fs.promises);

fs.promises.rm = async function patchedRm(target, options) {
  try {
    return await originalRm(target, options);
  } catch (error) {
    const targetPath = String(target);
    const isAstroManifestCleanup =
      error?.code === 'ENOENT' && /\/manifest_[A-Za-z0-9_-]+\.mjs$/.test(targetPath);

    if (isAstroManifestCleanup) {
      return undefined;
    }

    throw error;
  }
};
