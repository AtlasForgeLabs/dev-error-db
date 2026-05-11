import { lstat, mkdir, readdir, rm, stat } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const homeDir = process.env.HOME || process.env.USERPROFILE || '';
const defaultRoot = path.join(homeDir, 'AtlasForge', 'prod-env', 'atlasforge-data-hub', 'openclaw', 'dev-error-db');
const oneDayMs = 24 * 60 * 60 * 1000;
const sizeWarningBytes = 1024 * 1024 * 1024;

const retentionDays = {
  inbox: 7,
  processed: 30,
  rejected: 30,
  archive: 90,
  logs: 30,
};

const args = parseArgs(process.argv.slice(2));
const dryRun = Boolean(args.dryRun);
const force = Boolean(args.force);
const forceSizeCleanup = Boolean(args.forceSizeCleanup);
const root = path.resolve(args.root ?? defaultRoot);
const allowedRoot = path.resolve(defaultRoot);

main().catch((error) => {
  console.error(`[datahub:cleanup] ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  assertSafeRoot(root);
  await ensureDirectories(root);

  const totalSize = await directorySize(root);
  const deleted = [];
  const skipped = [];
  const now = Date.now();

  if (totalSize > sizeWarningBytes) {
    console.warn(`[datahub:cleanup] warning: Data Hub size is ${formatBytes(totalSize)}, above 1GB.`);
    if (!forceSizeCleanup) {
      console.warn('[datahub:cleanup] applying age-based cleanup only. Pass --force-size-cleanup to acknowledge size-pressure cleanup policy.');
    }
  }

  for (const [directory, days] of Object.entries(retentionDays)) {
    const targetDir = path.join(root, directory);
    const entries = await readdir(targetDir, { withFileTypes: true });

    for (const entry of entries) {
      const filePath = path.join(targetDir, entry.name);
      const relative = path.relative(root, filePath);

      if (!entry.isFile()) {
        skipped.push({ path: relative, reason: 'not a regular file' });
        continue;
      }

      const linkStat = await lstat(filePath);
      if (linkStat.isSymbolicLink()) {
        skipped.push({ path: relative, reason: 'symlink skipped' });
        continue;
      }

      const fileStat = await stat(filePath);
      const ageDays = (now - fileStat.mtimeMs) / oneDayMs;

      if (ageDays < days) {
        skipped.push({ path: relative, reason: `younger than ${days} days` });
        continue;
      }

      deleted.push({
        path: relative,
        age_days: Math.floor(ageDays),
        retention_days: days,
        size_bytes: fileStat.size,
      });

      if (!dryRun) {
        await rm(filePath, { force });
      }
    }
  }

  console.log(`[datahub:cleanup] root: ${displayPath(root)}`);
  console.log(`[datahub:cleanup] mode: ${dryRun ? 'dry-run' : 'delete'}`);
  console.log(`[datahub:cleanup] total size: ${formatBytes(totalSize)}`);
  console.log(`[datahub:cleanup] files eligible for deletion: ${deleted.length}`);
  console.log(`[datahub:cleanup] files skipped: ${skipped.length}`);

  for (const item of deleted.slice(0, 50)) {
    console.log(`  - ${dryRun ? 'would delete' : 'deleted'} ${item.path} (${item.age_days}d old)`);
  }

  if (deleted.length > 50) {
    console.log(`[datahub:cleanup] ${deleted.length - 50} additional eligible file(s) omitted from console output.`);
  }
}

function assertSafeRoot(candidateRoot) {
  const normalized = path.resolve(candidateRoot);

  if (normalized !== allowedRoot && !force) {
    throw new Error(`Refusing custom root outside default Data Hub without --force: ${displayPath(normalized)}`);
  }

  if (path.relative(allowedRoot, normalized).startsWith('..')) {
    throw new Error(`Refusing to operate outside Dev Error DB Data Hub root: ${displayPath(normalized)}`);
  }
}

async function ensureDirectories(targetRoot) {
  for (const directory of Object.keys(retentionDays)) {
    await mkdir(path.join(targetRoot, directory), { recursive: true });
  }
}

async function directorySize(directory) {
  let total = 0;
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    const filePath = path.join(directory, entry.name);
    const linkStat = await lstat(filePath);

    if (linkStat.isSymbolicLink()) continue;
    if (entry.isDirectory()) {
      total += await directorySize(filePath);
      continue;
    }
    if (entry.isFile()) total += linkStat.size;
  }

  return total;
}

function parseArgs(values) {
  const parsed = {};

  for (let index = 0; index < values.length; index += 1) {
    const value = values[index];
    if (!value.startsWith('--')) continue;

    const [rawKey, inlineValue] = value.slice(2).split('=');
    const key = rawKey.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

    if (inlineValue !== undefined) {
      parsed[key] = inlineValue;
      continue;
    }

    const next = values[index + 1];
    if (next && !next.startsWith('--')) {
      parsed[key] = next;
      index += 1;
    } else {
      parsed[key] = true;
    }
  }

  return parsed;
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  return `${(bytes / 1024 / 1024 / 1024).toFixed(2)} GB`;
}

function displayPath(filePath) {
  if (homeDir && filePath.startsWith(homeDir)) return `~${filePath.slice(homeDir.length)}`;
  return filePath;
}

