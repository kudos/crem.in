import React from 'react';
import GatsbyLink from 'gatsby-link';
import moment from 'moment';

import '../css/archive.css';

export default function Archive({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="archive">
      <h2>Archive</h2>
      <ul>
      {posts
        .filter((post, index) => post.node.frontmatter.title.length > 0 && index > 0)
        .map(({ node: post }) => {
          return (
            <li>
              <GatsbyLink to={post.frontmatter.path}>
                {post.frontmatter.title}
              </GatsbyLink>
              <small> — {moment(post.frontmatter.date).format("Do MMM YYYY")}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export const pageQuery = graphql`
  query ArchiveQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
