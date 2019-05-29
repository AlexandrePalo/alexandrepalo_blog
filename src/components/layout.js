import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      // Root index path
      header = (
        <h1
          style={{
            ...scale(1.25),
            marginBottom: rhythm(1.25),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              color: `inherit`,
            }}
            to={`/`}
            className="header-blogtitle"
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      // Light header for article
      header = (
        <h3
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              color: `inherit`,
            }}
            to={`/`}
            className="header-blogtitle"
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer style={{ ...scale(-1 / 5) }}>
          © {new Date().getFullYear()}, built with love.
        </footer>
      </div>
    )
  }
}

export default Layout
