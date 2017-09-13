import React, { Component } from 'react';

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
      <div className="overlay">stuff here</div>
    );
    return (
        <div className="about">
          <button className='button' onClick={this.handleClick}>About
            {this.state.showModal ? 'ON' : 'OFF'} 
            {/* {this.state.showModal ? modal : ''} */}
          </button>
            {this.state.showModal ? modal : ''} 
        </div>
    );
  }
}

export default AboutModal;
