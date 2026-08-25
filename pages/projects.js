import Layout from "@/components/layout/Layout";
import Projects from "@/components/project/Project";
import Head from "next/head";
const Project = () => {
	return (
		<>
			<Head>
				<title>Work — Tèmítọ́pẹ́ Ọládòkun</title>
				<meta name="description" content="Selected work across artificial intelligence, product, and technology." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Projects />
			</Layout>
		</>
	);
};

export default Project;
