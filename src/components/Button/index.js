import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
	border: none;
	font-size: 1em;
	padding: 0.5em 1em;
	color: #fff;
	background-color: ${props => (props.solid ? "#FF9151" : null)};
	opacity: 0.8;
	transition: opacity 0.2s ease-in;
	:hover {
		opacity: 1;
	}
`;

const StyledButtonLink = StyledButton.withComponent("a");

const Button = ({ children, href, ...props }) => {
	if (href) {
		return (
			<StyledButtonLink href={href} {...props}>
				{children}
			</StyledButtonLink>
		);
	}
	return <StyledButton {...props}>{children}</StyledButton>;
};

Button.propTypes = {};

export default Button;
