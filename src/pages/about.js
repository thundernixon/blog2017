import React from 'react';
import BackIcon from 'react-icons/lib/fa/chevron-left';

import Link from 'gatsby-link';

import '../css/tags.scss';
import '../css/index.scss';
import '../css/basics.scss';
import '../css/about.scss';
import '../css/blog-post.scss';

export default () =>

  <div className="fourohfour bold ">
    <h1 className="serif-display italic error-1">Hello</h1>
    <h1 className="serif-display italic error-2">Hello</h1>
    <div className="sans-serif blog-posts about-content f-1">
      <p>
        Hello, my name is Stephen Nixon. 
      </p>  
      <p> 
        I am a designer who loves type, lettering, and making new things with technology. Currently, I am a student in <a href="http://new.typemedia.org/" target="_blank">KABK TypeMedia</a>, a one-year masters program for type design. Previously, I was designing and building websites and brand tools at IBM Watson. 
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
          Serif type is <a href="https://www.rosettatype.com/Eskorte">Eskorte</a>, designed by Elena Schneider and published by the Rosetta Type Foundry. Sans serif type is <a href="http://www.type-together.com/Ebony">Ebony</a>, designed by Veronika Burian & José Scaglione and published by typetogether.
        </p>
      </div>
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
