/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Quote } from '../shared/quote';
import { LINK_STYLE } from '../../styles/constants';

const ProfileLink = styled.a({
    ...LINK_STYLE,
    padding: 0,
    lineHeight: '1.45rem',
});

export const Profile = () => {
    const data = useStaticQuery(graphql`
        query ProfilePictureQuery {
            file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
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
            <Img fluid={data.file.childImageSharp.fluid} />
            <Quote isPadded extraSpacing>
                “Water deeply, infrequently.” &mdash; ancient gardening proverb
            </Quote>

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
