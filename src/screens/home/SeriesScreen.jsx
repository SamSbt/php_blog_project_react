import { useState, useEffect } from "react";
import SerieCard from "../../components/cards/SerieCard";

function SeriesScreen() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://api.php-blog-project.loc/serie";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				result.sort((a, b) => {
					return a.title < b.title ? -1 : 1;
				});
				// console.log(result);
				setData(result || []);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<main className="mt-5 pt-3 row">
				{loading && (
					<p className="col-12 text-center">Chargement des données ...</p>
				)}
				{data.length > 0
					? data.map((item, i) => <SerieCard key={i} serie={item} />)
					: !loading && (
							<p className="col-12 text-center">Aucune série trouvée.</p>
					  )}
			</main>
		</>
	);
}

export default SeriesScreen;
