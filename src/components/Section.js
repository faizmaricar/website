import styled from "@emotion/styled"
import { css } from "@emotion/react"
import React from "react"

const sectionStyles = ({ theme }) =>
  css`
    padding: ${theme.spaces(8)}px;
  `
const StyledSection = styled.section`
  ${sectionStyles}
  min-height: 100vh;
`

export function Section(props) {
  return <StyledSection {...props} />
}

export default Section
