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

const StepsSection = styled.section`
  background-color: #d0e2d4;
  padding: 2em;
`;

const StepImage = styled.img`
  display: inline-block;
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
          <Flex wrap>
            <Box mb={6} w={[1, 1, 1 / 2]} pr={[0, 4]} mb={3}>
              <Box>
                <Title>Learn Music Production</Title>
              </Box>
              <Box mb={3}>
                <Box mb={3}>
                  <SubTitle color="#B5BAC6">With your Ableton Push</SubTitle>
                </Box>
                <Box mb={2}>
                  <Line />
                </Box>
                <Caption>
                  **Support for other devices to be added in future updates -
                  e.g. MPC, Maschine, Novation Circuit.
                </Caption>
              </Box>
            </Box>
            <Box w={[1, 1, 1 / 2]} mb={3}>
              <Flex justify="center">
                <iframe
                  src="https://giphy.com/embed/20Bv2xvQHEnw9IzCdJ"
                  width="280"
                  height="170"
                  frameBorder="0"
                  class="giphy-embed"
                  allowFullScreen
                />
              </Flex>
            </Box>
          </Flex>
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
        <StepsSection>
          <Flex justify="center" mb={5}>
            <Title>Start learning in a few simple steps</Title>
          </Flex>
          <Flex justify="space-around" mb={5} flexWrap>
            <Box style={{ textAlign: "center" }} w={[1, 1 / 3]} mb={[3, 0]}>
              <Box mb={3}>
                <p>Go to</p>
              </Box>
              <StepImage src="/images/laptop.svg" />
            </Box>
            <Box style={{ textAlign: "center" }} w={[1, 1 / 3]} mb={[3, 0]}>
              <Box mb={3}>
                <p>Plug Your Ableton Push</p>
              </Box>
              <StepImage src="/images/push.svg" />
            </Box>
            <Box style={{ textAlign: "center" }} w={[1, 1 / 3]}>
              <Box mb={3}>
                <p>You are ready to start learning 🚀</p>
              </Box>
              <StepImage src="/images/preview.gif" />
            </Box>
          </Flex>
          <Flex justify="center">
            <Button solid onClick={this.handleOpenModal}>
              SIGN UP FOR EARLY ACCESS
            </Button>
          </Flex>
        </StepsSection>
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
