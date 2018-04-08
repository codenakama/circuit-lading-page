import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.a`
	border: 1px solid #b5bac6;
	padding: 0.5em 1em;
	color: #fff;
	background-color: ${props => (props.solid ? "#b5bac6" : null)};
	opacity: 0.8;
	transition: opacity 0.2s ease-in;
	:hover {
		opacity: 1;
	}
`;

const Button = ({ children, ...props }) => {
	return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {};

export default Button;
