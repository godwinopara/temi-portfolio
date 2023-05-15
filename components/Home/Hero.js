import Image from "next/image";
import styles from "./Home.module.css";

const Hero = () => {
	return (
		<section className={`${styles.hero} container`}>
			<div className={styles.heroText}>
				<h1>
					Building for <span>humans</span>
				</h1>
				<p>
					Hi {`I'm`} <b>Temitope</b>, A <b>Technical Product Manager</b>. I Build unforgetable Solutions for Startups and also help businesses establish a strong online presence and stand out in their industry.
				</p>
				<a>
					<button className={styles.heroBtn} role="button">
						My Blogs
					</button>
				</a>
			</div>
			<div className={styles.heroImg}>
				<Image src="/images/hero.png" alt="hero img" height={500} width={600} />
			</div>
		</section>
	);
};

export default Hero;
