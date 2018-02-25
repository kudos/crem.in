import React from 'react';
import GatsbyLink from 'gatsby-link';

import Recent from '../components/Recent';

import '../css/index.css';
import '../css/monokai.css'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const post = posts[0];
  return (
    <div className="blog-posts">
      <div className="blog-post" key={post.node.id}>
        <h3>Latest Post</h3>
        <h2 className="title">
          <GatsbyLink to={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </GatsbyLink>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: post.node.html }} />
      </div>
      <Recent posts={posts} />
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          html
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
