import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import MdClose from 'react-icons/lib/md/close';

import '../css/about.scss';


import SocialIcon from '../components/SocialIcon';

const About = styled.div`
    z-index: 100;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    position: fixed;
    display: block;
    top:0;
    left:0;
    background: linear-gradient(74deg, rgba(93, 0, 181, 0.85) 0%, rgba(0,0,255,.8) 70%);
    font-size: 1.5em;
    text-align: center;
    color: white;
    transform-origin: bottom left;
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
      box-shadow: 0px 5px 25px rgba(56.9%, 8.2%, 100%,.4);
      transform: scale(1.25);

      svg {
        transform: rotateY(360deg);
      }
    }
  `;

  const CloseAbout = OpenAbout.extend`
    
    
    display: flex;
    &:hover {
      background: #FF6A37;
      color: rgba(255,255,255,1);
      box-shadow: 0px 2px 25px rgba(255,255,255,1);
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
      <About className="overlay about-content">
        <p>
        Hello, my name is Stephen Nixon. 
      </p>  
      <p> 
        I am a designer who loves type, lettering, and making new things with technology. Currently, I am in the KABK TypeMedia class of 2018, a one-year masters program for type design. Previously, I was designing and building websites and brand tools at IBM Watson. 
      </p>  
      <p>  
        I am @thundernixon on <a href="https://twitter.com/thundernixon">Twitter</a>, <a href="https://instagram.com/thundernixon">Instagram</a>, <a href="https://codepen.io/thundernixon">CodePen</a>, and <a href="https://github.com/thundernixon">GitHub</a>. 
      </p>
      <p>
        Come say hello! 👋
      </p>
      <hr/>
      <div className="colophon serif regular body">
        <h2 className="f-body">Colophon</h2>
        <p>
          This site is built with the <a href="https://github.com/DSchau/gatsby-blog-starter-kit">gatsby-blog-starter-kit</a>, which is in turn built on <a href="https://www.gatsbyjs.org">GatsbyJS</a>. Big thanks goes out to <a href="https://dustinschau.com">Dustin Schau</a> for making the Gatsby blog starter kit, and for helping fix an issue that was showing up on the tag pages of this blog.
        </p>
        <p>
          This site is hosted on <a href="https://www.netlify.com/">Netlify</a>, which is seriously a joy to use, especially if you've ever wrestled with a budget host, or launched static sites on a cloud PaaS (platform as a service).
        </p>
        <p>
          Serif type is <a href="https://www.rosettatype.com/Eskorte">Eskorte</a>, by Elena Schneider and at the Rosetta Type Foundry. Sans serif type is <a href="http://www.type-together.com/Ebony">Ebony</a>, by Veronika Burian & José Scaglione at typetogether.
        </p>
      </div>
      
        <CloseAbout showing className='button' onClick={this.handleClick}>
          <MdClose />
        </CloseAbout>
      </About>
    );
    return (
        <div className="about">

          <OpenAbout display={this.state.showModal ? "none" : "flex"} className='button' onClick={this.handleClick}>
            <SocialIcon className="social-link" icon={'info-icon'} />
          </OpenAbout>

            {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default AboutModal;
