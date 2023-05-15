import Skill from "../skillCard/Skill";
import SelectedProjects from "./SelectedProjects";
import Hero from "./Hero";

export default function Home() {
	return (
		<>
			{/* =================================== */}
			{/* ============= HERO ================ */}

			<Hero />

			{/* =================================== */}
			{/* ============= Skills=============== */}

			<Skill />

			{/* ======================================= */}
			{/* ============= PROJECTS ================ */}

			<SelectedProjects />
		</>
	);
}
