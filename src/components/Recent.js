import React from 'react';
import GatsbyLink from 'gatsby-link';
import moment from 'moment'

export default function Recent({ posts }) {
  return (
  	<div>
    	<h3>Recent Posts</h3>
      <ul>
      {posts
        .filter((post, index) => post.node.frontmatter.title.length > 0 && index < 4)
        .map(({ node: post }) => {
          return (
            <li key={post.id}>
              <GatsbyLink to={post.frontmatter.path}>
                {post.frontmatter.title}
              </GatsbyLink>
              <small> — {moment(post.frontmatter.date).format("Do MMM YYYY")}</small>
            </li>
          );
        })}
      </ul>
      <GatsbyLink to="/archive" style={{ float: 'right' }}>
        View More
      </GatsbyLink>
    </div>
  );
}


