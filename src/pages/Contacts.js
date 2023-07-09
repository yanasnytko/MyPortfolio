const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Liège, Belgium</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">WhatsApp / Telegram</h2>
						<p>
							<a href="tel:+32497131747">+32 4 97 13 17 47</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:yana.snytko@gmail.com">
								yana.snytko@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;