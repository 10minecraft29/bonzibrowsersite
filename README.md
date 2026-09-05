# BonziBrowser Website

A static product/download website for BonziBrowser 4.0.5.

## Files

- `index.html` — main product page
- `styles.css` — responsive Bonztel-themed styling
- `script.js` — reveal animations and smooth navigation
- `assets/bonzibrowser-mark.svg` — BonziBrowser product mark

## Run locally

You can open `index.html` directly, or serve the folder with a simple static server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Deploy

This is a plain static site and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or most normal web hosts.

### Important for the installer

The Windows installer is intentionally not stored in the website repository. All download buttons point to the GitHub Release asset so the repo stays below GitHub's 100 MiB per-file limit.

## Download hosting

The Windows installer is hosted as a GitHub Release asset instead of being stored in this repository:

`https://github.com/10minecraft29/bonzibrowsersite/releases/download/1/BonziBrowser-Setup-4.0.5.exe`

All Download buttons in `index.html` point directly to that Release asset. The site does not bundle the `.exe`. This keeps the repository below GitHub's 100 MiB per-file limit.
