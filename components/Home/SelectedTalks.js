import Link from "next/link";
import TalkCard from "../talk/TalkCard";
import styles from "./Home.module.css";
import { featuredTalkIds, talks } from "@/content/portfolio";
const SelectedTalks = () => { const selected = talks.filter(({ id }) => featuredTalkIds.includes(id)); return <section className={`${styles.section} container`}><div className={styles.sectionHeading}><div><p className="eyebrow">On stage</p><h2>Ideas in public.</h2></div><Link href="/talks">All talks ↗</Link></div><div className={styles.talkGrid}>{selected.map((talk) => <TalkCard key={talk.id} {...talk} />)}</div></section>; };
export default SelectedTalks;
