/** @jsx jsx */
import { graphql } from 'gatsby';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Header } from '../components/header';
import { Project } from '../components/portfolio/project';
import '../styles/style.css';

const FlexContainer = styled.div({ flexDirection: 'column' });

export const query = graphql`
    query($slug: String!) {
        allProjectsJson(filter: { href: { eq: $slug } }) {
            edges {
                node {
                    title
                    text
                    isVideo
                    isTall
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

export default ({ data }) => {
    console.log(data);

    return (
        <FlexContainer>
            <Header />
            <Project {...data.allProjectsJson.edges[0].node} />
        </FlexContainer>
    );
};
