/** @jsx jsx */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Quote } from "../styles/components/quote";
import { Mission } from "../styles/components/mission";
import { Interrupt } from "../styles/components/interrupt";
import { NoOrphan } from "../styles/components/noOrphan";
import { fontSize, color } from "../styles/variables";
import { linkStyle } from "../styles/mixins";
import { breakpoints } from "../styles/breakpoints";
import * as videos from "../assets/images/projects/video";

const projectStyle = css(
    breakpoints({
        fontSize: fontSize.copy,
        lineHeight: 1.25,
        fontWeight: 100,
        fontStretch: "expanded",
        width: ["100%", "80%"],

        "& a": {
            ...linkStyle,
        },
    })
);

const workImageCss = css(
    breakpoints({
        maxWidth: ["100%", 400],
    })
);

const marginTop = css({
    marginTop: 15,
});

const ProjectSection = styled.div({
    ...projectStyle,
});

const ProjectCopy = styled.p({
    ...projectStyle,
});

const ProjectFrame = styled.div({
    display: "inline-block",

    WebkitBoxShadow: `8px 8px 0 0 rgba(${color.primary.rgb}, 0.1)`,
    MozBoxShadow: `8px 8px 0 0 rgba(${color.primary.rgb}, 0.1)`,
    boxShadow: `8px 8px 0 0 rgba(${color.primary.rgb}, 0.1)`,

    border: `4px double rgba(${color.primary.rgb}, 0.4)`,

    "& > span": {
        maxWidth: 400,
        borderTop: `2px dotted rgba(${color.primary.rgb}, 0.4)`,
        padding: 20,
    },
});

const ProjectLinks = styled.ul({
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    margin: 0,

    "& > li": {
        marginRight: 10,
    },
});

export const Project = ({
    title,
    isVideo,
    src,
    srcName,
    text,
    technologies,
    description,
    links,
}) => {
    const content = description.map((child, i) => {
        if (child.p) {
            return (
                <ProjectCopy
                    key={i}
                    dangerouslySetInnerHTML={{
                        __html: child.p,
                    }}
                />
            );
        }

        if (child.img) {
            return (
                <div key={i}>
                    <div css={{ maxWidth: 300 }}>
                        <Img
                            alt={child.img.alt}
                            fluid={child.img.src.childImageSharp.fluid}
                        />
                    </div>
                    <Quote notCentered>{child.img.quote}</Quote>
                </div>
            );
        }

        return <React.Fragment></React.Fragment>;
    });

    const hasLinks = Boolean(links && links.length);
    const linkSection =
        hasLinks &&
        links.map(({ title, href }, i) => (
            <li key={i}>
                <a
                    css={css({ ...linkStyle })}
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {title}
                </a>
            </li>
        ));

    return (
        <React.Fragment>
            <header>
                <Mission narrow isProject>
                    {title}{" "}
                    <NoOrphan>
                        (<Interrupt>{technologies}</Interrupt>)
                    </NoOrphan>
                </Mission>
            </header>
            <main>
                <ProjectFrame>
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
                    <Quote notCentered>{text}</Quote>
                </ProjectFrame>

                {/** Links */}
                <ProjectSection css={marginTop}>
                    <Link to="/">Back to home 🏠</Link>
                    {hasLinks && (
                        <span
                            css={{
                                display: "block",
                                margin: "30px 0 0",
                            }}
                        >
                            External links and press:{" "}
                        </span>
                    )}
                    <ProjectLinks>{linkSection}</ProjectLinks>
                </ProjectSection>

                {/** Description/Content */}
                <div css={{ marginTop: 30 }}>{content}</div>
            </main>
        </React.Fragment>
    );
};
