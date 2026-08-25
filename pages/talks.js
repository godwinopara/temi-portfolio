import Layout from "@/components/layout/Layout";
import Talk from "@/components/talk/Talk";
import Head from "next/head";
const Talks = () => {
	return (
		<>
			<Head>
				<title>Talks — Tèmítọ́pẹ́ Ọládòkun</title>
				<meta name="description" content="Speaking appearances and conversations on practical artificial intelligence." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Talk />
			</Layout>
		</>
	);
};

export default Talks;
