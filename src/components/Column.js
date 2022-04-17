import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const columnStyles = props => {
  const { theme, xs = 1, sm = 1, md = 1, lg = 1, xl = 1, xsOffset = 0 } = props
  return css`
    padding: ${theme.spaces[2]}px 0;
    grid-column: ${xsOffset + 1} / ${xs + xsOffset + 1};
    ${theme.breakpoints.sm} {
      padding: ${theme.spaces[4]}px 0;
      grid-column: span ${sm};
    }
    ${theme.breakpoints.md} {
      grid-column: span ${md};
    }
    ${theme.breakpoints.lg} {
      grid-column: span ${lg};
    }
    ${theme.breakpoints.xl} {
      grid-column: span ${xl};
    }
  `
}

const StyledColumn = styled.div`
  ${columnStyles}
`

export function Column(props) {
  return <StyledColumn {...props} />
}

export default Column
