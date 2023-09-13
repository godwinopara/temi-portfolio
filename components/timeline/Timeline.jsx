import * as S from "./Timeline.module.css";

const Timeline = ({
	date,
	position,
	description,
	description2 = "",
	company,
	location,
	timelineMarkerClass,
}) => {
	return (
		<div className={S.timeline}>
			<div className={S.title}>
				<h4>
					{position} - <span>{company}</span>
				</h4>
			</div>
			<div className={S.timelineInfo}>
				<h4>
					{date} | {location}
				</h4>
			</div>
			<div className={S.timelineContent}>
				<p>{description}</p>
				<p>{description2}</p>
			</div>
		</div>
	);
};

export default Timeline;
