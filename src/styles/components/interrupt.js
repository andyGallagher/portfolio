import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints";
import { fontFamily, color } from "../variables";

export const Interrupt = styled.strong(({ small }) =>
    breakpoints({
        display: "inline-block",
        fontFamily: fontFamily.secondary,
        letterSpacing: 0,
        fontWeight: 700,
        textTransform: "uppercase",
        borderBottom: `${small ? 7 : 12}px solid rgba(${
            color.primary.rgb
        }, .45)`,
        height: "4px",
        lineHeight: "4px",
        whiteSpace: "nowrap",
    })
);
