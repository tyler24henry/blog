import React from 'react';
import { Favorites } from '../components/Favorites';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

export default function FavoritesPage({ data }) {
    const favoriteThings = data.image;
    return (
        <>
            <SEO title="Favorite Things - Tyler Henry" />
            <Favorites favoriteThings={favoriteThings} />
        </>
    )
}

export const query = graphql`
    query {
        image: sanitySiteImage(name: {eq: "Favorite Things"}) {
            id
            name
            image {
                asset {
                    fluid {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;