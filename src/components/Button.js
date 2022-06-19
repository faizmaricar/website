import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"

const buttonStyles = ({ theme, fullwidth }) =>
  css`
    background-color: ${theme.colors.accent};
    border: none;
    border-radius: ${theme.spaces(1)}px;
    color: ${theme.colors.text};
    padding: ${theme.spaces(4)}px;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    ${fullwidth && "width: 100%;"}
  `

const StyledButton = styled.button`
  ${buttonStyles}
`

export function Button(props) {
  return <StyledButton {...props} />
}

export default Button
