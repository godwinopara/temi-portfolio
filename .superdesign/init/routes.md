# Routes

Framework: Next.js 13.1 Pages Router. Styling: CSS Modules plus `styles/globals.css`. Layout: `components/layout/Layout.js` on all public pages.

| URL | Entry | Summary |
| --- | --- | --- |
| `/` | `pages/index.js` | Hero, speaking topics, selected work, talks, writing, booking CTA |
| `/about` | `pages/about.js` | Biography and experience |
| `/projects` | `pages/projects.js` | Project archive |
| `/talks` | `pages/talks.js` | Speaking archive |
| `/articles` | `pages/articles.js` | Writing archive |
| `/contact` | `pages/contact.js` | Contact details |
| `/api/hello` | `pages/api/hello.js` | API example, not a visual route |

`pages/_app.js` supplies global CSS. No separate router configuration exists.
