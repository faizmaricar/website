import React from "react"
import { GlobalStyles } from "./src/components"

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
