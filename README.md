# Shapper Docs

Documentation for the **Shapper** After Effects extension — built with [Docusaurus](https://docusaurus.io/).

## 🚀 Deploy to GitHub Pages

### 1. Create the GitHub repo

```bash
git init
git add .
git commit -m "Initial Shapper docs"
gh repo create shapper-docs --public
git remote add origin https://github.com/YOUR_USERNAME/shapper-docs.git
git push -u origin main
```

### 2. Edit `docusaurus.config.js`

Replace these two lines with your actual GitHub username:

```js
url: 'https://YOUR_GITHUB_USERNAME.github.io',
organizationName: 'YOUR_GITHUB_USERNAME',
```

### 3. Enable GitHub Pages

1. Go to your repo → **Settings → Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the site deploys automatically!

Your docs will be live at:  
`https://YOUR_USERNAME.github.io/shapper-docs/`

---

## 🛠 Local development

```bash
npm install
npm start
```

Opens at `http://localhost:3000/shapper-docs/`

## 📝 Adding content

- All pages are in the `/docs` folder as Markdown (`.md`) files
- Images, GIFs and videos go in `/static/img/`
- Edit `sidebars.js` to add/reorder pages in the sidebar
