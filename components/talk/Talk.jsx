import TalkCard from "./TalkCard";
import styles from "./Talk.module.css";
import { talks } from "@/content/portfolio";
const Talk = () => <section className={styles.page}><header className={styles.heading}><p className="eyebrow">Speaking</p><h1>Ideas,<br />in public.</h1><p>Conversations on the possibilities, responsibilities, and practical work of artificial intelligence.</p></header><div className={styles.talkWrapper}>{talks.map((talk) => <TalkCard key={talk.id} {...talk} />)}</div></section>;
export default Talk;
