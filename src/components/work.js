/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import Img from "gatsby-image";
import * as videos from "../assets/images/projects/video";
import { FlexContainer } from "../styles/components/flexContainer";
import { color } from "../styles/variables";
import { linkStyle } from "../styles/mixins";

// Fetch all projects
const query = graphql`
    {
        allProjectsJson {
            edges {
                node {
                    title
                    text
                    isVideo
                    isTall
                    srcName
                    href
                    srcName
                    technologies
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

const WorkList = styled.ul({
    listStyle: "none",
    padding: 0,
    margin: "0 0 45px",
});

const WorkListItem = styled.li({
    width: 300,
    margin: "30px 30px 0 0",

    WebkitBoxShadow: `10px 10px 0 0 rgba(${color.primary.rgb}, 0.15)`,
    MozBoxShadow: `10px 10px 0 0 rgba(${color.primary.rgb}, 0.15)`,
    boxShadow: `10px 10px 0 0 rgba(${color.primary.rgb}, 0.15)`,
    transition: "box-shadow 0.4s, transform 0.4s",

    border: `1px solid rgba(${color.primary.rgb}, 0.4)`,

    "&:first-of-type": {
        marginTop: 0,
    },

    "&:hover": {
        WebkitBoxShadow: `12px 12px 0 0 rgba(${color.primary.rgb}, 0.15)`,
        MozBoxShadow: `12px 12px 0 0 rgba(${color.primary.rgb}, 0.15)`,
        boxShadow: `12px 12px 0 0 rgba(${color.primary.rgb}, 0.15)`,

        transform: "scale(1.01)",
    },
});

const WorkListCaption = styled.span({
    padding: "20px 15px",
    borderTop: `2px dotted rgba(${color.primary.rgb}, 0.4)`,
});

const workItemCss = css({
    display: "flex",
    flexDirection: "column",
    ...linkStyle,
});

const workImageCss = css({
    width: 300,
});

const splitList = (arr) => {
    const arrDiv = Math.ceil(arr.length / 2);
    return [arr.slice(0, arrDiv), arr.slice(arrDiv)];
};

export const Work = () => {
    const {
        allProjectsJson: { edges },
    } = useStaticQuery(query);

    const workLists = splitList(edges);

    return (
        <FlexContainer flexDirection="row">
            {workLists.map((workList) => (
                <WorkList>
                    {workList.map(
                        (
                            {
                                node: {
                                    title,
                                    technologies,
                                    href,
                                    src,
                                    srcName,
                                    isVideo,
                                },
                            },
                            i
                        ) => (
                            <WorkListItem key={title}>
                                <Link css={workItemCss} to={`/${href}`}>
                                    {isVideo ? (
                                        <video
                                            css={workImageCss}
                                            src={videos[srcName]}
                                            muted={true}
                                            loop={true}
                                            autoPlay={true}
                                        />
                                    ) : (
                                        <Img
                                            css={workImageCss}
                                            fluid={src.childImageSharp.fluid}
                                        />
                                    )}

                                    <WorkListCaption>
                                        {title} ({technologies})
                                    </WorkListCaption>
                                </Link>
                            </WorkListItem>
                        )
                    )}
                </WorkList>
            ))}
        </FlexContainer>
    );
};
