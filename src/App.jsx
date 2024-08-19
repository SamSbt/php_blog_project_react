import "./App.css";
import Navbar from "./components/navbar/Navbar";

import Routing from "./Routes";

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routing />
			</div>
		</>
	);
}

export default App;
