import React from "react"
import { useLocation } from "@reach/router"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

import Container from "./Container"

const headerStyles = ({ theme, show }) =>
  css({
    backgroundColor: theme.colors.primary,
    color: "#fff",
    fontWeight: 700,
    position: "fixed",
    width: "100%",
    top: show ? 0 : -55,
    transition: "top 200ms",
  })

const StyledHeader = styled.section`
  ${headerStyles}
`
export function Header() {
  const { pathname } = useLocation()
  const notInHomePage = pathname !== "/"
  const [show, setShow] = React.useState(notInHomePage)

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window
      setShow(scrollY >= innerHeight || notInHomePage)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [show])

  return (
    <StyledHeader show={show}>
      <Container>
        <h4>Faiz Maricar</h4>
      </Container>
    </StyledHeader>
  )
}

export default Header
