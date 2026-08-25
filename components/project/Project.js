import ProjectCard from "./ProjectCard";
import styles from "./ProjectPageCard.module.css";
import { projects } from "@/content/portfolio";
const Projects = () => <section className={styles.page}><header className={styles.heading}><p className="eyebrow">Selected work</p><h1>Useful things,<br />thoughtfully made.</h1><p>Experiments, tools, and practical resources for people building with technology.</p></header><div className={styles.project__wrapper}>{projects.map((project) => <ProjectCard key={project.id} {...project} />)}</div></section>;
export default Projects;
