import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import greetavi from "../assets/greetme.jpg";

const Styles = styled.div`
  .jumbo {
    background: #F5683D no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 150px;
    position: relative;
    z-index: 2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
  }
  .greeting {
    z-index: 4;
    max-height: 150px;
    margin-top: 0%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    left: 1;
  }
  .center {
    z-index: 4;
    max-height: 150px;
    width: auto;
    height: auto;
    position: relative;
    left: 175px;
  }`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo mb-0">
      <div classname="overlay"> </div>
      <Container>
      <img src={greetavi} alt="greeting" className = "greeting"/>
      <div className = "center">
        <h1>Welcome To My Website</h1>
      </div>
      </Container>
    </Jumbo>
  </Styles>
);
export default Jumbotron;
