import "./style.css";

import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://github.com/yanasnytko" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="GitHub of Yana Snytko" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://www.linkedin.com/in/yana-snytko/" target="_blank" rel="noreferrer">
								<img src={linkedIn} alt="LinkedIn of Yana Snytko" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						<p>© 2023 yanasnytko.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;