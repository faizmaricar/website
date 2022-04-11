import React from "react"
import theme from "../theme"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"

export function ThemeProvider(props) {
  return <EmotionThemeProvider {...props} theme={theme} />
}
