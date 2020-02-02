import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './footer.styles.scss'

export default function Footer({ footerLinks }) {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "trees-background.png" }) {
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
    <footer>
      <BackgroundImage
        Tag="section"
        className="trees-background text-white"
        fluid={imageData}
        backgroundColor={`#1d2680`}
        style={{
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'repeat-x',
          backgroundSize: 'cover',
        }}
        loading="eager"
      >
        <div className="wrapper">
          {footerLinks && <div className="footerLinks"></div>}

          <div className="footerCopy">
            <div className="logo">
              <h1>WILD</h1>
              <h1>STUDIO</h1>
            </div>

            <p>© {new Date().getFullYear()} Wild Studio</p>
          </div>
        </div>
      </BackgroundImage>
    </footer>
  )
}
