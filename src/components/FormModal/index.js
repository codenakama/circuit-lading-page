import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Button from "../Button";
import ReactModal from "react-modal";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Title } from "../Typography";

const Label = styled.label`
	display: block;
`;

const Close = styled.i`
	color: #b5bac6;
	:hover {
		cursor: pointer;
	}
`;

class FormModal extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			formSubmitSuccess: false
		};
	}

	handleNameChange = value => {
		this.setState({ name: value });
	};

	handleEmailChange = value => {
		this.setState({ email: value });
	};

	handleSubmit = e => {
		e.preventDefault();

		var data = new FormData();
		data.append("name", this.state.name);
		data.append("email", this.state.email);

		fetch(
			"https://script.google.com/macros/s/AKfycbw-84e-uPPVl1wyvWQljrVVSkiQ85RCEkxgDDp-MHzYnbdRfw/exec",
			{
				method: "POST",
				body: data
			}
		)
			.then(() => this.setState({ formSubmitSuccess: true }))
			.catch(error => console.log(error));
	};

	render() {
		const { isOpen, handleCloseModal, ...props } = this.props;

		return (
			<ReactModal
				isOpen={isOpen}
				shouldCloseOnOverlayClick
				onRequestClose={handleCloseModal}
				contentLabel="Sing up for early access"
				style={{
					overlay: {
						backgroundColor: "rgba(26, 31, 43, 0.4)"
					}
				}}
			>
				<div onClick={handleCloseModal}>
					<Close className="fas fa-times-circle fa-2x" />
				</div>

				<Flex justify="center">
					<Box w={[1, 1 / 2, 1 / 2]} mt={2}>
						{!this.state.formSubmitSuccess && (
							<form
								acceptCharset="UTF-8"
								id="signup"
								onSubmit={this.handleSubmit}
							>
								<input type="hidden" name="utf8" value="✓" />
								<Flex flexDirection="column" wrap mb={2}>
									<Label for="name">Name</Label>

									<TextInput
										type="text"
										id="name"
										name="name"
										placeholder="Your name"
										required
										onChange={e => this.handleNameChange(e.target.value)}
									/>
								</Flex>
								<Flex flexDirection="column" wrap mb={3}>
									<Label for="email-address">Email Address</Label>
									<TextInput
										type="email"
										id="email-address"
										name="email"
										placeholder="example@domain.com"
										required
										onChange={e => this.handleEmailChange(e.target.value)}
									/>
								</Flex>

								<Button solid>Submit</Button>
							</form>
						)}
						{this.state.formSubmitSuccess && (
							<div>
								<Box mb={2}>
									<Title>Thank you!</Title>
								</Box>
								<p>
									When Circuit is ready we will make sure to let you know so you
									can be one of the first to try it. 😃
								</p>
							</div>
						)}
					</Box>
				</Flex>
			</ReactModal>
		);
	}
}

FormModal.propTypes = {};

export default FormModal;
