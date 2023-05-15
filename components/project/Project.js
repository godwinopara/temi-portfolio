import ProjectPageCard from "./ProjectPageCard";
import styles from "./Project.module.css";

const Projects = () => {
	const projectList = [
		{ title: "Apple", imgUrl: "/images/apple-watch.jpg", subtitle: "Development", year: 2023 },
		{ title: "Chanel", imgUrl: "/images/chanel.jpg", subtitle: "Design", year: 2023 },
		{ title: "Impression", imgUrl: "/images/impression.jpg", subtitle: "Branding/Design", year: 2022 },
		{ title: "Fundezy", imgUrl: "/images/fundezy.jpg", subtitle: "Development", year: 2021 },
		{ title: "Automating Experience", imgUrl: "/images/AI.jpeg", subtitle: "Machine Learning", year: 2021 },
		{ title: "Sync", imgUrl: "/images/sync.jpg", subtitle: "Design", year: 2021 },
	];

	return (
		<div className="container">
			<div className={styles.heading}>
				<h1>Recent Projects</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime, corporis!</p>
			</div>
			<div className={styles.project__wrapper}>
				{projectList?.map((project, id) => {
					return <ProjectPageCard key={id} title={project.title} subtitle={project.subtitle} year={project.year} imgUrl={project.imgUrl} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
