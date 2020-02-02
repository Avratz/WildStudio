import React from 'react'
import Img from 'gatsby-image'

import './trabajo-single.styles.scss'

export default function TrabajoSingle({ title, description, slug, img }) {
  return (
    <div className="trabajo-container">
      <div className="trabajo-single">
        <Img fluid={img} className="trabajo-img" />
        <div className="trabajo-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="bg-pattern"></div>
      </div>
    </div>
  )
}
