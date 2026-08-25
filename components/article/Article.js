import ArticleCard from "./ArticleCard";
import styles from "./Article.module.css";
import { articles } from "@/content/portfolio";
const Article = () => <section className="container"><header className={styles.heading}><p className="eyebrow">Writing</p><h1>Notes from the work.</h1></header><div className={styles.articleWrapper}>{articles.map((article) => <ArticleCard key={article.id} {...article} />)}</div></section>;
export default Article;
