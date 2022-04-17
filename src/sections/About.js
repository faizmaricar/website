import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import { Button, Column, Container, Row, Section, Socials } from "../components"
import { useSiteMetadata } from "../hooks"

const Title = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spaces[4]}px;
    ${theme.breakpoints.sm} {
      text-align: initial;
    }
  `}
`

const Description = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-weight: 400;
    margin-bottom: ${theme.spaces[4]}px;
    ${theme.breakpoints.sm} {
      text-align: justify;
    }
  `}
`

export function About() {
  const { defaultDescription } = useSiteMetadata()
  return (
    <Section>
      <Container>
        <Row>
          <Column xs={2} xsOffset={1} sm={2} md={4} lg={4} xl={4}>
            <StaticImage
              imgStyle={{
                borderRadius: "50%",
              }}
              src="../images/profile.jpg"
              alt="profile"
            />
          </Column>
          <Column xs={4} sm={6} md={8} lg={8} xl={8}>
            <Title>Hi, my name is Faiz Maricar</Title>
            <Description>{defaultDescription}</Description>
            <Socials />
            <Button onClick={() => console.log("clicked")}>
              Check out my latest blog
            </Button>
          </Column>
        </Row>
      </Container>
    </Section>
  )
}

export default About
