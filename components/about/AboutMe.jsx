import Image from "next/image";
import * as S from "./About.module.css";
import Experience from "../experiences/Experience";
import Volunteer from "../volunteering/Volunteer";

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
			<Experience />

			{/* Volunteering */}
			<Volunteer />

			{/* skills */}
			<div></div>
		</div>
	);
};

export default AboutMe;
