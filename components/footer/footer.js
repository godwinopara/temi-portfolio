import Link from "next/link";
import styles from "./Footer.module.css";
import { navigation, site } from "@/content/portfolio";

const Footer = () => <footer className={styles.footer}><div><span>© {site.name}</span><ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></footer>;
export default Footer;
