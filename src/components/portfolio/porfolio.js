/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import { Slideshow, SLIDESHOW_TIME } from './slideshow';
import { TEST } from './assets';
import {
    LIGHT_GREY,
    LINK_STYLE,
    LINK_HOVER_STYLE,
} from '../../styles/constants';

const PortfolioSection = styled.main({
    flexGrow: 1,
    color: 'black',
    backgroundColor: LIGHT_GREY,
    padding: '10px 15px 30px',
});

const PortfolioHeader = styled.h1({
    fontSize: '1.8rem',
    margin: 0,
    paddingBottom: '10px',
    fontWeight: 300,
});

const PortfolioProjectList = styled.ul({
    margin: 0,
    padding: '10px 0 0',
    listStyle: 'none',
});

const PortfolioProject = styled.li(({ isActive }) => {
    // If this is active, spread active style.
    const activeStyle = isActive ? LINK_HOVER_STYLE : {};

    return {
        '> a': {
            ...LINK_STYLE,
            ...activeStyle,
        },
    };
});

export const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        let sto;

        const si = setInterval(() => {
            setActiveIndex((activeIndex) => (activeIndex + 1) % TEST.length);
        }, SLIDESHOW_TIME);

        return () => {
            if (si) {
                clearInterval(si);
            }

            if (sto) {
                clearTimeout(sto);
            }
        };
    }, []);

    return (
        <PortfolioSection>
            <PortfolioHeader>Recent Work</PortfolioHeader>
            <Slideshow activeIndex={activeIndex} />
            <PortfolioProjectList>
                {TEST.map(({ title, technologies, href }, i) => (
                    <PortfolioProject key={title} isActive={activeIndex === i}>
                        <Link to={`/projects/${href}`}>
                            <span>{title}</span> →{' '}
                            <span
                                css={css`
                                    font-style: italic;
                                `}
                            >
                                ({technologies})
                            </span>
                        </Link>
                    </PortfolioProject>
                ))}
            </PortfolioProjectList>
        </PortfolioSection>
    );
};
