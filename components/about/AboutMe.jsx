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
              I have over a decade experience in Technology and over half a decade in Product Management. I manage
              Technical products (Artificial Intelligence, Blockchain, Augmented Reality, Virtual Reality, Software
              Application and the likes) for more than five(5) African countries and out of the African continent. I
              benchmark my products with my values system and my Faith - Christianity.
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
