import SelectedProjects from "./SelectedProjects";
import Hero from "./Hero";
import SelectedArticles from "./SelectedArticles";
import SelectedTalks from "./SelectedTalks";
import SpeakingTopics from "./SpeakingTopics";
import ContactCta from "./ContactCta";

export default function Home() {
	return (
		<>
			{/* =================================== */}
			{/* ============= HERO ================ */}

			<Hero />
			<SpeakingTopics />

			{/* ======================================= */}
			{/* ============= PROJECTS ================ */}

			<SelectedProjects />

			{/* ======================================= */}
			{/* =============== TALKS ================= */}

			<SelectedTalks />

			{/* ======================================= */}
			{/* ============= ARTICLES ================ */}

			<SelectedArticles />
			<ContactCta />
		</>
	);
}
