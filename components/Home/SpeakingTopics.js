import styles from "./Home.module.css";
const topics = ["Practical artificial intelligence", "Product strategy for emerging technology", "Responsible innovation and inclusion"];
const SpeakingTopics = () => <section className={`${styles.topics} container`}><div><p className="eyebrow">What I speak about</p><h2>Ideas that make technology more useful.</h2></div><ul>{topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}</ul></section>;
export default SpeakingTopics;
