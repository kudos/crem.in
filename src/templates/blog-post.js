import React from 'react';
import Helmet from 'react-helmet';

import Blurb from '../components/Blurb';
import Recent from '../components/Recent';

import '../css/blog-post.css';

export default function Template({ data, pathContext }) {
  const { markdownRemark: post } = data;
  const { posts } = pathContext;
  return (
    <div className="blog-post-container">
      <Helmet title={`Jonathan Cremin - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h2 className="title">
          {post.frontmatter.title}
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
      <hr />
      <Blurb />
      <hr />
      <Recent posts={posts} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
