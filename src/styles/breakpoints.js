import facepaint from "facepaint";

// Tablet, desktop
const MEDIA_QUERY_WIDTH = [649, 989];

export const breakpoints = facepaint(
    MEDIA_QUERY_WIDTH.map((bp) => `@media (min-width: ${bp}px)`)
);
