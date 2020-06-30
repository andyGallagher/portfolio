export const GENERAL_FONT_SIZE = 1.5;

export const LIGHT_GREY = '#e3e3e3';
const ACCENT_COLOR = '#a9c2c9';

export const LINK_HOVER_STYLE = {
    padding: '10px 5px',
    textDecoration: 'underline',
    border: `1px solid ${ACCENT_COLOR}`,
    color: 'blue',

    '> span': {
        '&:first-of-type': { backgroundColor: ACCENT_COLOR, }
    }
};

export const LINK_STYLE = {
    fontSize: '1rem',
    lineHeight: `${1.2 * 1.6}rem`,

    background: 'transparent',
    textAlign: 'left',

    margin: 0,
    border: 'none',

    color: 'blue',

    padding: '10px 0',
    
    '&:hover': LINK_HOVER_STYLE,
    '&:visited': LINK_HOVER_STYLE,
    '&:active': LINK_HOVER_STYLE,
};
