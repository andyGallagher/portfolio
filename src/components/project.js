/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { Quote } from "../styles/components/quote";
import { Mission } from "../styles/components/mission";
import { Interrupt } from "../styles/components/interrupt";
import { NoOrphan } from "../styles/components/noOrphan";
import { fontSize } from "../styles/variables";
import { linkStyle } from "../styles/mixins";
import * as videos from "../assets/images/projects/video";

const projectStyle = css({
    fontSize: fontSize.copy,
    lineHeight: 1.25,
    fontWeight: 100,
    fontStretch: "expanded",
    width: "80%",

    "& a": {
        ...linkStyle,
    },
});

const workImageCss = css({
    maxWidth: 400,
    margin: "15px 0 0",
});

const marginTop = css({
    marginTop: 15,
});

const ProjectSection = styled.div({
    ...projectStyle,
});

const ProjectCopy = styled.p({
    ...projectStyle,
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

    const linkSection =
        Boolean(links && links.length) &&
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
                <Mission narrow>
                    {title}{" "}
                    <NoOrphan>
                        (<Interrupt>{technologies}</Interrupt>)
                    </NoOrphan>
                </Mission>
            </header>
            <main>
                {isVideo ? (
                    <video
                        css={workImageCss}
                        src={videos[srcName]}
                        muted={true}
                        loop={true}
                        autoPlay={true}
                    />
                ) : (
                    <Img css={workImageCss} fluid={src.childImageSharp.fluid} />
                )}
                <Quote notCentered>{text}</Quote>

                {/** Links */}
                <ProjectSection css={marginTop}>
                    <Link to="/">Back to home 🏠</Link>
                    <span
                        css={{
                            display: "block",
                            margin: "30px 0 10px",
                        }}
                    >
                        External links and press:{" "}
                    </span>
                    {linkSection}
                </ProjectSection>

                {/** Description/Content */}
                <div css={{ marginTop: 30 }}>{content}</div>
            </main>
        </React.Fragment>
    );
};
