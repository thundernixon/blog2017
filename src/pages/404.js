import React from 'react';

import GatsbyLink from 'gatsby-link';

import '../css/tags.scss';
import '../css/index.scss';
import '../css/basics.scss';
import '../css/fourohfour.scss';

export default () =>

  <div className="fourohfour bold">
    <h1 className="serif-display italic error-1">Erratum CDIV</h1>
    <h1 className="serif-display italic error-2">Erratum CDIV</h1>
    <p>Sorry, no page exists at this URL.</p>
    <p>
      {' '}Perhaps you’d like to see a{' '}
      <GatsbyLink to="/tags">list of topics</GatsbyLink>, or go back to the{' '}
      <GatsbyLink to="/">homepage</GatsbyLink>?
    </p>
  </div>;
