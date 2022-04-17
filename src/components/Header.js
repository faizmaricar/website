import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const headerStyles = ({ theme, show }) =>
  css({
    backgroundColor: theme.colors.primary,
    color: "#fff",
    padding: `${theme.spaces[2]}px ${theme.spaces[4]}px`,
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
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const { scrollY, innerHeight } = window
      setShow(scrollY >= innerHeight)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [show])

  return (
    <StyledHeader show={show}>
      <h4>Faiz Maricar</h4>
    </StyledHeader>
  )
}

export default Header
