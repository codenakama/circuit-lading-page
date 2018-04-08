import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Heading = styled.h1`
	color: ${props => (props.color ? props.color : null)};
	font-weight: ${props => (props.light ? 300 : 700)};
	letter-spacing: 3px;
`;

export const Jumbo = Heading.extend`
	font-size: 42px;
	font-weight: 700;
`;

export const Title = Heading.withComponent("h2").extend`
    font-size 36px;
`;

export const SubTitle = Heading.withComponent("h2").extend`
    font-size 24px;
    font-weight: 300;
`;

export const Caption = styled.span`
font-size 12px;
`;
