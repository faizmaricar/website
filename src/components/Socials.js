import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"

import { useSiteMetadata } from "../hooks"

const listStyles = ({ theme }) =>
  css`
    text-align: center;

    ${theme.breakpoints.sm} {
      text-align: initial;
    }
  `
const linkStyles = ({ theme }) =>
  css`
    margin-right: ${theme.spaces[4]}px;
    margin-bottom: ${theme.spaces[2]}px;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    &: hover {
      cursor: pointer;
    }
  `
const StyledList = styled.ul`
  ${listStyles}
`
const StyledLink = styled.li`
  ${linkStyles}
`

export function Socials() {
  const { twitterUrl, linkedinUrl, twitchUrl, youtubeUrl, githubUrl } =
    useSiteMetadata()

  const socialMediaIcons = [
    { icon: faTwitter, url: twitterUrl },
    { icon: faLinkedin, url: linkedinUrl },
    { icon: faTwitch, url: twitchUrl },
    { icon: faYoutube, url: youtubeUrl },
    { icon: faGithub, url: githubUrl },
  ]

  return (
    <StyledList>
      {socialMediaIcons.map(({ icon, url }) => (
        <StyledLink key={icon.iconName}>
          <a
            href={url}
            aria-label={icon.iconName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
            &nbsp;
            {icon.iconName}
          </a>
        </StyledLink>
      ))}
    </StyledList>
  )
}

export default Socials
