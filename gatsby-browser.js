import React from "react"
import { GlobalStyles, ThemeProvider, Header } from "./src/components"

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Header />
      {element}
    </ThemeProvider>
  )
}
