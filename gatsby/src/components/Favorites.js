import React from 'react';
import styled from 'styled-components';
import { OffsetImageStyles } from '../templates/BlogPost';

const StyledFavorites = styled.div`
    @media(max-width: 414px){
        width: 90vw;
        margin: 3rem auto 1rem auto;
    }
    #quote {
        width: 90%;
        margin: 0 auto;
        margin-top: 1rem;
        font-weight: 600;
        text-align: center;
    }
    .favorites-wrapper {
        width: 80%;
        max-width: 700px;
        margin: 0 auto;
        @media(max-width: 700px){
            margin-top: 5rem;
        } 
        @media(max-width: 414px){
            width: 95%;
        }
        h1 {
            margin-top: 7.5rem;
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
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.5;
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
        .favorites-section-wrapper {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 2rem;
            h2 {
                font-size: 3.8rem;
                font-weight: 600;
                @media(max-width: 700px){
                    font-size: 3rem;
                }
            }
            .item-wrapper {
                margin-top: 2rem;
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 2rem;
                .item {
                    margin-top: 0;
                }
            }
        }
    }
    .border {
        margin: 7.5rem 0;
        height: 2px;
        width: 100%;
        background: whitesmoke;
    }
`;

export const Favorites = () => {
    return (
        <StyledFavorites>
            <div className="image-intro-wrapper">
                <OffsetImageStyles>
                    <img className="offset-image" src="https://res.cloudinary.com/tyler24henry/image/upload/v1609459049/my-favorite-things_rrlxgj.jpg" alt="Scene from The Sound of Music" />
                </OffsetImageStyles>
                <p id="quote">"I simply remember my favorite things and then I don't feel so bad" - Julie Andrews in <i>The Sound Of Music</i></p>
            </div>
            <div className="favorites-wrapper">
                <h1>My Favorite Things</h1>
                <p className="item" id="description">It's rare to find something that is genuinely awesome. When I find something I love, I don't want to lose it, so I make sure to write it down. What follows are a few of my favorite things.</p>
                <div className="border"></div>
                <div className="favorites-section-wrapper">
                    <h2>Comedians</h2>
                    <div className="item-wrapper">
                        <p className="item"><b>Harris Wittels:</b> Harris was a comedy writer, stand up comedian, podcaster, actor (animal control guy on Parks and Recreation), and word inventor ("humblebrag"). He died in 2015 of a drug overdose but his name still comes up frequently on Reddit, Twitter, etc. with fans saying how much they loved Harris. He's really worth checking out if you are a fan of comedy.</p>
                        <p className="item">Some of his best appearances include the podcasts he did on You Made It Weird with Pete Holmes(<a href="https://archive.nerdist.com/you-made-it-weird-46-harris-wittels/" target="_blank">here</a> and <a href="https://archive.nerdist.com/you-made-it-weird-236-harris-wittels-returns/" target="_blank">here</a>), the <a href="https://www.youtube.com/watch?v=INI7Pwg8Cjs&t=18s" target="_blank">Farts and Procreation series</a> on Comedy Bang Bang alongside host Scott Aukerman, Chelsea Peretti, and Adam Scott, <a href="https://www.youtube.com/watch?v=AweVgPJhVFQ" target="_blank">Harris' Foam Corner</a> and <a href="https://www.earwolf.com/episode/phish-101/" target="_blank">Analyze Phish</a> (doesn't matter if you're a Phish fan, this podcast is really a delight).</p>
                        <p className="item">Somewhat shameless plug: I love Harris so much <a href="https://www.harriswittels.wiki/" target="_blank">I made a website for him</a>.</p>
                    </div>
                </div>
            </div>
        </StyledFavorites>
    )
}
