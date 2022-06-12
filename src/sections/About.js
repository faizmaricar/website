import React from "react"
import {
  Column,
  Grid,
  Picture,
  Name,
  Position,
  Socials,
  Description,
  Button,
  Section,
} from "../components"

export function About() {
  const handleClick = () => {
    document.querySelector("#Content").scrollIntoView({ behavior: "smooth" })
  }
  return (
    <Section id="About">
      <Grid>
        <Picture />
        <Column sm={6} smOffset={1} md={8} mdOffset={2}>
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
          <Button fullwidth onClick={handleClick}>
            Check out my latest content
          </Button>
        </Column>
      </Grid>
    </Section>
  )
}

export default About
