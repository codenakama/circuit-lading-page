import { Flex } from "grid-styled";
import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button";
import Container from "../Container";
import { Jumbo } from "../Typography";

const Header = styled.header`
	margin-top: 2em;
	margin-bottom: 4em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	@media only screen and (max-width: 480px) {
	}
`;

const Logo = styled.img`
	width: 3em;
	height: 3em;
	border: 1px solid #1a1f2b;
	border-radius: 1.5em;
	margin-right: 1em;
`;

const Layout = ({ children, handleOpenModal, ...props }) => {
	return (
		<Fragment>
			<Container>
				<Header>
					<Jumbo color="#FF9151">Circuit</Jumbo>
					<Button solid onClick={handleOpenModal}>
						SIGN UP FOR EARLY ACCESS
					</Button>
				</Header>
			</Container>
			{children}
			<footer style={{ color: "#B5BAC6" }}>
				<Flex justify="space-around" align="center" my={3}>
					<a href="https://www.instagram.com/iamricardo_o/" target="_blank">
						<i class="fab fa-instagram fa-2x" />
					</a>
					<a href="https://twitter.com/codenakama" target="_blank">
						<i class="fab fa-twitter-square fa-2x" />
					</a>
					<Flex align="center">
						<a href="https://itsricardo.com" target="_blank">
							<Logo src="images/codenakama.svg" />
						</a>
						by Codenakama
					</Flex>
				</Flex>
			</footer>
		</Fragment>
	);
};

Layout.propTypes = {};

export default Layout;
