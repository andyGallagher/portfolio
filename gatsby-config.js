const config = require("./config");

module.exports = {
    siteMetadata: {
        title: `Andrew Gallagher → Portfolio`,
    },
    plugins: [
        // Site metadata
        "gatsby-plugin-react-helmet",

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
                bucketName: config.aws.s3BucketName,
                protocol: "https",
                hostname: config.aws.url,
            },
        },
    ],
};
