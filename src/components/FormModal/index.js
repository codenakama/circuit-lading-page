import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import Button from "../Button";
import ReactModal from "react-modal";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

const Label = styled.label`
	display: block;
`;

const Close = styled.i`
	color: #b5bac6;
	:hover {
		cursor: pointer;
	}
`;
const FormModal = ({ isOpen, handleCloseModal, ...props }) => {
	return (
		<ReactModal
			isOpen={isOpen}
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
				<Box w={[1, 1 / 2, 1 / 2]}>
					<form
						acceptCharset="UTF-8"
						action="https://formkeep.com/f/f82fc670f442"
						method="POST"
						id="signup"
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
							/>
						</Flex>

						<Button solid>Submit</Button>
					</form>
				</Box>
			</Flex>
		</ReactModal>
	);
};

FormModal.propTypes = {};

export default FormModal;
