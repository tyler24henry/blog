import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledAbout = styled.div`
    @media(max-width: 414px){
        margin: 0 auto;
        margin-top: 2rem;
    }
    .image-intro-wrapper {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 2rem;
        align-items: center;
        @media(max-width: 700px){
            grid-template-columns: 1fr;
        }        
    }
    .self-intro-wrapper {
        letter-spacing: 0.5px;
        width: 80%;
        margin: 0 auto;
        @media(max-width: 700px){
            grid-row: 2 / span 1;
            justify-self: center;
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
            font-size: 2.4rem;
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
    .image-wrapper {
        @media(max-width: 700px){
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
        } 
        .offset-image {
            height: 25vw;
            width: 25vw;
            object-fit: cover;
            border-radius: 50%;
            @media(max-width: 900px){
                height: 30vw;
                width: 30vw;
            }
            @media(max-width: 700px){
                grid-row: 1 / span 1;
                height: 250px;
                width: 250px;
            } 
        }
    }
    .about-wrapper {
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
        @media(max-width: 700px){
            margin-top: 5rem;
        } 
        .item {
            margin-top: 2rem;
            font-size: 1.8rem;
            line-height: 1.5;
            white-space: pre-wrap;
        }
        a {
            color: var(--blue);
            &:hover {
                background: var(--blue);
                color: white;
            }
        }
    }
`;

export const About = () => {
    return (
        <StyledAbout>
            <div className="image-intro-wrapper">
                <div className="self-intro-wrapper">
                    <h1>Hi, I'm Tyler Henry.</h1>
                    <h3>I <Link to="/essays">write</Link>, <Link to="/websites">make websites</Link>, and <Link to="/videos">create short videos and sketches</Link>.</h3>
                </div>
                <div className="image-wrapper">
                    <img className="offset-image" src="https://res.cloudinary.com/tyler24henry/image/upload/v1607133228/myface2_g0r3dl.jpg" alt="My face" />
                </div>
            </div>
            <div className="about-wrapper">
                <p className="item">Each week, my goal is to write at least one essay. Topics that I like to explore include comedy, movies, human superpowers, personality, and life as an introvert.</p>
                <p className="item">I am always working on a new website. I recently finished making a tribute site for <a href="https://harriswittels.wiki/" target="_blank">Harris Wittels</a>, my favorite comedian.</p>
                <p className="item">Comedy is the thing I love most in life, and I sometimes try to produce content myself in the form of short videos and sketches.</p>
                <p className="item">If you want to find me, I'm on <a href="https://twitter.com/Ty24Henry" target="_blank">Twitter</a> or if you prefer email, send me a message at  <a href="mailto:tyler.henry2442@gmail.com" target="_blank">tyler.henry2442@gmail.com</a>.</p>
                <p className="item">Thanks,</p>
                <p className="item">Tyler Henry</p>
            </div>
        </StyledAbout>
    )
}
