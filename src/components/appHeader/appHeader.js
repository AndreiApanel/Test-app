import './appHeader.scss';
import group from '../pictures/Group.png';
const AppHeader = () => {
	return (
		<header className="app-header">
			<nav className="app-menu">
				<div>
					<img src={group} alt="group" />

					<ul>
						<li>
							<a href="replace">Coffee house</a>
						</li>
						<li>
							<a href="replace">Our coffee</a>
						</li>
						<li>
							<a href="replace">For your pleasure</a>
						</li>
					</ul>
				</div>
			</nav>
			<h1 className="app-title">Everything You Love About Coffee</h1>
		</header>
	);
};

export default AppHeader;
