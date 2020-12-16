import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';
import { FaBookReader } from 'react-icons/fa';
import { CommentCount } from 'gatsby-plugin-disqus';

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
            transition: all 0.3s;
            &:hover {
                text-decoration: underline;
                text-decoration-color: var(--red);
            }
        }
        .date-tags-wrapper {
            background: var(--snow);
            margin-top: 0.5rem;
            padding: 0.5rem 0.4rem 0.5rem 0.2rem;
            font-size: 1.4rem;
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 1rem;
            align-items: center;
            .date {
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 0.7rem;
                align-items: center;
                #icon {
                    font-size: 1.8rem;
                }
            }
            .tags {
                font-size: 1.4rem;
                justify-self: end;
                display: flex;
                align-items: center;
                @media(max-width: 700px){
                    position: absolute;
                    left: -9999px;
                    opacity: 0;
                    display: none;
                }
                a {
                    display: flex;
                    align-items: center;
                    font-size: 1.2rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.3s;
                    &:hover {
                        text-decoration: underline;
                        text-decoration-color: var(--red);
                    }
                }
            }
            #tag-icon {
                font-size: 1.8rem;
                margin-right: 0.5rem;
            }
        }
        .content {
            margin-top: 1.5rem;
            font-size: 1.4rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        .post-footer {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 1rem;
            align-items: center;
            margin-top: 1.5rem;
            background: #f5f5f5;
            padding: 0.8rem 1rem;
            #book {
                font-size: 1.5rem;
            }
            a {
                font-size: 1.5rem;
            }
            #number-comments {
                justify-self: end;
                font-size: 1.4rem;
                font-weight: 500;
            }
        }
    }
`;

export const BlogPosts = ({ blogPosts }) => {
    return (
        <StyledBlogPosts>
            {blogPosts.map(post => {
                const createdAt = dayMonthCommaYear(post._createdAt);
                let disqusConfig = {
                    url: `https://www.tylerhenry.blog/${post.slug.current}`,
                    identifier: post.id,
                    title: post.title,
                }
                return (
                    <div className="post" key={post.id}>
                        <Link className="title" to={`/post/${post.slug.current}`}>{post.title}</Link>
                        <div className="date-tags-wrapper">
                            <div className="date">
                                <AiOutlineCalendar id="icon" /> {createdAt}
                            </div>
                            <p className="tags"><AiOutlineTags id="tag-icon" /> {post.categories.map((category, index) => <Link to={`/category/${category.slug.current}`}>{index > 0 && <IoMdArrowDropright />}{category.name}</Link>)}</p>
                        </div>
                        <p className="content">{post.summary}</p>
                        <div className="post-footer">
                            <FaBookReader id="book" />
                            <Link id="read-more" to={`/post/${post.slug.current}`}>Read more...</Link>
                            <Link id="number-comments" to={`/post/${post.slug.current}`}><CommentCount config={disqusConfig} placeholder={'0 Comments'} /></Link>
                        </div>
                    </div>
                )
            })}
        </StyledBlogPosts>
    )
}
