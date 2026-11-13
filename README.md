# aarav khullar — personal site

A static site: plain HTML, CSS, and JS, with no build step.

## Update content
Edit **`content.js`**. Everything on the site comes from that file.
- Text starting with `TODO` shows as a highlighted placeholder, and a "draft" banner appears until none are left.
- Inline links: `[text](https://...)`.
- To hide a section, set its list to empty, e.g. `leadership: []`.
- To add a project image, put the file in `images/` and set `image: "images/name.jpg"` (3:2 crop).
- To add a résumé, add the PDF to this folder and set `resume: "resume.pdf"`.

## Preview locally
```
powershell -ExecutionPolicy Bypass -File serve.ps1
```
Then open http://localhost:8080.

## Deploy
Upload the folder as-is to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages).
`404.html` works automatically on GitHub Pages, Netlify, and Cloudflare. `serve.ps1`, `.claude/`, and this README are not needed in production.
Once you have a domain, consider adding `<meta property="og:url">` and an `og:image` to each page head.
