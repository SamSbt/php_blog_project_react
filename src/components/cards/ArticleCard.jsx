import PropTypes from "prop-types";
import Card from "./Card";

function ArticleCard(props) {
	const { article } = props;
	return (
		<>
			<Card
				title={article.title}
				imgSrc={article.img_src}
				link={"articles/details/" + article.id_article}
				btnText="Lire"
			>
				<p className="card-text" style={{ textAlign: "justify" }}>
					{article.summary}
				</p>
			</Card>
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
