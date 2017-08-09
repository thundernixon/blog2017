import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Tags from '../components/Tags';

import '../css/basics.css';
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
        <div
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
              padding: `1em 1em`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: `.85rem` }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Stephen Nixon
              </Link>
              <ul
                style={{
                  color: 'white',
                  float: 'right',
                  display: 'inline-block',
                  listStyle: 'none',
                }}
              >
                <li
                  style={{
                    display: 'inline',
                  }}
                >
                  <a href="https://instagram.com/thundernixon"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '.5em',
                    }}
                  >Instagram</a>
                </li>
                <li
                    style={{
                      display: 'inline',
                    }}
                >
                  <a href="https://twitter.com/thundernixon"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '.5em',
                    }}
                  >Twitter</a>
                </li>
                <li
                    style={{
                      display: 'inline',
                    }}
                >
                  <a href="https://github.com/thundernixon"
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      padding: '.5em',
                      paddingRight: '0',
                    }}
                  >GitHub</a>
                </li>
              </ul>
            </h1>


            
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
