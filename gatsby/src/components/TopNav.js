import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledTopNav = styled.div`
    margin-top: 2rem;
    padding: 0.5rem;
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-gap: 2rem;
    justify-items: start;
    background: var(--snow);
    a {
        font-size: 1.2rem;
        font-weight: 500;
        text-transform: uppercase;
    }
`;

export const TopNav = () => {
    return (
        <StyledTopNav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
        </StyledTopNav>
    )
}
