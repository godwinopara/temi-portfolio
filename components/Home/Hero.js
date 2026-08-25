import Image from "next/image";
import styles from "./Home.module.css";
import { site } from "@/content/portfolio";

const Hero = () => (
  <section className={styles.hero} aria-labelledby="hero-title">
    <div className={styles.heroCopy}>
      <div className={styles.heroMeta}><span>01 / 01</span><span>Based in Lagos · Working globally</span></div>
      <div className={styles.heroStatement}>
        <p className="eyebrow">AI product leader · speaker · strategist</p>
        <h1 id="hero-title">Make the future<br />more <em>useful.</em></h1>
        <p>Tèmítọ́pẹ́ builds thoughtful AI products and brings practical clarity to the conversations shaping technology.</p>
      </div>
      <div className={styles.heroFoot}><p>A human-centred point of view on product, artificial intelligence, and possibility.</p><a href="#contact" className={styles.roundLink} aria-label="Jump to contact">↓</a></div>
    </div>
    <div className={styles.heroImage}>
      <span>Portrait / 2026</span>
      <Image src="/images/temi-jpg.jpg" fill priority sizes="(min-width: 900px) 42vw, 100vw" alt={site.name} />
      <i aria-hidden="true" />
    </div>
  </section>
);

export default Hero;
