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
  Button,
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
        <Column
          xs={4}
          sm={4}
          smOffset={2}
          md={4}
          mdOffset={4}
          xl={4}
          xlOffset={4}
        >
          <Button fullwidth>See my latest videos</Button>
        </Column>
      </Grid>
      <Grid></Grid>
    </div>
  )
}

export default IndexPage
