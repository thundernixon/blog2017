// import React from 'react';
import React, { Component } from 'react';
import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

// import '../css/hello.css';

// import HelloFunc from './HelloFunc';

   const Container = styled.div`
    background: white;
    padding: 2.25rem;
    // position: fixed;

  `;
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: purple;
  `;

// export default function Hello() {
class Hello extends Component {

  componentDidMount() {
    'Hello I am Stephen'.split(' ').map((word, index) => 
      <span key={`${index}`}>
        {word}
      </span>
    )
  }
  render() {
    return (
      <Container className="container">
        <p className="hand">👋</p>
        <Title className="touch">tap here</Title>
        <p className="greeting" ref="greetingtext">
          Hi there! My name is Stephen Nixon. I am a designer in the KABK
          type]media class of 2018. Recently, I was designing and building
          websites and brand tools at IBM Watson. I am @thundernixon on Twitter,
          Instragram, CodePen, and GitHub. Come say hello! 👋
        </p>
        {/* <HelloFunc /> */}
      </Container>
    );
  }
}

export default Hello