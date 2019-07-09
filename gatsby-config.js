module.exports = {
  siteMetadata: {
    title: `The Gospel Comedy Explosion`,
    description: `The Gospel Comedy Explosion is a touring roster of talented comedians spreading joyous noise in the form of laughter around the country.`,
    author: `Paschal Hildreth Entertainment`,
    siteUrl: `http://gospelcomedyexplosion.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
