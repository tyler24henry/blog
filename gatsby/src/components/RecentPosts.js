import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { FaRegHandPointRight } from 'react-icons/fa';

import { StyledRightNavHeader } from '../styles/RightNavStyles';

const RecentPostsStyled = styled.div`
    .recent-posts-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        .item-wrapper {
            display: grid;
            grid-template-columns: auto 1fr;
            grid-gap: 1rem;
            align-items: center;
            padding: 0.8rem 0.2rem;
            img {
                width: 15px;
            }
            a {
                font-size: 1.3rem;
                font-weight: 400;
            }
        }
    }
`;

export const RecentPosts = () => {

    const { blogPosts } = useStaticQuery(graphql`
        query {
            blogPosts: allSanityPost(limit: 10) {
                nodes {
                    id
                    title
                    slug {
                        current
                    }
                }
            }
        }
    `);

    return (
        <RecentPostsStyled>
            <StyledRightNavHeader>Recent posts</StyledRightNavHeader>
            <div className="recent-posts-wrapper">
                {blogPosts.nodes.map(blogPost => {
                    return (
                        <div className="item-wrapper" key={blogPost.id}>
                            <FaRegHandPointRight />
                            <Link to={`/post/${blogPost.slug.current}`}>{blogPost.title}</Link>
                        </div>
                    )
                })}
            </div>
        </RecentPostsStyled>
    )
}