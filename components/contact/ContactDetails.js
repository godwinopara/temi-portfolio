import Link from "next/link";
import styles from "./contact.module.css";

const ContactDetails = () => {
  return (
    <div className={styles.contactDetails}>
      <h1>Love to hear from you,</h1>
      <h1>Get in touch 👋</h1>

      {/* <div className={styles.email}>
        <div>Email</div>
        <p>temitopeoladokun.com</p>
      </div> */}

      <ul className={styles.contactLinks}>
        <li>
          <Link href="https://www.linkedin.com/in/temitopeoladokun/" rel="noopener noreferrer" target="_blank">
            Linkedin
          </Link>
          <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.928711" y1="12.7327" x2="31.8999" y2="12.7327" stroke="currentColor" strokeWidth="0.813939"></line>
            <path d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793" stroke="currentColor" strokeWidth="0.813939"></path>
            <path d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985" stroke="currentColor" strokeWidth="0.813939"></path>
          </svg>
        </li>
        {/* <li>
          <a href="https://twitter.com">Twitter</a>
          <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.928711" y1="12.7327" x2="31.8999" y2="12.7327" stroke="currentColor" strokeWidth="0.813939"></line>
            <path d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793" stroke="currentColor" strokeWidth="0.813939"></path>
            <path d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985" stroke="currentColor" strokeWidth="0.813939"></path>
          </svg>
        </li>
        <li>
          <a href="https://instagram.com">Instagram</a>
          <svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.928711" y1="12.7327" x2="31.8999" y2="12.7327" stroke="currentColor" strokeWidth="0.813939"></line>
            <path d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793" stroke="currentColor" strokeWidth="0.813939"></path>
            <path d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985" stroke="currentColor" strokeWidth="0.813939"></path>
          </svg>
        </li> */}
      </ul>
    </div>
  );
};

export default ContactDetails;

