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
            <p className="content">Hello. Hi. Hello again. My name is Tyler Henry and it's December 2020. What a time to start a blog. Wonder how many blogs started during the pandemic. All of us out here in the www just giving it the old college try. Probably because most of us went to college but couldn't really figure it out from there so we needed to do this as a kind of side hobby or we're just trying to "find outselves maaaaan."  That's pretty much me. Would be crazy if I "found myself" on the internet. That would be a weird place for "myself" to hide.</p>
        </StyledAbout>
    )
}
