import ArticleCard from "../../components/cards/ArticleCard";
import ListScreen from "../../components/listScreen/ListScreen";

function HomeScreen() {
	return (
		<>
			<ListScreen
				apiUrl="http://api.php-blog-project.loc/article?orderby=published_at&sort=DESC&limit=12"
				title="Accueil"
				Card={ArticleCard}
			/>
		</>
	);
}

export default HomeScreen;
