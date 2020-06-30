/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';
import { Quote } from '../shared/quote';
import * as pictures from './assets';
import {
    LINK_STYLE,
    LINK_HOVER_STYLE,
    GENERAL_FONT_SIZE,
} from '../../styles/constants';

const ProfilePic = styled.img({
    boxSizing: 'border-box',
    width: '100%',
});

const ProfileLink = styled.a(LINK_STYLE);

export const Profile = () => (
    <section css={css`padding: 50px 15% 50px;`}>
        <ProfilePic
            // src={pictures.square}
            src={pictures.profile}
        />
        <Quote isPadded>
            “What you reap is what you sow.”
        </Quote>

        <div css={css`
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-size: 1rem;
        `}>
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

            <span css={css`
                display: block;
                white-space: nowrap;
                
            `}>E-mail →&nbsp;
                <ProfileLink href="mailto:andrewtgallagherJS@gmail.com?subject=Portfolio">
                    <span>andrewtgallagherJS@gmail.com</span>
                </ProfileLink>
            </span>
        </div>
    </section>
);
