import { useEffect, useRef, useState } from "react";
import { AlertMessage, AlertType } from "../messages/AlertMessage";

function ModalContact() {
	const [formState, setFormState] = useState({
		fullname: "",
		email: "",
		message: "",
	});
	const [formErrors, setFormErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
	const [alertProps, setAlertProps] = useState({});
	const closeBtnRef = useRef();

	useEffect(() => {
		validateForm();
	}, [formState]);

	const validateForm = () => {
		const errors = {};
		if (formState.fullname.trim().length < 2) {
			errors.fullname = "Nom incorrect (2 caractères minimum).";
		}
		const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (!emailRegex.test(formState.email)) {
			errors.email = "Email incorrect (format d'email invalide).";
		}
		if (formState.message.trim().length < 3) {
			errors.message = "Message incorrect (3 caractères minimum).";
		}
		setFormErrors(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormState((oldState) => {
			console.log(name, value);
			return { ...oldState, [name]: value };
		});
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		const submitData = async () => {
			try {
				const url = "http://api.php-blog-project.loc/contact";
				const options = {
					method: "POST",
					body: JSON.stringify(formState),
				};
				const response = await fetch(url, options);
				console.log(response);
				if (!response.ok) {
					throw new Error("Erreur de réseau");
				}
				const json = await response.json();
				console.log(json.result);
				const alertMessage = (
					<span>
						Merci pour votre message {formState.fullname},<br />
						vous recevrez très prochainement une réponse à l&apos;adresse email
						indiquée : {formState.email}
					</span>
				);
				setAlertProps({
					type: AlertType.SUCCESS,
					show: true,
					children: alertMessage,
				});
				resetForm(true);
			} catch (error) {
				setAlertProps({
					show: true,
					children: "Une erreur est survenue lors de l'envoi du message.",
					type: AlertType.DANGER,
				});
				resetForm();
			}
		};
		submitData();
	};

		const getInputClass = (field) => {
			if (formState[field] === "") return "form-control";
			return formErrors[field]
				? "form-control is-invalid"
				: "form-control is-valid";
		};

	// fermer modal, reset form, et masquer l'alerte
	const resetForm = (reset = false) => {
		closeBtnRef.current.click();
		// si caché, user doit cliquer sur croix our faire disparaitre le message
	// 	setTimeout(() => {
	// 		setAlertProps({ show: false });
	// 		reset && setFormState({ fullname: "", email: "", message: "" });
	// 	}, 5000);
	};

	return (
		<>
				<AlertMessage
					closeFn={() => {
						setAlertProps({ show: false });
					}}
					{...alertProps}
				/>
			<div
				className="modal fade"
				id="myModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">
								Contactez-nous
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"
								ref={closeBtnRef}
							></button>
						</div>
						<div className="modal-body">
							<form id="contactForm" onSubmit={handleFormSubmit} noValidate>
								<div className="mb-3">
									<label className="form-label" htmlFor="fullname">
										Name
									</label>
									<input
										className={getInputClass("fullname")}
										name="fullname"
										type="text"
										placeholder="Name"
										value={formState.fullname}
										onChange={handleInputChange}
									/>
									{formErrors.fullname && (
										<div className="invalid-feedback">
											{formErrors.fullname}
										</div>
									)}
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="email">
										Email Address
									</label>
									<input
										className={getInputClass("email")}
										name="email"
										type="email"
										placeholder="Email Address"
										value={formState.email}
										onChange={handleInputChange}
									/>
									{formErrors.email && (
										<div className="invalid-feedback">{formErrors.email}</div>
									)}
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="message">
										Message
									</label>
									<textarea
										className={getInputClass("message")}
										name="message"
										placeholder="Message"
										style={{ height: "10rem" }}
										value={formState.message}
										onChange={handleInputChange}
									></textarea>
									{formErrors.message && (
										<div className="invalid-feedback">{formErrors.message}</div>
									)}
								</div>
								<div className="mb-1 text-center">
									<button
										className="btn btn-success"
										name="send"
										type="submit"
										disabled={!isFormValid}
									>
										Envoyer
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ModalContact;
