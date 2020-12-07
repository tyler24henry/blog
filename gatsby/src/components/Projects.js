import React from 'react';
import styled from 'styled-components';
import { IoAmericanFootball } from 'react-icons/io5';
import { GiSpiderWeb } from 'react-icons/gi';
import { BiShocked } from 'react-icons/bi';

const StyledProjects = styled.div`
    .header {
        font-size: 2.2rem;
        font-weight: 700;
        color: ${props => props.theme.black};
    }
    .project {
        margin-top: 2.5rem;
        font-size: 1.4rem;
        line-height: 1.5;
        .link {
            display: flex;
            grid-gap: 1rem;
            align-items: center;
        }
        .sentence {
            margin-top: 1.5rem;
        }
        #shocked {
            margin-bottom: -0.15rem;
        }
    }
`;

export const Projects = () => {
    return (
        <StyledProjects>
            <p className="header">Projects</p>
            <div className="project">
                <div className="link">
                    <IoAmericanFootball />
                    <a href="http://www.bulldogsandfriends.com" target="_blank">Fantasy football website</a>
                </div>
                <p className="sentence">I made a fantasy football website for one of the leagues that I'm in.  Nobody uses it, nobody acknowledges it, and quite honestly, it's a piece of garbage so I don't blame them, although I am a little resentful at their lack of tact when dealing with a fragile human being (me).  So don't get your hopes up, but it actually took me a lot of time to put together.  Ok, back to being resentful at imaginary things.</p>
            </div>
            <div className="project">
                <div className="link">
                    <GiSpiderWeb />
                    <a href="http://www.tylerhenry.io" target="_blank">Web developer portfolio</a>
                </div>
                <p className="sentence">My shabby portfolio which consists of the aforementioned fantasy football website and not much else.  If you think that project was bad, you should have seen what came before it <BiShocked id="shocked" /></p>
            </div>
        </StyledProjects>
    )
}
