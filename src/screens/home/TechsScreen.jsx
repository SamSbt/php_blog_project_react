import TechCard from "../../components/cards/TechCard";
import ListScreen from "./ListScreen";

function TechsScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/tech"
				title="Les Techs"
				Card={TechCard}
			/>
		</>
	);
}

export default TechsScreen;
