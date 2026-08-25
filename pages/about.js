import AboutMe from "@/components/about/AboutMe";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const About = () => {
	return (
		<>
			<Head>
				<title>About — Tèmítọ́pẹ́ Ọládòkun</title>
				<meta name="description" content="About Tèmítọ́pẹ́ Ọládòkun, AI product leader, speaker, and technologist." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<AboutMe />
			</Layout>
		</>
	);
};

export default About;
