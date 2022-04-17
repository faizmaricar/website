import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const containerStyles = ({ theme }) => css`
  margin: 0 ${theme.spaces[4]}px;
  padding: ${theme.spaces[2]}px 0;

  ${theme.breakpoints.sm} {
    margin: 0 ${theme.spaces[8]}px;
  }

  ${theme.breakpoints.md} {
    margin: 0 auto;
    width: 840px;
  }

  ${theme.breakpoints.lg} {
    width: 75%;
  }

  ${theme.breakpoints.xl} {
    width: 1040px;
  }
`

const StyledContainer = styled.div`
  ${containerStyles}
`

export function Container(props) {
  return <StyledContainer {...props} />
}

export default Container
