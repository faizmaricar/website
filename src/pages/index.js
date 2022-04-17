import React from "react"
import { Section, Seo } from "../components"
import { About } from "../sections"

const IndexPage = () => {
  return (
    <>
      <Seo />
      <About />
      <Section background="#ffffff" />
    </>
  )
}

export default IndexPage
