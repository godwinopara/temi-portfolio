import Image from "next/image";
import * as S from "./About.module.css";

const AboutMe = () => {
	return (
		<div className="container">
			<div className={S.aboutContainer}>
				<div className={S.wrapper}>
					<div className={S.imageWrapper}>
						<Image src="/images/temi.jpg" fill alt="profile picture" />
					</div>
					<div className={S.descWrapper}>
						<h2 className={S.descTitle}>Hello I'm Temitope Oladokun 😄</h2>
						<p>
							I'm Technical Product Manager from Nigeria.I Build unforgetable Solutions for Startups
							and manage technical products that innovate with cutting-edge technology (Computer
							Vision, NLP and Blockchain).
						</p>
					</div>
				</div>
			</div>

			{/* Experience */}
			<div className={S.experinceWrapper}>
				<div className={S.experinceTitle}>
					<h3>My Experiences</h3>
					<p>
						I have had the pleasure to work with companies across a variety of industries. I'm always interested in new, exciting and challenging adventures.
					</p>
					<button>Download Resume</button>
				</div>
				<div className={S.experinceContent}>
					<div className={S.timeline}>
						<div className={S.timelineInfo}>
							<h4>NOV 2017 - PRESENT</h4>
						</div>
						<div className={S.timelineMarker}>
							<div className={S.timelineDot}></div>
						</div>
						<div className={S.timelineContent}>
							<h4>Creative Director at Malory House</h4>
							<p>No salad. No salad. In front of the bow, you need to put the layer on the right side like a mauris. Until the hospital bed some as.</p>
						</div>
					</div>
					<div className={S.timeline}>
						<div className={S.timelineInfo}>
							<h4>NOV 2017 - PRESENT</h4>
						</div>
						<div className={S.timelineMarker}>
							<div className={S.timelineDot}></div>
						</div>
						<div className={S.timelineContent}>
							<h4>Creative Director at Malory House</h4>
							<p>No salad. No salad. In front of the bow, you need to put the layer on the right side like a mauris. Until the hospital bed some as.</p>
						</div>
					</div>
					<div className={S.timeline}>
						<div className={S.timelineInfo}>
							<h4>NOV 2017 - PRESENT</h4>
						</div>
						<div className={S.timelineMarker}>
							<div className={S.timelineDot}></div>
						</div>
						<div className={S.timelineContent} >
							<h4>Creative Director at Malory House</h4>
							<p>No salad. No salad. In front of the bow, you need to put the layer on the right side like a mauris. Until the hospital bed some as.</p>
						</div>
					</div>
				</div>
			</div>

			{/* Volunteering */}
			<div></div>

			{/* skills */}
			<div></div>
		</div>
	);
};

export default AboutMe;
