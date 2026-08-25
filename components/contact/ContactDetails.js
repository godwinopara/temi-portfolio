import styles from "./contact.module.css";
import { site } from "@/content/portfolio";
import ExternalArrow from "../icons/ExternalArrow";
const ContactDetails = () => <div className={styles.contactDetails}><p className="eyebrow">Speaking · press · collaboration</p><h1>Let’s start a useful conversation.</h1><p>I welcome invitations to speak, contribute to thoughtful coverage, and collaborate on technology with people at its centre.</p><a className={styles.email} href={site.contactEmail}>{site.contactLabel} <ExternalArrow /></a><a className={styles.linkedin} href={site.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalArrow /></a></div>;
export default ContactDetails;
