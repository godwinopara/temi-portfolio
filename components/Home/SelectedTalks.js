import Link from "next/link";
import styles from "./Home.module.css";
import TalkCard from "../talk/TalkCard";

const SelectedTalks = () => {
	const selectedTalks = [
		
		{
			title: " Artificial Intelligence and the improvement in deepfake sophistication",
			host: "Arise New",
			imgUrl: "/images/arise.png",
			link: "https://youtu.be/PuWIfWC2QxU",
		},
		{
			title: "The New Age of AI Opportunites for Startups",
			host: "Lagos Startup Week 2023",
			imgUrl: "/images/ai-startup.jpeg",
			link: "https://lagosstartupweek2023.sched.com/event/1NhAD/panel-the-new-age-of-ai-opportunities-for-startups",
		},
		{
			title: "Women In Tech",
			host: "Women in technology Spotlight",
			imgUrl: "/images/women-in-tech.jpeg",
			link: "https://www.youtube.com/watch?v=xDT-Woa8cPU",
		},
	];

	//
	https: return (
		<div className="container">
			<div className={styles.heading}>
				<h2>Featured Talks</h2>
				<Link href="/talks">View all Talks</Link>
			</div>
			<div className={styles.wrapper}>
				{selectedTalks.map((talk, id) => {
					return <TalkCard key={id} {...talk} />;
				})}
			</div>
		</div>
	);
};

export default SelectedTalks;
