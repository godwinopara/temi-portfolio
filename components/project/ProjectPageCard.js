import Image from "next/image";
import React from "react";
import styles from "./Project.module.css";

const ProjectPageCard = ({ imgUrl, title, subtitle, year }) => {
	return (
		<div className={styles.projectImg__wrapper}>
			<div className={styles.project__img}>
				<Image src={imgUrl} height={400} width={600} alt="impression project image" loading="lazy" />
			</div>
			<h3>{title}</h3>
			<div className={styles.subtitle}>
				<p>{subtitle}</p>
				<span>{year}</span>
			</div>
		</div>
	);
};

export default ProjectPageCard;
