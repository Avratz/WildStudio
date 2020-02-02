import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './hacemos.styles.scss'

export default function QueHacemos() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "white-field-background.png" }) {
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
      id="QueHacemos"
      className="white-field-background"
      fluid={imageData}
      backgroundColor={`#3f51b5`}
      style={{
        backgroundPosition: 'center bottom',
        backgroundSize: '110%',
      }}
      fadeIn
    >
      <div className="wrapper">
        <h2>HACEMOS</h2>
        <p>
          Un diseño profesional, totalmente administrable, adaptativo, atractivo
          y pregnante, adaptado a las necesidades de nuestros clientes.
        </p>
        <div className="separador">
          <span>VVVV</span>
          <span>VVVV</span>
        </div>
      </div>
    </BackgroundImage>
  )
}
