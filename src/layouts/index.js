import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Tags from '../components/Tags';
import Icons from '../components/Icons';
import SocialIcon from '../components/SocialIcon';

import '../css/_vars.scss';
import '../css/basics.scss';
import '../css/icons.css';
import '../css/header.css';
import '../css/typography.scss';
import '../css/index.scss';
import '../css/link.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';
    const isTags = location.pathname.includes('/tags');
    const is404 = location.pathname === '/404';

    return (
      <div
        style={{
          background: (isRoot || isTags) ? `$off-white`  :  (is404) ? `#000` : `white`,
          minHeight: `100%`,
        }}
      >
        <Helmet
          title="Stephen Nixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div
          className="header"
          style={{
            background: `black`,
          }}
        >
          <div
            className="header-inner"
            style={{
              margin: `0 auto`,
              width: `100%`,
              maxWidth: 1600,
            }}
          >
            <h1>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Stephen Nixon
              </Link>
            </h1>
            <Icons />
            <ul style={{}}>
              <li style={{}}>
                <a
                  title="Instagram"
                  className="social-link"
                  href="https://instagram.com/thundernixon"
                  style={{}}
                >
                  <SocialIcon icon={'ig-icon'} />
                </a>
              </li>
              <li style={{}}>
                <a
                  title="Twitter"
                  className="social-link"
                  href="https://twitter.com/thundernixon"
                  style={{}}
                >
                  <SocialIcon icon={'twitter-icon'} />
                </a>
              </li>
              <li style={{}}>
                <a
                  title="GitHub"
                  className="social-link"
                  href="https://github.com/thundernixon/blog2017"
                  style={{}}
                >
                  <SocialIcon icon={'github-icon'} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="page-content"
          style={{
            margin: `0 auto`,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
