import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ListScreen from "../../components/listScreen/ListScreen";
import ArticleCard from "../../components/cards/ArticleCard";

function SerieArticlesScreen() {
	const { id } = useParams();
	const [serie, setSerie] = useState({});

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://api.php-blog-project.loc/serie/" + id
				);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				// console.log(result);
				setSerie(result || {});
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [id]);

	return (
		<>
			<ListScreen
				apiUrl={"http://api.php-blog-project.loc/article?where=id_serie=" + id}
				title={"Articles de la Série " + (serie.title || "")}
				Card={ArticleCard}
			/>
		</>
	);
}

export default SerieArticlesScreen;
