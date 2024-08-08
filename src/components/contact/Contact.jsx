import { useRef } from "react";

function Contact() {
	const fullnameInputRef = useRef();
	const emailInputRef = useRef();
	const messageInputRef = useRef();
	const errorOutputRef = useRef();
	const closeBtnRef = useRef();

	const handleFormValidation = () => {
		const isValid = {
			fullname: false,
			email: false,
			message: false,
		};
		const fullnameValue = fullnameInputRef.current.value;
		isValid.fullname = fullnameValue.length >= 1;
		const emailValue = emailInputRef.current.value;
		const emailPattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
		isValid.email = emailPattern.test(emailValue);
		const messageValue = messageInputRef.current.value;
		isValid.message = messageValue.length >= 1;
		const formIsValid = Object.values(isValid).every((v) => v == true);
		let errorMessage = !isValid.fullname
			? "Nom incorrect (1 caractère minimum)."
			: !isValid.email
			? "Email incorrect (format d'email invalide)."
			: !isValid.message
			? "Message incorrect (1 caractère minimum)."
			: "";
		errorOutputRef.current.innerText = errorMessage;
		return formIsValid;
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const jsonData = Object.fromEntries(formData.entries());
		console.log(jsonData);
		//intégration func pr valider form avant envoi
		// si pas conforme, on envoie rien
		if (!handleFormValidation()) {
			console.log("Formulaire non valide");
			return;
		}

		const submitData = async () => {
			const url = "http://api.php-blog-project.loc/contact";
			const options = {
				method: "POST",
				body: JSON.stringify(jsonData),
			};
			const response = await fetch(url, options);
			console.log(response);
			if (!response.ok) {
				throw new Error("Erreur de réseau");
			}
			const json = await response.json();
			console.log(json.result);
			// si tout se passe bien on envoit grâce btn close
			closeBtnRef.current.click();
			// et on réinitialise les input
			fullnameInputRef.current.value = "";
			emailInputRef.current.value = "";
			messageInputRef.current.value = "";
		};
		submitData();
	};

	return (
		<>
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
							<form
								id="contactForm"
								onSubmit={handleFormSubmit}
								method="POST"
								action=""
								noValidate
							>
								<div className="mb-3">
									<label className="form-label" htmlFor="fullname">
										Name
									</label>
									<input
										className=""
										name="fullname"
										type="text"
										placeholder="Name"
										ref={fullnameInputRef}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="email">
										Email Address
									</label>
									<input
										className=""
										name="email"
										type="email"
										placeholder="Email Address"
										ref={emailInputRef}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="message">
										Message
									</label>
									<textarea
										className=""
										name="message"
										type="text"
										placeholder="Message"
										style={{ height: "10rem" }}
										ref={messageInputRef}
									></textarea>
								</div>
								<div className="mb-1 text-center">
									<button className="btn btn-success" name="send" type="submit">
										Envoyer
									</button>
									<br />
									<div className="text-danger mt-2" ref={errorOutputRef}></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Contact;
