import Link from "next/link";
import ProjectCard from "../project/ProjectCard";
import styles from "./Home.module.css";
import { featuredProjectIds, projects } from "@/content/portfolio";
const SelectedProjects = () => { const selected = projects.filter(({ id }) => featuredProjectIds.includes(id)); return <section className={`${styles.section} container`}><div className={styles.sectionHeading}><div><p className="eyebrow">Selected work</p><h2>Building with intent.</h2></div><Link href="/projects">View all work ↗</Link></div><div className={styles.projectList}>{selected.map((project) => <ProjectCard key={project.id} {...project} />)}</div></section>; };
export default SelectedProjects;
