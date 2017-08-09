import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Tags from '../components/Tags';
import Icons from '../components/Icons';
import SocialIcon from '../components/SocialIcon';

import '../css/basics.css';
import '../css/icons.css';
import '../css/header.css';
import '../css/typography.css';
import '../css/index.css';


export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div
      style={{
            background: isRoot ? `#f3f3f3` : `white`,
          }}
      >
        <Helmet
          title="Stephen Nixon"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="header"
          style={{
            background: `black`,
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              width: `100%`,
              maxWidth: 1600,
              padding: `0 1em`,
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
              <ul
                style={{
                  
                }}
              >
                <li
                  style={{
                    display: 'inline',
                  }}
                >
                  <a title="Instagram" className="sans-serif bold" href="https://instagram.com/thundernixon"
                    style={{
                    
                    }}
                  >
                    <SocialIcon icon={'ig-icon'} /> 
                  </a>
                </li>
                <li
                    style={{
                      display: 'inline',
                    }}
                >
                  <a title="Twitter" className="sans-serif bold" href="https://twitter.com/thundernixon"
                    style={{
                    }}
                  >
                    <SocialIcon icon={'twitter-icon'} />
                  </a>
                </li>
                <li
                    style={{
                      display: 'inline',
                    }}
                >
                  <a title="GitHub" className="sans-serif bold" href="https://github.com/thundernixon"
                    style={{
                    }}
                  >
                  <SocialIcon icon={'github-icon'} /> </a>
                </li>
              </ul>


            
          </div>
          
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            padding: `0px 1rem 1em`,
            paddingTop: 0,
          }}
        >
        
          {this.props.children()}
        </div>        
      </div>
    );
  }
}
