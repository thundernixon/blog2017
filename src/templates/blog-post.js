import React from 'react';
import Helmet from 'react-helmet';
import styled, { keyframes } from 'styled-components';
import BackIcon from 'react-icons/lib/fa/chevron-left';
import ForwardIcon from 'react-icons/lib/fa/chevron-right';
import DefaultOG from '../assets/typefloundry-og.png';

import Link from '../components/Link';
import Tags from '../components/Tags';
// import Pagination from '../components/Pagination';

import '../css/_vars.scss';
import '../css/basics.scss';
import '../css/blog-post.scss';
import '../css/lists.scss';
import '../css/tags.scss';

const Dropcap = styled.div`
  position: absolute;
  font-size: 80vw;
  line-height: 0;
  color: rgba(145, 21, 255, 0.125);
  text-shadow: 0.5rem 0.25rem 0 rgba(255, 106, 55, 0.0625);
  pointer-events: none;
  z-index: 0;
  font-family: 'hobeaux-rococeaux', cursive;
  top: 20rem;
  @media (min-width: 640px) {
    margin-left: 2rem;
    font-size: 25em;
  }
`;

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { next, prev } = pathContext;
  return (
    <div className="blog-post-container">
      {/* <Helmet title={`${post.frontmatter.title}`} /> */}
      {/* <Helmet description={`${post.frontmatter.description}`} /> */}
      {/* <Helmet thumbnail={`${post.frontmatter.thumbnail}`} /> */}
      <Helmet>
        <title>{post.frontmatter.title}</title>
        <meta name="description" content={post.frontmatter.description} />
        {/* Facebook */}
        <meta property="og:title" content={post.frontmatter.title} />
        <meta
          property="og:description"
          content={post.frontmatter.description}
        />
        {/* if thumbnail, do this */}
        {/* <meta property="og:image" content={post.frontmatter.thumbnail} /> */}
        {/* else if no thumbnail, give a default one */}
        <meta
          property="og:image"
          content={'https://typefloundry.com' + DefaultOG}
        />
        {/*  */}
        <meta
          property="og:url"
          content={'https://typefloundry.com' + post.frontmatter.path}
        />

        {/* Twitter */}
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta
          name="twitter:description"
          content={post.frontmatter.description}
        />
        {/* <meta name="twitter:image" content={post.frontmatter.thumbnail} /> */}
        <meta
          name="twitter:image"
          content={'https://typefloundry.com' + DefaultOG}
        />

        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Dropcap className="blog-post-dropcap">
        {post.excerpt.charAt(0) == '…' ? '' : post.excerpt.charAt(0)}
      </Dropcap>
      <div className="blog-post">
        <h2 className="date"> {post.frontmatter.date} </h2>
        <h1 className="title serif-display"> {post.frontmatter.title} </h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: post.html
          }}
        />
        <Tags className="no-underline" list={post.frontmatter.tags || []} />
        <div className="navigation">
          {prev && (
            <Link className="link prev" to={prev.frontmatter.path}>
              <BackIcon
                style={{
                  height: '0.75rem',
                  position: 'relative',
                  top: '0.15rem'
                }}
              />
              <p className="sans-serif"> {prev.frontmatter.title} </p>
            </Link>
          )}
          {next && (
            <Link className="link next" to={next.frontmatter.path}>
              <p className="sans-serif"> {next.frontmatter.title} </p>
              <ForwardIcon
                style={{
                  height: '0.75rem',
                  position: 'relative',
                  top: '0.15rem'
                }}
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 20)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        tags
        title
        description
        thumbnail
        publish
      }
    }
  }
`;
