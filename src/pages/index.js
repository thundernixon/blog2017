import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/Link';
import Hello from '../components/Hello';

import '../css/blog-post.scss';
import '../css/index.scss';
import '../css/basics.scss';
import '../css/link.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      
      <div className="blog-posts">
        <h1 className="serif italic tag-header">
          Notes on <GatsbyLink to="/tags/design">design</GatsbyLink>,{' '}
          <GatsbyLink to="/tags/travel">travel</GatsbyLink>,{' '}
          <GatsbyLink to="/tags/typemedia">TypeMedia</GatsbyLink>, &amp;&nbsp;<GatsbyLink to="/tags">more</GatsbyLink>.
        </h1>
        {posts
          .filter(post => post.node.frontmatter.publish === true)
          .map(({ node: post }) => {
            return (
              <GatsbyLink
                to={post.frontmatter.path}
                className="blog-post-preview link"
                key={post.id}
              >
                <h2 className="date">
                  {post.frontmatter.date}
                </h2>
                <h1 className="title serif-display">
                  {post.frontmatter.title}
                </h1>
                <p>
                  {post.excerpt}
                </p>
                <p className="link--fill sans-serif">Read more</p>
              </GatsbyLink>
            );
          })}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            publish
          }
        }
      }
    }
  }
`;
