import React from 'react';
import Link from 'gatsby-link';

export default function Modal() {

    render() {
        const modal = ( 
            <div class='modal'>stuff here</div>
        );

        return (
            <div class='button' onClick={this.setState({showModal: true})}>About</div>
        {this.state.showModal ? modal : ''}
    );
    }
}