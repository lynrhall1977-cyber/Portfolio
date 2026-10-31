# Lyn Hall Portfolio Website

A static website. No build step, no server code. Upload this whole folder as-is.

## Folder contents
- `index.html` - the home page (hero, approach, project overview cards, about, contact form)
- `projects/` - one page per project, linked from the AI-01 to AI-07 cards and the Projects menu in the header:
  `incident-scoring.html` (AI-01), `virtual-ciso.html` (AI-02), `cve-intelligence.html` (AI-03), `career-ops.html` (AI-04),
  `homeschool-gradebook.html` (AI-05), `access-review.html` (AI-06), `curriculum-studio.html` (AI-07)
- `resume.html` - the resume page
- `assets/site.css` - shared styles for the home page and project pages
- `assets/nav.css`, `assets/nav.js` - the Projects dropdown menu in the header (used on every page)
- `assets/` - also holds the logo, favicon, analytics script, and screenshots

## Adding a new project page
1. Copy any file in `projects/` and rename it, for example `projects/new-tool.html`.
2. Replace the title, description, and the `<article>` content.
3. Add a card for it on `index.html`, and add a line for it in the Projects menu on every page (search for `projects-menu`).
4. Update the Previous / Next links on the neighboring project pages.

Old links such as `index.html#access-review` still work: the home page forwards them to the matching project page.
- `demo/incident-scorecard.html` - live Incident Scoring System demo (works fully, including PDF download)
- `demo/homeschool-gradebook.html` - live Homeschool Gradebook demo with a fictional sample student (saves only in the visitor's browser)
- `demo/access-review.html` - live Offboarding & Privileged Access Review demo with invented example.com users, remediation tracking, owner confirmations, and a PDF executive report (runs only in the visitor's browser)
- `demo/curriculum-studio.html` - live Curriculum Design Studio demo: pick a grade (1-5) and a learning method, and it builds a Math Loops student workbook and a matching Teacher's Guide, checks every page, and prints both as letter-size PDFs (runs only in the visitor's browser; sample content, no student data)
- `samples/cve-weekly-report-2026-10-10.html` - sample CVE pilot report (synthetic data)

## Publish free with Netlify Drop (about 2 minutes)
1. Unzip this file.
2. Go to https://app.netlify.com/drop and drag the `lyn-hall-portfolio` folder onto the page.
3. Create a free account to keep the site, then rename it under Site configuration > Change site name (for example `lynhall-portfolio.netlify.app`).
4. To update later, open the site in Netlify > Deploys and drag the updated folder in again.

## Publish free with GitHub Pages
1. Create a free GitHub account and a public repository named `<your-username>.github.io`.
2. Upload the contents of this folder (index.html, assets, demo, samples) to the repository root.
3. In the repository, go to Settings > Pages and confirm the source is the main branch, root folder.
4. The site appears at `https://<your-username>.github.io` within a few minutes.

## Add your LinkedIn button
Open `index.html`, search for `data-linkedin=""`, and paste your profile address between the quotes, for example:
`data-linkedin="https://www.linkedin.com/in/your-profile"`
The "Connect on LinkedIn" button appears automatically once a valid https address is there.

## Custom domain (optional)
Netlify, GitHub Pages, and Cloudflare Pages all connect a purchased domain (about $10-15 per year) for free. Each provider's dashboard walks through the DNS records.

## Before publishing
- The site names no employers. Keep it that way when editing.
- Fonts load from Google Fonts; colors and fonts follow the Northline Studio sample identity.
