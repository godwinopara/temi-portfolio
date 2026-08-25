# Reusable UI components

This Next.js portfolio uses bespoke React components and CSS Modules; there is no external UI-component library.

## `components/project/ProjectCard.js` — ProjectCard
Project summary card; accepts `title`, `category`, `description`, `image`, `link`, and `linkLabel`.

```jsx
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ title, category, description, image, link, linkLabel }) => {
	return (
		<article className={styles.projectWrapper}>
			<div className={styles.projectImg}>
				<Image src={image} height={600} width={900} alt={`${title} project artwork`} />
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<h4>{category}</h4>
				{description && <p>{description}</p>}
				{link ? <Link href={link} rel="noreferrer" target="_blank" className={styles.btn}>{linkLabel || "View project"} ↗</Link> : <span className={styles.btn}>Currently unavailable</span>}
			</div>
		</article>
	);
};

export default ProjectCard;
```

## `components/article/ArticleCard.js` — ArticleCard
External publication card; accepts `publication`, `title`, `excerpt`, `image`, and `link`.

```jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./ArticleCard.module.css";
const ArticleCard = ({ publication, title, excerpt, image, link }) => <article className={styles.card}><Link href={link} rel="noreferrer" target="_blank" className={styles.image}><Image src={image} fill sizes="(min-width: 900px) 48vw, 100vw" alt={`Cover image for ${title}`} /></Link><div className={styles.content}><p className="eyebrow">{publication}</p><h3><Link href={link} rel="noreferrer" target="_blank">{title} ↗</Link></h3><p>{excerpt}</p></div></article>;
export default ArticleCard;
```

## `components/talk/TalkCard.js` — TalkCard
External talk card; accepts `title`, `host`, `image`, and `link`.

```jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./TalkCard.module.css";
const TalkCard = ({ title, host, image, link }) => <article className={styles.card}><Link href={link} rel="noreferrer" target="_blank" className={styles.image}><Image src={image} fill sizes="(min-width: 900px) 40vw, 100vw" alt={`${title}, ${host}`} /></Link><div><p className="eyebrow">{host}</p><h3><Link href={link} rel="noreferrer" target="_blank">{title} ↗</Link></h3></div></article>;
export default TalkCard;
```
