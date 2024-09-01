import styles from "./Skill.module.css";

const Skill = () => {
	return (
		<section className={styles.skillsWrapper}>
			<h2 className="container">My Skills</h2>
			<div className={`${styles.skills} container`}>
				<div>
					<svg strokeWidth="0" viewBox="0 0 24 24" className={styles.icon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<polygon fill="#fff" stroke="#fff" strokeWidth="2" points="4 14 10 14 7 23 9 23 20 9 14 9 18 1 7 1"></polygon>
					</svg>
					<h3>Product Strategy</h3>
					<p>Roadmapping, A/B Tests, Project Management</p>
				</div>
				<div>
					<svg viewBox="0 0 24 24" className={styles.icon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path fill="#fff" stroke="#fff" strokeWidth="2" d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"></path>
					</svg>
					<h3>Analytics & Programming</h3>
					<p>AI/Software Development and Management</p>
				</div>
				<div>
					<svg strokeWidth="0" viewBox="0 0 24 24" className={styles.icon} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path fill="#fff" stroke="#fff" strokeWidth="2" d="M0,22 L24,22 M22,2 L18,2 L18,18 L22,18 L22,2 Z M6,6 L2,6 L2,18 L6,18 L6,6 Z M14,18 L10,18 L10,10 L14,10 L14,18 Z"></path>
					</svg>
					<h3>Writing</h3>
					<p>Technical Writing, and Author</p>
				</div>
			</div>
		</section>
	);
};

export default Skill;
