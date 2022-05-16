import React from "react"
import { GlobalStyles, ThemeProvider, Seo } from "./src/components"

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Seo />
      {element}
    </ThemeProvider>
  )
}
