/** @jsx jsx */
import { graphql } from "gatsby";
import { jsx } from "@emotion/core";
import { SiteWrapper } from "../components/siteWrapper";
import { FlexContainer } from "../styles/components/flexContainer";
import { Project } from "../components/project";
import "../assets/scss/styles.scss";

export const query = graphql`
    query($slug: String!) {
        allProjectsJson(filter: { href: { eq: $slug } }) {
            edges {
                node {
                    title
                    text
                    isVideo
                    srcName
                    technologies
                    links {
                        title
                        href
                    }
                    description {
                        p
                        img {
                            alt
                            quote
                            src {
                                relativePath
                                childImageSharp {
                                    fluid {
                                        aspectRatio
                                        base64
                                        sizes
                                        src
                                        srcSet
                                    }
                                }
                            }
                        }
                    }
                    src {
                        relativePath
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default ({ data }) => (
    <SiteWrapper>
        <FlexContainer>
            <Project {...data.allProjectsJson.edges[0].node} />
        </FlexContainer>
    </SiteWrapper>
);
