import Image from "next/image";
import styles from "./Article.module.css";
import { articles, featuredArticleId } from "@/content/portfolio";
import ExternalArrow from "../icons/ExternalArrow";

const Article = () => {
  const featuredArticle = articles.find(({ id }) => id === featuredArticleId) || articles[0];
  const articleRows = articles.filter(({ id }) => id !== featuredArticle?.id);

  return <section className={styles.page}>
    <header className={styles.heading}><p className="eyebrow">Writing</p><h1>Notes from<br />the work.</h1><p>Ideas, field notes, and practical observations on product, technology, and the systems that shape our everyday lives.</p></header>
    {featuredArticle && <article className={styles.featured}>
      <a href={featuredArticle.link} target="_blank" rel="noreferrer" className={styles.featuredImage}><Image src={featuredArticle.image} fill sizes="(min-width: 900px) 50vw, 100vw" alt={`Cover image for ${featuredArticle.title}`} /></a>
      <div className={styles.featuredCopy}><p className="eyebrow">Featured / {featuredArticle.publication}</p><h2>{featuredArticle.title}</h2><p>{featuredArticle.excerpt}</p><a href={featuredArticle.link} target="_blank" rel="noreferrer">Read article <ExternalArrow /></a></div>
    </article>}
    <section className={styles.index} data-article-index aria-labelledby="all-writing-title"><div className={styles.indexTitle}><p className="eyebrow">The index</p><h2 id="all-writing-title">All writing</h2></div><ol>{articleRows.map((article, index) => <li key={article.id}><span>0{String(index + 1).padStart(2, "0")}</span><div><p>{article.publication}</p><h3><a href={article.link} target="_blank" rel="noreferrer">{article.title}</a></h3><p>{article.excerpt}</p></div><a className={styles.arrow} href={article.link} target="_blank" rel="noreferrer" aria-label={`Read ${article.title}`}><ExternalArrow /></a></li>)}</ol></section>
  </section>;
};

export default Article;
