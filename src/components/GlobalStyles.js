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
      `}
    />
  )
}
