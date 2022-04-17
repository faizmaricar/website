import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Section } from "../components"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const imagecontainerStyles = ({ theme }) => css``
const StyledImageContainer = styled.div`
  ${imagecontainerStyles}
`
export function About() {
  return (
    <Section>
      <Container>
        <div>
          <StaticImage
            imgStyle={{
              borderRadius: "50%",
              width: 200,
              height: "auto",
              margin: "0 auto",
            }}
            src="../images/profile.jpg"
            alt="profile"
          />
        </div>
      </Container>
    </Section>
  )
}

export default About
