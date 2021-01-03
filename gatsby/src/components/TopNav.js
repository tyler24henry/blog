import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiX } from 'react-icons/bi';

const StyledTopNav = styled.div`
    padding: 4rem 0;
    background: #eeecf5;
    @media(max-width: 414px){
        padding: 2rem 0;
    }
    .nav-wrapper {
        width: 80vw;
        margin: 0 auto;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 2rem;
        justify-items: start;
        align-items: center;
        @media(max-width: 414px){
            width: 90vw;
        }
    }
    a {
        font-size: 1.5rem;
        font-weight: 500;
    }
    #name {
        font-size: 2.5rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    .links-wrapper {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, auto);
        justify-items: end;
        justify-content: end;
        gap: 2rem;
        @media(max-width: 414px){
            display: none;
        }
    }
    .current-page {
        border-bottom: 2px solid var(--blue);
    }
    .hamburger-btn, .exit-btn {
        display: none;
        @media(max-width: 414px){
            display: block;
            justify-self: end;
            background: none;
            border: none;
            color: var(--black);
            font-size: 2.2rem;
            padding: 0;
        }
    }
    .dropdown-outer-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 10;
        height: 100vh;
        width: 100vw;
        background: var(--blue);
        .dropdown-inner-wrapper {
            width: 90vw;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 4.5rem;
            .header-grid {
                display: grid;
                grid-template-columns: auto 1fr;
                align-items: center;
                padding-top: 1.5rem;
            }
            #first-link {
                margin-top: -0.5rem;
            }
            a, #name {
                color: var(--white);
                font-size: 2.5rem;
                letter-spacing: 1px;
            }
            a {
                font-weight: 400;
            }
            .exit-btn {
                color: var(--white);
                font-size: 3.4rem;
                margin-right: -0.5rem;
            }
        }
    }
`;

export const TopNav = () => {
    const [dropdown, setDropdown] = useState(false);
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
                <button type="button" onClick={e => setDropdown(true)} className="hamburger-btn"><GiHamburgerMenu /></button>
            </div>
            {dropdown && (
                <div className="dropdown-outer-wrapper">
                    <div className="dropdown-inner-wrapper">
                        <div className="header-grid">
                            <Link id="name" onClick={e => setDropdown(false)} to="/">Tyler Henry</Link>
                            <button type="button" onClick={e => setDropdown(false)} className="exit-btn"><BiX /></button>
                        </div>
                        <Link to="/essays" id="first-link" onClick={e => setDropdown(false)} className={currentUrl === 'essays' ? 'current-page' : ''}>Essays</Link>
                        <Link to="/websites" onClick={e => setDropdown(false)} className={currentUrl === 'websites' ? 'current-page' : ''}>Websites</Link>
                        <Link to="/videos" onClick={e => setDropdown(false)} className={currentUrl === 'videos' ? 'current-page' : ''}>Videos</Link>
                        {/* <Link to="/" onClick={e => setDropdown(false)} className={currentUrl === 'notebook' ? 'current-page' : ''}>Notebook</Link> */}
                        <Link to="/about" onClick={e => setDropdown(false)} className={currentUrl === 'about' ? 'current-page' : ''}>About</Link>
                        <Link to="/favorites" onClick={e => setDropdown(false)} className={currentUrl === 'favorites' ? 'current-page' : ''}>Favs</Link>
                    </div>
                </div>
            )}
        </StyledTopNav>
    )
}
