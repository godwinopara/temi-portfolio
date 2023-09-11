import Skill from "../skillCard/Skill";
import SelectedProjects from "./SelectedProjects";
import Hero from "./Hero";
import SelectedArticles from "./SelectedArticles";
import SelectedTalks from "./SelectedTalks";

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

			{/* ======================================= */}
			{/* =============== TALKS ================= */}

			<SelectedTalks />

			{/* ======================================= */}
			{/* ============= ARTICLES ================ */}

			<SelectedArticles />
		</>
	);
}
