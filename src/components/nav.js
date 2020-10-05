/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { Hilight } from "../styles/components/hilight";
import { breakpoints } from "../styles/breakpoints";
import { fontFamily } from "../styles/variables";
import { Link } from "gatsby";

const NavBar = styled.nav(
    breakpoints({
        display: ["flex", "none"],
        justifyContent: "center",
        alignItems: "center",

        color: "#fff",
        backgroundColor: "#000",
        fontFamily: fontFamily.secondary,
        fontWeight: 700,
        fontSize: 80,
        letterSpacing: -4,
        lineHeight: "80px",

        height: 100,
        width: "100%",
        overflow: "hidden",

        "& > a": {
            textDecoration: "none",
            color: "#fff",
        },
    })
);

export const Nav = ({ children }) => (
    <NavBar>
        <Link to="/">
            <Hilight>“</Hilight>
            {children}
            <Hilight>../</Hilight>
        </Link>
    </NavBar>
);
