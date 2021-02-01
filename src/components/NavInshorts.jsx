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
