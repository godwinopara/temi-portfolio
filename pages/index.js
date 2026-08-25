import Head from "next/head";
import NavBar from "@/components/navbar/navbar";
import Home from "@/components/Home/home";
import Footer from "@/components/footer/footer";
import Layout from "@/components/layout/Layout";

// const inter = Inter({ subsets: ["latin"] });

export default function Index() {
	return (
		<>
			<Head>
				<title>Tèmítọ́pẹ́ Ọládòkun — AI Product Leader & Speaker</title>
				<meta name="description" content="Speaking, product strategy, and practical artificial intelligence." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<Home />
			</Layout>
		</>
	);
}
