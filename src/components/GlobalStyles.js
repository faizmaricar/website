import React from "react"
import { Global, css } from "@emotion/react"
import theme from "../theme"

export function GlobalStyles() {
  const {
    colors: { primary, secondary, text },
  } = theme
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          font-family: Jost;
          box-sizing: border-box;
        }

        body {
          background: linear-gradient(
            153.99deg,
            ${primary} 0%,
            ${secondary} 100%
          );
          min-height: 100vh;
          color: ${text};
        }

        h1 {
          font-size: 64px;
        }

        h2 {
          font-size: 40px;
          font-weight: 800;
          line-height: 44px;
        }

        h3 {
          font-size: 24px;
          font-weight: 300;
          line-height: 28px;
          margin-bottom: 16px;
        }

        p {
          font-size: 16px;
        }

        li {
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }
      `}
    />
  )
}
