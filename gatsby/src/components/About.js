import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledAbout = styled.div`
    .header {
        font-size: 2.2rem;
        font-weight: 700;
        color: ${props => props.theme.black};
    }
    .content {
        margin-top: 1.5rem;
        font-size: 1.4rem;
        line-height: 1.5;
        #currently-available {
            font-weight: 600;
            color: ${props => props.theme.black};
        }
    }
`;

export const About = () => {
    return (
        <StyledAbout>
            <p className="header">About</p>
            <p className="content">
                Hi.  My name is Tyler Henry.  I hope to write on here every so often about things that I perceive as deep and interesting until some times passes and I realize how dumb past-me was.  I know that I will hate the previous sentence very soon but that's because I already do.
            </p>
            <p className="content">
                I guess I should say that I am a self-taught web developer like everyone else on the internet and like everyone else who is self-taught, I am <span id="currently-available">currently available</span> and accessible via social media or email (tyler.henry2442@gmail.com).
            </p>
            <p className="content">
                My past web creations are linked on the <Link to="/projects"><a>Projects</a></Link> page.
            </p>
        </StyledAbout>
    )
}
