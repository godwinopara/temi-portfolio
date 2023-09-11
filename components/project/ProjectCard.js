import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";

const ProjectCard = ({ title, subtitle, description, imgUrl, projectLink }) => {
	return (
		<div className={styles.projectWrapper}>
			<div className={styles.projectImg}>
				<Image src={imgUrl} height={300} width={600} alt="" />
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<h4>{subtitle}</h4>
				<p>{description}</p>
				<Link href={projectLink} rel="noopener noreferrer" target="_blank">
					<button className={styles.btn}>Github</button>
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
