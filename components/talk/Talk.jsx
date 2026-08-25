import TalkCard from "./TalkCard";
import styles from "./Talk.module.css";
import { talks } from "@/content/portfolio";
const Talk = () => <section className="container"><header className={styles.heading}><p className="eyebrow">Speaking</p><h1>Ideas, in public.</h1></header><div className={styles.talkWrapper}>{talks.map((talk) => <TalkCard key={talk.id} {...talk} />)}</div></section>;
export default Talk;
