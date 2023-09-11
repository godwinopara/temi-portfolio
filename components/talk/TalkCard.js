import Image from "next/image";
import * as S from "./TalkCard.module.css";
import Link from "next/link";

const TalkCard = ({ title, host, imgUrl, link }) => {
	return (
		<div className={S.TalkWrapper}>
			<Link href={link} rel="noopener noreferrer" target="_blank">
				<div className={S.projectImg}>
					<Image src={imgUrl} fill alt="Talk Flier" />
				</div>
			</Link>
			<div className={S.content}>
				<h4>{title}</h4>
				<p>{host}</p>
			</div>
		</div>
	);
};

export default TalkCard;
// style={{ backgroundImage: `url(${imgUrl})` }}
