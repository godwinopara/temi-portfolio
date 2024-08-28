import Timeline from "../timeline/Timeline";
import * as S from "./Experience.module.css";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      date: "APRIL 2021 - PRESENT",
      position: "Senior Product Manager",
      company: "Anheuser- Busch InBev",
      location: "Nigeria",
      description:
        "As a product owner of an AI products(Computer Vision, NLP and IOT), I draft out the product process map, design project architecture, design infographics, create product enhancement to extend the product life cycle. Manage Stakeholder's, cross functional agile team, users and backlog.",
    },
    {
      id: 2,
      date: "AUG 2020 - MAR 2021",
      position: "Sales Data Manager",
      company: "Anheuser- Busch InBev",
      location: "Nigeria",
      description:
        "I work as the lead AI developer and team manager . My team and I use computer vision's algorithms, Internet of things(IOT) and Natural Language	Processing algorithms to transform the company's data into a solution that automate	and argument manufacturing and sales processes. This solution improves our customer's	businesses and consumer experiences.",
    },
    {
      id: 3,
      date: "MAR 2020 - AUG 2020",
      position: "AI Engineer",
      company: "Anheuser- Busch InBev",
      location: "Nigeria",
      description:
        "I work as the lead AI developer and team lead. My team and I use computer vision's algorithms to solve manufacturing and sales processes. This solution improves our customer's businesses and consumer experiences.",
    },
  ];

  return (
    <div className={S.experinceWrapper}>
      <div className={S.experinceTitle}>
        <h3>Some Of My Experiences</h3>
      </div>

      <div className={S.experinceContent}>
        {experiences?.map((experience) => {
          return <Timeline key={experience.id} {...experience} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
