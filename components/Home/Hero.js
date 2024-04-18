import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";

const Hero = () => {
	return (
		<section className={`${styles.hero} container`}>
			<div className={styles.heroText}>
				<h1>
					Building for <span>humans</span>
				</h1>
				<p>
					Hi {`I'm`} <b>Tèmítọ́pẹ́ </b>, A <b>Technical Product Manager</b>. I Build unforgetable
					Solutions for Startups and also help businesses establish a strong online presence and
					stand out in their industry.
				</p>
				<Link href="/projects">
					<button className={styles.heroBtn} role="button">
						Resume
					</button>
				</Link>
			</div>
			<div className={styles.heroImg}>
				<Image src="/images/hero.png" fill alt="hero img" />
			</div>
		</section>
	);
};

export default Hero;
