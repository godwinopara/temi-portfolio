import Image from "next/image";
import styles from "./Project.module.css";

const ProjectCard = ({ title, subtitle, description, imgUrl }) => {
	return (
		<div className={styles.projectWrapper}>
			<div className={styles.projectImg}>
				<Image src={imgUrl} height={300} width={600} alt="" />
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<h4>{subtitle}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
