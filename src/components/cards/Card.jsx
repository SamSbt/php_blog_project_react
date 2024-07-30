import PropTypes from "prop-types";

function Card({children, title, imgSrc, link, btnText}) {
	return (
		<>
			<div className="col-12 col-md-6 col-lg-3 d-flex align-items-stretch justify-content-center">
				<div className="card mb-3" style={{ width: "18rem" }}>
					<img src={imgSrc} className="card-img-top" alt={title} />
					<div className="card-body text-center">
						<h5 className="card-title">{title}</h5>
						{children}
						<a href={link} className="btn btn-primary">
							{btnText}
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

Card.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
	]),
	title: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	btnText: PropTypes.string.isRequired,
};

export default Card;
