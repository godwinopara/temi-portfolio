# Page dependency trees

## / (Home Page)
Entry: `pages/index.js`

- `components/layout/Layout.js`
  - `components/navbar/navbar.js`
    - `content/portfolio.js`
  - `components/footer/footer.js`
    - `content/portfolio.js`
- `components/Home/home.js`
  - `components/Home/Hero.js`
    - `content/portfolio.js`
    - `components/Home/Home.module.css`
  - `components/Home/SpeakingTopics.js`
  - `components/Home/SelectedProjects.js`
    - `components/project/ProjectCard.js`
    - `content/portfolio.js`
  - `components/Home/SelectedTalks.js`
    - `components/talk/TalkCard.js`
    - `content/portfolio.js`
  - `components/Home/SelectedArticles.js`
    - `components/article/ArticleCard.js`
    - `content/portfolio.js`
  - `components/Home/ContactCta.js`
    - `content/portfolio.js`

## Archive routes

- `/projects` → `pages/projects.js` → `components/project/ProjectPageCard.js`, `content/portfolio.js`, global Layout
- `/talks` → `pages/talks.js` → `components/talk/Talk.jsx`, `content/portfolio.js`, global Layout
- `/articles` → `pages/articles.js` → `components/article/Article.js`, `content/portfolio.js`, global Layout
- `/about` → `pages/about.js` → `components/about/AboutMe.jsx`, `components/experiences/Experience.jsx`, global Layout
- `/contact` → `pages/contact.js` → `components/contact/ContactComponent.js`, `components/contact/ContactDetails.js`, global Layout
