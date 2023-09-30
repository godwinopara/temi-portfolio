import Image from "next/image";
import React from "react";
import styles from "./ProjectPageCard.module.css";
import Link from "next/link";

const ProjectPageCard = ({ imgUrl, title, subtitle, year, projectLink }) => {
	return (
		<div className={styles.projectImg__wrapper}>
			<div className={styles.project__img}>
				<Image src={imgUrl} fill={true} alt="impression project image" loading="lazy" />
			</div>
			<div className={styles.title}>
				<h3>{title}</h3>
				<span>{year}</span>
			</div>
			<div className={styles.subtitle}>
				<p>{subtitle}</p>
				<button>
					<Link href={projectLink} rel="noopener noreferrer" target="_blank">
						Github
					</Link>
				</button>
			</div>
		</div>
	);
};

export default ProjectPageCard;
