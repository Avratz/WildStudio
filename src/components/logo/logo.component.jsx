import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './logo.styles.scss'

const Logo = ({ header }) => {
  const logo = useStaticQuery(graphql`
    query {
      logoWhite: file(relativePath: { eq: "wild-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      logoBlue: file(relativePath: { eq: "wild-logo-blue.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  if (!header) {
    return (
      <Img fluid={logo.logoWhite.childImageSharp.fluid} className="wild-logo" />
    )
  } else {
    return (
      <Img
        fluid={logo.logoBlue.childImageSharp.fluid}
        className="header-logo"
      />
    )
  }
}

export default Logo
