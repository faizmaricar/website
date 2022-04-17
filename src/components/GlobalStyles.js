import React from "react"
import { Global, css } from "@emotion/react"

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          padding: 0;
          margin: 0;
          font-family: Jost;
        }

        h1 {
          font-size: 64px;
        }

        h2 {
          font-size: 40px;
        }

        h3 {
          font-size: 24px;
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
