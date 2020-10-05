import { color } from "./variables";

export const linkStyle = {
    fontStretch: "expanded",
    color: color.link.hex,

    "&:active, &:visited": {
        color: color.link.hex,
    },
};
