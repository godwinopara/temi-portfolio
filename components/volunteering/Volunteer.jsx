import Timeline from "../timeline/Timeline";
import * as S from "./Volunteer.module.css";

const Volunteer = () => {
  const volunteerings = [
    {
      id: 1,
      date: "JAN 2021 - PRESENT",
      position: "Contributor at Amazon Web Services (AWS)",
      description: "I am one of the contributor in the community - AWS Technical Community.",
    },
    {
      id: 2,
      date: "MAR 2020 - DEC 2021",
      position: "OpenSource Contributor at OpenMinded",

      description: "Pidgin translation of Pysyft Tutorial",
      description2: "OpenMind is a community that is data privacy driven especially in the field of AI",
    },
    {
      id: 3,
      date: "MAR 2020 - AUG 2020",
      position: "Machine Learning Engineer at Omdena",

      description: "I partaked in a project that influenced the Polish Government Policy on Sex Education. ",
      description2: "I was a task manager of 3-6 team members that worked on an important feature of this project. ",
    },

    {
      id: 4,
      date: "SEP 2019 - DEC 2019 ",
      position: "Data Science Instructor at AI Saturdays Lagos ",

      description: "I was one of the data science instructor and mentor during Cohort 3 at AI Saturday Lagos. ",
    },
  ];

  return (
    <div className={S.volunteerWrapper}>
      <div className={S.volunteerTitle}>
        <h3>Some Of My Volunteering Works</h3>
      </div>
      <div className={S.volunteerContent}>
        {volunteerings?.map((volunteer) => {
          return <Timeline key={volunteer.id} {...volunteer} />;
        })}
      </div>
    </div>
  );
};

export default Volunteer;
