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
						<h2 className={S.descTitle}>Hello, I'm Tèmítọ́pẹ́ Ọládòkun 😄</h2>
						<p>
							I have over ten(10) years experience in Technology and over 5 years in Product
							Management(PM). I have been asked countless times how I manage Technical products
							(Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, Mobile
							Application and the likes) for more than five(5) African countries, 2 countries in
							South America and still having time for other things in my life.
						</p>
					</div>
				</div>

				{/* Experience */}
				<Experience />

				{/* Volunteering */}
				<Volunteer />

				{/* skills */}
				<div></div>
			</div>
		</div>
	);
};

export default AboutMe;
