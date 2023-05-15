const ContactForm = () => {
	return (
		<form>
			<div>
				<label htmlFor="name">Full Name</label>
				<input type="text" name="name" id="name" placeholder="Enter your full name" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" placeholder="Enter your Email Address" />
			</div>
			<div>
				<label htmlFor="subject">Subject</label>
				<input type="text" name="subject" id="subject" placeholder="Subject" />
			</div>
			<div>
				<label htmlFor="message">Your Message</label>
				<textarea name="message" id="message" cols="30" rows="10"></textarea>
			</div>
			<button>Send</button>
		</form>
	);
};

export default ContactForm;
