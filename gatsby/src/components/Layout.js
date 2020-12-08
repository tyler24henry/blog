import React from 'react';
import 'normalize.css';
import { Footer } from './Footer';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import { RightNav } from './RightNav';
import { TopNav } from './TopNav';

const SiteBorderStyles = styled.div`
  max-width: 95vw;
`;

const ContentStyles = styled.div`
  width: 80vw;
  margin: 0 auto;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 4rem;
  a {
    text-decoration: none;
    transition: all 0.4s;
    &:hover {
        text-decoration: underline;
        text-decoration-color: var(--red);
    }
  }
`;

const BodyStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px;
  grid-gap: 4rem;
  @media(max-width: 1000px){
      grid-template-columns: 1fr;
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
          <RightNav />
        </BodyStyles>
        <Footer />
      </ContentStyles>
    </SiteBorderStyles>
    </>
  );
}