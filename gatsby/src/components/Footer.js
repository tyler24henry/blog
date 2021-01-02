import React from 'react';
import styled from 'styled-components';
import { FiTwitter, FiGithub, FiInstagram } from 'react-icons/fi';

const FooterStyles = styled.footer`
    text-align: center;
    padding: 4rem 0;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    background: #eeecf5;
    @media(max-width: 414px){
        padding: 2rem 0;
    }
    .socials {
        font-size: 2rem;
        display: flex;
        align-items: center;
        a {
            margin-left: 2rem;
            color: var(--blue);
        }
    }
    #first {
        margin: 0;
    }
`;

export const Footer = () => {
    return (
        <FooterStyles>
            <div className="socials">
                <a href="https://www.twitter.com/ty24henry" id="first" target="_blank"><FiTwitter /></a>
                <a href="https://github.com/tyler24henry" target="_blank"><FiGithub /></a>
                <a href="https://www.instagram.com/tyler24henry/" target="_blank"><FiInstagram /></a>
            </div>
            <p>Website built by Tyler Henry.</p>
        </FooterStyles>
    )
}
