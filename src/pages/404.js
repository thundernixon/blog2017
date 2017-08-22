import React from 'react';

import GatsbyLink from 'gatsby-link';

import '../css/tags.css';
import '../css/index.css';
import '../css/basics.css';
import '../css/fourohfour.css';

export default () =>
  <div className="fourohfour page-content">
    <h1 className="serif-display">Erratum CDIV</h1>
    <p>Sorry, no page exists at this URL.</p>
    <p> Perhaps you’d like to see a <GatsbyLink to="/tags">list of topics</GatsbyLink>, or go back to the <GatsbyLink to="/">homepage</ GatsbyLink>?</p>
  </div>;
