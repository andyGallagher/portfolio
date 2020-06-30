/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { Quote } from '../shared/quote';
import * as pictures from './assets';
import {
    LINK_STYLE,
    LINK_HOVER_STYLE,
    GENERAL_FONT_SIZE,
} from '../../styles/constants';

const ProfileLink = styled.a(LINK_STYLE);

export const Profile = () => {
    const data = useStaticQuery(graphql`
        query ProfilePictureQuery {
            file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid {
                        aspectRatio
                        base64
                        sizes
                        src
                        srcSet
                    }
                }
            }
        }
    `);

    return (
        <section
            css={css`
                padding: 50px 15% 50px;
            `}
        >
            <Img
                // src={pictures.square}
                fluid={data.file.childImageSharp.fluid}
                src={pictures.profile}
            />
            <Quote isPadded>“What you reap is what you sow.”</Quote>

            <div
                css={css`
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 50px;
                    font-size: 1rem;
                `}
            >
                <span>
                    Connect →&nbsp;
                    <ProfileLink
                        href="https://www.linkedin.com/in/andy-glags"
                        target="blank"
                        rel="noopener noreferrer"
                    >
                        <span>LinkedIn</span>
                    </ProfileLink>
                </span>

                <span
                    css={css`
                        display: block;
                        white-space: nowrap;
                    `}
                >
                    E-mail →&nbsp;
                    <ProfileLink href="mailto:andrewtgallagherJS@gmail.com?subject=Portfolio">
                        <span>andrewtgallagherJS@gmail.com</span>
                    </ProfileLink>
                </span>
            </div>
        </section>
    );
};
