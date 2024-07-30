import PropTypes from "prop-types";
import Card from "./Card";

function ArticleCard(props) {
	const { data } = props;
	return (
		<>
			<Card
				title={data.title}
				imgSrc={data.img_src}
				link={"articles/details/" + data.id_article}
				btnText="Lire"
			>
				<p className="card-text" style={{ textAlign: "justify" }}>
					{data.summary}
				</p>
			</Card>
		</>
	);
}

ArticleCard.propTypes = {
	data: PropTypes.shape({
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
