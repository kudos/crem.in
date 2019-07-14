/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
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
          social {
            mastodon
          }
          email
        }
      }
    }
  `)

  const { social, email } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
        textAlign: `justify`,
      }}
    >
      <p>
        I'm an engineering manager living in Dublin and working at <a href="https://www.udemy.com">Udemy</a>.
        I've built stuff for Mac, iOS, and the web, like <a href="https://hostr.co">Hostr</a> and <a href="https://combine.fm">Combine.fm</a>.
        Want to get in touch? Email <a href={`mailto:/${email}`}>{ email }</a> or toot <a rel="me" href={`https://${social.mastodon }`}>@kudos</a>.
      </p>
    </div>
  )
}

export default Bio
