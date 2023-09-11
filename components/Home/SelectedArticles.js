import Link from "next/link";
import ArticleCard from "../shared/article/ArticleCard";
import * as S from "./Home.module.css";

const SelectedArticles = () => {
	const articles = [
		{
			title: "Pitfall In Automation",
			imgUrl: "/images/automation-pitall.webp",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta.",
		},
		{
			title: "Technical Product Manager toolkit Part 1",
			imgUrl: "/images/project-manager-toolkit.webp",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta tempore! Dolorem, enim facilis.",
		},
		{
			title: "Ideas Come In Part, Execution Come In Part Too",
			imgUrl: "/images/ideas-come-inpart.webp",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta tempore! Dolorem, enim facilis.",
		},
	];
	return (
		<div className="container">
			<div className={S.heading}>
				<h2>Featured Articles</h2>
				<Link href="/projects">View all Articles</Link>
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
