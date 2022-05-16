import React from "react"
import styled from "@emotion/styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { useSiteMetadata } from "../hooks"

const StyledSocials = styled.ul`
  text-align: center;
  & li {
    display: inline-block;
    font-weight: 700;
    margin-right: 12px;
    padding: 8px 0;
    text-transform: uppercase;
    &: hover {
      cursor: pointer;
    }
  }
`

export function Socials() {
  const { twitterUrl, linkedinUrl, twitchUrl, youtubeUrl, githubUrl } =
    useSiteMetadata()

  const socialMediaIcons = [
    { icon: faTwitch, url: twitchUrl },
    { icon: faTwitter, url: twitterUrl },
    { icon: faLinkedin, url: linkedinUrl },
    { icon: faYoutube, url: youtubeUrl },
    { icon: faGithub, url: githubUrl },
  ]

  return (
    <StyledSocials>
      {socialMediaIcons.map(({ icon, url }) => (
        <li key={icon.iconName}>
          <a
            href={url}
            aria-label={icon.iconName}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon} />
            &nbsp;{icon.iconName}
          </a>
        </li>
      ))}
    </StyledSocials>
  )
}

export default Socials
