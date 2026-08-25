import { IoIosClose, IoIosMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ExternalArrow from "../icons/ExternalArrow";
import styles from "./Navbar.module.css";
import { navigation, site } from "@/content/portfolio";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => { const close = (event) => event.key === "Escape" && setOpen(false); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  return <nav className={styles.nav} aria-label="Main navigation"><Link className={`${styles.brand} ${pathname === "/" ? styles.activeBrand : ""}`} href="/" aria-current={pathname === "/" ? "page" : undefined} onClick={() => setOpen(false)}>TÈMÍTOPẸ O.</Link><button type="button" className={styles.menuButton} aria-controls="site-navigation" aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}>{open ? <IoIosClose aria-hidden="true" /> : <IoIosMenu aria-hidden="true" />}</button><ul id="site-navigation" className={`${styles.links} ${open ? styles.open : ""}`}>{navigation.map((item) => { const isCurrent = pathname === item.href; return <li key={item.href}><Link className={isCurrent ? styles.active : ""} href={item.href} aria-current={isCurrent ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link></li>; })}<li><a className={styles.email} href={site.contactEmail}>Email me <ExternalArrow /></a></li></ul></nav>;
}
