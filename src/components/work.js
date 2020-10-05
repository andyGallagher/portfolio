/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import Img from "gatsby-image";
import { Mission } from "../styles/components/mission";
import { Interrupt } from "../styles/components/interrupt";
import { FlexContainer } from "../styles/components/flexContainer";
import * as videos from "../assets/images/projects/video";
import { color } from "../styles/variables";
import { linkStyle } from "../styles/mixins";
import { breakpoints } from "../styles/breakpoints";

const width = ["100%", 350];

// Fetch all projects
const query = graphql`
    {
        allProjectsJson {
            edges {
                node {
                    title
                    text
                    isVideo
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

const WorkWrapper = styled.div(
    breakpoints({
        paddingTop: [30, 0],
        borderTop: [`1px dashed rgba(${color.primary.rgb}, 0.4)`, "none"],
        marginBottom: [45, 0],
    })
);

const WorkListItem = styled.li(
    breakpoints({
        width: [undefined, width],
        margin: ["15px 20px 0 0", "30px 30px 0 0"],

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
    })
);

const WorkListCaption = styled.span({
    padding: "20px 15px",
    borderTop: `2px dotted rgba(${color.primary.rgb}, 0.4)`,
});

const workItemCss = css({
    display: "flex",
    flexDirection: "column",
    ...linkStyle,
});

const workImageCss = css(
    breakpoints({
        width,
    })
);

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
        <WorkWrapper>
            <Mission>
                <Interrupt>Work</Interrupt>
            </Mission>
            <FlexContainer flexDirection={["row", "row"]}>
                {workLists.map((workList, i) => (
                    <WorkList key={i}>
                        {workList.map(
                            ({
                                node: {
                                    title,
                                    technologies,
                                    href,
                                    src,
                                    srcName,
                                    isVideo,
                                },
                            }) => (
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
                                                fluid={
                                                    src.childImageSharp.fluid
                                                }
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
        </WorkWrapper>
    );
};
