# Shared layouts

## `components/layout/Layout.js` — page shell

```jsx
import React from "react";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";

const Layout = ({ children }) => {
	return (
		<div>
			<a className="skipLink" href="#main-content">Skip to content</a>
			<header><NavBar /></header>
			<main id="main-content" tabIndex="-1">{children}</main>
			<Footer />
		</div>
	);
};
export default Layout;
```

## `components/navbar/navbar.js` — responsive primary navigation

```jsx
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { navigation, site } from "@/content/portfolio";

export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  useEffect(() => { const closeOnEscape = (event) => event.key === "Escape" && setNavIsOpen(false); window.addEventListener("keydown", closeOnEscape); return () => window.removeEventListener("keydown", closeOnEscape); }, []);
  return (<nav className={`${styles.nav} container`} aria-label="Main navigation"><Link className={styles.brand} href="/" onClick={() => setNavIsOpen(false)}>{site.shortName}</Link><button type="button" className={styles.menuButton} aria-controls="site-navigation" aria-expanded={navIsOpen} aria-label={navIsOpen ? "Close navigation" : "Open navigation"} onClick={() => setNavIsOpen((open) => !open)}>{navIsOpen ? <IoIosClose aria-hidden="true" /> : <IoIosMenu aria-hidden="true" />}</button><ul id="site-navigation" className={`${styles.links} ${navIsOpen ? styles.open : ""}`}>{navigation.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setNavIsOpen(false)}>{item.label}</Link></li>)}<li><a className={styles.emailLink} href={site.contactEmail}>Email me</a></li></ul></nav>);
}
```

## `components/footer/footer.js` — global booking footer

```jsx
import Link from "next/link";
import styles from "./Footer.module.css";
import { navigation, site } from "@/content/portfolio";

const Footer = () => <footer className={styles.footer}><div className="container"><div className={styles.callout}><div><p className="eyebrow">Speaking & press</p><h2>Let’s make the conversation useful.</h2></div><a className={styles.cta} href={site.contactEmail}>Email for speaking & press <span aria-hidden="true">↗</span></a></div><div className={styles.bottom}><div><Link className={styles.name} href="/">{site.name}</Link><p>AI product leader, speaker, and technologist.</p></div><ul>{navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></footer>;
export default Footer;
```
