import { readFileSync } from 'node:fs';
import test from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';

const read = file => readFileSync(new URL('../' + file, import.meta.url), 'utf8');
const routeCode = ts.transpileModule(read('app/api/join/route.ts'), { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText;
const route = await import('data:text/javascript;base64,' + Buffer.from(routeCode).toString('base64'));

test('join link opens the published society Google Form without JavaScript', () => {
  const html = read('public/join.html');
  const target = html.match(/id="google-signup-link" href="([^"]+)"/)[1];
  const url = new URL(target);
  assert.equal(url.host, 'docs.google.com');
  assert.equal(url.pathname, '/forms/d/e/1FAIpQLScq1BKjBcupkl1PAbH1qppT6NBogXGBay9y9-654q5-uQzO4w/viewform');
  assert.doesNotMatch(html, /formsubmit\.co|id="join-form"|signup-success/);
  assert.doesNotMatch(read('public/script.js'), /HTMLFormElement\.prototype\.submit|fetch\('\/api\/join'/);
});

test('stale clients receive an honest error and cannot continue to FormSubmit', async () => {
  const response = await route.POST();
  assert.equal(response.status, 410);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  const body = await response.json();
  assert.match(body.error, /Refresh this page/);
  assert.notEqual(body.ok, true);
});

test('old health endpoint points users to the current join page', async () => {
  const response = await route.GET();
  assert.deepEqual(await response.json(), { acceptingSignups: false, registrationUrl: '/join#signup' });
});
