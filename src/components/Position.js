import React from "react"
import styled from "@emotion/styled"

import { useSiteMetadata } from "../hooks"

const StyledPosition = styled.h3`
  text-align: center;
`
export function Position() {
  const { position } = useSiteMetadata()
  return <StyledPosition>{position}</StyledPosition>
}

export default Position
