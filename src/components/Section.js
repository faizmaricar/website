import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const sectionStyles = ({ theme, background, text }) =>
  css({
    height: "100vh",
    backgroundColor: background || theme.colors.primary,
    color: text || "#fff",
  })

const StyledSection = styled.section`
  ${sectionStyles}
`

export function Section(props) {
  return <StyledSection {...props} />
}

export default Section
