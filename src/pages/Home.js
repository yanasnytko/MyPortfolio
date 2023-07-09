import Header from './../components/header/Header';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>
								JavaScript, React, NPM,
								<br /> HTML, CSS / SASS, 
								<br />BootStrap, Skeleton
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Backend</h2>
							<p>PHP, API REST, MySQL, NodeJS, MongoDB</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">More</h2>
							<p>Git, Webpack, WordPress</p>
						</li>
						<li className="content-list__item">
							<NavLink to="/projects" className="btn text-white" > 
								See my projects
							</NavLink>
						</li>
						<hr />
						<li className="content-list__item">
							<h2 className="title-2">Design and Marketing</h2>
							<p>
								Photoshop, Illustrator, InDesign, 
								<br /> Google Analytics, SEO & SEA, Mailchimp / Brevo
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Languages</h2>
							<p>
								French, Russian, English, 
								<br /> Dutch (A2), German (A2)
							</p>
						</li>
						
					</ul>
					
				</div>
			</main>
		</>
	);
}

export default Home;