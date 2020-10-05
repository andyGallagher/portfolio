/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Helmet } from "react-helmet";
import config from "../config";

console.log(config);

export const SiteMetaData = () => (
    <Helmet title={config.meta.title}>
        {/* Title */}
        <title>{config.meta.title}</title>
        <meta name="title" content={config.meta.title} />
        <meta property="og:title" content={config.meta.title} />
        <meta property="og:site_name" content={config.meta.title} />

        {/* Description */}
        <meta name="description" content={config.meta.description} />
        <meta property="og:description" content={config.meta.description} />

        {/* Location */}
        <meta name="geo.placename" content={config.meta.placeName} />

        {/* #TODO => Add IMAGE */}
        {/* <meta property="og:image" content={metaImage} /> */}

        <meta property="og:url" content={config.meta.canonicalUrl} />
        <link rel="canonical" href={config.meta.canonicalUrl} />

        <meta property="og:type" content="website" />
    </Helmet>
);
