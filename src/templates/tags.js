import React from 'react';
import GatsbyLink from 'gatsby-link';
import BackIcon from 'react-icons/lib/fa/chevron-left';

import Link from '../components/Link';

import '../css/tags.scss';
import '../css/index.scss';
import '../css/basics.scss';

export default function Tags({ data, pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <ul className="list blog-posts">
          <h1 className="serif italic tag-header">
            {post.length} post{post.length === 1 ? '' : 's'} tagged with “{tag}”
          </h1>
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <li key={id} className="link">
                <GatsbyLink
                  to={frontmatter.path}
                  className="blog-post-preview link"
                  key={post.id}
                >
                  <h2 className="date">
                    {frontmatter.date}
                  </h2>
                  <h1 className="title serif-display">
                    {frontmatter.title}
                  </h1>
                  <p>
                    {excerpt}
                  </p>
                  <p className="link--fill sans-serif">Read more</p>
                </GatsbyLink>
              </li>
            );
          })}
        </ul>
        <Link to="/tags" className="sans-serif no-underline bold">
          <BackIcon
            style={{
              height: '1rem',
            }}
          />
          All topics
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1 className="serif italic tag-header">Topics</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`} className="serif-display bold tag">
                {tagName}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <Link to="/" className="sans-serif no-underline bold">
        <BackIcon
          style={{
            height: '1rem',
          }}
        />
        All posts
      </Link>
    </div>
  );
}