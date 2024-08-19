import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TechArticlesScreen() {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = `http://api.php-blog-project.loc/tech/${id}`;
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const result = await response.json();
				// console.log(result);
				setData(result || {});
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [id]);

	return (
		<>
			<main className="mt-5 pt-3 row">
				{loading && (
					<p className="col-12 text-center">Chargement des données...</p>
				)}
				{"id_tech" in data ? (
					<div className="col-12 px-5">
						<div className="text-center mb-3">
							<h2 className="m-4" >Articles de la tech {data.label}</h2>
							<img src={data.img_src} alt={data.label} width={300} />
						</div>
            <div className="mt-5 text-center">Articles relatifs à la tech ici</div>
					</div>
          
				) : (
					!loading && (
						<p className="col-12 text-center">Aucun article trouvé.</p>
					)
				)}
			</main>
		</>
	);
}

export default TechArticlesScreen;
