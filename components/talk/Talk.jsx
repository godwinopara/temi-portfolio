import React from "react";
import TalkCard from "./TalkCard";
import * as S from "./Talk.module.css";

const Talk = () => {
	const talks = [
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
		
		{
			title: "Career of a Data Scientist",
			host: "TheFemTech",
			imgUrl: "/images/data-scientist.jpeg",
			link: "https://thefemtech.com/",
		},
		{
			title: "AI and the need for increased female gender participation for its development",
			host: "Data Scientist Network",
			imgUrl: "/images/ai-startup-twitter.jpeg",
			link: "http://bit.ly/dsn_ladies_in_AI",
		},
		{
			title:
				"The Evolution of Cloud and Edge Computing Technology in Industrial Applications Panel Discussion.",
			host: "Fierce",
			imgUrl: "/images/industral-iot.jpeg",
			link: "https://thefemtech.com/",
		},
		{
			title: "AI in industrial and manufacturing.",
			host: "Fierce",
			imgUrl: "/images/ai-week.jpeg",
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
