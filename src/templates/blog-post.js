import React from 'react';
import Helmet from 'react-helmet';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';

import Link from '../components/Link';
import Tags from '../components/Tags';

import '../css/basics.scss';
import '../css/blog-post.scss';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <div className="blog-post-container">
      <Helmet title={`Stephen Nixon - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h2 className="date">
          {post.frontmatter.date}
        </h2>
        <h1 className="title serif-display">
          {post.frontmatter.title}
        </h1>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Tags className="no-underline" list={post.frontmatter.tags || []} />
        <div className="navigation">
          {prev &&
            <Link className="link prev" to={prev.frontmatter.path}>
              <BackIcon
                style={{
                  height: '.85em',
                }}
              />
              <p className="sans-serif">
                {prev.frontmatter.title}
              </p>
            </Link>}
          {next &&
            <Link className="link next" to={next.frontmatter.path}>
              <p className="sans-serif">
                {next.frontmatter.title}
              </p>
              <ForwardIcon
                style={{
                  height: '.85em',
                }}
              />
            </Link>}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
      }
    }
  }
`;
