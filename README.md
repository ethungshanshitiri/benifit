# BeNiFIt website

This is a ready-to-upload Docusaurus website for the BeNiFIt project.

## How to use it with GitHub Pages

This bundle is already configured for a repository named `benefit` under the GitHub account `ethungshanshitiri`.

1. Create a new public repository named `benefit` under `ethungshanshitiri`.
2. Upload every file from this folder to the root of that repository.
3. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
4. Push to the `main` branch.
5. GitHub Actions will build and publish the site.
6. Your site will appear at `https://ethungshanshitiri.github.io/benefit/`.

## If you want a different repository name

Change these values in `docusaurus.config.js`.

- `baseUrl` from `/benefit/` to `/<your-repo-name>/`
- `projectName` from `benefit` to `<your-repo-name>`

You may also want to update the footer link that points to `https://github.com/ethungshanshitiri/benefit`.

## Local preview

Docusaurus requires Node.js 20 or above.

```bash
npm install
npm start
```

To build the production site locally.

```bash
npm run build
npm run serve
```

## Where to edit content

- Homepage content lives in `src/pages/index.js`
- Project page lives in `src/pages/project.md`
- Research outputs page lives in `src/pages/research-outputs.md`
- Outreach page lives in `src/pages/outreach.md`
- Team and contact page lives in `src/pages/team-contact.md`
- News and media posts live in `blog/`
- Styling lives in `src/css/custom.css` and `src/pages/styles.module.css`
- Images and icons live in `static/img/`
