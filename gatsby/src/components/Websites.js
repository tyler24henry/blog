import React from 'react';
import styled from 'styled-components';
import { StyledContentGrid } from './BlogPosts';
import Img from 'gatsby-image';

const StyledProjects = styled.div`

`;

export const Websites = ({ projects }) => {
    return (
        <StyledProjects>
            <StyledContentGrid>
                {projects.map(project => {
                    return (
                        <div className="item-wrapper" key={project.id}>
                        <a className="title" href={project.url} target="_blank"><Img className="item-image" fluid={project.image.asset.fluid} alt={project.title} /></a>
                            <a className="title" href={project.url} target="_blank">{project.title}</a>
                            <p className="description">{project.description}</p>
                        </div>
                    )
                })}
            </StyledContentGrid>
        </StyledProjects>
    )
}
