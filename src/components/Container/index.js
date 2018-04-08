import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	@media only screen and (max-width: 960px) {
		margin: 0 80px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0 40px;
	}
`;

class Container extends Component {
	render() {
		return <StyledContainer>{this.props.children}</StyledContainer>;
	}
}

Container.propTypes = {};

export default Container;
