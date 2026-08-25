import Link from "next/link";
import ArticleCard from "../article/ArticleCard";
import styles from "./Home.module.css";
import { articles, featuredArticleId } from "@/content/portfolio";
const SelectedArticles = () => { const article = articles.find(({ id }) => id === featuredArticleId); return <section className={`${styles.section} container`}><div className={styles.sectionHeading}><div><p className="eyebrow">From the notebook</p><h2>Writing to think in public.</h2></div><Link href="/articles">All writing ↗</Link></div>{article && <ArticleCard {...article} />}</section>; };
export default SelectedArticles;
