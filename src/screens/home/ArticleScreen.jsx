import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ArticleScreen() {
	const { id } = useParams();
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://api.php-blog-project.loc/article/" + id;
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
				{"id_article" in data ? (
					<div className="col-12 px-5">
						<div className="text-center mb-3">
							<h1 className="m-5">{data.title}</h1>
							<img src={data.img_src} alt={data.title} width={300} />
						</div>
						<p
							className="mt-5"
							style={{ textAlign: "justify" }}
						>
							{data.summary}
						</p>
						<p>
							Publié le{" "}
							{new Date(data.published_at).toLocaleDateString("fr-FR")}
							{data.updated_at &&
								" (Mis à jour le " +
									new Date(data.updated_at).toLocaleDateString("fr-FR") +
									")"}
						</p>
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

export default ArticleScreen;
