import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Tags from '../components/Tags';
import Icons from '../components/Icons';
import SocialIcon from '../components/SocialIcon';
import AboutModal from '../components/AboutModal.js';
// import Hello from '../components/Hello';

import MdInfoOutline from 'react-icons/lib/md/info-outline';


// require('prismjs/themes/prism-solarizedlight.css')

import '../css/basics.scss';
import '../css/icons.css';
import '../css/header.scss';
import '../css/typography.scss';
import '../css/index.scss';
import '../css/link.css';
import '../css/prismjs.scss';

const StyledAboutModal = styled(AboutModal)``;

const PageContent = styled.div`
      ${StyledAboutModal}:hover & {
        position: fixed;
      }
`;

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';
    const isAbout = location.pathname === '/about';
    const isTags = location.pathname.includes('/tags');

    return (
      <div
        style={{
          background:
            isRoot || isTags || isAbout
              ? `rgba(235,21,255,.025)` : 'white',
          minHeight: `100%`,
        }}
      >
        <Helmet
          title="Stephen Nixon’s Design Blog"
          meta={[
            { name: 'description', content: 'Notes and photos about design, travel, TypeMedia, and more.' },
            { name: 'keywords', content: 'Stephen Nixon, design, code, type, lettering, photography' },
          ]}
        />
        <div
          className="header"
          style={{
            background: `transparent`,
          }}
        >
          <div
            className="header-inner"
            style={{
              margin: `0 auto`,
              width: `100%`,
              maxWidth: 2000,
            }}
          >
            <Icons />
            <div className="site-nav"
              style={{
                display:`flex`,
                alignItems: `center`,
              }}>
              <h1>
                <Link
                  to="/"
                  style={{
                    color: '#222',
                    textDecoration: 'none',
                  }}
                >
                  Stephen Nixon
                </Link>
              </h1>
              {/* <Link to="/about" className="about">
                <SocialIcon className="social-link" icon={'info-icon'} />
              </Link> */}

              <AboutModal />
            </div>
            
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
        <PageContent
          className="page-content"
          style={{
            margin: `0 auto`,
          }}
        >
          {this.props.children()}
        </PageContent>
        {/* <MdInfoOutline /> */}
      </div>
    );
  }
}
