import {useParams} from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>{project.skills}</p>
					</div>

					{project.link && (
						<a href={project.link} className="btn" target="_blank" rel="noreferrer">
							See the site
						</a>
					)}

					{project.link_video && (
						<a href={project.link_video} className="btn" target="_blank" rel="noreferrer">
							Explanatory video
						</a>
					)}

					{project.gitHubLink && (
						<BtnGitHub link={project.gitHubLink} />
					)}

					{project.gitHubLink_doc && (
						<BtnGitHub link={project.gitHubLink_doc} title="Documentation" />
					)}

					
				</div>
			</div>
		</main>
	);
}

export default Project;