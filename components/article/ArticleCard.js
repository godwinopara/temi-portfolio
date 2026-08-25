import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
const ArticleCard = ({ publication, title, excerpt, image, link }) => <article className={styles.card}><Link href={link} rel="noreferrer" target="_blank" className={styles.image}><Image src={image} fill sizes="(min-width: 900px) 48vw, 100vw" alt={`Cover image for ${title}`} /></Link><div className={styles.content}><p className="eyebrow">{publication}</p><h3><Link href={link} rel="noreferrer" target="_blank">{title} ↗</Link></h3><p>{excerpt}</p></div></article>;
export default ArticleCard;
