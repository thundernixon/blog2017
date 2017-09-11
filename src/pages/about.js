import React from 'react';
import BackIcon from 'react-icons/lib/fa/chevron-left';

import Link from 'gatsby-link';

import '../css/tags.scss';
import '../css/index.scss';
import '../css/basics.scss';
import '../css/about.scss';

export default () =>

  <div className="fourohfour bold ">
    <h1 className="serif-display italic error-1">Hello</h1>
    <h1 className="serif-display italic error-2">Hello</h1>
    <div className="sans-serif blog-posts about-content">
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
      <Link to="/" className="sans-serif no-underline bold accent">
        <BackIcon
          style={{
            height: '1rem',
            marginRight: '.5rem',
          }}
        />
        Return home
      </Link>
    </div>
    
  </div>;
