import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

const ContactComponent = () => {
	return (
		<section className="container">
			<div className={styles.contactWrapper}>
				<ContactDetails />
				{/* <ContactForm /> */}
			</div>
		</section>
	);
};

export default ContactComponent;
