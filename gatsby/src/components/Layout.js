import React from 'react';
import 'normalize.css';
import { Footer } from './Footer';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { TopNav } from './TopNav';

const SiteBorderStyles = styled.div`

`;

const ContentStyles = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-gap: 6rem;
  @media(max-width: 414px){
      grid-gap: 0;
  }
  a {
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
        color: var(--blue);
    }
  }
`;

const BodyStyles = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media(max-width: 700px){
    width: 90vw;
  }
  @media(max-width: 414px){
      width: 100vw;
    }
`;

export default function Layout({ children }) {
  return (
    <>
    <GlobalStyles />
    <Typography />
    <SiteBorderStyles>
      <ContentStyles>
        <TopNav />
        <BodyStyles>
          {children}
        </BodyStyles>
        <Footer />
      </ContentStyles>
    </SiteBorderStyles>
    </>
  );
}