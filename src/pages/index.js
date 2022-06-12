import React from "react"
import { Seo } from "../components"
import { About, Content } from "../sections"

const IndexPage = () => {
  return (
    <div>
      <Seo />
      <About />
      <Content />
    </div>
  )
}

export default IndexPage
