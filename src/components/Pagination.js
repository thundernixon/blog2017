import React, { Component } from 'react';
import Link from 'gatsby-link';

class Pagination extends Component {
    return (
        <div className="navigation">
            if (prev.frontmatter.publish == true) {
                {prev &&
                    <Link className="link prev" to={prev.frontmatter.path}>
                    <BackIcon
                        style={{
                        height: '0.75rem',
                        position: 'relative',
                        top: '0.15rem',
                        }}
                    />
                    <p className="sans-serif">
                        {prev.frontmatter.title}
                    </p>
                    </Link>}
            }
            if (next.frontmatter.publish == true) {
                {next &&
                    <Link className="link next" to={next.frontmatter.path}>
                    <p className="sans-serif">
                        {next.frontmatter.title}
                    </p>
                    <ForwardIcon
                        style={{
                        height: '0.75rem',
                        position: 'relative',
                        top: '0.15rem',
                        }}
                    />
                </Link>}
            }
        </div>
    );
}

export default Pagination;