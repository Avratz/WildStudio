import React from 'react'

import { trabajos } from '../../constants/trabajos.constant'
import TrabajoSingle from '../trabajo-single/trabajo-single.component'

import { useStaticQuery, graphql } from 'gatsby'

export default function BoxTrabajos() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativeDirectory: { eq: "our-works" } }) {
          nodes {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  )

  const getImg = src => {
    const img = data.allFile.nodes.filter(({ name }) => name === src)
    return img[0].childImageSharp.fluid
  }

  return (
    <div className="box-trabajos">
      {trabajos.map(({ title, description, img, id }) => {
        return (
          <TrabajoSingle
            key={id}
            title={title}
            description={description}
            img={getImg(img)}
          />
        )
      })}
    </div>
  )
}
