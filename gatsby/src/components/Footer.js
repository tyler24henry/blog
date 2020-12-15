import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    text-align: center;
    padding: 1rem 0;
    font-size: 1.3rem;
`;

export const Footer = () => {
    return (
        <FooterStyles>
            Built by Tyler Henry
        </FooterStyles>
    )
}
