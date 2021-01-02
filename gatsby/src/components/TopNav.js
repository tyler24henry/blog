import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledTopNav = styled.div`
    padding: 4rem 0;
    background: #eeecf5;
    .nav-wrapper {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 2rem;
        justify-items: start;
        align-items: center;
    }
    a {
        font-size: 1.5rem;
        font-weight: 500;
    }
    #name {
        font-size: 2.5rem;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }
    .links-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, auto);
        justify-items: end;
        justify-content: end;
        gap: 2rem;
    }
    .current-page {
        border-bottom: 2px solid var(--blue);
    }
`;

export const TopNav = () => {
    let currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    if(currentUrl){
        currentUrl = currentUrl.split('/')[3];
    }
    return (
        <StyledTopNav>
            <div className="nav-wrapper">
                <Link id="name" to="/">Tyler Henry</Link>
                <div className="links-wrapper">
                    <Link to="/essays" className={currentUrl === 'essays' ? 'current-page' : ''}>Essays</Link>
                    <Link to="/websites" className={currentUrl === 'websites' ? 'current-page' : ''}>Websites</Link>
                    <Link to="/videos" className={currentUrl === 'videos' ? 'current-page' : ''}>Videos</Link>
                    {/* <Link to="/" className={currentUrl === 'notebook' ? 'current-page' : ''}>Notebook</Link> */}
                    <Link to="/about" className={currentUrl === 'about' ? 'current-page' : ''}>About</Link>
                    <Link to="/favorites" className={currentUrl === 'favorites' ? 'current-page' : ''}>Favs</Link>
                </div>
            </div>
        </StyledTopNav>
    )
}
