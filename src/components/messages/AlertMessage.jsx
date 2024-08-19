import PropTypes from "prop-types";

const AlertType = Object.freeze({
	PRIMARY: "primary",
	SECONDARY: "secondary",
	SUCCESS: "success",
	DANGER: "danger",
	WARNING: "warning",
	INFO: "info",
	LIGHT: "light",
	DARK: "dark",
});

function AlertMessage(props) {
	const {
		type = AlertType.PRIMARY,
		dismissible = false,
		show = false,
		children,
		className,
		closeFn,
	} = props;

	return (
		<div
			className="d-flex justify-content-center w-100 mt-5 position-absolute start-0"
			style={{ zIndex: 1000 }}
		>
			<div
				role="alert"
				className={`alert alert-${type} fade 
                            ${dismissible ? "alert-dismissible" : ""} 
                            ${show ? "show" : ""} ${className || ""} pe-5`}
			>
				{children}
				{(dismissible || closeFn) && (
					<button
						onClick={() => {
							closeFn && closeFn();
						}}
						type="button"
						className="btn-close position-absolute end-0 top-0 p-2"
						data-bs-dismiss={dismissible && "alert"}
						aria-label="Close"
					></button>
				)}
			</div>
		</div>
	);
}

AlertMessage.propTypes = {
	type: PropTypes.oneOf(Object.values(AlertType)),
	dismissible: PropTypes.bool,
	show: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.element,
		PropTypes.string,
	]),
	className: PropTypes.string,
	closeFn: PropTypes.func,
};

export { AlertMessage, AlertType };
