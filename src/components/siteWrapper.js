/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { SiteMetaData } from "./siteMetaData";
import { SideBar } from "../components/sideBar";
import { Nav } from "../components/nav";
import { FlexContainer } from "../styles/components/flexContainer";
import { fontFamily, zIndex, color } from "../styles/variables";
import { breakpoints } from "../styles/breakpoints";
import "../assets/scss/styles.scss";

console.log(color);

const GlobalStyles = styled.div(
    breakpoints({
        fontFamily: fontFamily.primary,
        overflow: "hidden",
        width: "100vw",
        color: color.copy.hex,
        backgroundColor: color.background.hex,
    })
);

const Content = styled.main(
    breakpoints({
        padding: [20, "55px 15% 35px 7.5%"],
        zIndex: zIndex.main,
        maxWidth: [undefined, "1100px"],
    })
);

export const SiteWrapper = ({ children }) => (
    <GlobalStyles>
        <SiteMetaData />
        <FlexContainer flexDirection={["column", "row"]}>
            <SideBar>Andrew</SideBar>
            <Nav>Andrew</Nav>
            <Content>{children}</Content>
        </FlexContainer>
    </GlobalStyles>
);
