import {
  articles,
  featuredArticleId,
  featuredProjectIds,
  featuredTalkIds,
  projects,
  site,
  talks,
} from "../content/portfolio.js";
import { readFileSync } from "node:fs";

const failures = [];
const records = [...projects, ...talks, ...articles];
const selectedTalks = talks.filter(({ id }) => featuredTalkIds.includes(id));
const selectedProjects = projects.filter(({ id }) => featuredProjectIds.includes(id));
const selectedArticle = articles.find(({ id }) => id === featuredArticleId);

if (!/^mailto:[^@\s]+@[^@\s]+\.[^@\s]+$/.test(site.contactEmail)) {
  failures.push("site.contactEmail must be a valid mailto URL");
}

if (selectedTalks.length !== 2) {
  failures.push("featuredTalkIds must select exactly two talks");
}

if (selectedProjects.length < 2) {
  failures.push("featuredProjectIds must select at least two projects");
}

if (!selectedArticle) {
  failures.push("featuredArticleId must select one article");
}

for (const record of records) {
  if (!record.id || !record.title || !record.image) {
    failures.push(`record ${record.id || "unknown"} must have id, title, and image`);
  }

  if (record.link !== null && !/^https:\/\//.test(record.link)) {
    failures.push(`record ${record.id} must use an HTTPS link or null`);
  }
}

const projectsPage = readFileSync(new URL("../pages/projects.js", import.meta.url), "utf8");
const globalStyles = readFileSync(new URL("../styles/globals.css", import.meta.url), "utf8");
const hero = readFileSync(new URL("../components/Home/Hero.js", import.meta.url), "utf8");
const projectsPageSource = readFileSync(new URL("../components/project/Project.js", import.meta.url), "utf8");
const talksPage = readFileSync(new URL("../components/talk/Talk.jsx", import.meta.url), "utf8");
const articlesPage = readFileSync(new URL("../components/article/Article.js", import.meta.url), "utf8");
const contactPage = readFileSync(new URL("../components/contact/ContactComponent.js", import.meta.url), "utf8");
const aboutPage = readFileSync(new URL("../components/about/AboutMe.jsx", import.meta.url), "utf8");
const aboutStyles = readFileSync(new URL("../components/about/About.module.css", import.meta.url), "utf8");
const projectStyles = readFileSync(new URL("../components/project/ProjectPageCard.module.css", import.meta.url), "utf8");
const talkStyles = readFileSync(new URL("../components/talk/Talk.module.css", import.meta.url), "utf8");
const navSource = readFileSync(new URL("../components/navbar/navbar.js", import.meta.url), "utf8");
const appSource = readFileSync(new URL("../pages/_app.js", import.meta.url), "utf8");
const nextConfig = readFileSync(new URL("../next.config.js", import.meta.url), "utf8");
const packageManifest = readFileSync(new URL("../package.json", import.meta.url), "utf8");

if (!projectsPage.includes("Work — Tèmítọ́pẹ́ Ọládòkun")) {
  failures.push("projects page must use the approved Work metadata title");
}

if (!/--color-cobalt:\s*#62766e/i.test(globalStyles) || !/--color-chartreuse:\s*#d8ddc5/i.test(globalStyles)) {
  failures.push("global styles must define the approved muted moss and pale-sage editorial anchors");
}

if (!hero.includes("temi-jpg.jpg") || !hero.includes("Make the future")) {
  failures.push("hero must include the approved portrait-led Editorial Signal composition");
}

for (const [name, source] of [["projects", projectsPageSource], ["talks", talksPage], ["articles", articlesPage], ["contact", contactPage]]) {
  if (!source.includes('className={styles.page}')) {
    failures.push(`${name} page must use the shared editorial page shell`);
  }
}

if (!aboutPage.includes('className={S.page}') || !aboutPage.includes("About,") || !aboutPage.includes("in context.")) {
  failures.push("about page must use the editorial page shell and approved heading");
}

if (!articlesPage.includes("featuredArticle") || !articlesPage.includes("articleRows")) {
  failures.push("writing page must use the text-first editorial index composition");
}

for (const [name, source] of [["about", aboutStyles], ["projects", projectStyles], ["talks", talkStyles]]) {
  if (!source.includes("background:#e6e4dc") || !source.includes(".heading::after") && !source.includes(".hero::after")) {
    failures.push(`${name} page must share the Writing page's calm paper hero treatment`);
  }
}

if (!navSource.includes("useRouter") || !navSource.includes("aria-current")) {
  failures.push("navigation must expose the current page visually and semantically");
}

if (!appSource.includes("CursorBubble")) {
  failures.push("app shell must mount the accessible cursor bubble enhancement");
}

if (!appSource.includes("ScrollReveal")) {
  failures.push("app shell must mount the reduced-motion-safe scroll reveal enhancement");
}

if (nextConfig.includes("unoptimized: true")) {
  failures.push("Next image delivery must use optimized delivery after the framework upgrade");
}

if (!/"next":\s*"\^?14\./.test(packageManifest)) {
  failures.push("project must use the supported Next.js 14 release line");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Portfolio content integrity checks passed.");
