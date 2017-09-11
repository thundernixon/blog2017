import React from 'react';

import GatsbyLink from 'gatsby-link';

import '../css/tags.scss';
import '../css/index.scss';
import '../css/basics.scss';
import '../css/about.scss';

export default () =>

  <div className="fourohfour bold">
    <h1 className="serif-display italic error-1">Error 404</h1>
    <h1 className="serif-display italic error-2">Error 404</h1>
    <div className="blog-posts">
      <p>Sorry, no page exists at this URL.</p>
      <p>
        {' '}Perhaps you’d like to see a{' '}
        <GatsbyLink to="/tags">list of topics</GatsbyLink>, or go back to the{' '}
        <GatsbyLink to="/">homepage</GatsbyLink>?
      </p>
    </div>
  </div>;
