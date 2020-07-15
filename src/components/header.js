import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { rhythm, scale } from "../utils/typography"

const Header = ({ siteTitle }) => (
  <header>
    <h1
    style={{
      ...scale(0.75)
    }}>
    </h1>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
