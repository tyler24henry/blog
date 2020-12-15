import React from 'react';
import { Projects } from '../components/Projects';
import SEO from '../components/SEO';

export default function ProjectsPage({ data }) {
    const projects = data.projects.nodes;
    console.log(projects);
    return (
        <>
            <SEO />
            <Projects projects={projects} />
        </>
    )
}

export const query = graphql`
    query {
        projects: allSanityProject(sort: {fields: _createdAt, order: DESC}) {
            nodes {
                id
                title
                url
                description
                _createdAt 
            }
        }
    }
`;