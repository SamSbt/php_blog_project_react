import { useState } from "react";
import Contact from "../contact/Contact";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/home");

  const handleNavLinkClick = (event) => {
    // event.preventDefault();
    // console.log("href=" + event.target.href);
    const url = new URL(event.target.href);
    // console.log("path=" + url.pathname);
    setActiveLink(url.pathname);
  }
	return (
		<>
			<nav className="navbar navbar-expand-lg fixed-top bg-light">
				<div className="container-lg">
					<a className="navbar-brand" href="/">
						DevBlog
					</a>
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
								<a
									className={
										"nav-link" + (activeLink == "/home" ? " active" : "")
									}
									aria-current="page"
									href="/home"
									onClick={handleNavLinkClick}
								>
									Accueil
								</a>
							</li>
							<li className="nav-item me-2">
								<a
									className={
										"nav-link" + (activeLink == "/series" ? " active" : "")
									}
									href="/series"
									onClick={handleNavLinkClick}
								>
									Séries
								</a>
							</li>
							<li className="nav-item me-2">
								<a
									className={
										"nav-link" + (activeLink == "/techs" ? " active" : "")
									}
									href="/techs"
									onClick={handleNavLinkClick}
								>
									Techs
								</a>
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
			<Contact />
		</>
	);
}
export default Navbar;
