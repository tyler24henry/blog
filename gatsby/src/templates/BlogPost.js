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
    .offset-image {
        transform: translateY(-1.25rem) translateX(1.5rem);
        height: 400px;
        width: 100%;
        object-fit: cover;
    }
`;

const StyledBlogPost = styled.div`
    .post {
        position: relative;
        color: var(--black);
        .title-category-wrapper {
            position: absolute;
            left: 0;
            bottom: -35px;
            padding: 3rem 1.5rem;
            width: 60%;
            z-index: 2;
            background: white;
            color: var(--blue);
            h1 {
                margin-top: 1rem;
                font-size: 3rem;
                font-weight: 600;
                letter-spacing: 0.5px;
            }
            h3 {
                font-size: 1.5rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
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
            .content-wrapper {
                font-size: 1.8rem;
                line-height: 1.5;
                white-space: pre-wrap;
            }
            figure {
                margin: 6rem 0;
                display: grid;
                grid-template-columns: 1fr;
                justify-items: center;
                align-items: center;
            }
            a {
                color: var(--blue);
                &:hover {
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            .footnotes-wrapper {
                padding: 7.5rem 0;
                border-top: 2px solid gainsboro;
                h3 {
                    text-transform: uppercase;
                    font-size: 2rem;
                    font-weight: 600;
                    letter-spacing: 2px;
                }
                ol {
                    margin: 2rem 0 0 0;
                    padding: 0 0 0 2rem;
                }
                li {
                    font-size: 1.8rem;
                    line-height: 1.5;
                    white-space: pre-wrap;   
                }
            }
        }
    }
`;

export default function SingleBlogPostPage({ data }) {   
    const blogPost = data ? data.blogPost : null;
    if(!blogPost) return <p>Blog post didn't make it 😞</p>

    const category = blogPost.categories.length > 0 ? blogPost.categories[0] : '';

    const BlockRenderer = props => {
        const {style = 'normal', _key } = props.node;
        const imageCaption = _key === "bd402428b724" || _key === "b0feb54a6d32" || _key === "3a7e6923403f" || _key === "aa1b903ee2b0" || _key === "23ceea9aa65e";

        if (style === 'normal' && !imageCaption) {
          return <p style={{ marginBottom: '4rem' }}>{props.children}</p>
        }
        if(imageCaption) {
            return <p style={{ margin: '-5rem 0 4rem 0', textAlign: 'center', fontWeight: '600' }}>{props.children}</p>
        }
        
        // Fall back to default handling
        return BlockContent.defaultSerializers.types.block(props)
    }

    const serializers = {
        types: {
          footnote: props => {
              const content = props.node.content.map(item => item.children.map(child => child.text));
              return (
                (
                    <li>
                      {content.map((item, index) => (
                          <span style={{ marginTop: index > 0 && '3rem', display: 'block'}}>{item}</span>
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
                    <div className="title-category-wrapper">
                        <h3>{category.name}</h3>
                        <h1>{blogPost.title}</h1>
                    </div>
                </OffsetImageStyles>
                <div className="essay-wrapper">
                    <div className="content-wrapper">
                        <BlockContent blocks={blogPost._rawContent} serializers={{ types: {block: BlockRenderer}}} />
                    </div>
                    {blogPost._rawFootnotes && blogPost._rawFootnotes.length > 0 && (
                        <div className="footnotes-wrapper">
                            <h3>Footnotes</h3>
                            <ol>
                                <BlockContent blocks={blogPost._rawFootnotes} serializers={serializers} />
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
      _rawFootnotes(resolveReferences: {maxDepth: 10})
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