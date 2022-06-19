import { css } from "@emotion/react"
import styled from "@emotion/styled"
import React from "react"
import { Grid, Section, Column } from "../components"
import { useYtvideo } from "../hooks"

const headingStyles = ({ theme }) =>
  css`
    text-align: center;
    margin-bottom: ${theme.spaces(8)}px;
  `

const Heading = styled.h2`
  ${headingStyles}
`
const imageStyles = ({ theme }) =>
  css`
    width: 100%;
    object-fit: cover;
    height: 45vw;
    margin-bottom: ${theme.spaces(2)}px;
    ${theme.breakpoints.sm} {
      height: 12vw;
    }

    ${theme.breakpoints.md} {
      height: 11vw;
    }

    ${theme.breakpoints.lg} {
      height: 8.5vw;
    }
  `

const StyledImage = styled.img`
  ${imageStyles}
`
const typeStyles = ({ theme }) =>
  css`
    color: ${theme.colors.accent};
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${theme.spaces(2)}px;
  `

const Type = styled.p`
  ${typeStyles}
`

const titleStyles = ({ theme }) =>
  css`
    font-weight: 500;
    text-align: justify;
    margin-bottom: ${theme.spaces(2)}px;
  `

const Title = styled.p`
  ${titleStyles}
`

export function Content() {
  const ytvideos = useYtvideo()
  return (
    <Section id="Content">
      <Heading>Latest Content</Heading>
      <Grid>
        {ytvideos.slice(0, 4).map(({ title, thumbnail, url, type }, index) => (
          <Column sm={2} smOffset={2 * index} md={3} mdOffset={3 * index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <StyledImage src={thumbnail} alt={title} />
              <Type>{type}</Type>
              <Title>{title}</Title>
            </a>
          </Column>
        ))}
        {ytvideos.slice(4).map(({ title, thumbnail, url, type }, index) => (
          <Column sm={2} smOffset={2 * index} md={3} mdOffset={3 * index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <StyledImage src={thumbnail} alt={title} />
              <Type>{type}</Type>
              <Title>{title}</Title>
            </a>
          </Column>
        ))}
      </Grid>
    </Section>
  )
}

export default Content
