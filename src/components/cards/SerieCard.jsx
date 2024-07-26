import PropTypes from "prop-types";

function SerieCard(props) {
	const { serie } = props;
	return (
		<>
			<div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch justify-content-center">
				<div className="card mb-3" style={{ width: "18rem" }}>
					<img src={serie.img_src} className="card-img-top" alt={serie.title} />
					<div className="card-body text-center">
						<h5 className="card-title">{serie.title}</h5>
						<p className="card-text" style={{ textAlign: "justify" }}>
							{serie.summary}
						</p>
						<a
							href={"series/details/" + serie.id_serie}
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
