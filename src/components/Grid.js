import styled from "@emotion/styled"
import React from "react"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: ${props => props.theme.spaces(8)}px;
  column-gap: ${props => props.theme.spaces(4)}px;
  justify-content: center;
  grid-auto-flow: column;

  ${props => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(8, 1fr);
  }

  ${props => props.theme.breakpoints.md} {
    grid-template-columns: repeat(12, ${props => props.theme.spaces(15)}px);
  }
`

export function Grid(props) {
  return <StyledGrid {...props} />
}

export default Grid
