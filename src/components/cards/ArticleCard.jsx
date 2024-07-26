import PropTypes from "prop-types";

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

ArticleCard.propTypes = {
	article: PropTypes.shape({
		id_article: PropTypes.number.isRequired,
		title: PropTypes.string,
		summary: PropTypes.string,
		img_src: PropTypes.string,
		published_at: PropTypes.string,
		updated_at: PropTypes.string,
		is_deleted: PropTypes.bool,
		id_appuser: PropTypes.number.isRequired,
		id_serie: PropTypes.number,
	}),
};

export default ArticleCard;