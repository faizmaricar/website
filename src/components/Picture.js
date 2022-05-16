import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTheme } from "@emotion/react"

import Column from "./Column"

export function Picture() {
  const { colors, spaces } = useTheme()
  return (
    <Column xs={2} xsOffset={1} sm={2} smOffset={3} md={2} mdOffset={5}>
      <StaticImage
        imgStyle={{
          borderRadius: "50%",
          border: `${spaces(1)}px solid ${colors.accent}`,
        }}
        src="../images/profile.jpg"
        alt="profile"
      />
    </Column>
  )
}

export default Picture
