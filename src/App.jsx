import "./App.css";
import Navbar from "./components/navbar/Navbar";

import HomeScreen from "./screens/home/HomeScreen";
import ArticleScreen from "./screens/home/ArticleScreen";
import SeriesScreen from "./screens/home/SeriesScreen";
import TechsScreen from "./screens/home/TechsScreen";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<HomeScreen />
				{/* <ArticleScreen />
				<SeriesScreen />
				<TechsScreen /> */}
			</div>
		</>
	);
}

export default App;
