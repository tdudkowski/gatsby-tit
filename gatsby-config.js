const path = require(`path`)
require("dotenv").config({ path: `.env`, })

module.exports = {
  siteMetadata: {
    title: `Stowarzyszenie TUiTAM`,
    description: `Stowarzyszenie TUiTAM, turystyka, wycieczka, Dolny Śląsk, Wrocław, Ostrów Tumski, Sudety`,
    image: "/images/logo.png",
    author: `Tadeusz Dudkowski | http://dygresje.info`,
    siteUrl: `https://przewodnicy.org/`,
  },
  pathPrefix: "/gatsby-tit",
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // name: "GatsbyJS",
        // short_name: "GatsbyJS",
        // start_url: "/",
        // background_color: "#6b37bf",
        // theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        // display: "standalone",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        // crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
        includeInDevelopment: false,
      },
    },
  ],
}