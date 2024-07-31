import TechCard from "../../components/cards/TechCard";
import ListScreen from "./ListScreen";

function TechsScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/tech"
				title="Les Techs"
				OneCard={TechCard}
			/>
		</>
	);
}

export default TechsScreen;
