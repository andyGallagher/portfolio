/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { PortfolioHeader, PortfolioSection } from './portfolio';
import { SlideshowWrapper, SlideshowImage, SlideshowVideo } from './slideshow';
import { Quote } from '../shared/quote';
import { LINK_STYLE } from '../../styles/constants';
import * as videos from './assets';

export const Project = ({
    title,
    isVideo,
    src,
    srcName,
    isTall,
    text,
    technologies,
    description,
}) => {
    return (
        <PortfolioSection>
            <PortfolioHeader>
                <span>{title}</span> →{' '}
                <span
                    css={css`
                        font-style: italic;
                    `}
                >
                    ({technologies})
                </span>
            </PortfolioHeader>
            <SlideshowWrapper static>
                <div
                    css={css`
                        padding: 25px 20px 0;
                        justify-content: center;
                        box-sizing: border-box;
                    `}
                >
                    {isVideo ? (
                        <SlideshowVideo
                            src={videos[srcName]}
                            muted={true}
                            loop={true}
                            autoPlay={true}
                            isTall={isTall}
                        />
                    ) : (
                        <SlideshowImage
                            fluid={src.childImageSharp.fluid}
                            isTall={isTall}
                        />
                    )}

                    <Quote>{text}</Quote>
                </div>
            </SlideshowWrapper>
            <div
                css={{
                    fontSize: '1rem',
                    padding: '10px 0 0',

                    a: {
                        ...LINK_STYLE,
                        paddingTop: 0,
                    },

                    p: {
                        '&:first-of-type': {
                            marginTop: 0,
                        },
                        '&:last-of-type': {
                            marginBottom: '2em',
                        },
                    },
                }}
            >
                <div
                    css={css`
                        padding-bottom: 10px;
                    `}
                >
                    <Link to="/">← Back</Link>
                </div>
                {description.map((child) => {
                    console.log(child);

                    if (child.p) {
                        return (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: child.p,
                                }}
                            ></p>
                        );
                    }

                    if (child.img) {
                        return (
                            <div>
                                <div
                                    css={css`
                                        width: 80%;
                                        margin: 1em 0 0;
                                    `}
                                >
                                    <Img
                                        alt={child.img.alt}
                                        fluid={
                                            child.img.src.childImageSharp.fluid
                                        }
                                    />
                                </div>
                                <Quote notCentered>{child.img.quote}</Quote>
                            </div>
                        );
                    }

                    return <></>;
                })}
            </div>
        </PortfolioSection>
    );
};
