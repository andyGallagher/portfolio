/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { FlexContainer } from "../styles/components/flexContainer";
import { SideBar } from "../components/sideBar";
import { fontFamily, zIndex } from "../styles/variables";
import { breakpoints } from "../styles/breakpoints";
import "../assets/scss/styles.scss";

const GlobalStyles = styled.div({
    fontFamily: fontFamily.primary,
    overflow: "hidden",
});

const Content = styled.main(
    breakpoints({
        padding: ["35px", "55px 15% 35px 7.5%"],
        zIndex: zIndex.main,
    })
);

export const SiteWrapper = ({ children }) => (
    <GlobalStyles>
        <FlexContainer flexDirection={"row"}>
            <SideBar>Andrew</SideBar>
            <Content>{children}</Content>
        </FlexContainer>
    </GlobalStyles>
);
