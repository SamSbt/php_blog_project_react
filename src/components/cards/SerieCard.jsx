import PropTypes from "prop-types";
import Card from "./Card";

function SerieCard(props) {
	const { data } = props;
	return (
		<>
			<Card
				title={data.title}
				imgSrc={data.img_src}
				link={"/series/details/" + data.id_serie}
				btnText="Voir"
			>
				<p className="card-text" style={{ textAlign: "justify" }}>
					{data.summary}
				</p>
			</Card>
		</>
	);
}

SerieCard.propTypes = {
	data: PropTypes.shape({
		id_serie: PropTypes.number.isRequired,
		title: PropTypes.string,
		summary: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
	}),
};

export default SerieCard;
