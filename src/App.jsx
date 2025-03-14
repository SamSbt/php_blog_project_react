import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ArticleScreen from "./screens/home/ArticleScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SeriesScreen from "./screens/home/SeriesScreen";
import TechsScreen from "./screens/home/TechsScreen";
import SerieArticlesScreen from "./screens/home/SerieArticlesScreen";
import TechArticlesScreen from "./screens/home/TechArticlesScreen";



function App() {
	return (
		<>
			<BrowserRouter>
				<div className="container-lg bg-light">
					<Navbar />
					<main>
						<Routes>
							<Route path="/" element={<HomeScreen />} />
							<Route path="/series" element={<SeriesScreen />} />
							<Route path="/techs" element={<TechsScreen />} />
							<Route path="article/:id" element={<ArticleScreen />} />
							<Route
								path="/series/articles/:id"
								element={<SerieArticlesScreen />}
							/>
							<Route
								path="/techs/articles/:id"
								element={<TechArticlesScreen />}
							/>
						</Routes>
					</main>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
