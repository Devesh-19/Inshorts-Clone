import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";

function App() {
	const [category, setCategory] = useState("general");
	const [newsArray, setNewsArray] = useState([]);
	const [newsResults, setnewsResults] = useState();

	useEffect(() => {
		const newsApi = async () => {
			try {
				const news = await axios.get(
					`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
				);
				setNewsArray(news.data.articles);
				setnewsResults(news.data.totalResults);
			} catch (error) {
				console.log(error);
			}
		};

		newsApi();
	}, [newsResults, category]);

	return (
		<div>
			<NavInshorts setCategory={setCategory} />
			<NewsContent />
			<Footer />
		</div>
	);
}

export default App;
