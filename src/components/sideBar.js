/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Hilight } from "../styles/components/hilight";
import { breakpoints } from "../styles/breakpoints";
import { fontFamily, zIndex } from "../styles/variables";

const SideBarColumn = styled.aside(
    breakpoints({
        zIndex: zIndex.sideBar,
        position: "relative",
        display: ["none", "flex"],
        justifyContent: "center",
        alignItems: "flex-start",
        width: 220,
        paddingTop: 30,
        fontFamily: fontFamily.secondary,
        color: "#fff",
        backgroundColor: "#000",
    })
);

const SideBarViewPortHeightWrapper = styled.div({
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const SideBarRotatedText = styled.div(
    breakpoints({
        transform: "rotate(90deg)",
        whiteSpace: "nowrap",
        fontWeight: 700,
        fontSize: 300,
        height: 360,
        width: "100vh",
        letterSpacing: -11,
    })
);

export const SideBar = ({ children }) => (
    <SideBarColumn>
        <SideBarViewPortHeightWrapper>
            <SideBarRotatedText>
                <Hilight>“</Hilight>
                {children}
                <Hilight>../</Hilight>
            </SideBarRotatedText>
        </SideBarViewPortHeightWrapper>
    </SideBarColumn>
);
