import React from 'react';
import styled from 'styled-components';
import { GiSpiderWeb } from 'react-icons/gi';
import { FaRegLaugh } from 'react-icons/fa';
import { SiAwesomelists } from 'react-icons/si';

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

export const Projects = ({ projects }) => {
    return (
        <StyledProjects>
            <p className="header">Projects</p>
            {projects.map(project => {
                return (
                    <div className="project" key={project.id}>
                        <div className="link">
                            {project.id === "-b93792c4-33b7-5181-b13e-0fab6e89e23f" && (
                                <GiSpiderWeb />
                            )}
                            {project.id === "-dd3001f9-b6a4-597b-86dd-8f8813e1a81e" && (
                                <FaRegLaugh />
                            )}
                            {project.id === "-12ad0463-3c64-5534-b1d2-1ee0b892a3d6" && (
                                <SiAwesomelists />
                            )}
                            <a href={project.url} target="_blank">{project.title}</a>
                        </div>
                        <p className="sentence">{project.description}</p>
                    </div>
                )
            })}
        </StyledProjects>
    )
}
