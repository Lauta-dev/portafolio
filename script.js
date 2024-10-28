const webToolsContainer = document.querySelector(".web-list");
const backlistContainer = document.querySelector(".back-list");
const generalToolsContainer = document.querySelector(".tools-list");

const webTools = [
	{
		imgSrc: "assets/brand-html5.svg",
		imgAlt: "html_svg",
		text: "HTML",
	},
	{
		imgSrc: "assets/brand-css3.svg",
		imgAlt: "css_svg",
		text: "CSS",
	},
	{
		imgSrc: "assets/brand-javascript.svg",
		imgAlt: "js_svg",
		text: "JavaScript",
	},
	{
		imgSrc: "assets/brand-react.svg",
		imgAlt: "react_svg",
		text: "React",
	},
	{
		imgSrc: "assets/brand-tailwind.svg",
		imgAlt: "tailwind_svg",
		text: "Tailwind",
	},
	{
		imgSrc: "assets/brand-astro.svg",
		imgAlt: "astro_svg",
		text: "Astro",
	},
];

const backendTools = [
	{
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "nodejs_svg",
		text: "NodeJS",
	},
	{
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "expressjs_svg",
		text: "ExpressJS",
	},
	{
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "nestjs_svg",
		text: "NestJS",
	},
];

const generalTools = [
	{
		imgSrc: "assets/brand-docker.svg",
		imgAlt: "docker_svg",
		text: "Docker",
	},
	{
		imgSrc: "assets/brand-docker.svg",
		imgAlt: "docker_compose_svg",
		text: "Docker Compose",
	},
	{
		imgSrc: "assets/brand-git.svg",
		imgAlt: "git_svg",
		text: "Git",
	},
	{
		imgSrc: "assets/brand-github.svg",
		imgAlt: "github_svg",
		text: "GitHub",
	},
	{
		imgSrc: "assets/brand-github.svg",
		imgAlt: "github_actions_svg",
		text: "GitHub Actions",
	},
	{
		imgSrc: "assets/brand-typescript.svg",
		imgAlt: "typescript_svg",
		text: "TypeScript",
	},
	{
		imgSrc: "assets/database.svg",
		imgAlt: "postgresql_svg",
		text: "PostgreSQL",
	},
	{
		imgSrc: "assets/terminal.svg",
		imgAlt: "linux_svg",
		text: "GNU/Debian, Arch-Linux",
	},
	{
		imgSrc: "assets/package.svg",
		imgAlt: "npm_svg",
		text: "NPM",
	},
];

const allTools = [
	{ data: webTools, container: webToolsContainer },
	{ data: backendTools, container: backlistContainer },
	{ data: generalTools, container: generalToolsContainer },
];

let listTechHtml = "";

const listTechTemplate = ({ imgSrc, alt, content }) => `
<li>
  ${content}
</li>
`;

allTools.forEach((toolList) => {
	toolList.data.forEach((tool) => {
		const { imgSrc, className, text, imgAlt } = tool;

		listTechHtml += listTechTemplate({
			imgSrc,
			content: text,
			alt: imgAlt,
			className,
		});
	});

	toolList.container.innerHTML = listTechHtml;
	listTechHtml = "";
});
