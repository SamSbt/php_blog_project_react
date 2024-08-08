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

  AlertMessage.propTypes = {
		type: PropTypes.oneOf(Object.values(AlertType)),
		dismissible: PropTypes.bool,
		show: PropTypes.bool,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.element),
			PropTypes.element,
		]),
		className: PropTypes.string,
		closeFn: PropTypes.func,
	};
}

export {AlertMessage, AlertType};