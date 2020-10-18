const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `Stowarzyszeniee TUiTAM`,
      description: `Stowarzyszeniee TUiTAM`,
      author: `Tadeusz Dudkowski | http://dygresje.info`,
      siteUrl: `http://przewodnicy.org/`,
    },
pathPrefix: "/gatsby-tit",
        plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  
  ],
}