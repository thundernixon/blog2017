import React, { Component } from 'react';
import styled from 'styled-components';

const About = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top:0;
    left:0;
    background: rgba(56.9%, 8.2%, 100%,.9);
    font-size: 1.5em;
    text-align: center;
    color: white;
  `;


class AboutModal extends Component {
  constructor(props) {
      super(props);
      this.state = {showModal: false};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

  handleClick() {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
    console.log('The link was clicked.');
  }

  render() {

    const modal = (
      <About className="overlay">
        <p>
          Hello, my name is Stephen Nixon. 
        </p> 
        <button className='button' onClick={this.handleClick}>X
            {/* {this.state.showModal ? 'ON' : 'OFF'}  */}
        </button>
      </About>
    );
    return (
        <div className="about">
          <button className='button' onClick={this.handleClick}>About
            {/* {this.state.showModal ? 'ON' : 'OFF'}  */}
          </button>
            {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default AboutModal;
