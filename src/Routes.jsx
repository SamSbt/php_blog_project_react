import { Route, Routes } from "react-router-dom";
import ArticleScreen from "./screens/home/ArticleScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SeriesScreen from "./screens/home/SeriesScreen";
import TechsScreen from "./screens/home/TechsScreen";
import SerieArticlesScreen from "./screens/home/SerieArticlesScreen";
import TechArticlesScreen from "./screens/home/TechArticlesScreen";

const Routing = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/series" element={<SeriesScreen />} />
				<Route path="/techs" element={<TechsScreen />} />
				<Route path="/articles/details/:id" element={<ArticleScreen />} />
				<Route path="/series/details/:id" element={<SerieArticlesScreen />} />
				<Route path="/techs/details/:id" element={<TechArticlesScreen />} />
			</Routes>
		</>
	);
};

export default Routing;
