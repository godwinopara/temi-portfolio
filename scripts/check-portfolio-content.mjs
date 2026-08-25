import {
  articles,
  featuredArticleId,
  featuredProjectIds,
  featuredTalkIds,
  projects,
  site,
  talks,
} from "../content/portfolio.js";

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

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Portfolio content integrity checks passed.");
