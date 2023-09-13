import * as S from "./Timeline.module.css";

const Timeline = ({ date, position, description, description2 = "", company, location, timelineMarkerClass }) => {
  return (
    <div className={S.timeline}>
      <div className={S.timelineInfo}>
        <h3>
          {position} - <span>{company}</span>
        </h3>
        <p>
          {date} | {location}
        </p>
      </div>
      <div className={S.timelineContent}>
        <ul className={S.list}>
          <li>{description}</li>
          {description2 && <li>{description2}</li>}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;

