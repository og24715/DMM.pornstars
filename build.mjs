// Build the Chrome extension with Vite.
//
// The extension needs three independent, self-contained bundles
// (content script / background / favorites page). A content script
// cannot load shared chunks, so each entry is built separately in
// lib mode (IIFE) instead of one multi-entry build.
import { build } from 'vite';
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const watch = process.argv.includes('--watch');

const entries = [
  { name: 'detail', entry: 'chrome/src/detail.ts' },
  { name: 'background', entry: 'chrome/src/background.ts' },
  { name: 'favorites', entry: 'chrome/src/favorites/index.tsx' },
];

const staticFiles = [
  ['chrome/src/manifest.json', 'manifest.json'],
  ['chrome/src/favorites/index.html', 'favorites.html'],
  ['chrome/src/favorites/index.css', 'index.css'],
];

function copyStaticFiles() {
  const outDir = resolve(root, 'chrome/dist');
  mkdirSync(outDir, { recursive: true });
  staticFiles.forEach(([from, to]) => {
    copyFileSync(resolve(root, from), resolve(outDir, to));
  });
}

async function buildEntry({ name, entry }, emptyOutDir) {
  await build({
    configFile: false,
    root,
    logLevel: 'info',
    build: {
      outDir: 'chrome/dist',
      emptyOutDir,
      watch: watch ? {} : null,
      reportCompressedSize: false,
      lib: {
        entry: resolve(root, entry),
        name,
        formats: ['iife'],
        fileName: () => `${name}.bundle.js`,
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
  });
}

for (let i = 0; i < entries.length; i += 1) {
  // Only the first build clears chrome/dist; the others append.
  // eslint-disable-next-line no-await-in-loop
  await buildEntry(entries[i], i === 0);
}

copyStaticFiles();
console.log('Copied manifest.json, favorites.html, index.css to chrome/dist/');
