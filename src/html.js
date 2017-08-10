import React from 'react';
import PropTypes from 'prop-types';



const BUILD_TIME = new Date().getTime();

export default class HTML extends React.Component {
  static propTypes = {
    body: PropTypes.string,
  };

  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require('!raw!../public/styles.css'),
          }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="apple-touch-icon" sizes="120x120" href="static/favicon/apple-touch-icon.png">
          <link rel="icon" type="image/png" href="static/favicon/favicon-32x32.png" sizes="32x32">
          <link rel="icon" type="image/png" href="static/favicon/favicon-16x16.png" sizes="16x16">
          <link rel="manifest" href="static/favicon/manifest.json">
          <link rel="mask-icon" href="static/favicon/safari-pinned-tab.svg" color="#000000">
          <meta name="theme-color" content="#000">
          
          {this.props.headComponents}
          {css}
          
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        
        
        </body>
        
      </html>
    );
  }
}

