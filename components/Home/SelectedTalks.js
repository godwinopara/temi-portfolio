import Link from "next/link";
import styles from "./Home.module.css";
import TalkCard from "../shared/talk/TalkCard";

const SelectedTalks = () => {
	const selectedTalks = [
		{
			title: "Women In Tech",
			host: "Women in technology Spotlight",
			imgUrl: "/images/women-in-tech.jpeg",
		},
		{
			title: "Industrial IOT",
			host: "Fierce Electronics",
			imgUrl: "/images/industral-iot.jpeg",
		},
		{
			title: "Career of a Data Scientist",
			host: "TheFemTech",
			imgUrl: "/images/data-scientist.jpeg",
		},
	];
	return (
		<div className="container">
			<div className={styles.heading}>
				<h2>Featured Talks</h2>
				<Link href="/projects">View all Talks</Link>
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
