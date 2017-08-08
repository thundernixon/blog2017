import React from 'react';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';

import Link from '../components/Link';
// import Tags from '../components/Tags';


import '../css/index.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {/* <Tags /> */}
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Link to={post.frontmatter.path}>
              <div className="blog-post-preview" key={post.id}>
                <h2 className="date">
                  {post.frontmatter.date}
                </h2>
                <h1 className="title">
                  <GatsbyLink to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </GatsbyLink>
                </h1>
                
                <p>
                  {post.excerpt}
                </p>
                <Link className="link--fill" to={post.frontmatter.path}>Read more</Link>
              </div>
            </Link>
          );
        })}
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
          }
        }
      }
    }
  }
`;
