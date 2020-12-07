import React from 'react';
import styled from 'styled-components';

const StyledConnect = styled.div`
    #header {
        padding: 0.5rem 0;
        border-bottom: 1px solid var(--grey);
        color: var(--black);
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 0.2rem;
    }
    .icons {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: auto auto 1fr;
        grid-gap: 0.4rem;
        img {
            width: 24px;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
`;

export const Connect = () => {
    return (
        <StyledConnect>
            <p id="header">Connect</p>
            <div className="icons">
                <a href="https://www.twitter.com/ty24henry" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1592326411/twitter_cc1nyd.png" alt="Twitter icon" /></a>
                <a href="https://www.instagram.com/tyler24henry" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1592485830/instagramcircular_xip8ey.png" alt="Instagram icon" /></a>
                <a href="https://www.facebook.com/tyler24henry" target="_blank"><img src="https://res.cloudinary.com/tyler24henry/image/upload/v1592326411/facebook_hojc97.png" alt="Facebook icon" /></a>
            </div>
        </StyledConnect>
    )
}
