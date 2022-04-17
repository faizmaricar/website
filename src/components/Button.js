import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const buttonStyles = ({ theme }) => css`
  background-color: ${theme.colors.secondary.main};
  border: none;
  border-radius: ${theme.spaces[1]}px;
  padding: ${theme.spaces[4]}px;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
  cursor: pointer;
`

const StyledButton = styled.button`
  ${buttonStyles}
`

export function Button(props) {
  return <StyledButton {...props} />
}

export default Button
