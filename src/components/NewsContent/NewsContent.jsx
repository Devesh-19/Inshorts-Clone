import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
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
				{newsArray.slice(0, loadMore).map((newsItem, itemIndex) => (
					<NewsCard newsItem={newsItem} key={itemIndex} />
				))}

				{loadMore < newsResults && (
					<button
						className="loadMore"
						onClick={() => {
							setLoadMore((prevValue) => prevValue + 20);
						}}>
						Load More
					</button>
				)}
			</div>
		</Container>
	);
};

export default NewsContent;
