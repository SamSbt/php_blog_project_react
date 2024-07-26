import PropTypes from "prop-types";

function TechCard(props) {
	const { tech } = props;
	return (
		<>
			<div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch justify-content-center">
				<div className="card mb-3" style={{ width: "18rem" }}>
					<img src={tech.img_src} className="card-img-top" alt={tech.label} />
					<div className="card-body text-center">
						<h5 className="card-title">{tech.label}</h5>
						<a
							href={"techs/details/" + tech.id_tech}
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

TechCard.propTypes = {
	tech: PropTypes.shape({
		id_tech: PropTypes.number.isRequired,
		label: PropTypes.string,
		img_src: PropTypes.string,
		is_deleted: PropTypes.bool,
	}),
};

export default TechCard;
