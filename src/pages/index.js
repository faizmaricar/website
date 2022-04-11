import React from "react"
import Seo from "../components/Seo";
import useSiteMetadata from "../hooks/useSiteMetadata"

const IndexPage = () => {
  const siteMetadata = useSiteMetadata();
  console.log(siteMetadata)
  return (
  <>
    <Seo/>
    <h1>Faiz Maricar</h1>
  </>
)}

export default IndexPage
