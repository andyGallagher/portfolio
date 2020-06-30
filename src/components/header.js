/** @jsx jsx */
import { jsx, keyframes }from '@emotion/core'
import styled from '@emotion/styled';
import { GENERAL_FONT_SIZE } from '../styles/constants'; 

const HeaderSection = styled.section({
    color: '#fff',
    backgroundColor: '#000',
    
    fontSize: `${GENERAL_FONT_SIZE}rem`,
    lineHeight: `${GENERAL_FONT_SIZE * 1.4}rem`,

    padding: '10px 15px',
    position: 'relative',
});

const blinkAnimation = keyframes`
    0% {
        opacity: 0;
    }
    69% {
        opacity: 0;
    }
    70% {
        opacity: 1;
    }
`;

const HeaderParagraph = styled.p(({
    marginTop,
    marginBottom,
    blink
}) => ({
    margin: 0,
    marginTop: marginTop && '15px',
    marginBottom: marginBottom && '15px',
    
    ":after": blink && {
        display: 'inline-block',
        content: '" "',
        backgroundColor: 'white',
        height: '20px',
        width: '8px',
        marginLeft: '5px',
        marginTop: '6px',
        position: 'absolute',
        animation: `${blinkAnimation} 1s infinite`,
    }
}));

export const Header = () => (
    <HeaderSection>
        <HeaderParagraph
            blink={true}
        >
            Andrew Gallagher is a Philadelphia based software developer.
            He currently works as a front end developer at the Barnes Foundation.
            He develops web sites (React → TypeScript / JavaScript, BEM → SCSS) and native applications (Android → Kotlin, iOS → React Native).
        </HeaderParagraph>
    </HeaderSection>
);
