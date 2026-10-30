import { build } from 'vite';
import { fileURLToPath } from 'node:url';
await build({
  configFile: false,
  publicDir: false,
  build: {
    lib: { entry: fileURLToPath(new URL('../client/sculptures.js', import.meta.url)), formats: ['es'], fileName: () => 'sculptures-3d.js' },
    outDir: fileURLToPath(new URL('../public/', import.meta.url)),
    emptyOutDir: false,
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: true,
  },
});
