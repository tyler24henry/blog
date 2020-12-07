import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { dayMonthCommaYear } from '../utils/dateHelpers';

const StyledBlogPosts = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 6rem;
    .post {
        color: var(--black);
        .title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--black);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
                text-decoration-color: var(--red);
            }
        }
        .date {
            margin-top: 0.5rem;
            padding: 0.5rem 0.2rem;
            font-size: 1.6rem;
            background: var(--snow);
            span {
                padding-right: 1rem;
            }
        }
        .content {
            margin-top: 1.5rem;
            font-size: 1.4rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        .post-footer {
            margin-top: 1.5rem;
            background: #f5f5f5;
            padding: 0.8rem 1rem;
            span {
                padding-right: 1rem;
                font-size: 1.3rem;
            }
            a {
                font-size: 1.5rem;
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                    text-decoration-color: var(--red);
                }
            }
        }
    }
`;

export const BlogPosts = ({ blogPosts }) => {

    // TODO: summary
    // create pages for each blog post
    // click title to link to blog post

    return (
        <StyledBlogPosts>
            {blogPosts.map(post => {
                const createdAt = dayMonthCommaYear(post._createdAt);
                return (
                    <div className="post" key={post.id}>
                        <Link className="title" to={`/post/${post.slug.current}`}>{post.title}</Link>
                        <p className="date"><span>📅</span> {createdAt}</p>
                        <p className="content">{post.summary}</p>
                        <div className="post-footer">
                            <span>📚</span>
                            <Link to={`/post/${post.slug.current}`}>Read more...</Link>
                        </div>
                    </div>
                )
            })}
        </StyledBlogPosts>
    )
}
