import React from 'react';
import { Websites } from '../components/Websites';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

export default function WebsitesPage({ data }) {
    const projects = data.projects.nodes;
    return (
        <>
            <SEO title="Websites - Tyler Henry" />
            <Websites projects={projects} />
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
                image {
                    asset {
                        fluid(maxWidth: 1000){
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                _createdAt 
            }
        }
    }
`;