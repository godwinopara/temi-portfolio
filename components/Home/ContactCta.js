import styles from "./Home.module.css";
import { site } from "@/content/portfolio";
const ContactCta = () => <section className={`${styles.contactCta} container`}><p className="eyebrow">Bring this perspective to your room</p><h2>Planning a conversation about the future of AI?</h2><a href={site.contactEmail}>Start with an email <span aria-hidden="true">↗</span></a></section>;
export default ContactCta;
