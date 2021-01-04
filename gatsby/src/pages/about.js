import React from 'react';
import { About } from '../components/About';
import SEO from '../components/SEO';
import { graphql } from 'gatsby';

export default function AboutPage({ data }) {
    const myFace = data.image;
    return (
        <>
            <SEO title="About - Tyler Henry" />
            <About myFace={myFace} />
        </>
    )
}

export const query = graphql`
    query {
        image: sanitySiteImage(name: {eq: "My Face"}) {
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