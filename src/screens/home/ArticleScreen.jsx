import { useState, useEffect } from "react";

function ArticleScreen() {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = "http://api.php-blog-project.loc/article/12";
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
	}, []);

	return (
		<>
			<main className="mt-5 pt-3 row">
				{loading && (
					<p className="col-12 text-center">Chargement des données...</p>
				)}
				{"id_article" in data ? (
					<div className="col-12 px-5">
						<div className="text-center mb-3">
							<h1>{data.title}</h1>
							<img src={data.img_src} alt={data.title} width={300} />
						</div>
						<p style={{ textAlign: "justify" }}>{data.summary}</p>
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
