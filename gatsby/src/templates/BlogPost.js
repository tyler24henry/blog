import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../components/SEO';

export const OffsetImageStyles = styled.div`
    position: relative;
    width: 95%;
    margin: 1.5rem 1.5rem 0 auto;
    background: var(--blue);
    @media(max-width: 414px){
        width: 100%;
        margin: 1.5rem auto 0 auto;
    }
    .offset-image {
        transform: translateY(-1.25rem) translateX(1.5rem);
        height: 400px;
        width: 100%;
        object-fit: cover;
        @media(max-width: 414px){
            height: 200px;
            width: 100vw;
            transform: translateY(-1.25rem) translateX(0);
        }
    }
`;

const StyledBlogPost = styled.div`
    .post {
        position: relative;
        color: var(--black);
        .title-category-outer-wrapper {
            position: absolute;
            left: 0;
            bottom: -35px;
            padding: 3rem 1.5rem;
            width: 60%;
            z-index: 2;
            background: white;
            color: var(--blue);
            @media(max-width: 414px){
                position: relative;
                left: auto;
                bottom: auto;
                padding: 2rem 0;
                width: 100%;
            }
            .title-category-inner-wrapper {
                @media(max-width: 414px){
                    margin-left: 5%;
                }
                h1 {
                    margin-top: 1rem;
                    font-size: 3rem;
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    @media(max-width: 414px){
                        font-size: 2.6rem;
                    }
                }
                h3 {
                    font-size: 1.5rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            }
        }
        .essay-wrapper {
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            margin-top: 7rem;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 3rem;
            @media(max-width: 414px){
                margin-top: 4rem;
                width: 90%;
            }
            .content-wrapper {
                font-size: 1.8rem;
                line-height: 1.5;
                white-space: pre-wrap;
            }
            a {
                color: var(--blue);
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            .p, .h2, .h3, .blockquote, .image-wrapper {
                margin-bottom: 4rem;
            }
            .h2, .h3 {
                margin-top: 7.5rem;
                padding-top: 7.5rem;
                border-top: 2px solid gainsboro;
            }
            .h2 {
                letter-spacing: 0.5px;
                font-size: 2.8rem;
                font-weight: 700;
                letter-spacing: 0.5px;

            }
            .h3 {
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 2.2rem;
                font-weight: 600;
            }
            .blockquote {
                padding: 0.5rem 2.5rem 0.5rem 1.5rem;
                margin-left: 2.5rem;
                border-left: 4px solid var(--blue);
            }
            .image-caption {
                margin: -3rem 0 5rem 0;
                text-align: center;
                font-weight: 600;
            }
            .image-wrapper {
                display: grid;
                grid-template-columns: 1fr;
                align-items: center;
                justify-items: center;
                img {
                    width: 100%;
                }
            }
            .footnotes-wrapper {
                padding: 7.5rem 0;
                border-top: 2px solid gainsboro;
                .footnotes-header {
                    text-transform: uppercase;
                    font-size: 2rem;
                    font-weight: 600;
                    letter-spacing: 2px;
                    padding-bottom: 1rem;
                }
                ol {
                    margin: 0;
                    padding: 0 0 0 1.25rem;
                    list-style: none;
                    counter-reset: footnotes-counter;
                }
                ol li {
                    counter-increment: footnotes-counter;
                    position: relative;
                }
                ol li::before {
                    content: counter(footnotes-counter);
                    color: var(--black);
                    font-size: 1.2rem;
                    font-weight: bold;
                    position: absolute;
                    --size: 20px;
                    left: calc(-1 * var(--size));
                    line-height: var(--size);
                    width: var(--size);
                    height: var(--size);
                    top: 0;
                    transform: translateY(-2px);
                    text-align: center;
                }
                .footnote-li {
                    margin-top: 2rem;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    span {
                        display: block;
                        white-space: pre-wrap;  
                        margin-top: 1rem;
                    }
                }
            }
        }
    }
`;

export default function SingleBlogPostPage({ data }) {   
    const blogPost = data ? data.blogPost : null;
    if(!blogPost) return <p>Blog post didn't make it 😞</p>
    const postContent = blogPost._rawContent.filter(item => item._type !== "footnote");
    const postFootnotes = blogPost._rawContent.filter(item => item._type === "footnote");

    const category = blogPost.categories.length > 0 ? blogPost.categories[0] : '';

    const serializers = {
        types: {
            block: props => {
                const {style = 'normal' } = props.node;
                let imageCaption = style === 'imageCaption' && props.node;
                if(imageCaption){
                    imageCaption = { _key: imageCaption._key, text: imageCaption.children.map(child => child.text).join(''), href: imageCaption.markDefs[0]?.href }
                }

                console.log(props.children);

                if (style === 'normal' && !imageCaption) {
                  return <p className="p">{props.children}</p>
                }
                if (style === 'h2' && !imageCaption) {
                    return <h2 className="h2">{props.children}</h2>
                }
                if (style === 'h3' && !imageCaption) {
                    return <h3 className="h3">{props.children}</h3>
                }
                if (style === 'blockquote' && !imageCaption) {
                    return <p className="blockquote">{props.children}</p>
                }
                if(imageCaption && imageCaption.href) {
                    return <p className="image-caption"><a target="_blank" href={imageCaption.href}>{imageCaption.text}</a></p>
                } else {
                    return <p className="image-caption">{imageCaption.text}</p>
                }
                
            },
            image: props => {
                const image = props.node.asset;
                return <div className="image-wrapper"><img src={image.url} alt={image.originalFilename} /></div>
            },
            footnote: props => {
                const children = props.node.content.map(item => item.children.map(child => child.text));
                return (
                    (
                        <li className="footnote-li">
                            {children.map(item => (
                                <span>{item}</span>
                            ))}
                        </li>
                    )
                )
            }
        }
    }

  return (
    <>
        <SEO title={blogPost.title} image={blogPost.image?.asset?.fluid?.src} />
        <StyledBlogPost>
            <div className="post">
                <OffsetImageStyles>
                    <Img className="offset-image" fluid={blogPost.image.asset.fluid} alt={blogPost.title} />
                    <div className="title-category-outer-wrapper">
                        <div className="title-category-inner-wrapper">
                            <h3>{category.name}</h3>
                            <h1>{blogPost.title}</h1>
                        </div>
                    </div>
                </OffsetImageStyles>
                <div className="essay-wrapper">
                    <div className="content-wrapper">
                        <BlockContent blocks={postContent} serializers={serializers} />
                    </div>
                    {postFootnotes.length > 0 && (
                        <div className="footnotes-wrapper">
                            <h2 className="footnotes-header">Footnotes</h2>
                            <ol>
                                <BlockContent blocks={postFootnotes} serializers={serializers} />
                            </ol>
                        </div>
                    )}
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
      _rawContent(resolveReferences: {maxDepth: 10})
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