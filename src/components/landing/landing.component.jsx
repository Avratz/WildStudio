import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './landing.styles.scss'

import Logo from '../logo/logo.component'

export default function Landing() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "mountains-background.png" }) {
        childImageSharp {
          fluid(quality: 75, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const imageData = data.desktop.childImageSharp.fluid
  return (
    <BackgroundImage
      Tag="section"
      id="Landing"
      className="mountains-background "
      fluid={imageData}
      backgroundColor={`#1a237e`}
      style={{
        backgroundPosition: 'center bottom',
        backgroundSize: 'cover',
      }}
    >
      <Logo />
      <h1>WILD</h1>
      <h1>DESIGN STUDIO</h1>
    </BackgroundImage>
  )
}
