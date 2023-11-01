import * as S from "./Article.module.css";
import ArticleCard from "./ArticleCard";

const Article = () => {
	const articles = [
		{
			id: 1,
			title: "Pitfalls In Automation",
			imgUrl: "/images/pitfall-automation.jpg",
			site: "MEDIUM",
			description:
				"According to my understanding, the word Automation is coined from two (2) words Automate and Action..",
			link: "https://medium.com/@Temitope_Oladokun/pitfalls-of-automation-a87e54218b84",
		},
		{
			id: 2,
			title: "Technical Product Manager toolkit Part 1",
			imgUrl: "/images/project-manager-toolkit.webp",
			site: "MEDIUM",
			description:
				"As a Technical Product Manager, there are a variety of tools that can help you manage the product development process and communicate effectively with stakeholders.",
			link: "https://medium.com/@Temitope_Oladokun/technical-product-manager-toolkit-part-1-60c6985b8a33",
		},
		{
			id: 3,
			title: "Technical Product Manager toolkit Part 2",
			imgUrl: "/images/project-manager-toolkit.webp",
			site: "MEDIUM",
			description:
				"As a Technical Product Manager, there are a variety of tools that can help you manage the product development process and communicate effectively with stakeholders.",
			link: "https://medium.com/@Temitope_Oladokun/technical-product-manager-toolkit-part-2-ded906928c18",
		},
		{
			id: 4,
			title: "Ideas Come In Part, Execution Come In Part Too",
			imgUrl: "/images/ideas-come-inpart.webp",
			site: "MEDIUM",
			description:
				"I struggled with the title of this article. Hope the content communicates your expectation of the title.",
			link: "https://medium.com/@Temitope_Oladokun/ideas-come-in-part-execution-come-in-part-too-d31f2277cc09",
		},
		{
			id: 5,
			title: "A Step at a Time",
			imgUrl: "/images/step.jpg",
			site: "MEDIUM",
			description:
				"For over two(2) years, I have been working on an AI Intelligent system that will solve a major problem in Nigeria and beyond.",
			link: "https://medium.com/@Temitope_Oladokun/emergence-of-a-81bfe2f38f2d",
		},
		{
			id: 6,
			title: "Real-Time Object detection at a Glance",
			imgUrl: "/images/object-dectection.webp",
			site: "MEDIUM",
			description:
				"Real-Time is the actual time a process or an event occurs. Object detection is literarily a compound word “OBJECT” and “DETECTION”.",
			link: "https://medium.com/@Temitope_Oladokun/real-time-object-detection-at-a-glance-9f6f009f5409",
		},
		{
			id: 7,
			title: "DRONES: Track athletes outdoor activities and medically resuscitate.",
			imgUrl: "/images/drone-test.webp",
			site: "MEDIUM",
			description:
				"Drones are aircraft without humans on board that is the reason for the name unmanned aerial vehicles.",
			link: "https://medium.com/@Temitope_Oladokun/drones-track-athletes-outdoor-activities-and-medically-resuscitate-198282de8fcc",
		},
		{
			id: 8,
			title: "Aisen Coding Competition",
			imgUrl: "/images/coding-comp.jpg",
			site: "MEDIUM",
			description: "AISEN Coding Competition 2017.",
			link: "https://techie991.wordpress.com/2017/11/16/aisen-coding-competition-2017/",
		},
		{
			id: 9,
			title: "ChatGPT Masterclass",
			imgUrl: "/images/chatgpt-masterclass.webp",
			site: "MEDIUM",
			description:
				"I have been managing Artificial Intelligence Engineers and products for approximately 3years at AB InBev and one of my team’s value is developing Growth Mindset to avoid being left out.",
			link: "https://medium.com/@Temitope_Oladokun/my-chatgpt-masterclass-at-anheuser-busch-inbev-97d4621db9d",
		},
		{
			id: 10,
			title: "My safe place as Technical Product Manager",
			imgUrl: "/images/prototyping.png",
			site: "MEDIUM",
			description:
				"To bring your idea to life, you must employ people better than you. Whenever I am recruiting, I look out for the following: Hunger for growth, Value system and the Vision of the business.",
			link: "https://medium.com/@Temitope_Oladokun/my-chatgpt-masterclass-at-anheuser-busch-inbev-97d4621db9d",
		},
		{
			id: 11,
			title: "How to gracefully handle Product Monetization as a TPM or PM.",
			imgUrl: "/images/monitization.webp",
			site: "MEDIUM",
			description:
				"I have been opportuned to build several Emerging tech products (Computer Vision, NLP, Augmented Reality and Generative AI) and I am always amazed at how people use product.",
			link: "https://medium.com/@Temitope_Oladokun/my-chatgpt-masterclass-at-anheuser-busch-inbev-97d4621db9d",
		},
		{
			id: 12,
			title: "Building resilient technical team as a Technical Product Manager",
			imgUrl: "/images/resilence.webp",
			site: "MEDIUM",
			description:
				"A resilient technical team is one that is able to bounce back from setbacks and challenges. It is a team that is able to adapt to change and continue to deliver high-quality work, even in difficult times.",
			link: "https://medium.com/@Temitope_Oladokun/building-resilient-technical-team-as-a-technical-product-manager-ffa67793f60d",
		},
		{
			id: 13,
			title: "Kubernetes and Pod and it’s implementation",
			imgUrl: "/images/kub.webp",
			site: "MEDIUM",
			description:
				" I am using this post to explain the concept around Pod thereafter touch on the other components in other posts.",
			link: "https://medium.com/@Temitope_Oladokun/kubernetes-and-pod-and-its-implementation-f6f744ed6c82",
		},
		{
			id: 14,
			title: "Pod in Kubernetes Part 2",
			imgUrl: "/images/kub2.webp",
			site: "MEDIUM",
			description:
				"I wrote the first part of this post some days back, titled Kubernetes and Pod and it’s implementation. Refer to it to get more context about the topic. ",
			link: "https://medium.com/@Temitope_Oladokun/pod-in-kubernetes-2-b2213860940d",
		},
		{
			id: 15,
			title: "Application of Ingress in Kubernetes.",
			imgUrl: "/images/kub3.webp",
			site: "MEDIUM",
			description:
				"Kubernetes ingress is a controller that exposes services on the external network. It enables load balancing traffic between many services, the termination of SSL/TLS connections, and the routing of data based on path rules. The below icon represents an Ingress.",
			link: "https://blog.devops.dev/application-of-ingress-in-kubernetes-56d98c255225",
		},
		{
			id: 16,
			title: "A Beginner’s Guide to Kubernetes Secrets Management",
			imgUrl: "/images/kub4.png",
			site: "MEDIUM",
			description:
				"A Kubernetes secret is an object that stores sensitive information like passwords, API keys, tokens, and certificates in a secure manner. These pieces of confidential information are saved in an encoded or encrypted format.",
			link: "https://blog.devops.dev/a-beginners-guide-to-kubernetes-secrets-management-f710a7893287",
		},
	];

	return (
		<div className="container">
			<div className={S.heading}>
				<h1>Recent Articles</h1>
			</div>
			<div className={S.articleWrapper}>
				{articles?.map((article) => {
					return <ArticleCard key={article?.id} {...article} />;
				})}
			</div>
		</div>
	);
};

export default Article;
