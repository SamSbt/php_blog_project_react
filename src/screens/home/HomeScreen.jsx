import ArticleCard from "../../components/cards/ArticleCard";
import ListScreen from "./ListScreen";

function HomeScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/article?orderby=published_at&sort=DESC&limit=12"
				title="Accueil"
				OneCard={ArticleCard}
			/>
		</>
	);
}

export default HomeScreen;
