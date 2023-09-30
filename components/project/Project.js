import ProjectPageCard from "./ProjectPageCard";
import styles from "./ProjectPageCard.module.css";

const Projects = () => {
	const projectList = [
		{
			id: 1,
			title: "Federated Learning and RaspberryPi",
			imgUrl: "/images/AI.jpeg",
			subtitle: "RASPBERRY PI",
			projectLink: "https://github.com/TemitopeOladokun/FederatedLearningandRaspberryPi",
			year: 2023,
		},
		{
			id: 2,
			title: " ChatGPT-Prompt-for-Developers",
			imgUrl: "/images/chatgpt-img.jpeg",
			subtitle: "ARTIFICIAL INTELLIGENCE",
			projectLink: "https://github.com/TemitopeOladokun/ChatGPT-Prompt-Engineering-for-Developers",
			year: 2023,
		},
		{
			id: 3,
			title: "FYYUR",
			imgUrl: "/images/music-booking.png",
			subtitle: "Web Development",
			projectLink: "https://github.com/TemitopeOladokun/Fyyur",
			year: 2022,
		},
		{
			id: 4,
			title: "Trivia API",
			imgUrl: "/images/api.webp",
			subtitle: "Machine Learning",
			projectLink: "https://github.com/TemitopeOladokun/backend",
			year: 2022,
		},
	];

	return (
		<div className="container">
			<div className={styles.heading}>
				<h1>Recent Projects</h1>
			</div>
			<div className={styles.project__wrapper}>
				{projectList?.map((project, id) => {
					return <ProjectPageCard key={id} {...project} />;
				})}
			</div>
		</div>
	);
};

export default Projects;
