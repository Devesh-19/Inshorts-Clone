import React from "react";
import HamburgerDrawer from "./HamburgerDrawer";
import "./NavInshorts.css";

const NavInshorts = ({ setCategory }) => {
	return (
		<div className="navDiv">
			<div className="hamburger-icon">
				<HamburgerDrawer setCategory={setCategory} />
			</div>

			<img
				src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
				alt="Inshorts_Logo"
				height="80%"
				className="inshorts-logo"
			/>
		</div>
	);
};

export default NavInshorts;
