import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults }) => {
	return (
		<Container maxWidth="md">
			<div className="content">
				<div className="downloadMessage">
					<span className="downloadText">
						For the best experience use{" "}
						<b>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://inshorts.com/mobile">
								inshorts
							</a>
						</b>{" "}
						app on your smartphone
					</span>
					<img
						alt="app store"
						height="80%"
						src="https://assets.inshorts.com/website_assets/images/appstore.png"
					/>
					<img
						alt="play store"
						height="80%"
						src="https://assets.inshorts.com/website_assets/images/playstore.png"
					/>
				</div>
				{newsArray.map((newsItem, itemIndex) => (
					<NewsCard newsItem={newsItem} key={itemIndex} />
				))}

				<button className="loadMore">Load More</button>
			</div>
		</Container>
	);
};

export default NewsContent;
