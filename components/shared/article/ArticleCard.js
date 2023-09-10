import Image from "next/image";
import * as S from "./Article.module.css";

const ArticleCard = ({ site, title, description, imgUrl }) => {
	return (
		<div className={S.articleWrapper}>
			<div className={S.projectImg}>
				<Image src={imgUrl} height={300} width={600} alt="" />
			</div>
			<div className={S.content}>
				<h3>{site}</h3>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ArticleCard;
