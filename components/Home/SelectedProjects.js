import Link from "next/link";
import ProjectCard from "../project/ProjectCard";
import styles from "./Home.module.css";

const SelectedProjects = () => {
	const projects = [
		{
			title: "Federated Learning and RaspberryPi",
			subTitle: "RASPBERRY PI",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem placeat excepturidebitis, ea, magnam ipsum itaque enim nemo assumenda modi quo, ",
			imgUrl: "/images/AI.jpeg",
			link: "https://github.com/TemitopeOladokun/FederatedLearningandRaspberryPi",
		},
		{
			title: " ChatGPT-Prompt-for-Developers",
			subTitle: "ARTIFICIAL INTELLIGENCE",
			description:
				"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum rem placeat excepturidebitis, ea, magnam ipsum itaque enim nemo assumenda modi quo, ",
			imgUrl: "/images/chatgpt-img.jpeg",
			link: "https://github.com/TemitopeOladokun/ChatGPT-Prompt-Engineering-for-Developers",
		},
	];

	return (
		<section className="container" id="project">
			<div className={styles.projectHeading}>
				<h2>Selected Projects</h2>
				<Link href="/projects">View all Projects</Link>
			</div>
			{projects?.map((project, id) => {
				return (
					<ProjectCard
						key={id}
						title={project.title}
						subtitle={project.subTitle}
						imgUrl={project.imgUrl}
						description={project.description}
						projectLink={project.link}
					/>
				);
			})}
		</section>
	);
};

export default SelectedProjects;
