import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function ListScreen({ apiUrl, title, Card }) {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
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
		<main className="mt-5 pt-3 row">
			<h2>{title}</h2>
			{loading && (
				<p className="col-12 text-center">Chargement des données ...</p>
			)}
			{data.length > 0
				? data.map((item, i) => <Card key={i} data={item} />)
				: !loading && (
						<p className="col-12 text-center">Aucune donnée trouvée ...</p>
				  )}
		</main>
	);
}
ListScreen.propTypes = {
	apiUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	Card: PropTypes.func.isRequired,
};
export default ListScreen;
