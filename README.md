# The Brvenik Brief — Editorial Platform

A fully interactive editorial and publishing platform for **The Brvenik Brief**, a weekly newsletter by Andrea Brvenik covering business, innovation, economic authorship, and leadership.

## Live Preview

Deploy via [GitHub Pages](https://pages.github.com/) or open `index.html` in any modern browser.

## Features

- **Editorial Views** — Magazine and newspaper layout modes
- **Podcast & Video** — Full media library with episode cards and video grid
- **Publisher Dashboard** — KPI metrics, draft management, activity feed, and analytics
- **Rich Text Editor** — Toolbar with content block inserts (images, video, audio, ads, CTAs, pull quotes)
- **AI Writing Assistant** — Headline generator, social caption writer, and text polish/rewrite tools (powered by Claude API)
- **Distribution Panel** — Email, social media toggles, and scheduling controls
- **Subscriber Management** — Password-protected dashboard with KPIs and subscriber table
- **Sponsorship Tiers** — Three-tier pricing cards and custom inquiry form
- **Premium Add-Ons** — Interest list for upcoming tools (Legislative Intelligence, EA Toolkit, Workforce Dashboard)
- **Responsive Design** — Adapts to desktop and mobile viewports

## Access & Security

Publisher tools, the subscriber dashboard, and the editor are **password-protected**.

To change the password, edit this line near the top of the `<script>` section in `index.html`:

```js
const PW_HASH = 'brvenik2026'; // ← change this to your password
```

> **Note:** This is a client-side password — suitable for deterring casual access. For production use with sensitive subscriber data, implement server-side authentication.

## Tech Stack

- Pure HTML / CSS / JavaScript — no build tools or frameworks required
- Google Fonts (Playfair Display, Source Serif 4, Archivo, Archivo Narrow)
- Claude API (`claude-sonnet-4-20250514`) for AI writing features

## Deployment

### GitHub Pages
1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to **main** branch, root `/`
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

### Netlify / Vercel
Simply connect the repo — no build step needed. The `index.html` serves as the entry point.

## File Structure

```
brvenik-brief-github/
├── index.html      # Full single-page application
├── README.md       # This file
├── LICENSE         # MIT License
└── .gitignore      # Git ignore rules
```

## Changelog

### v3.1 (April 2026)
- Light theme applied to Publisher, Subscriber, Advertise, and AI panel views
- High-contrast text throughout all interface sections
- Publisher tools and Subscriber dashboard now password-protected
- Subscriber names and emails redacted from public view
- Password modal with light styling and shake-on-error animation

### v3.0
- Initial release with full editorial platform

## License

MIT License — see [LICENSE](LICENSE) for details.

---

**The Brvenik Brief** · Intelligence for the Economic Author  
© 2026 IntexiaU Corp · All rights reserved.
