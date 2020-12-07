import React from 'react';
import styled from 'styled-components';
import { StyledRightNavHeader } from '../styles/RightNavStyles';
import { FiTwitter, FiInstagram, FiFacebook, FiGithub } from 'react-icons/fi';
import { ImReddit } from 'react-icons/im';
import { FaGoodreadsG } from 'react-icons/fa';

const StyledConnect = styled.div`
    .icons {
        margin-top: 1rem;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: 2rem;
        #facebook {
            margin-right: 0.1rem;
        }
        #github {
            margin-left: 0.4rem;
            margin-right: 0.3rem;
        }
        #goodreads {
             margin-left: 0.2rem;
            font-size: 1.8rem;
        }
        a {
            transition: all 0.4s;
            &:hover {
                transform: translateY(-4px);
            }
        }
    }
`;

export const Connect = () => {
    return (
        <StyledConnect>
            <StyledRightNavHeader>Connect</StyledRightNavHeader>
            <div className="icons">
                <a href="https://www.twitter.com/ty24henry" target="_blank"><FiTwitter /></a>
                <a href="https://www.facebook.com/tyler24henry" target="_blank"><FiFacebook id="facebook" /></a>
                <a href="https://www.instagram.com/tyler24henry" target="_blank"><FiInstagram /></a>
                <a href="https://www.github.com/tyler24henry" target="_blank"><FiGithub id="github" /></a>
                <a href="https://www.reddit.com/user/tyler24henry/" target="_blank"><ImReddit /></a>
                <a href="https://www.goodreads.com/tyler24henry" target="_blank"><FaGoodreadsG id="goodreads" /></a>
            </div>
        </StyledConnect>
    )
}
