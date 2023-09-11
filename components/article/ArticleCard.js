import Image from "next/image";
import * as S from "./ArticleCard.module.css";
import Link from "next/link";

const ArticleCard = ({ site, title, description, imgUrl, link }) => {
	return (
		<div className={S.articleWrapper}>
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<div className={S.projectImg}>
					<Image src={imgUrl} fill alt="article flier" />
				</div>
			</Link>
			<div className={S.content}>
				<h3>{site}</h3>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ArticleCard;
