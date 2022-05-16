import React from "react"
import styled from "@emotion/styled"

import { useSiteMetadata } from "../hooks"
import Column from "./Column"

const StyledDescription = styled.p`
  text-align: justify;
`
export function Description() {
  const { defaultDescription } = useSiteMetadata()
  return (
    <Column sm={6} smOffset={1}>
      <StyledDescription>{defaultDescription}</StyledDescription>
    </Column>
  )
}

export default Description
