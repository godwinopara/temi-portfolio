import ContactDetails from "./ContactDetails";
import styles from "./contact.module.css";

const ContactComponent = () => {
	return (
		<section className={styles.page}>
			<div className={styles.contactWrapper}>
				<ContactDetails />
				{/* <ContactForm /> */}
			</div>
		</section>
	);
};

export default ContactComponent;
