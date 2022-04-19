import React from "react"
import { Seo } from "../components"
import { About, Blog } from "../sections"

const IndexPage = () => {
  return (
    <>
      <Seo />
      <About />
      <Blog />
    </>
  )
}

export default IndexPage
