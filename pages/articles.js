import Article from "@/components/article/Article";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const Articles = () => {
	return (
		<>
			<Head>
				<title>Writing — Tèmítọ́pẹ́ Ọládòkun</title>
				<meta name="description" content="Writing on artificial intelligence, product management, and technology." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Article />
			</Layout>
		</>
	);
};

export default Articles;
