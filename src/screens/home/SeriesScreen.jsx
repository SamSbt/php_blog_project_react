import SerieCard from "../../components/cards/SerieCard";
import ListScreen from "./ListScreen";

function SeriesScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/serie"
				title="Les séries"
				OneCard={SerieCard}
			/>
		</>
	);
}

export default SeriesScreen;
