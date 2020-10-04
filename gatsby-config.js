module.exports = {
    siteMetadata: {
        title: `Andrew Gallagher → Portfolio`,
    },
    plugins: [
        // SCSS
        "gatsby-plugin-sass",

        // Styled Components
        "gatsby-plugin-emotion",

        // Images
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",

        // Our data
        "gatsby-transformer-json",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/data/`,
            },
        },

        // S3 Deploy
        {
            resolve: "gatsby-plugin-s3",
            options: {
                bucketName: "portfolio-3192e980-ba76-11ea-b3de-0242ac130004",
                protocol: "https",
                hostname: "www.andrewgallagher-portfolio.com/",
            },
        },
    ],
};
