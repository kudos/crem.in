import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, avatar, author, children, } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const archivePath = `${rootPath}archive`
    const resumePath = `${rootPath}resume`
    let header

    if (location.pathname === rootPath || location.pathname === archivePath || location.pathname === resumePath) {
      header = (
        <h1
          style={{
            ...scale(1.1),
            marginBottom: rhythm(.8),
            marginTop: 0,
          }}
        >
          <Image
            fixed={avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: '-16px',
              width: 64,
              height: 64,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <div>
          <h3>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <hr
            style={{
              marginTop: rhythm(1.5),
              marginBottom: rhythm(1.5),
            }}
          />
          Content © Jonathan Cremin – <a href="https://github.com/kudos/crem.in">Fork the design on Github</a>
        </footer>
      </div>
    )
  }
}

export default Layout

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
  }
`
