import styled from "@emotion/styled";
import { breakpoints } from "../breakpoints";

export const FlexContainer = styled.div(({ flexDirection }) =>
    breakpoints({
        display: "flex",
        flexDirection: flexDirection || "column",
    })
);
