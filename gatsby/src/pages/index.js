import React from 'react';
import { graphql } from 'gatsby';

import { hotjar } from 'react-hotjar';

import { BlogPosts } from '../components/BlogPosts';
import SEO from '../components/SEO';

hotjar.initialize(process.env.GATSBY_HOTJAR_ID, 6);

export default function HomePage({ data }) {
    const blogPosts = data.blogPosts.nodes;
    return (
        <>
            <SEO />
            <BlogPosts blogPosts={blogPosts} />
        </>
    )
}

export const query = graphql`
    query allBlogPosts {
        blogPosts: allSanityPost {
            nodes {
                id
                title
                slug {
                    current
                }
                summary
                content
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