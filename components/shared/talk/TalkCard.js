import Image from "next/image";
import * as S from "./Talk.module.css";

const TalkCard = ({ title, host, imgUrl }) => {
	console.log(title);
	return (
		<div className={S.TalkWrapper}>
			<div className={S.projectImg} style={{ backgroundImage: `url(${imgUrl})` }}></div>
			<div className={S.content}>
				<h4>{title}</h4>
				<p>{host}</p>
			</div>
		</div>
	);
};

export default TalkCard;
