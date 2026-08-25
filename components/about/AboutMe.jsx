import Image from "next/image";
import * as S from "./About.module.css";
import Experience from "../experiences/Experience";
import Volunteer from "../volunteering/Volunteer";

const AboutMe = () => {
  return (
    <div className={S.page}>
      <header className={S.hero}>
        <div><p className="eyebrow">About</p><h1>About,<br />in context.</h1></div>
        <div className={S.heroAccent} aria-hidden="true"><span>People × possibility</span></div>
      </header>
      <div className={S.aboutContainer}>
        <section className={S.wrapper} aria-labelledby="about-title">
          <div className={S.imageWrapper}>
            <Image src="/images/temi-jpg.jpg" fill sizes="(min-width: 900px) 44vw, 100vw" alt="Tèmítọ́pẹ́ Ọládòkun" />
          </div>
          <div className={S.descWrapper}>
            <p className="eyebrow">A product-minded technologist</p>
            <h2 id="about-title" className={S.descTitle}>Building technology through the lens of humanity.</h2>
            <p>I have over a decade of experience in technology and more than five years in product management. My work spans AI, blockchain, augmented reality, and software products across African markets and beyond.</p>
            <p>I validate products through a value system grounded in people: the people who build them, use them, and live with their consequences.</p>
          </div>
        </section>
        <Experience />
        <Volunteer />
      </div>
    </div>
  );
};

export default AboutMe;
