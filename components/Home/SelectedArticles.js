import Link from "next/link";
import ArticleCard from "../shared/article/ArticleCard";
import * as S from "./Home.module.css";

const SelectedArticles = () => {
	const articles = [
		{
			title: "Pitfall In Automation",
			imgUrl: "/images/impression.jpg",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta.",
		},
		{
			title: "Technical Product Manager toolkit Part 1",
			imgUrl: "/images/chanel.jpg",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta tempore! Dolorem, enim facilis.",
		},
		{
			title: "Technical Product Manager toolkit Part 2",
			imgUrl: "/images/apple-watch.jpg",
			site: "MEDIUM",
			description:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam illum fugiat a harum sunt debitis soluta tempore! Dolorem, enim facilis.",
		},
	];
	return (
		<div className="container">
			<div className={S.articleHeading}>
				<h2>Featured Articles</h2>
				<Link href="/projects">View all Articles</Link>
			</div>
			<div className={S.articleWrapper}>
				{articles.map((article, id) => {
					return <ArticleCard key={id} {...article} />;
				})}
			</div>
		</div>
	);
};

export default SelectedArticles;
