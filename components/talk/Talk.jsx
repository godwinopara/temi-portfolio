import React from "react";
import TalkCard from "./TalkCard";
import * as S from "./Talk.module.css";

const Talk = () => {
	const talks = [
		{
			title: "Women In Tech",
			host: "Women in technology Spotlight",
			imgUrl: "/images/women-in-tech.jpeg",
			link: "https://www.youtube.com/watch?v=xDT-Woa8cPU",
		},
		{
			title: "The New Age of AI Opportunites for Startups",
			host: "Lagos Startup Week 2023",
			imgUrl: "/images/ai-startup.jpeg",
			link: "https://lagosstartupweek2023.sched.com/event/1NhAD/panel-the-new-age-of-ai-opportunities-for-startups",
		},
		{
			title: "Career of a Data Scientist",
			host: "TheFemTech",
			imgUrl: "/images/data-scientist.jpeg",
			link: "https://thefemtech.com/",
		},
	];
	return (
		<div className="container">
			<div className={S.heading}>
				<h1>Recent Talks</h1>
			</div>
			<div className={S.talkWrapper}>
				{talks?.map((talk) => {
					return <TalkCard key={talk?.id} {...talk} />;
				})}
			</div>
		</div>
	);
};

export default Talk;
