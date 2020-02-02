import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../header/header.component'
import Footer from '../footer/footer.component'
import './layout.css'

const Layout = ({ children, footerLinks }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [visible, setVisible] = useState(undefined)

  const handleAnimation = () => {
    if (document.documentElement.scrollTop > 600) {
      setVisible(true)
    } else if (document.documentElement.scrollTop < 600 && visible) {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.onscroll = () => handleAnimation()
  })

  return (
    <div>
      <Header isVisible={visible} siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer footerLinks />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
