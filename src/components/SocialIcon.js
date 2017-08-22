import React from 'react';
import Link from 'gatsby-link';

export default function SocialIcon({ icon }) {
  return (
    <svg className={`icon ${icon}`}>
      <use xlinkHref={`#${icon}`} />
    </svg>
  );
}
