import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../Container";
import { Jumbo } from "../Typography";
import Button from "../Button";

const Header = styled.header`
	margin-top: 2em;
	margin-bottom: 4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Layout = ({ children, handleOpenModal, ...props }) => {
	return (
		<Fragment>
			<Container>
				<Header>
					<Jumbo color="#B5BAC6">Circuit</Jumbo>
					<Button solid onClick={handleOpenModal}>
						SIGN UP FOR EARLY ACCESS
					</Button>
				</Header>
			</Container>
			{children}
		</Fragment>
	);
};

Layout.propTypes = {};

export default Layout;
