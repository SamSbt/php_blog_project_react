import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ListScreen({ apiUrl, title, OneCard }) {
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
			<main className="mt-5 pt-3 mx-5 row">
				<h2 className="text-center">{title}</h2>
				{loading && (
					<p className="col-12 text-center">Chargement des données...</p>
				)}
				{data.length > 0
					? data.map((item, i) => <OneCard key={i} data={item} />)
					: !loading && (
							<p className="col-12 text-center">Aucun article trouvé.</p>
					  )}
			</main>
		</>
	);
}
ListScreen.propTypes = {
	apiUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	OneCard: PropTypes.func.isRequired,
};

export default ListScreen;

// OneCard, rien à voir avec le component Card. C'est une fonction ici