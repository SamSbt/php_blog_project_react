import { useState, useEffect } from "react";
import TechCard from "../../components/cards/TechCard";

function TechsScreen() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://api.php-blog-project.loc/tech";
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				result.sort((a, b) => {
					return a.label < b.label ? -1 : 1;
				});
				console.log(result);
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
					? data.map((item, i) => <TechCard key={i} tech={item} />)
					: !loading && (
							<p className="col-12 text-center">Aucune tech trouvée.</p>
					  )}
			</main>
		</>
	);
}

export default TechsScreen;
