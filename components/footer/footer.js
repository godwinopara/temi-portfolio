import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerHeading}>
					<div>
						<h3>{`Let's`} Talk!</h3>
						<p>I am always open to connect with people in tech, learn more about product management, and discuss navigating this rewarding career path.</p>
					</div>
					<div>
						<button>Get Started</button>
					</div>
				</div>

				<div className={styles.footerLink}>
					<div>
						<h3>Temi</h3>
						<p>Technical Product Manager</p>
					</div>
					<ul>
						<li>
							<Link href="/projects">Project</Link>
						</li>

						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Link href="">Resume</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
