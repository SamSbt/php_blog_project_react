import TechCard from "../../components/cards/TechCard";
import ListScreen from "../../components/listScreen/ListScreen";

function TechsScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/tech?orderby=label"
				title="Les Techs"
				Card={TechCard}
			/>
		</>
	);
}

export default TechsScreen;
