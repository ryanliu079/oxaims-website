# OxAIMS website

The Oxford AI Makers Society website: https://oxaims.org

A student-built site with project galleries, events, a Google Form signup, interactive Three.js models and sponsorship information.

## Run locally

Use Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by the server. Run `npm run build` to check a production build.

## Where to make changes

- `public/`: page HTML, shared styles (`styles.css` and `site-theme.css`), browser scripts and assets. The homepage is `index.html`; the join page is `join.html`.
- `app/`: Vinext routes serving pages and server endpoints.
- `client/sculptures.js`: Three.js models, bundled by the build.
- `db/`, `drizzle/`, `lib/server/`: legacy registration data schema, migrations and supporting code.

The join page links to the society's Google Form. The former registration endpoint is retired; legacy database and admin routes remain for existing records. No registration data is included here.

## Working together and publishing

Create a branch from the latest `main`, make and test your changes, and open a pull request for review. Keep the website's existing visual style and check mobile layouts for visual changes.

The live site is hosted through Sites using `.openai/hosting.json`. **Merging to GitHub does not automatically update the live website.** A person or agent with access to the existing Sites project must sync the changes to its source repository and publish a new version through the Sites workflow. Preserve the existing project, public access and custom domain. Do not create a replacement Site. Sites access is separate from GitHub access.

Do not commit credentials, `.env` files, member records, local databases, generated deployment archives or `node_modules`.
