import Image from "next/image";
import styles from "./Home.module.css";
import { site } from "@/content/portfolio";

const Hero = () => <section className={`${styles.hero} container`}><div className={styles.heroCopy}><p className="eyebrow">AI product leader · speaker · technologist</p><h1>Building intelligence with <em>humanity.</em></h1><p className={styles.intro}>Tèmítọ́pẹ́ Ọládòkun turns emerging technology into practical, people-centred products—and makes the ideas behind them clear on stage.</p><a className={styles.primaryCta} href={site.contactEmail}>Email for speaking & press <span aria-hidden="true">↗</span></a></div><div className={styles.heroImage}><Image src="/images/hero.png" fill priority sizes="(min-width: 900px) 43vw, 100vw" alt="Illustration representing human-centred artificial intelligence" /></div></section>;
export default Hero;
