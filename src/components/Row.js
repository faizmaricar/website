import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const rowStyles = ({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: ${theme.spaces[4]}px;

  ${theme.breakpoints.sm} {
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: ${theme.spaces[6]}px;
  }

  ${theme.breakpoints.md} {
    grid-template-columns: repeat(12, 1fr);
  }
`

const StyledRow = styled.div`
  ${rowStyles}
`

export function Row(props) {
  return <StyledRow {...props} />
}

export default Row
