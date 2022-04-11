import React from "react"
import { GlobalStyles, ThemeProvider } from "./src/components"

export function wrapPageElement({ element }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  )
}
