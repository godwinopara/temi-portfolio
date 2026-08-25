import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";
import ExternalArrow from "../icons/ExternalArrow";
import styles from "./Home.module.css";
import { articles, featuredArticleId, featuredProjectIds, featuredTalkIds, projects, site, talks } from "@/content/portfolio";

const topics = ["Product strategy for emerging technology", "Practical artificial intelligence", "Responsible innovation & inclusion"];

export default function Home() {
  const selectedProjects = projects.filter(({ id }) => featuredProjectIds.includes(id));
  const selectedTalks = talks.filter(({ id }) => featuredTalkIds.includes(id));
  const featuredArticle = articles.find(({ id }) => id === featuredArticleId);

  return <>
    <Hero />
    <div className={styles.ticker} aria-label="Areas of focus"><div>Practical AI <b>✦</b> Product strategy <b>✦</b> Responsible innovation <b>✦</b> Practical AI <b>✦</b> Product strategy <b>✦</b> Responsible innovation <b>✦</b></div></div>
    <section className={styles.approach} aria-labelledby="approach-title"><p className="eyebrow">The approach</p><h2 id="approach-title">Technology is only as good as the lives it changes.</h2><ol>{topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}</ol></section>
    <section id="work" className={styles.work} aria-labelledby="work-title"><div className={styles.sectionHeader}><div><p className="eyebrow">Selected work</p><h2 id="work-title">Ideas, made real.</h2></div><Link href="/projects">View all work <ExternalArrow /></Link></div><div className={styles.workGrid}>{selectedProjects.map((project, index) => <article className={`${styles.workCard} ${index === 1 ? styles.workCardOffset : ""}`} key={project.id}><div className={styles.workImage}><Image src={project.image} fill sizes="(min-width: 900px) 55vw, 100vw" alt={`${project.title} project artwork`} /><span>{project.category} / {project.year}</span></div><div className={styles.cardTitle}><h3>{project.title}</h3>{project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><ExternalArrow /></a> : <span aria-label="Currently unavailable">—</span>}</div></article>)}</div></section>
    <section id="speaking" className={styles.speaking} aria-labelledby="speaking-title"><div className={styles.sectionHeader}><div><p className="eyebrow">In the room</p><h2 id="speaking-title">Ideas in public.</h2></div><Link href="/talks">All talks <ExternalArrow /></Link></div><div className={styles.talkGrid}>{selectedTalks.map((talk) => <article className={styles.talkCard} key={talk.id}><div className={styles.talkImage}><Image src={talk.image} fill sizes="(min-width: 900px) 48vw, 100vw" alt={`${talk.title} at ${talk.host}`} /></div><p>{talk.host}</p><h3>{talk.title}</h3><a href={talk.link} target="_blank" rel="noreferrer">View talk <ExternalArrow /></a></article>)}</div></section>
    {featuredArticle && <section id="writing" className={styles.writing} aria-labelledby="writing-title"><p className="eyebrow">From the notebook</p><article><p>{featuredArticle.publication} / featured writing</p><h2 id="writing-title">“Build a growth-minded team around AI products and engineering.”</h2><a href={featuredArticle.link} target="_blank" rel="noreferrer">Read ChatGPT Masterclass <ExternalArrow /></a></article></section>}
    <section id="contact" className={styles.contact} aria-labelledby="contact-title"><p className="eyebrow">Speaking · press · collaborations</p><h2 id="contact-title">Let’s make the conversation <em>useful.</em></h2><a href={site.contactEmail}>{site.contactLabel} <ExternalArrow /></a></section>
  </>;
}
