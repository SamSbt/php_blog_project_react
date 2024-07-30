import PropTypes from "prop-types";
import Card from "./Card";

function SerieCard(props) {
	const { serie } = props;
	return (
		<>
			<Card
				title={serie.title}
				imgSrc={serie.img_src}
				link={"series/details/" + serie.id_serie}
				btnText="Voir"
			>
				<p className="card-text" style={{ textAlign: "justify" }}>
					{serie.summary}
				</p>
			</Card>
		</>
	);
}

SerieCard.propTypes = {
	serie: PropTypes.shape({
		id_serie: PropTypes.number.isRequired,
		title: PropTypes.string,
		summary: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
	}),
};

export default SerieCard;
