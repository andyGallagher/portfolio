/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints";
import { fontSize, fontFamily } from "../variables";

const QuoteSpan = styled.span(({ isPadded, extraSpacing, notCentered }) =>
    breakpoints({
        display: "block",

        fontWeight: 100,
        fontFamily: fontFamily.primary,
        fontSize: fontSize.zeta,
        fontStretch: "condensed",
        fontStyle: "italic",

        padding: isPadded ? "15px 20px 0" : "15px 0",
        boxSizing: "border-box",

        letterSpacing: extraSpacing ? 2.8 : 1.1,

        textAlign: !notCentered && "center",
        width: [undefined, notCentered ? 300 : 250],
    })
);

export const Quote = ({ children, ...props }) => (
    <QuoteSpan {...props}>{children}</QuoteSpan>
);
