import React from 'react';
import GatsbyLink from 'gatsby-link';

// import '../css/hello.css';

import HelloFunc from './HelloFunc';

export default function Hello() {
  return (
    <div className="container">
      <p className="hand">👋</p>
      <p className="touch">tap here</p>
      <p className="greeting">
        Hi there! My name is Stephen Nixon. I am a designer in the KABK
        type]media class of 2018. Recently, I was designing and building
        websites and brand tools at IBM Watson. I am @thundernixon on Twitter,
        Instragram, CodePen, and GitHub. Come say hello! 👋
      </p>
      <HelloFunc />
    </div>
  );
}
