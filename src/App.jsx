import "./App.css";
import Navbar from "./components/navbar/Navbar";

import HomeScreen from "./screens/home/HomeScreen";
import ArticleScreen from "./screens/home/ArticleScreen";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				{/* <HomeScreen /> */}
				<ArticleScreen />
			</div>
		</>
	);
}

export default App;
