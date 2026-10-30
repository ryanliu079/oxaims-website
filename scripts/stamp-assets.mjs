import { createHash } from 'node:crypto';
import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const publicDirectory = fileURLToPath(new URL('../public/', import.meta.url));
const version = async name => createHash('sha256').update(await readFile(`${publicDirectory}${name}`)).digest('hex').slice(0, 12);
const cssVersion = await version('styles.css');
const themeVersion = await version('site-theme.css');
const scriptVersion = await version('script.js');
const sculptureVersion = await version('sculptures-3d.js');
for (const name of await readdir(publicDirectory)) {
  if (!name.endsWith('.html')) continue;
  const path = `${publicDirectory}${name}`;
  const original = await readFile(path, 'utf8');
  const stamped = original
    .replace(/href="\/styles\.css(?:\?[^\"]*)?"/g, `href="/styles.css?v=${cssVersion}"`)
    .replace(/href="\/site-theme\.css(?:\?[^\"]*)?"/g, `href="/site-theme.css?v=${themeVersion}"`)
    .replace(/src="\/sculptures-3d\.js(?:\?[^\"]*)?"/g, `src="/sculptures-3d.js?v=${sculptureVersion}"`)
    .replace(/src="\/script\.js(?:\?[^\"]*)?"/g, `src="/script.js?v=${scriptVersion}"`);
  if (stamped !== original) await writeFile(path, stamped);
}
console.log('Stylesheet and script URLs versioned from their content.');
