import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";
import "./NavInshorts.css";

const NavInshorts = ({ setCategory, setLoadMore }) => {
	return (
		<div className="navDiv">
			<div className="hamburger-icon">
				<HamburgerDrawer
					setLoadMore={setLoadMore}
					setCategory={setCategory}
				/>
			</div>

			<a
				href="https://dev-inshorts.netlify.app/"
				className="inshorts-logo">
				<img
					src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
					alt="Inshorts_Logo"
					height="100%"
				/>
			</a>
		</div>
	);
};

export default NavInshorts;
