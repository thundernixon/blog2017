import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Tags from '../components/Tags';

import '../css/typography.css';

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  };

  render() {
    const { location } = this.props;

    const isRoot = location.pathname === '/';

    return (
      <div>
        <Helmet
          title="Stephen Starter"
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
              padding: `1rem 1rem`,
            }}
          >
            <h1 style={{ margin: 0, fontSize: `2rem` }}>
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
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 1600,
            padding: `0px 1rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
