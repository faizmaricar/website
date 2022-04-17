module.exports = {
  siteMetadata: {
    title: `My personal website`,
    titleTemplate: "Faiz Maricar· %s",
    image: "/profile.jpg",
    description: `I'm a software engineer mainly working on web
    and mobile development. If you'd like to keep up with what I'm up to, follow me on my socials.`,
    url: "https://www.faizmaricar.com",
    twitterUsername: "@faizmaricar",
    twitterUrl: "https://twitter.com/FaizMaricar",
    githubUrl: "https://github.com/faizmaricar",
    twitchUrl: "https://www.twitch.tv/faizmaricar",
    youtubeUrl: "https://www.youtube.com/channel/UCOsENEH0kMZ3-L2dqeCyXAA",
    linkedinUrl: "https://sg.linkedin.com/in/faiz-maricar-522a14105",
    htmlAttributes: {
      lang: "en",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`jost\:100,200,300,400,400i,500, 600, 700, 800, 900`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `website`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
