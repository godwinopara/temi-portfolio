import Link from "next/link";
import ArticleCard from "../article/ArticleCard";
import * as S from "./Home.module.css";

const SelectedArticles = () => {
	const articles = [
		{
			title: "Pitfalls In Automation",
			imgUrl: "/images/pitfall-automation.jpg",
			site: "MEDIUM",
			description:
				"According to my understanding, the word Automation is coined from two (2) words Automate and Action..",
			link: "https://medium.com/@Temitope_Oladokun/pitfalls-of-automation-a87e54218b84",
		},
		{
			title: "Technical Product Manager toolkit Part 1",
			imgUrl: "/images/project-manager-toolkit.webp",
			site: "MEDIUM",
			description:
				"As a Technical Product Manager, there are a variety of tools that can help you manage the product development process and communicate effectively with stakeholders.",
			link: "https://medium.com/@Temitope_Oladokun/technical-product-manager-toolkit-part-1-60c6985b8a33",
		},
		{
			title: "Ideas Come In Part, Execution Come In Part Too",
			imgUrl: "/images/ideas-come-inpart.webp",
			site: "MEDIUM",
			description:
				"I struggled with the title of this article. Hope the content communicates your expectation of the title.",
			link: "https://medium.com/@Temitope_Oladokun/ideas-come-in-part-execution-come-in-part-too-d31f2277cc09",
		},
	];
	return (
		<div className="container">
			<div className={S.heading}>
				<h2>Featured Articles</h2>
				<Link href="/articles">View all Articles</Link>
			</div>
			<div className={S.wrapper}>
				{articles.map((article, id) => {
					return <ArticleCard key={id} {...article} />;
				})}
			</div>
		</div>
	);
};

export default SelectedArticles;
