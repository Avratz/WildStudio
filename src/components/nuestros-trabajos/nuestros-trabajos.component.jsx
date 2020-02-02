import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import BoxTrabajos from '../box-trabajos/boxTrabajos.component'

import './nuestros-trabajos.styles.scss'

export default function NuestrosTrabajos() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "blue-field-background.png" }) {
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
      id="NuestrosTrabajos"
      className="blue-field-background text-primary-darken"
      fluid={imageData}
      backgroundColor={`white`}
      style={{
        backgroundPosition: 'center bottom',
        backgroundSize: '110%',
      }}
      fadeIn
    >
      <div className="wrapper">
        <h2>NUESTROS TRABAJOS</h2>
        <BoxTrabajos />
      </div>
      =
    </BackgroundImage>
  )
}
