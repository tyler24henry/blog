import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const StyledContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25vw, 1fr));
    grid-gap: 3rem;
    grid-row-gap: 10rem;
    @media(max-width: 700px){
        grid-template-columns: repeat(auto-fit, minmax(40vw, 1fr));
    }
    @media(max-width: 600px){
        grid-template-columns: 1fr;
        grid-row-gap: 5rem;
    }
    .item-wrapper {
        color: var(--black);
        display: grid;
        grid-template-rows: auto auto 1fr;
        grid-gap: 1.5rem;
        .item-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            filter: drop-shadow(0px 1px 1px rgba(0,0,0,0.3));
            transition: filter 0.25s ease-in-out;
            @media(max-width: 600px){
                height: 250px;
            }
        }
        .item-image:hover {
            filter: drop-shadow(0px 2px 2px rgba(0,0,0,0.3));
        }
        .title {
            font-size: 2.2rem;
            font-weight: 500;
            color: var(--blue);
            text-decoration: none;
            transition: all 0.2s;
            &:hover {
                text-decoration: underline;
            }
        }
        .description {
            font-size: 1.4rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
    }
`;

export const BlogPosts = ({ blogPosts }) => {
    return (
        <StyledContentGrid>
            {blogPosts.map(post => {
                return (
                    <div className="item-wrapper" key={post.id}>
                        <Link to={`/post/${post.slug.current}`}><Img className="item-image" fluid={post.image.asset.fluid} alt={post.title} /></Link>
                        <Link className="title" to={`/post/${post.slug.current}`}>{post.title}</Link>
                        <p className="description">{post.summary}</p>
                    </div>
                )
            })}
        </StyledContentGrid>
    )
}
