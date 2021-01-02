import React from 'react';
import { graphql } from 'gatsby';

import { BlogPosts } from '../components/BlogPosts';
import SEO from '../components/SEO';

export default function EssaysPage({ data }) {
    const blogPosts = data.blogPosts.nodes;
    return (
        <>
            <SEO title="Essays - Tyler Henry" />
            <BlogPosts blogPosts={blogPosts} />
        </>
    )
}

export const query = graphql`
    query {
        blogPosts: allSanityPost(sort: {fields: _createdAt, order: DESC}) {
            nodes {
                id
                title
                slug {
                    current
                }
                summary
                _rawContent(resolveReferences: {maxDepth: 10})
                _rawFootnotes(resolveReferences: {maxDepth: 10})
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
    }
`;