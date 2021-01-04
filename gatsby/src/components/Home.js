import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { BlogPosts } from './BlogPosts';
import { Websites } from './Websites';
import Img from 'gatsby-image';

const HomeStyles = styled.div`
    @media(max-width: 414px){
        width: 90vw;
        margin: 0 auto;
        margin-top: 6rem;
    }
    .image-intro-wrapper {
        min-height: calc(100vh - 20rem);
        @media(max-width: 414px){
            min-height: calc(100vh - 25rem);
        }
    }
    .image-wrapper {
        position: relative;
        width: calc(40vw + 1.5rem);
        margin: 1.5rem 1.5rem 0 auto;
        background: var(--blue);
        @media(max-width: 1100px){
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            width: 100%;
            max-width: 600px;
            background: none;
            margin: 0 auto;
        }
        @media(max-width: 414px){
            max-width: calc(100vw - 5.5rem);
            margin: 0;
        }
        .offset-image-wrapper {
            background: var(--blue);
        }
        .offset-image {
            transform: translateY(-1.5rem) translateX(1.5rem);
            height: 30vw;
            width: 45vw;
            object-fit: cover;
            @media(max-width: 850px){
                width: 60vw;
                height: 40vw;
            }
            @media(max-width: 700px){
                width: 350px;
                height: 290px;
            }
            @media(max-width: 414px){
                width: 70vw;
                height: 55vw;
            }
        }
    }
    .self-intro-wrapper {
        position: absolute;
        right: 30vw;
        bottom: 0;
        padding: 3rem;
        width: 100%;
        z-index: 2;
        background: white;
        letter-spacing: 0.5px;
        @media(max-width: 1100px){
            position: relative;
            right: auto;
            bottom: auto;
            max-width: 600px;
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
        }
        h1 {
            font-size: 5rem;
            font-weight: 600;
            @media(max-width: 700px){
                font-size: 4rem;
            }
            @media(max-width: 414px){
                font-size: 3.2rem;
            }
        }
        h3 {
            margin-top: 2rem;
            font-size: 1.8rem;
            line-height: 1.5;
        }
        a {
            color: var(--blue);
            &:hover {
                background: var(--blue);
                color: white;
            }
        }
    }
    .learn-more-wrapper {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        @media(max-width: 414px){
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            grid-gap: 2rem;
        }
        p, a {
            font-size: 1.8rem;
            line-height: 1.5;
        }
        a {
            margin-left: 1.5rem;
            background: var(--blue);
            padding: 0.5rem 1rem;
            color: white;
            &:hover {
                text-decoration: none;
                background: #4512eb;
            }
        }
    }
    .essays-wrapper, .websites-wrapper {
        margin-top: 10rem;
        h2 {
            text-transform: uppercase;
            font-size: 2rem;
            font-weight: 600;
            letter-spacing: 2px;
            margin-bottom: 2rem;
        }
    }
`;

export const Home = ({ blogPosts, projects, myFace }) => {
    return (
        <HomeStyles>
            <div className="image-intro-wrapper">
                <div className="image-wrapper">
                    <div className="offset-image-wrapper">
                        <Img className="offset-image" imgStyle={{ objectPosition: '0 17.5%'}} fluid={myFace.image.asset.fluid} alt="My face" />
                    </div>
                    <div className="self-intro-wrapper">
                        <h1>Hi, I'm Tyler Henry.</h1>
                        <h3>Welcome to my corner of the internet. I <Link to="/essays">write</Link>, <Link to="/websites">make websites</Link>, and <Link to="/videos">create short videos and sketches</Link>.</h3>
                        <div className="learn-more-wrapper">
                            <p>Want to learn more about me?</p>
                            <Link to="/about">Start here</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="essays-wrapper">
                <Link to="/essays"><h2>Essays</h2></Link>
                <BlogPosts blogPosts={blogPosts} />
            </div>
            <div className="websites-wrapper">
                <Link to="/websites"><h2>Websites</h2></Link>
                <Websites projects={projects} />
            </div>
        </HomeStyles>
    )
}
