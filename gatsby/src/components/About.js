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
    a {
        font-weight: 600;
    }
`;

export const About = () => {
    return (
        <StyledAbout>
            <p className="header">About</p>
            <p className="content">Hello!  My name is Tyler Henry and I’m probably not as enthusiastic as that exclamation mark might imply.  Which leads me to my next point.  I am an INTROVERT.  Born and raised about an hour northeast of Philadelphia, Pennsyltucky.  So I do #TrustTheProcess and am lucky enough to attend every Sixers home game (I do live stats for a company based in Europe, kind of a sweet gig).  I should probably post about that more but I try not to brag.  I’m also in the process of becoming a web developer.  Made this website myself along with a few others I have listed on the <Link to="/projects">projects</Link> page.</p>
            <p className="content">I’m interested in movies, comedy, sports, and by god I hope to discover a few other things in the process of writing posts for this blog.  I hope you find something that interests you.  Thanks for coming to this corner of the internet.</p>
        </StyledAbout>
    )
}
