import SerieCard from "../../components/cards/SerieCard";
import ListScreen from "../../components/listScreen/ListScreen";

function SeriesScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/serie?orderby=title"
				title="Les séries"
				Card={SerieCard}
			/>
		</>
	);
}

export default SeriesScreen;
