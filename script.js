const webToolsContainer = document.querySelector(".web-list");
const backlistContainer = document.querySelector(".back-list");
const generalToolsContainer = document.querySelector(".tools-list");

const webTools = [
	{
		className: "web-html-tag",
		imgSrc: "assets/brand-html5.svg",
		imgAlt: "html_svg",
		text: "HTML",
	},
	{
		className: "web-css-tag",
		imgSrc: "assets/brand-css3.svg",
		imgAlt: "css_svg",
		text: "CSS",
	},
	{
		className: "web-js-tag",
		imgSrc: "assets/brand-javascript.svg",
		imgAlt: "js_svg",
		text: "JavaScript",
	},
	{
		className: "web-react-tag",
		imgSrc: "assets/brand-react.svg",
		imgAlt: "react_svg",
		text: "React",
	},
	{
		className: "web-tw-tag",
		imgSrc: "assets/brand-tailwind.svg",
		imgAlt: "tailwind_svg",
		text: "Tailwind",
	},
	{
		className: "web-astro-tag",
		imgSrc: "assets/brand-astro.svg",
		imgAlt: "astro_svg",
		text: "Astro",
	},
];

const backendTools = [
	{
		className: "back-nodejs-tag",
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "nodejs_svg",
		text: "NodeJS",
	},
	{
		className: "back-expressjs-tag",
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "expressjs_svg",
		text: "ExpressJS",
	},
	{
		className: "back-nestjs-tag",
		imgSrc: "assets/brand-nodejs.svg",
		imgAlt: "nestjs_svg",
		text: "NestJS",
	},
];

const generalTools = [
	{
		className: "tools-docker-tag",
		imgSrc: "assets/brand-docker.svg",
		imgAlt: "docker_svg",
		text: "Docker",
	},
	{
		className: "tools-docker-tag",
		imgSrc: "assets/brand-docker.svg",
		imgAlt: "docker_compose_svg",
		text: "Docker Compose",
	},
	{
		className: "tools-git-tag",
		imgSrc: "assets/brand-git.svg",
		imgAlt: "git_svg",
		text: "Git",
	},
	{
		className: "tools-github-tag",
		imgSrc: "assets/brand-github.svg",
		imgAlt: "github_svg",
		text: "GitHub",
	},
	{
		className: "tools-github-tag",
		imgSrc: "assets/brand-github.svg",
		imgAlt: "github_actions_svg",
		text: "GitHub Actions",
	},
	{
		className: "tools-typescript-tag",
		imgSrc: "assets/brand-typescript.svg",
		imgAlt: "typescript_svg",
		text: "TypeScript",
	},
	{
		className: "tools-database-tag",
		imgSrc: "assets/database.svg",
		imgAlt: "postgresql_svg",
		text: "PostgreSQL",
	},
	{
		className: "tools-linux-tag",
		imgSrc: "assets/terminal.svg",
		imgAlt: "linux_svg",
		text: "GNT/Debian, Arch-Linux",
	},
	{
		className: "tools-npm-tag",
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

const listTechTemplate = ({ className, imgSrc, alt, content }) => `
<li class="${className}">
  <img src="${imgSrc}" alt="${alt}" />
  <p>${content}</p>
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
