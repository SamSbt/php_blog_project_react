import { useState } from "react";
import ModalContact from "../contact/ModalContact";
import { Link } from "react-router-dom";

function Navbar() {
	const [activeLink, setActiveLink] = useState("/home");

	// sans react router :
	// const handleNavLinkClick = (event) => {
	// 	event.preventDefault();
	// 	console.log("href=" + event.target.href);
	// 	const url = new URL(event.target.href);
	// 	console.log("path=" + url.pathname);
	// 	setActiveLink(url.pathname);
	// };

	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top bg-light">
				<div className="container-lg">
					<Link className="navbar-brand" to="/">
						DevBlog
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarContent"
						aria-controls="navbarContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse ms-5" id="navbarContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item me-2">
								<Link
									className={"nav-link" + (activeLink == "/" ? " active" : "")}
									to="/"
									onClick={() => setActiveLink("/")}
								>
									Accueil
								</Link>
							</li>
							<li className="nav-item me-2">
								<Link
									className={
										"nav-link" + (activeLink == "/series" ? " active" : "")
									}
									to="/series"
									onClick={() => setActiveLink("/series")}
								>
									Séries
								</Link>
							</li>
							<li className="nav-item me-2">
								<Link
									className={
										"nav-link" + (activeLink == "/techs" ? " active" : "")
									}
									to="/techs"
									onClick={() => setActiveLink("/techs")}
								>
									Techs
								</Link>
							</li>
							<li className="nav-item me-2">
								<a
									className="nav-link"
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#myModal"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<ModalContact />
		</>
	);
}
export default Navbar;
