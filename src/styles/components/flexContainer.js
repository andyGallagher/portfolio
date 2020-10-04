import styled from "@emotion/styled";

export const FlexContainer = styled.div(({ flexDirection }) => ({
    display: "flex",
    flexDirection: flexDirection || "column",
}));
