import PropTypes from "prop-types";
import Card from "./Card";

function TechCard(props) {
	const { data } = props;
	return (
		<>
			<Card
				title={data.label}
				imgSrc={data.img_src}
				link={"/techs/details/" + data.id_tech}
				btnText="Voir"
			/>
		</>
	);
}

TechCard.propTypes = {
	data: PropTypes.shape({
		id_tech: PropTypes.number.isRequired,
		label: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
	}),
};

export default TechCard;
