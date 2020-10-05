///////////////////
// FONT-FAMILIES //
///////////////////
export const fontFamily = {
    primary: "Lunchtype, sans-serif",
    secondary: "Wremena, serif",
};

////////////////
// FONT-SIZES //
////////////////
export const fontSize = {
    massive: 180,
    header: 36,
    subheader: 24,
    copy: 18,
    zeta: 14,
};

////////////
// COLORS //
////////////
const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 * Convert hex value to RGB.
 * @param {string} hex - string hex value such as #bada55
 * @returns {string} r,g,b string.
 */
const hexToRgb = (hex) => {
    const bigint = parseInt(hex.replace("#", ""), 16);
    return [...Array(3)].map((x, i) => (bigint >> (16 - 8 * i)) & 255).join();
};

// Hex color values object.
const colors = {
    primary: "#8ede54",
    secondary: "#0000ff",

    link: !isDarkMode ? "#00f" : "#8ede54",
    hilight: !isDarkMode ? "#8ede54" : "#42f554",

    copy: !isDarkMode ? "#000" : "#fff",
    background: !isDarkMode ? "#fff" : "#242424",
};

// Take all keys and keep hex, appending rgb values.
const colorsMap = Object.entries(colors).reduce(
    (acc, [key, hex]) => ({
        ...acc,
        [key]: {
            hex,
            rgb: hexToRgb(hex),
        },
    }),
    {}
);

export { colorsMap as color };

///////////////
// Z-INDEXES //
///////////////
export const zIndex = {
    sideBar: 1,
    main: 2,
};
