import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints";
import { fontSize } from "../variables";

export const Mission = styled.h1(({ narrow, isProject, isTitle }) =>
    breakpoints({
        fontSize: isTitle ? fontSize.title : fontSize.header,
        lineHeight: [1.15, 1.3],
        letterSpacing: 1.2,
        fontWeight: [700, isProject ? 700 : 400],

        margin: "0 0 20px",
        width: narrow ? [undefined, "60%"] : [undefined, "85%"],

        "& > span": {
            display: [isProject ? "block" : "inline-block", "inline-block"],
            fontSize: [
                isProject ? fontSize.copy : fontSize.header,
                fontSize.header,
            ],
            lineHeight: [isProject ? 1.8 : 1.15, 1.3],
        },
    })
);
