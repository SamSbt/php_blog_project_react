function Contact() {
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
							></button>
						</div>
						<div className="modal-body">
							<form id="contactForm" method="POST" action="">
								<div className="mb-3">
									<label className="form-label" htmlFor="fullname">
										Name
									</label>
									<input
										className="form-control"
										name="fullname"
										type="text"
										placeholder="Name"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="email">
										Email Address
									</label>
									<input
										className="form-control"
										name="email"
										type="email"
										placeholder="Email Address"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label" htmlFor="message">
										Message
									</label>
									<textarea
										className="form-control"
										name="message"
										type="text"
										placeholder="Message"
										style={{ height: "10rem" }}
									></textarea>
								</div>
								<div className="mb-1 text-center">
									<button className="btn btn-success" name="send" type="submit">
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
export default Contact;
