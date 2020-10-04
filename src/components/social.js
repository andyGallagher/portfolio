/** @jsx jsx  */
/* eslint-disable jsx-a11y/accessible-emoji */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { breakpoints } from "../styles/breakpoints";
import { fontSize, color } from "../styles/variables";

const SocialWrapper = styled.section(
    breakpoints({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: ["center", "flex-start"],
        marginTop: ["50px", "20px"],
        fontSize: "1rem",
    })
);

const SocialLinkWrapper = styled.div({
    fontSize: fontSize.copy,
    fontWeight: 100,
    lineHeight: 1.35,

    whiteSpace: "no-wrap",
});
const SocialLink = styled.a({
    fontWeight: 400,
    color: color.secondary.hex,

    "&:active, &:visited": {
        color: color.secondary.hex,
    },
});

export const Social = () => {
    return (
        <SocialWrapper>
            <SocialLinkWrapper>
                Connect 🤝{" "}
                <SocialLink
                    href="https://www.linkedin.com/in/%E2%9A%A1%E2%98%94%E2%9B%88/"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <span>LinkedIn</span>
                </SocialLink>
            </SocialLinkWrapper>
            <SocialLinkWrapper>
                E-mail 📨{" "}
                <SocialLink href="mailto:andrewtgallagherJS@gmail.com?subject=Portfolio">
                    <span>andrewtgallagherJS@gmail.com</span>
                </SocialLink>
            </SocialLinkWrapper>
            <SocialLinkWrapper>
                Github 🐙{" "}
                <SocialLink
                    href="https://github.com/agallagher777"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <span>Work</span>
                </SocialLink>{" "}
                |{" "}
                <SocialLink
                    href="https://github.com/corbaciBay"
                    target="blank"
                    rel="noopener noreferrer"
                >
                    <span>Personal</span>
                </SocialLink>
            </SocialLinkWrapper>
        </SocialWrapper>
    );
};
