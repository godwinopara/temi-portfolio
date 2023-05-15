import { IoIosMenu } from "react-icons/io";
import styles from "@/components/navbar/Navbar.module.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const toggleNav = () => {
		setNavIsOpen((navOpen) => !navOpen);
	};

	return (
		<>
			{/* Desktop Nav */}
			<nav className={`${styles.desktopNav} container`}>
				<Link href="/">
					<Image src="/images/avatar-glasses.png" height={60} width={60} alt="avatar logo" />
				</Link>
				<ul className={styles.navList}>
					<li>
						<Link href="/">Home</Link>
					</li>

					<li>
						<Link href="/projects">Projects</Link>
					</li>

					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/resume">Resume</Link>
					</li>
				</ul>
			</nav>

			{/* DropDown Nav */}
			<div className={`${!navIsOpen ? styles.toggleNav : ""}`}>
				<nav className={`${styles.navMenu} ${styles.dropDownNav}`}>
					<div className={styles.logoHamburgerWrapper}>
						<div className={styles.logo}>Temi</div>
						<div className={styles.hamburger} onClick={toggleNav}>
							<IoIosMenu />
						</div>
					</div>
					<ul className={styles.navList}>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/projects">Project</Link>
						</li>

						<li>
							<Link href="/contact">Contact</Link>
						</li>
						<li>
							<Link href="/resume">Resume</Link>
						</li>
					</ul>
					<div className={styles.social}>
						<div>facebook</div>
						<div>Insta</div>
						<div>Github</div>
						<div>Linkedin</div>
					</div>
				</nav>
			</div>

			{/* Main Mobile Nav DropDown */}
			<nav>
				<div className={`${styles.logoHamburgerWrapper} ${styles.mobileNav}`}>
					<div className={styles.logoDark}>Temi</div>
					<div className={styles.hamburgerDark} onClick={toggleNav}>
						<IoIosMenu />
					</div>
				</div>
			</nav>
		</>
	);
}
