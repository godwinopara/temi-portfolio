import Image from "next/image";
import Link from "next/link";
import styles from "./TalkCard.module.css";
const TalkCard = ({ title, host, image, link }) => <article className={styles.card}><Link href={link} rel="noreferrer" target="_blank" className={styles.image}><Image src={image} fill sizes="(min-width: 900px) 40vw, 100vw" alt={`${title}, ${host}`} /></Link><div><p className="eyebrow">{host}</p><h3><Link href={link} rel="noreferrer" target="_blank">{title} ↗</Link></h3></div></article>;
export default TalkCard;
