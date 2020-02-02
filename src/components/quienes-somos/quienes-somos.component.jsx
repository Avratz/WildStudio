import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './quienes-somos.styles.scss'

export default function QuienesSomos() {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "river-background.png" }) {
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
      id="QuienesSomos"
      className="river-background text-primary-darken"
      fluid={imageData}
      backgroundColor={`#e8eaf6`}
      style={{
        backgroundPosition: 'center bottom',
        backgroundSize: '110%',
      }}
      loading="eager"
    >
      <div className="wrapper">
        <div className="head-title">
          <h2>WILD</h2>
          <span>
            VVVVVV
            <wbr />
            VVVVVV
          </span>
          <h2>SOMOS</h2>
        </div>
        <p>
          Somos un equipo de trabajo conformado por dos jovenes, oriundos de la
          ciudad de Necochea.
        </p>
        <p>
          Creamos esta marca, dedicada al desarrollo de páginas web, con la
          motivación de brindar soluciones integrales a los requerimientos de
          nuestros clientes.
        </p>
        <p>Nos impulsa la pasión por el diseño.</p>
        <p>
          Somos proactivos en lo que hacemos: aprendemos y estamos siempre a la
          búsqueda de nuevas tecnologías, estéticas y tendencias con el objetivo
          de desarrollar un producto que se adapte a las necesidades de nuestros
          clientes, permitiéndoles efectivizar y maximizar su experiencia en la
          web.
        </p>
      </div>
    </BackgroundImage>
  )
}
