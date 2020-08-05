/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// const siteAddress = new URL("http://www.xn--andrews-portfolio--p23m.ml")

module.exports = {
    siteMetadata: {
        title: `Andrew Gallagher → Portfolio`,
    },
    plugins: [
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-json',
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: 'gatsby-plugin-s3',
            options: {
                bucketName: 'portfolio-3192e980-ba76-11ea-b3de-0242ac130004',
            },
        },
    ],
};
