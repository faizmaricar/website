import React from "react"
import {
  Column,
  Grid,
  Picture,
  Name,
  Position,
  Socials,
  Description,
  Seo,
} from "../components"

const IndexPage = () => {
  return (
    <div>
      <Seo />
      <Grid>
        <Picture />
        <Column md={8} mdOffset={2}>
          <Name />
          <Position />
          <Socials />
          <Description />
        </Column>
      </Grid>
    </div>
  )
}

export default IndexPage
