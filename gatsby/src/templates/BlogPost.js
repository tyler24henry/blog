import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { FacebookShareButton, FacebookIcon, 
    TwitterShareButton, TwitterIcon, 
    RedditShareButton, RedditIcon, 
    EmailShareButton, EmailIcon,
    PocketShareButton, PocketIcon } from 'react-share';
import SEO from '../components/SEO';
import { dayMonthCommaYear } from '../utils/dateHelpers';


const StyledBlogPost = styled.div`
    .post {
        position: relative;
        color: var(--black);
        .title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--black);
        }
        .date {
            position: relative;
            margin-top: 0.5rem;
            padding: 0.5rem 0.2rem;
            font-size: 1.6rem;
            background: var(--snow);
            span {
                padding-right: 1rem;
            }
            .edit-delete {
                position: absolute;
                right: 3px;
                top: 6px;
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 1rem;
                a, button {
                    background: none;
                    border: none;
                    padding: 0;
                    font-size: 1.3rem;
                    color: var(--grey);
                    border-bottom: 1px solid var(--grey);
                }
                a {
                    text-decoration: none;
                }
            }
        }
        .content {
            margin-top: 1.5rem;
            font-size: 1.4rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        .share-post-container {
            margin-top: 3rem;
            .border-top {
                width: 150px;
                height: 1px;
                background: var(--grey);
            }
            p {
                margin-top: 1.5rem;
                font-size: 1.3rem;
                font-weight: 500;
                color: var(--black); 
            }
            .share-icons {
                display: grid;
                grid-template-columns: repeat(5, 33px);
                justify-self: start;
                @media(max-width: 720px) {
                    grid-template-columns: repeat(5, 30px);
                }
                @media (min-width:320px) and (max-width: 414px) {
                    grid-template-columns: repeat(5, 27px);
                }
                .share-button {
                    box-shadow: none;
                    .icon {
                        width: 30px;
                        &:hover {
                            filter: brightness(80%);
                        }
                        @media(max-width: 720px) {
                            width: 28px;
                        }
                        @media (min-width:320px) and (max-width: 414px) {
                            width: 25px;
                        }
                    }
                }
            }
        }
    }
`;

// TODO
// incorporate image

export default function SingleBlogPostPage({ data }) {
    console.log(data);
    const blogPost = data ? data.blogPost : null;
    if(!blogPost) return <p>Blog post didn't make it 😞</p>
    const createdAt = dayMonthCommaYear(blogPost._createdAt);
    const url = blogPost && `www.tylerhenry.blog/post/${blogPost.slug.current}`;
    const title = blogPost && `${blogPost.title} by Tyler Henry`;
  return (
    <>
        <SEO title={blogPost.title} image={blogPost.image?.asset?.fluid?.src} />
        <StyledBlogPost>
            <div className="post">
                <div className="title">{blogPost.title}</div>
                <div className="date"><span>📅</span> {createdAt}</div>
                <p className="content">{blogPost.content}</p>
                <div className="share-post-container">
                    <div className="border-top"></div>
                    <p>Share</p>
                    <div className="share-icons">
                        <TwitterShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <TwitterIcon className="icon" round />
                        </TwitterShareButton>
                        <FacebookShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <FacebookIcon className="icon" round />
                        </FacebookShareButton>
                        <RedditShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <RedditIcon className="icon" round />
                        </RedditShareButton>
                        <EmailShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <EmailIcon className="icon" round />
                        </EmailShareButton>
                        <PocketShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <PocketIcon className="icon" round />
                        </PocketShareButton>
                    </div>
                </div>
            </div>
        </StyledBlogPost>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
const query = graphql`
  query($slug: String!) {
    blogPost: sanityPost(slug: { current: { eq: $slug } }) {
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
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;