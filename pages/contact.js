import ContactComponent from "@/components/contact/ContactComponent";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const Contact = () => {
	return (
		<>
			<Head>
				<title>Contact — Tèmítọ́pẹ́ Ọládòkun</title>
				<meta name="description" content="Email Tèmítọ́pẹ́ Ọládòkun for speaking, press, and collaboration enquiries." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<ContactComponent />
			</Layout>
		</>
	);
};

export default Contact;
