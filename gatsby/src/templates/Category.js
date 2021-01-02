import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from '../components/SEO';
import { BlogPosts } from '../components/BlogPosts';

const StyledCategory = styled.div`
    .category-header {
        margin-bottom: 7rem;
        h2 {
            padding: 0 0.3rem;
            font-size: 4rem;
            font-weight: 600;
            }
        .description {
            padding: 0.4rem 0 0 0.2rem;
            font-size: 1.3rem;
        }
    }
`;

// TODO
// seo => category name

export default function SingleCategoryPage({ data }) {
   const filteredBlogPosts = data.blogPosts.nodes;
   const category = data.category;
  return (
    <>
        <SEO title={category.name} image={category.image?.asset?.fluid?.src} />
        <StyledCategory>
            <div className="category-header">
                <h2>{category.name}</h2>
                <Img id="image" fluid={category.image.asset.fluid} alt={category.name} />
                <p className="description">{category.description}</p>
            </div>
            <BlogPosts blogPosts={filteredBlogPosts} />
        </StyledCategory>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
const query = graphql`
  query($slug: String!) {
    blogPosts: allSanityPost(filter: {categories: {elemMatch: {slug: {current: {eq: $slug}}}}}) {
        nodes {
            id
            title
            slug {
                current
            }
            summary
            _createdAt
            categories {
                name
                slug {
                current
                }
            }
        }
    }
    category: sanityCategory(slug: {current: {eq: $slug}}) {
        id
        name
        slug {
            current
        }
        description
        image {
            asset {
                fluid(maxWidth: 1000) {
                    ...GatsbySanityImageFluid
                }
            }
        }
    }
  }
`;