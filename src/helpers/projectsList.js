import projectReactApi from "./../img/projects/react-api.jpg";
import projectReactApiBig from "./../img/projects/react-api-big.jpg";

import projectClaj from "./../img/projects/claj.jpg";
import projectClajBig from "./../img/projects/claj-big.jpg";

import projectTfog from "./../img/projects/tfog.jpg";
import projectTfogBig from "./../img/projects/tfog-big.jpg";

import projectVintageLab from "./../img/projects/vintage-lab.jpg";
import projectVintageLabBig from "./../img/projects/vintage-lab-big.jpg";

const projects = [
	{
		title: 'Blog with React',
		skills: 'Blog created with React using an API',
		img: projectReactApi,
		imgBig: projectReactApiBig,
		gitHubLink: 'https://github.com/yanasnytko/React-API',
		link: 'https://www.react.yanasnytko.com/',
	},
	{
		title: 'ASBL CLAJ',
		img: projectClaj,
		imgBig: projectClajBig,
		skills: 'A theme WordPress created from scratch with hooks in PHP',
		gitHubLink: 'https://github.com/yana snytko/CLAJ_Theme',
		gitHubLink_doc: 'https://github.com/yanasnytko/CLAJ',
		link: 'https://www.claj.be/',
	},
	{
		title: 'Wallifornia 2020 - TFOG',
		img: projectTfog,
		imgBig: projectTfogBig,
		skills: 'Winner of Wallifornia Music Tech Hackathon 2020 in HTML, CSS, PHP, MySQL',
		gitHubLink: 'https://github.com/yanasnytko/Wallifornia-hackaton',
		link_video: 'https://youtu.be/VprciuR-GSw',
	},
	{
		title: 'Vintage Lab',
		img: projectVintageLab,
		imgBig: projectVintageLabBig,
		skills: 'PHP and SQL with MVC, user and admin sides',
		gitHubLink: 'https://github.com/yanasnytko/VentureLab-PHP',
		link: 'https://www.vintagelab.yanasnytko.com/',
	},
];

export {projects}