import Timeline from "../timeline/Timeline";
import * as S from "./Experience.module.css";

const Experience = () => {
	const experiences = [
		{
			id: 1,
			date: "APRIL 2021 - PRESENT",
			position: "Senior Product Manager at Anheuser-Busch InBev",
			description:
				"As a product owner of an AI products(Computer Vision, NLP and IOT), I draft out the product process map, design project architecture, design infographics, create product enhancement to extend the product life cycle. Manage Stakeholder's, cross functional agile team, users and backlog.",
		},
		{
			id: 2,
			date: "AUG 2020 - MAR 2021",
			position: "Sales Data Manager at Anheuser-Busch InBev",

			description:
				"I work as the lead AI developer and team manager . My team and I use computer vision's algorithms, Internet of things(IOT) and Natural Language	Processing algorithms to transform the company's data into a solution that automate	and argument manufacturing and sales processes. This solution improves our customer's	businesses and consumer experiences.",
		},
		{
			id: 3,
			date: "MAR 2020 - AUG 2020",
			position: "AI Engineer at Anheuser-Busch InBev",

			description:
				"I work as the lead AI developer and team lead. My team and I use computer vision's algorithms to solve manufacturing and sales processes. This solution improves our customer's businesses and consumer experiences.",
		},
	];

	return (
		<div className={S.experinceWrapper}>
			<div className={S.experinceContent}>
				{experiences?.map((experience) => {
					return <Timeline key={experience.id} {...experience} />;
				})}
			</div>
		</div>
	);
};

export default Experience;

{
	/* <div className={S.experinceTitle}>
				<h3>My Experiences</h3>
				<p>
					I have had the pleasure to work with companies across a variety of industries. I'm always
					interested in new, exciting and challenging adventures.
				</p>
				<a className={S.resumeBtn}>
					<div className={S.btnFront}>
						<div className={S.btnText}>
							<div>Download Resume</div>
						</div>
					</div>
					<div className={S.btnEdge}></div>
				</a>
			</div> */
}