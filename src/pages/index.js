import React from "react"
import {
  Column,
  Grid,
  Picture,
  Name,
  Position,
  Socials,
  Description,
} from "../components"
import { useSiteMetadata } from "../hooks"

const IndexPage = () => {
  const site = useSiteMetadata()
  console.log(site)
  return (
    <Grid>
      <Picture />
      <Column md={8} mdOffset={2}>
        <Name />
        <Position />
        <Socials />
        <Description />
      </Column>
    </Grid>
  )
}

export default IndexPage
