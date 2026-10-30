# OxAIMS website

The Oxford AI Makers Society website: https://oxaims.org

A student-built website with society events, project galleries, a Google Form signup, interactive Three.js models and an illustrative membership growth planner.

## Run locally

Use Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by the development server. Build with `npm run build`.

## Project structure

- `public/`: page HTML, shared CSS, browser scripts and assets.
- `app/`: Vinext routes serving the pages and server endpoints.
- `client/sculptures.js`: Three.js models, bundled by `npm run prebuild`.
- `public/membership-growth.mjs`: the membership planning scenario and chart.
- `db/`, `drizzle/`, `lib/server/`: server data schema, migrations and supporting code.

The public join page links to the society's Google Form. The legacy registration database and admin routes remain for existing records; no registration data is included here.

## Deployment

The live site is published through Sites using `.openai/hosting.json`. This private GitHub repository is a source snapshot, not an automatic deployment trigger. Hosting credentials and runtime secrets are configured separately.

Do not commit `.env` files, credentials, local databases, member records, generated deployment archives or `node_modules`. This snapshot excludes local planning notes and the separate Oxtopus project.
