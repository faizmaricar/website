import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

const columnStyles = props => {
  const {
    theme: { spaces, breakpoints },
    xs = 4,
    xsOffset = 0,
    sm = 8,
    smOffset = 0,
    md = 12,
    mdOffset = 0,
  } = props
  return css`
    grid-column: ${xsOffset + 1} / ${xs + xsOffset + 1};
    padding: ${spaces(2)}px 0;

    ${breakpoints.sm} {
      grid-column: ${smOffset + 1} / ${sm + smOffset + 1};
    }

    ${breakpoints.md} {
      grid-column: ${mdOffset + 1} / ${md + mdOffset + 1};
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
