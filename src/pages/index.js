import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const { avatar, author } = data
    const posts = data.allMarkdownRemark.edges
    const latestPost = posts[0].node
    return (
      <Layout location={this.props.location} title={siteTitle} avatar={avatar} author={author}>
        <SEO />
        <Bio />
        <hr
          style={{
            marginBottom: rhythm(2),
          }}
        />
        <h4>
          Latest Post
        </h4>
        <div>
          <h3
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: `none` }} to={latestPost.fields.slug}>
              {latestPost.frontmatter.title || latestPost.fields.slug}
            </Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: latestPost.html }} />
        </div>
        <hr
          style={{
            marginTop: rhythm(2),
            marginBottom: rhythm(2),
          }}
        />
        <h4>
          Recent Posts
        </h4>
        <ul>
        {posts.map(({ node }, count) => {
          const title = node.frontmatter.title || node.fields.slug
          if (count === 0) {
            return false
          }
          return (
            <li key={node.fields.slug}>
              <h5
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link> <small>— {node.frontmatter.date}</small>
              </h5>
            </li>
          )
        })}
        </ul>
        <div style={{textAlign: `right`}}>
          <Link to={`/archive`}>
            View More
          </Link>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 128, height: 128) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        title
      }
    }
    allMarkdownRemark(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
          }
        }
      }
    }
  }
`
