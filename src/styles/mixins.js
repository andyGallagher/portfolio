import { color } from "./variables";

export const linkStyle = {
    fontStretch: "expanded",
    color: color.secondary.hex,

    "&:active, &:visited": {
        color: color.secondary.hex,
    },
};
