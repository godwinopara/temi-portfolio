import Link from "next/link";
import styles from "./Footer.module.css";
import { navigation, site } from "@/content/portfolio";

const Footer = () => <footer className={styles.footer}><div className="container">
  <div className={styles.callout}><div><p className="eyebrow">Speaking & press</p><h2>Let’s make the conversation useful.</h2></div><a className={styles.cta} href={site.contactEmail}>Email for speaking & press <span aria-hidden="true">↗</span></a></div>
  <div className={styles.bottom}><div><Link className={styles.name} href="/">{site.name}</Link><p>AI product leader, speaker, and technologist.</p></div><ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
</div></footer>;
export default Footer;
