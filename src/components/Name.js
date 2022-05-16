import React from "react"
import styled from "@emotion/styled"

import { useSiteMetadata } from "../hooks"

const StyledName = styled.h2`
  text-align: center;
`
export function Name() {
  const { name } = useSiteMetadata()
  return <StyledName>{name}</StyledName>
}

export default Name
