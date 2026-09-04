# BonziBrowser Website

A static product/download website for BonziBrowser 3.0.0.

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

The included installer is about 107 MB. Make sure your hosting provider permits individual static files of that size. If not, host the `.exe` as a release asset/object-storage download and change the two installer links in `index.html`.

## Installer SHA-256

`15ae2b4cea588953562c65f5705965f286fae632d469aa6fccc272f8b4d63b1d`

## Download hosting

The Windows installer is hosted as a GitHub Release asset instead of being stored in this repository:

`https://github.com/10minecraft29/bonzibrowsersite/releases/download/1/BonziBrowser-Setup-3.0.0.exe`

All Download buttons in `index.html` point directly to that Release asset. This keeps the repository below GitHub's 100 MiB per-file limit.
