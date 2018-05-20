import { Box, Flex } from "grid-styled";
import React, { Component } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import Button from "../components/Button";
import Container from "../components/Container";
import FormModal from "../components/FormModal";
import Layout from "../components/Layout";
import { Caption, SubTitle, Title } from "../components/Typography";

const Line = styled.div`
  border: 6px solid #b5bac6;
`;

const BoxLeft = styled(Box)`
  background: #fdbb9e;
  padding: 2em;
  height: 480px;
`;

const BoxRight = styled(Box)`
  background: url(images/push.jpg) no-repeat center center;
  background-size: cover;
  height: 480px;
`;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
    ReactGA.event({
      category: "User",
      action: "Closed early access modal"
    });
  };

  handleOpenModal = e => {
    e.preventDefault();
    this.setState({ showModal: true });
    ReactGA.modalview("early-access-modal-open");
    ReactGA.event({
      category: "User",
      action: "Opened early access modal"
    });
  };

  render() {
    return (
      <Layout handleOpenModal={this.handleOpenModal}>
        <Container>
          <Box mb={6}>
            <Box mb={3}>
              <Title>Learn Music Production</Title>
            </Box>
            <Box mb={3} w={[1, 1 / 2, 1 / 2]}>
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
        <Flex wrap>
          <BoxLeft w={[1, 1 / 2, 1 / 2]}>
            <Box mb={3}>
              <Title>Focus on your device</Title>
            </Box>
            <Box mb={3}>
              <p>
                Circuit is an online platform with exercises designed to
                interact natively with the devices you already own. It helps you
                practise, learn music concepts and how to operate your midi
                instruments to become a power user and ease your music
                production workflow.
              </p>
            </Box>
            <Box mb={3}>
              <p>Nothing to install. Just plug and play!</p>
            </Box>
            <Button solid onClick={this.handleOpenModal}>
              SIGN UP FOR EARLY ACCESS
            </Button>
          </BoxLeft>
          <BoxRight w={[1, 1 / 2, 1 / 2]} />
        </Flex>
        <FormModal
          isOpen={this.state.showModal}
          handleCloseModal={this.handleCloseModal}
        />
      </Layout>
    );
  }
}

HomeScreen.propTypes = {};

export default HomeScreen;
