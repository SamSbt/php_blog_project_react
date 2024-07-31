import PropTypes from "prop-types";
import Card from "./Card";

function TechCard(props) {
	const { tech } = props;
	return (
		<>
			<Card
				title={tech.label}
				imgSrc={tech.img_src}
				link={"/techs/details/" + tech.id_tech}
				btnText="Voir"
			/>
		</>
	);
}

TechCard.propTypes = {
	tech: PropTypes.shape({
		id_tech: PropTypes.number.isRequired,
		label: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
	}),
};

export default TechCard;
