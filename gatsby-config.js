/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const siteAddress = new URL("http://www.xn--andrews-portfolio--p23m.ml")

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "portfolio-3192e980-ba76-11ea-b3de-0242ac130004",
      },
    },
  ],
}
