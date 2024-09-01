import Link from "next/link";
import ProjectCard from "../project/ProjectCard";
import styles from "./Home.module.css";

const SelectedProjects = () => {
	const projects = [
		{
			title: "Federated Learning and RaspberryPi",
			subTitle: "RASPBERRY PI",
			description:"This project was initially done by Daniele Gadler.",
			imgUrl: "/images/AI.jpeg",
			link: "https://github.com/TemitopeOladokun/FederatedLearningandRaspberryPi",
		},
		{
			title: " ChatGPT-Prompt-for-Developers",
			subTitle: "ARTIFICIAL INTELLIGENCE",
			description:"This is a python notebook for ChatGPT Prompt for Developers",
			imgUrl: "/images/chatgpt-img.jpeg",
			link: "https://github.com/TemitopeOladokun/ChatGPT-Prompt-Engineering-for-Developers",
		},
	];

	return (
		<section className="container" id="project">
			<div className={styles.projectHeading}>
				<h2>Featured Projects</h2>
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
