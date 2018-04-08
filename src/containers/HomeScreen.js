import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Layout from "../components/Layout";
import { Title, SubTitle, Caption } from "../components/Typography";
import Container from "../components/Container";
import Button from "../components/Button";

const Line = styled.div`
	border: 6px solid #b5bac6;
`;

const BoxLeft = styled(Box)`
	background: #fdbb9e;
	padding: 2em;
	height: 400px;
`;

const BoxRight = styled(Box)`
	background: url(images/push.jpg) no-repeat center center;
	background-size: cover;
	height: 400px;
`;

class HomeScreen extends Component {
	render() {
		return (
			<Layout>
				<Container>
					<Box mb={6}>
						<Box mb={3}>
							<Title>Learn Music Production</Title>
						</Box>
						<Box mb={3} w={1 / 2}>
							<Box mb={3}>
								<SubTitle color="#B5BAC6">With your Ableton Push</SubTitle>
							</Box>
							<Box mb={2}>
								<Line />
							</Box>
							<Caption>
								**Support for other devices to be added in future updates - e.g.
								MPC, Maschine, Novation Circuit.
							</Caption>
						</Box>
					</Box>
				</Container>
				<Flex>
					<BoxLeft w={1 / 2}>
						<Box mb={3}>
							<Title>Focus on your device</Title>
						</Box>
						<Box mb={3}>
							<p>
								With exercises designed to interact natively with the devices
								you already own, Circuit helps you practise, learn music
								concepts and how to operate your midi instruments to become a
								power user and ease your music making workflow.
							</p>
						</Box>
						<Button solid>SIGN UP FOR EARLY ACCESS</Button>
					</BoxLeft>
					<BoxRight w={1 / 2} />
				</Flex>
			</Layout>
		);
	}
}

HomeScreen.propTypes = {};

export default HomeScreen;
