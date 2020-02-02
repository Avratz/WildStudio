import PropTypes from 'prop-types'
import React from 'react'

import Logo from '../logo/logo.component'

import './header.styles.scss'

const Header = ({ siteTitle, isVisible }) => {
  console.log(isVisible)

  return (
    <header
      className={
        isVisible
          ? 'header-visible'
          : isVisible === false
          ? 'header-invisible'
          : ''
      }
    >
      <Logo header />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
