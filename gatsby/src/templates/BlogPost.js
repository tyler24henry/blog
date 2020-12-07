import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { FacebookShareButton, TwitterShareButton, RedditShareButton, EmailShareButton, PocketShareButton } from 'react-share';
import { FiTwitter, FiFacebook, FiMail, FiPocket } from 'react-icons/fi';
import { ImReddit } from 'react-icons/im';
import Img from 'gatsby-image';

import SEO from '../components/SEO';
import { dayMonthCommaYear } from '../utils/dateHelpers';
import { AiOutlineCalendar, AiOutlineTags } from 'react-icons/ai';
import { IoMdArrowDropright } from 'react-icons/io';

const StyledBlogPost = styled.div`
    .post {
        position: relative;
        color: var(--black);
        .title {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--black);
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
        .image-wrapper {
            margin: 1rem 0 5rem 0;
            p {
                padding: 0.4rem 0 0 0.2rem;
                font-size: 1.3rem;
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
                margin-top: 1rem;
                display: flex;
                gap: 0.5rem;
                align-items: center;
                font-size: 2rem;
                button {
                    box-shadow: none;
                    transition: all 0.3s;
                    &:hover {
                        transform: translateY(-4px);
                    }
                }
                #twitter {
                    font-size: 1.7rem;
                }
                #mail {
                    margin: 0 0.3rem 0 0.5rem;
                    font-size: 1.9rem;
                }
                #pocket {
                    font-size: 1.9rem;
                }
            }
        }
    }
`;

// TODO
// incorporate image

export default function SingleBlogPostPage({ data }) {
    const blogPost = data ? data.blogPost : null;
    if(!blogPost) return <p>Blog post didn't make it 😞</p>
    const createdAt = dayMonthCommaYear(blogPost._createdAt);
    const url = `www.tylerhenry.blog/post/${blogPost.slug.current}`;
    const title = `${blogPost.title} by Tyler Henry`;
  return (
    <>
        <SEO title={blogPost.title} image={blogPost.image?.asset?.fluid?.src} />
        <StyledBlogPost>
            <div className="post">
                <div className="title">{blogPost.title}</div>
                <div className="date-tags-wrapper">
                    <div className="date">
                        <AiOutlineCalendar id="icon" /> {createdAt}
                    </div>
                    <p className="tags"><AiOutlineTags id="tag-icon" /> {blogPost.categories.map((category, index) => <Link to={`/category/${category.slug.current}`}>{index > 0 && <IoMdArrowDropright />}{category.name}</Link>)}</p>
                </div>
                <div className="image-wrapper">
                    <Img fluid={blogPost.image.asset.fluid} alt={blogPost.title} />
                    <p>{blogPost.imageSubtitle}</p>
                </div>
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
                            <FiTwitter id="twitter" />
                        </TwitterShareButton>
                        <FacebookShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <FiFacebook />
                        </FacebookShareButton>
                        <RedditShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <ImReddit />
                        </RedditShareButton>
                        <EmailShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <FiMail id="mail" />
                        </EmailShareButton>
                        <PocketShareButton
                            url={url}
                            title={title}
                            className="share-button"
                        >
                            <FiPocket id="pocket" />
                        </PocketShareButton>
                    </div>
                </div>
            </div>
        </StyledBlogPost>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
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
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      imageSubtitle
      categories {
        name
        slug {
          current
        }
      }
    }
  }
`;