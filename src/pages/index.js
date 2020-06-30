/** @jsx jsx */
import { jsx }from '@emotion/core'
import styled from '@emotion/styled';
import { Header } from '../components/header';
import { Portfolio } from '../components/portfolio/porfolio';
import { Profile } from '../components/profile/profile';
import '../styles/style.css';

const FlexContainer = styled.div({
  // display: 'flex',
  flexDirection: 'column'
});

export default () => {
  return (
    <FlexContainer>
      <Header />
      <Portfolio />
      <Profile />
    </FlexContainer>
  );
}