import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
	console.log(newsItem);

	const fullDate = new Date(newsItem.publishedAt);
	const date = fullDate.toString().split(" ");

	const hour = parseInt(date[4].substring(0, 2));
	const time = hour > 12;

	const renderSwitch = (day) => {
		switch (day) {
			case "Mon":
				return "Monday";
				break;
			case "Tue":
				return "Tuesday";
				break;
			case "Wed":
				return "Wednesday";
				break;
			case "Thu":
				return "Thursday";
				break;
			case "Fri":
				return "Friday";
				break;
			case "Sat":
				return "Saturday";
				break;

			default:
				return null;
				break;
		}
	};

	return (
		<div className="newsCard">
			<img
				src={
					newsItem.urlToImage
						? newsItem.urlToImage
						: "https://shridiwa.edu.np/includes/client/images/photoimg.png"
				}
				alt={newsItem.title}
				className="newsImage"
			/>
			<div className="newsText">
				<div>
					<span className="title">{newsItem.title}</span>
					<br />
					<span className="author">
						<a href={newsItem.url} target="_blank" rel="noreferrer">
							<b>short</b>
						</a>
						<span className="muted">
							{" "}
							by {newsItem.author
								? newsItem.author
								: "Unknown"} /{" "}
							{time
								? hour - 12 < 10
									? `0${hour - 12}:${date[4].substring(
											3,
											5
									  )} pm`
									: `${hour - 12}:${date[4].substring(
											3,
											5
									  )} pm`
								: `${hour} : ${date[4].substring(
										3,
										5
								  )} am`}{" "}
							on {date[2]} {date[1]} {date[3]},{" "}
							{renderSwitch(date[0])}
						</span>
					</span>
				</div>
				<div className="lowerNewsText">
					<div className="description">
						{newsItem.description
							? newsItem.description
							: "***No Description***"}
					</div>
					<span className="readMore">
						read more at{" "}
						<a href={newsItem.url}>
							<b>{newsItem.source.name}</b>
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
