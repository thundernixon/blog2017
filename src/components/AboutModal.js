import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import MdClose from 'react-icons/lib/md/close';

import '../css/about.scss';
import '../css/basics.scss';


import SocialIcon from '../components/SocialIcon';

const About = styled.div`
    z-index: 1000;
    opacity: 0.999;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: fixed;
    display: block;
    top:0;
    left:0;
    background: linear-gradient(74deg, rgba(93, 0, 181, 0.85) 0%, rgba(143, 23, 255, .95) 40%, rgba(255,149,123,.9) 96%);
    font-size: 1.5em;
    color: white;
    text-shadow: 2px 2px 15px rgba(49, 0, 96,1);
    animation:  fade-in .75s ease forwards;
    
    p {
      text-align: left;
      margin-bottom: 1em;
      padding: .1em;
      &:last-of-type {
        margin-bottom:0;
      }
    }
    a {
      padding: 0;
      color: inherit;

      &:hover {
        color: rgba(93, 0, 181,1);
        text-shadow: 2px 2px 5px white, -2px -2px 5px white;
      }
    }
    hr {
      background: white;
    }
  `;



const AboutInner = styled.div`
    max-width: 60rem;
    margin: 0 auto;
    padding: 5vw 5vw 15vw;
    overflow-x: hidden;

    @media (min-width: 1040px) {
        max-width: 75vw;
        padding: calc(5vw + 54px) 0 10vw;
    }
    
`;

const Colophon = styled.div`
      max-width: 39rem;
      margin: 0 auto;
      text-align: left;
      
      @media (min-width: 660px) {
        padding: 1vw 2.25rem 10vw;
      }
`;

const OpenAbout = styled.div`
    cursor: pointer;
    display: ${props => props.display};
    @media (min-width: 1040px) {
        position: fixed;
        bottom: 2.25rem;
        left: 2.25rem;
    }
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    align-items: center;
    justify-content: center;
    transition: .25s ease;
    will-change: transform;
    svg {
        transition: .5s ease;
      }
    &:hover {
      background: white;
      color: rgba(255,255,255,1);
      box-shadow: 0px 5px 25px rgba(145, 21, 255, 0.4);
      transform: scale(1.25);

      svg {
        transform: rotateY(360deg);
      }
    }
  `;

  const CloseAbout = OpenAbout.extend`
    display: flex;
    margin: 2rem auto 0.5rem ;
    @media (min-width: 1040px) {
      margin: 0;
    }
    &:hover {
      background: #FF6A37;
      color: rgba(255,255,255,1);
      box-shadow: 0px 5px 25px rgba(0,0,0, 0.4);
      transform: scale(1);

      svg {
        transform: rotate(180deg);
      }
    }
  `;

// let showModal = false;

class AboutModal extends Component {
  // step 1: bind it
  constructor(props) {
      super(props);
      this.state = {showModal: false};
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  }

  render() {

    const modal = (
      <About className="about-container">
        <CloseAbout title="Close Info" onClick={this.handleClick}>
          <MdClose />
        </CloseAbout>
        <AboutInner className="f-xl italic bold">
          <p>
            Hi, my name is Stephen Nixon. 
          </p>  
          <p> 
            I love type, lettering, code, and making new things with technology. I am a student in <a href="http://new.typemedia.org/" target="_blank">KABK TypeMedia</a>, a one-year masters program for type design. Previously, I was designing and building websites and brand tools at IBM Watson. 
          </p>  
          <p>  
            I am @thundernixon on <a href="https://twitter.com/thundernixon">Twitter</a>, <a href="https://instagram.com/thundernixon">Instagram</a>, <a href="https://codepen.io/thundernixon">CodePen</a>, and <a href="https://github.com/thundernixon">GitHub</a>. 
          </p>
          <p>
            Come say hello! <span className="roman hand-emoji">👋</span>
          </p>
          <Colophon className="sans-serif roman f-body">
            <hr/>
            <h2 className="f-h4">Colophon</h2>
            <p>
              This site is built with the <a href="https://github.com/DSchau/gatsby-blog-starter-kit">gatsby-blog-starter-kit</a>, which is in turn built on <a href="https://www.gatsbyjs.org">GatsbyJS</a>. Big thanks goes out to <a href="https://dustinschau.com">Dustin Schau</a> for making the Gatsby blog starter kit and for helping me to fix a date-formatting issue that was showing up on the tag pages of this blog.
            </p>
            <p>
              This site is hosted on <a href="https://www.netlify.com/">Netlify</a>, which is a joy to use, especially if you've ever launched static sites on a cloud PaaS (platform as a service) or wrestled with a budget web host.
            </p>
            <p>
            Serif type is <a href="https://www.rosettatype.com/Eskorte">Eskorte</a>, designed by Elena Schneider and published by the Rosetta Type Foundry. Sans serif type is <a href="http://www.type-together.com/Ebony">Ebony</a>, designed by Veronika Burian & José Scaglione and published by typetogether. Fonts hosted on <a href="typekit.com">Adobe TypeKit</a>.
            </p>
          </Colophon>
        </AboutInner>
        
        
      </About>
    );
    return (
        <div className="about">

          <OpenAbout title="Learn About Me" display={this.state.showModal ? "none" : "flex"} className='button' onClick={this.handleClick}>
            <SocialIcon  className="social-link" icon={'info-icon'} />
          </OpenAbout>

            {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default AboutModal;
