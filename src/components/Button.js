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
`

const StyledButton = styled.button`
  ${buttonStyles}
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary.l1};
  }
`

export function Button(props) {
  return <StyledButton {...props} />
}

export default Button
