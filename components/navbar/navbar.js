import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { navigation, site } from "@/content/portfolio";

export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setNavIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav className={`${styles.nav} container`} aria-label="Main navigation">
      <Link className={styles.brand} href="/" onClick={() => setNavIsOpen(false)}>{site.shortName}</Link>
      <button type="button" className={styles.menuButton} aria-controls="site-navigation" aria-expanded={navIsOpen} aria-label={navIsOpen ? "Close navigation" : "Open navigation"} onClick={() => setNavIsOpen((open) => !open)}>
        {navIsOpen ? <IoIosClose aria-hidden="true" /> : <IoIosMenu aria-hidden="true" />}
      </button>
      <ul id="site-navigation" className={`${styles.links} ${navIsOpen ? styles.open : ""}`}>
        {navigation.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setNavIsOpen(false)}>{item.label}</Link></li>)}
        <li><a className={styles.emailLink} href={site.contactEmail}>Email me</a></li>
      </ul>
    </nav>
  );
}
