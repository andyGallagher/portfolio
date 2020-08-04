/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Header } from '../components/header';
import { Portfolio } from '../components/portfolio/portfolio';
import { Profile } from '../components/profile/profile';
import '../styles/style.css';

const FlexContainer = styled.div({ flexDirection: 'column' });

export default () => {
    return (
        <FlexContainer>
            <Header />
            <Portfolio />
            <Profile />
        </FlexContainer>
    );
};
