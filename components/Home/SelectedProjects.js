import Link from "next/link";
import ProjectCard from "../shared/project/ProjectCard";
import styles from "./Home.module.css";

const SelectedProjects = () => {
	const projects = [
		{
			title: "Automating College Experience",
			subTitle: "MACHINE LEARNING",
			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem placeat excepturidebitis, ea, magnam ipsum itaque enim nemo assumenda modi quo, ",
			imgUrl: "/images/AI.jpeg",
		},
		{
			title: "Automating College Experience",
			subTitle: "MACHINE LEARNING",
			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem placeat excepturidebitis, ea, magnam ipsum itaque enim nemo assumenda modi quo, ",
			imgUrl: "/images/sync.jpg",
		},
		{
			title: "Automating College Experience",
			subTitle: "MACHINE LEARNING",
			description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem placeat excepturidebitis, ea, magnam ipsum itaque enim nemo assumenda modi quo, ",
			imgUrl: "/images/impression.jpg",
		},
	];
	return (
		<section className="container" id="project">
			<div className={styles.projectHeading}>
				<h2>Selected Projects</h2>
				<Link href="/projects">View all Projects</Link>
			</div>
			{projects?.map((project, id) => {
				return <ProjectCard key={id} title={project.title} subtitle={project.subTitle} imgUrl={project.imgUrl} description={project.description} />;
			})}
		</section>
	);
};

export default SelectedProjects;
