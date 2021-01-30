import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<span className="name">
				Inshorts Clone made with ❤️ by -{" "}
				<a
					href="https://www.linkedin.com/in/deveshsingh19/"
					target="__blank">
					Devesh
				</a>
			</span>
			<hr style={{ width: "90%" }} />
			<div className="iconContainer">
				<a href="https://www.instagram.com/buck.sh0t/" target="__blank">
					<i className="fab fa-instagram-square fa-2x"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/deveshsingh19/"
					target="__blank">
					<i className="fab fa-linkedin fa-2x"></i>
				</a>
				<a href="https://github.com/Devesh-19" target="__blank">
					<i className="fab fa-github fa-2x"></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
