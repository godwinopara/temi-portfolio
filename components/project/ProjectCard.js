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
