import React from 'react';
import styled from 'styled-components';

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
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            align-items: center;
            img {
                width: 35px;
            }
        }
        .sentence {
            margin-top: 1.5rem;
        }
        #bold-underline {
            margin-top: 1rem;
            text-decoration: underline;
            font-weight: 600;
        }
    }
`;

export const Projects = () => {
    return (
        <StyledProjects>
            <p className="header">Projects</p>
            <div className="project">
                <div className="link">
                    <img src="https://res.cloudinary.com/tyler24henry/image/upload/v1601396244/footballicon_oi5vem.png" alt="Football" />
                    <a href="http://www.bulldogsandfriends.com" target="_blank">Fantasy football website</a>
                </div>
                <p className="sentence">Problem: ESPN Fantasy Football API doesn’t preserve all of its data from past weeks/seasons, making it impossible to see how a league developed week-by-week.</p>
                <p className="sentence">Solution: Create own API using the raw box scores that ESPN preserves in order to recreate “snapshots” of past weeks/seasons.</p>
                <p className="sentence">Using the box scores, I was able to piece together each respective team’s record and stats at any given point in the league’s history - kind of like a more in depth timeline with a narrative feel.</p>
                <p className="sentence" id="bold-underline">Each week the league has played has...</p>
                <p>&bull; Box scores</p>
                <p>&bull; Scoreboard</p>
                <p>&bull; Standings</p>
                <p>&bull; Power rankings with custom blurbs</p>
                <p>&bull; Superlative style weekly comparisons of each team (highest scoring teams that week, .)</p>
                <p id="bold-underline">And more...</p>
                <p>&bull; League records (overall highest scoring franchise, etc.)</p>
                <p>&bull; History of each franchise (owners, stats, schedule, box scores, etc.)</p>
                <p>&bull; League members can create blog posts & polls</p>
                <p>&bull; Discord-esque chat functionality</p>
            </div>
        </StyledProjects>
    )
}
