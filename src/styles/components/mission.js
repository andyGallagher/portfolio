import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints";
import { fontSize } from "../variables";

export const Mission = styled.h1(({ narrow }) =>
    breakpoints({
        fontSize: fontSize.header,
        lineHeight: 1.3,
        letterSpacing: 1.2,
        fontWeight: 400,

        margin: "0 0 20px",
        width: narrow ? [undefined, "60%"] : [undefined, "85%"],
    })
);
