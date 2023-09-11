import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerHeading}>
					<div>
						<h3>{`Let's`} Talk!</h3>
						<p>
							I am always open to connect with people in tech, learn more about product management,
							and discuss navigating this rewarding career path.
						</p>
					</div>
					<div>
						<Link href="/contact">
							<button>Contact Me</button>
						</Link>
					</div>
				</div>

				<div className={styles.footerLink}>
					<div>
						<Image src="/images/avatar.png" height={50} width={50} alt="logo" />
						<h3>Temitope</h3>
						<p>Technical Product Manager</p>
					</div>
					<ul>
						<li>
							<Link href="/">About</Link>
						</li>
						<li>
							<Link href="/projects">Project</Link>
						</li>
						<li>
							<Link href="">Talks</Link>
						</li>
						<li>
							<Link href="">Articles</Link>
						</li>

						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
