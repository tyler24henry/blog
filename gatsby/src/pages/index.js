import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';
import { Home } from '../components/Home';

export default function HomePage({ data }) {
    const blogPosts = data.blogPosts.nodes;
    const projects = data.projects.nodes;
    return (
        <>
            <SEO title="Hi, I'm Tyler Henry" />
            <Home blogPosts={blogPosts} projects={projects} />
        </>
    )
}

export const query = graphql`
    query allBlogPosts {
        blogPosts: allSanityPost(sort: {fields: _createdAt, order: DESC}) {
            nodes {
                id
                title
                slug {
                    current
                }
                summary
                _rawContent(resolveReferences: {maxDepth: 10})
                _createdAt
                image {
                    asset {
                        fluid(maxWidth: 1000){
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                categories {
                    name
                    slug {
                        current
                    }
                }
            }
        }
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