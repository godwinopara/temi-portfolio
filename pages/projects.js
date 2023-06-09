import Layout from "@/components/layout/Layout";
import Projects from "@/components/project/Project";
import Head from "next/head";
const Project = () => {
	return (
		<>
			<Head>
				<title>Project</title>
				<meta name="description" content="Generated by create next app" />
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
