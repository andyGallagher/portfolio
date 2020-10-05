require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    aws: {
        url: process.env.AWS_URL_NAME,
        s3BucketName: process.env.AWS_S3_BUCKET_NAME,
    },
};
