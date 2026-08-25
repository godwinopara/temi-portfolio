import { FiArrowUpRight } from "react-icons/fi";
import styles from "./ExternalArrow.module.css";

export default function ExternalArrow({ className = "" }) {
  return <FiArrowUpRight className={`${styles.icon} ${className}`} aria-hidden="true" focusable="false" />;
}
