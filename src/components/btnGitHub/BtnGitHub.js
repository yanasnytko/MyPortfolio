import gitHubIcon from './gitHub-black.svg';
import "./style.css"

const BtnGitHub = ({ link, title="GitHub repo" }) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className="btn-outline">
			<img src={gitHubIcon} alt="" />
			{title}
		</a>
	);
};

export default BtnGitHub;