import styles from "@/components/contact/contact.module.css";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";

const Contact = () => {
  return (
    <>
      <header className="container">
        <NavBar />
      </header>
      <section className="container">
        <div className={styles.contactWrapper}>
          <div className={styles.contactDetails}>
            <h1>Love to hear from you,</h1>
            <h1>Get in touch 👋</h1>

            <div className={styles.email}>
              <div>Email</div>
              <p>hello@website.com</p>
            </div>

            <ul className={styles.contactLinks}>
              <li>
                <a href="https://linkedin.com/in">Linkedin</a>
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.928711"
                    y1="12.7327"
                    x2="31.8999"
                    y2="12.7327"
                    stroke="currentColor"
                    strokeWidth="0.813939"
                  ></line>
                  <path
                    d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793"
                    stroke="currentColor"
                    strokeWidth="0.813939"
                  ></path>
                  <path
                    d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985"
                    stroke="currentColor"
                    strokeWidth="0.813939"
                  ></path>
                </svg>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.928711"
                    y1="12.7327"
                    x2="31.8999"
                    y2="12.7327"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></line>
                  <path
                    d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></path>
                  <path
                    d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></path>
                </svg>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
                <svg
                  width="33"
                  height="25"
                  viewBox="0 0 33 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.928711"
                    y1="12.7327"
                    x2="31.8999"
                    y2="12.7327"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></line>
                  <path
                    d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></path>
                  <path
                    d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985"
                    stroke="currentColor"
                    stroke-width="0.813939"
                  ></path>
                </svg>
              </li>
            </ul>
          </div>
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
            <button>
              <span>Send</span>
              <svg
                width="33"
                height="25"
                viewBox="0 0 33 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.928711"
                  y1="12.7327"
                  x2="31.8999"
                  y2="12.7327"
                  stroke="currentColor"
                  stroke-width="0.813939"
                ></line>
                <path
                  d="M32.1044 12.6808C25.245 10.1628 22.6772 7.46214 19.8789 0.862793"
                  stroke="currentColor"
                  stroke-width="0.813939"
                ></path>
                <path
                  d="M32.3075 12.6806C25.4482 15.1986 22.8803 17.8992 20.082 24.4985"
                  stroke="currentColor"
                  stroke-width="0.813939"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
