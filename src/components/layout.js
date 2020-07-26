import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import { rhythm, scale } from "../utils/typography"
import "./layout.css"

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  opacity: 90%;
  backdrop-filter: blur(3px);
  @media (max-width: 768px) {
    justify-content: center;
  }
`


const Layout = ({ location, title, children, pageTitle }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <React.Fragment>
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          fontFamily: `Sans-serif, Monospace`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
      <MenuWrapper>
        <Link to={'/'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Home
        </Link>
        <Link to={'/projects'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Projects
        </Link >
        <Link to={'/blog'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Blog
        </Link>
      </MenuWrapper>
      </React.Fragment>
    )
  } else {
    header = (
      <React.Fragment>
      <h1
        style={{
          fontFamily: `Sans-serif, Monospace`,
          marginTop: 0,
        }}>{pageTitle}</h1>
      <MenuWrapper>
        <Link to={'/'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Home
        </Link>
        <Link to={'/projects'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Projects
        </Link >
        <Link to={'/blog'} style={{
          paddingRight: 20,
          textDecoration: 'none',
          boxShadow: 'none',
        }}>
          Blog
        </Link>
      </MenuWrapper>
      </React.Fragment>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main style={{
          fontFamily: `Sans-serif, Monospace`,
          fontSize: '15px' }}>{children}</main>
      <footer style={{
        fontSize: '15px',
        fontFamily: `Sans-serif, Monospace`,
      }}>
        © {new Date().getFullYear()}, Built by Faizaan Madhani
      </footer>
    </div>
  )
}

export default Layout
