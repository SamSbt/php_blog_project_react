function ArticleCard(props) {
	const { article } = props;
	return (
		<>
			<div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch justify-content-center">
				<div className="card mb-3" style={{ width: "18rem" }}>
					<img
						src={article.img_src}
						className="card-img-top"
						alt={article.title}
					/>
					<div className="card-body text-center">
						<h5 className="card-title">{article.title}</h5>
						<p className="card-text" style={{ textAlign: "justify" }}>
							{article.summary}
						</p>
						<a
							href={"articles/details/" + article.id_article}
							className="btn btn-primary"
						>
							Lire
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default ArticleCard;
